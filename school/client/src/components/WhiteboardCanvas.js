import React, { useEffect, useMemo, useRef, useState } from "react";
import { Arrow, Circle, Group, Layer, Line, Rect, Stage, Text, Transformer } from "react-konva";
import CodeExecutionService from "../services/codeExecutionService";
import "../styles/WhiteboardCanvas.css";

const BOARD_WIDTH = 6000;
const BOARD_HEIGHT = 4000;
const MIN_SCALE = 0.2;
const MAX_SCALE = 4;

const TOOL_ORDER = [
  { id: "select", label: "Select" },
  { id: "pan", label: "Pan" },
  { id: "pen", label: "Pen" },
  { id: "highlighter", label: "Highlight" },
  { id: "eraser", label: "Eraser" },
  { id: "line", label: "Line" },
  { id: "arrow", label: "Arrow" },
  { id: "rect", label: "Rect" },
  { id: "circle", label: "Circle" },
  { id: "text", label: "Text" },
  { id: "code", label: "Code" },
];

const COLOR_CHOICES = ["#0f172a", "#2563eb", "#0ea5e9", "#e11d48", "#16a34a"];
const HIGHLIGHT_CHOICES = ["#facc15", "#4ade80", "#38bdf8", "#fb7185", "#a78bfa"];
const CODE_LANGUAGES = ["javascript", "python"];
const INLINE_DRAFT_SOURCE = "__inline-draft__";

const createId = () => `wb-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

function WhiteboardCanvas({ storageKey }) {
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const transformerRef = useRef(null);
  const inlineTextRef = useRef(null);
  const inlineEditorRef = useRef(null);
  const skipInlineBlurCommitRef = useRef(false);
  const inlineDragRef = useRef({
    active: false,
    startClientX: 0,
    startClientY: 0,
    startX: 0,
    startY: 0,
    targetId: null,
  });

  const [viewportSize, setViewportSize] = useState({ width: 980, height: 480 });
  const [tool, setTool] = useState("select");
  const [strokeColor, setStrokeColor] = useState(COLOR_CHOICES[0]);
  const [highlightColor, setHighlightColor] = useState(HIGHLIGHT_CHOICES[0]);
  const [strokeWidth, setStrokeWidth] = useState(3);
  const [stageScale, setStageScale] = useState(0.75);
  const [stagePosition, setStagePosition] = useState({ x: 60, y: 40 });
  const [objects, setObjects] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isSpacePanning, setIsSpacePanning] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [draftId, setDraftId] = useState(null);
  const [startPoint, setStartPoint] = useState(null);
  const [typingAnchor, setTypingAnchor] = useState(null);
  const [inlineTextEditor, setInlineTextEditor] = useState({
    open: false,
    type: "text",
    targetId: null,
    x: 0,
    y: 0,
    width: 360,
    height: 180,
    fontSize: 20,
    fill: COLOR_CHOICES[0],
    color: "#e2e8f0",
    language: "javascript",
    value: "",
  });
  const [codeRunState, setCodeRunState] = useState({
    running: false,
    output: "",
    language: "javascript",
    sourceId: null,
  });
  const [isInlineDragging, setIsInlineDragging] = useState(false);

  const selectedObject = useMemo(
    () => objects.find((item) => item.id === selectedId) || null,
    [objects, selectedId]
  );
  const selectedCodeObject = useMemo(
    () => (selectedObject?.type === "code" ? selectedObject : null),
    [selectedObject]
  );
  const inlineSourceId = inlineTextEditor.targetId || INLINE_DRAFT_SOURCE;
  const showInlineRunOutput =
    inlineTextEditor.open &&
    inlineTextEditor.type === "code" &&
    Boolean(codeRunState.output) &&
    codeRunState.sourceId === inlineSourceId;

  const openEditor = (item) => {
    if (!item || (item.type !== "text" && item.type !== "code")) return;
    setInlineTextEditor({
      open: true,
      type: item.type,
      targetId: item.id,
      x: item.x,
      y: item.y,
      width: item.width || 360,
      height: item.height || 180,
      fontSize: item.type === "code" ? 14 : item.fontSize || 20,
      fill: item.type === "code" ? item.fill || "#0f172a" : item.fill || strokeColor,
      color: item.type === "code" ? item.color || "#e2e8f0" : "#e2e8f0",
      language: item.type === "code" ? item.language || "javascript" : "javascript",
      value: item.text || "",
    });
  };

  const closeInlineTextEditor = () => {
    setInlineTextEditor((prev) => ({
      ...prev,
      open: false,
      type: "text",
      targetId: null,
      language: "javascript",
      value: "",
    }));
  };

  const commitInlineTextEditor = () => {
    if (!inlineTextEditor.open) return;
    const nextText = inlineTextEditor.value.replace(/\s+$/, "");
    if (!nextText.trim()) {
      closeInlineTextEditor();
      return;
    }

    if (inlineTextEditor.targetId) {
      if (inlineTextEditor.type === "code") {
        updateObject(inlineTextEditor.targetId, (current) => ({
          ...current,
          text: nextText,
          width: inlineTextEditor.width,
          height: inlineTextEditor.height,
          fill: inlineTextEditor.fill,
          color: inlineTextEditor.color,
          language: inlineTextEditor.language || current.language || "javascript",
        }));
      } else {
        updateObject(inlineTextEditor.targetId, (current) => ({
          ...current,
          text: nextText,
          width: inlineTextEditor.width,
          fontSize: inlineTextEditor.fontSize,
          fill: inlineTextEditor.fill,
        }));
      }
      setSelectedId(inlineTextEditor.targetId);
      closeInlineTextEditor();
      return;
    }

    const id = createId();
    const newObject =
      inlineTextEditor.type === "code"
        ? {
            id,
            type: "code",
            x: inlineTextEditor.x,
            y: inlineTextEditor.y,
            width: inlineTextEditor.width,
            height: inlineTextEditor.height,
            text: nextText,
            fill: inlineTextEditor.fill,
            color: inlineTextEditor.color,
            language: inlineTextEditor.language || "javascript",
            output: "",
          }
        : {
            id,
            type: "text",
            x: inlineTextEditor.x,
            y: inlineTextEditor.y,
            text: nextText,
            fontSize: inlineTextEditor.fontSize,
            fill: inlineTextEditor.fill,
            width: inlineTextEditor.width,
          };

    setObjects((prev) => [...prev, newObject]);
    setSelectedId(id);
    closeInlineTextEditor();
  };

  const cancelInlineTextEditor = () => {
    skipInlineBlurCommitRef.current = true;
    closeInlineTextEditor();
  };

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const applySize = () => {
      setViewportSize({
        width: Math.max(320, node.clientWidth),
        height: Math.max(280, node.clientHeight),
      });
    };

    applySize();
    const observer = new ResizeObserver(applySize);
    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!storageKey) return;
    const saved = localStorage.getItem(storageKey);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);
      setObjects(Array.isArray(parsed.objects) ? parsed.objects : []);
      setStageScale(typeof parsed.stageScale === "number" ? parsed.stageScale : 0.75);
      setStagePosition(
        parsed.stagePosition && typeof parsed.stagePosition.x === "number"
          ? parsed.stagePosition
          : { x: 60, y: 40 }
      );
    } catch (error) {
      // Ignore malformed saved data.
    }
  }, [storageKey]);

  useEffect(() => {
    if (!storageKey) return;
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        objects,
        stageScale,
        stagePosition,
      })
    );
  }, [storageKey, objects, stageScale, stagePosition]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const tagName = document.activeElement?.tagName;
      const isTyping = ["INPUT", "TEXTAREA", "SELECT"].includes(tagName) || document.activeElement?.isContentEditable;
      if (event.code === "Space" && !isTyping) {
        event.preventDefault();
        setIsSpacePanning(true);
      }
    };

    const handleKeyUp = (event) => {
      if (event.code === "Space") {
        setIsSpacePanning(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (!inlineTextEditor.open) return;
    const frame = window.requestAnimationFrame(() => {
      if (!inlineTextRef.current) return;
      inlineTextRef.current.focus();
      const end = inlineTextRef.current.value.length;
      inlineTextRef.current.setSelectionRange(end, end);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [inlineTextEditor.open]);

  useEffect(() => {
    if (inlineTextEditor.open) return;
    if (!isInlineDragging) return;
    inlineDragRef.current.active = false;
    setIsInlineDragging(false);
  }, [inlineTextEditor.open, isInlineDragging]);

  useEffect(() => {
    if (!isInlineDragging) return;

    const handlePointerMove = (event) => {
      if (!inlineDragRef.current.active) return;
      const deltaX = (event.clientX - inlineDragRef.current.startClientX) / stageScale;
      const deltaY = (event.clientY - inlineDragRef.current.startClientY) / stageScale;
      const nextX = Math.max(0, Math.min(BOARD_WIDTH - 80, inlineDragRef.current.startX + deltaX));
      const nextY = Math.max(0, Math.min(BOARD_HEIGHT - 80, inlineDragRef.current.startY + deltaY));

      setInlineTextEditor((prev) => ({
        ...prev,
        x: nextX,
        y: nextY,
      }));

      if (inlineDragRef.current.targetId) {
        updateObject(inlineDragRef.current.targetId, (current) => ({
          ...current,
          x: nextX,
          y: nextY,
        }));
      }
    };

    const handlePointerUp = () => {
      inlineDragRef.current.active = false;
      setIsInlineDragging(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isInlineDragging, stageScale]);

  useEffect(() => {
    if (!transformerRef.current || !stageRef.current || !selectedId) {
      if (transformerRef.current) transformerRef.current.nodes([]);
      return;
    }

    const selectedNode = stageRef.current.findOne(`#${selectedId}`);
    if (selectedNode) {
      transformerRef.current.nodes([selectedNode]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [selectedId, objects]);

  const toCanvasPoint = () => {
    const stage = stageRef.current;
    if (!stage) return { x: 0, y: 0 };
    const pointer = stage.getPointerPosition();
    if (!pointer) return { x: 0, y: 0 };
    return {
      x: (pointer.x - stagePosition.x) / stageScale,
      y: (pointer.y - stagePosition.y) / stageScale,
    };
  };

  const zoomAt = (nextScale, center) => {
    const clamped = Math.max(MIN_SCALE, Math.min(MAX_SCALE, nextScale));
    const pointTo = {
      x: (center.x - stagePosition.x) / stageScale,
      y: (center.y - stagePosition.y) / stageScale,
    };
    setStageScale(clamped);
    setStagePosition({
      x: center.x - pointTo.x * clamped,
      y: center.y - pointTo.y * clamped,
    });
  };

  const zoomIn = () => zoomAt(stageScale * 1.15, { x: viewportSize.width / 2, y: viewportSize.height / 2 });
  const zoomOut = () => zoomAt(stageScale / 1.15, { x: viewportSize.width / 2, y: viewportSize.height / 2 });

  const fitView = () => {
    const fitScale = Math.min(viewportSize.width / BOARD_WIDTH, viewportSize.height / BOARD_HEIGHT) * 0.9;
    setStageScale(fitScale);
    setStagePosition({
      x: (viewportSize.width - BOARD_WIDTH * fitScale) / 2,
      y: (viewportSize.height - BOARD_HEIGHT * fitScale) / 2,
    });
  };

  const resetView = () => {
    setStageScale(1);
    setStagePosition({ x: 24, y: 24 });
  };

  const updateObject = (id, updater) => {
    setObjects((prev) => prev.map((obj) => (obj.id === id ? updater(obj) : obj)));
  };

  const updateSelectedCodeLanguage = (language) => {
    if (!selectedCodeObject) return;
    updateObject(selectedCodeObject.id, (current) => ({
      ...current,
      language,
    }));

    if (inlineTextEditor.open && inlineTextEditor.type === "code" && inlineTextEditor.targetId === selectedCodeObject.id) {
      setInlineTextEditor((prev) => ({ ...prev, language }));
    }
  };

  const runCodeSnippet = async ({ code, language, sourceId = null }) => {
    const normalizedLanguage = (language || "javascript").toLowerCase();
    if (!code || !code.trim()) {
      if (sourceId && sourceId !== INLINE_DRAFT_SOURCE) {
        updateObject(sourceId, (current) => ({
          ...current,
          output: "No code to execute",
        }));
      }
      setCodeRunState({
        running: false,
        output: "No code to execute",
        language: normalizedLanguage,
        sourceId,
      });
      return;
    }

    setCodeRunState({
      running: true,
      output: "Running code...",
      language: normalizedLanguage,
      sourceId,
    });

    try {
      const output = await CodeExecutionService.execute(code, normalizedLanguage);
      if (sourceId && sourceId !== INLINE_DRAFT_SOURCE) {
        updateObject(sourceId, (current) => ({
          ...current,
          output,
          language: normalizedLanguage,
        }));
      }
      setCodeRunState({
        running: false,
        output,
        language: normalizedLanguage,
        sourceId,
      });
    } catch (error) {
      const errorText = `Error: ${error.message}`;
      if (sourceId && sourceId !== INLINE_DRAFT_SOURCE) {
        updateObject(sourceId, (current) => ({
          ...current,
          output: errorText,
          language: normalizedLanguage,
        }));
      }
      setCodeRunState({
        running: false,
        output: errorText,
        language: normalizedLanguage,
        sourceId,
      });
    }
  };

  const runSelectedCode = async () => {
    if (!selectedCodeObject) return;
    const inlineForSelected =
      inlineTextEditor.open &&
      inlineTextEditor.type === "code" &&
      inlineTextEditor.targetId === selectedCodeObject.id;

    const code = inlineForSelected ? inlineTextEditor.value : selectedCodeObject.text || "";
    const language = inlineForSelected
      ? inlineTextEditor.language || selectedCodeObject.language || "javascript"
      : selectedCodeObject.language || "javascript";

    if (inlineForSelected) {
      updateObject(selectedCodeObject.id, (current) => ({
        ...current,
        text: code,
        language,
      }));
    }

    await runCodeSnippet({
      code,
      language,
      sourceId: selectedCodeObject.id,
    });
  };

  const runCodeObject = async (item) => {
    if (!item || item.type !== "code") return;
    await runCodeSnippet({
      code: item.text || "",
      language: item.language || "javascript",
      sourceId: item.id,
    });
  };

  const ensureInlineCodeTarget = () => {
    if (inlineTextEditor.targetId) {
      updateObject(inlineTextEditor.targetId, (current) => ({
        ...current,
        text: inlineTextEditor.value,
        width: inlineTextEditor.width,
        height: inlineTextEditor.height,
        fill: inlineTextEditor.fill,
        color: inlineTextEditor.color,
        language: inlineTextEditor.language || current.language || "javascript",
      }));
      return inlineTextEditor.targetId;
    }

    const id = createId();
    const nextObject = {
      id,
      type: "code",
      x: inlineTextEditor.x,
      y: inlineTextEditor.y,
      width: inlineTextEditor.width,
      height: inlineTextEditor.height,
      text: inlineTextEditor.value,
      fill: inlineTextEditor.fill,
      color: inlineTextEditor.color,
      language: inlineTextEditor.language || "javascript",
      output: "",
    };

    setObjects((prev) => [...prev, nextObject]);
    setSelectedId(id);
    setInlineTextEditor((prev) => ({
      ...prev,
      targetId: id,
    }));
    return id;
  };

  const startInlineDrag = (event) => {
    if (inlineTextEditor.type !== "code") return;
    event.preventDefault();
    event.stopPropagation();

    inlineDragRef.current = {
      active: true,
      startClientX: event.clientX,
      startClientY: event.clientY,
      startX: inlineTextEditor.x,
      startY: inlineTextEditor.y,
      targetId: inlineTextEditor.targetId,
    };
    setIsInlineDragging(true);
  };

  const inlineEditorStyle = useMemo(() => {
    if (!inlineTextEditor.open) return {};
    return {
      left: stagePosition.x + inlineTextEditor.x * stageScale,
      top: stagePosition.y + inlineTextEditor.y * stageScale,
      width: Math.max(inlineTextEditor.type === "code" ? 260 : 180, inlineTextEditor.width * stageScale),
    };
  }, [inlineTextEditor, stagePosition, stageScale]);

  const inlineInputStyle = useMemo(() => {
    if (!inlineTextEditor.open) return {};
    if (inlineTextEditor.type === "code") {
      return {
        minHeight: Math.max(140, inlineTextEditor.height * stageScale),
        fontSize: Math.max(12, inlineTextEditor.fontSize * stageScale),
        color: inlineTextEditor.color,
      };
    }

    return {
      minHeight: 110,
      fontSize: Math.max(14, inlineTextEditor.fontSize * stageScale),
      color: inlineTextEditor.fill,
    };
  }, [inlineTextEditor, stageScale]);

  const handleWheel = (event) => {
    event.evt.preventDefault();
    const stage = stageRef.current;
    const pointer = stage?.getPointerPosition();
    if (!pointer) return;

    const isZoomGesture = event.evt.ctrlKey || event.evt.metaKey;
    if (isZoomGesture) {
      const direction = event.evt.deltaY > 0 ? -1 : 1;
      const factor = direction > 0 ? 1.08 : 1 / 1.08;
      zoomAt(stageScale * factor, pointer);
      return;
    }

    setStagePosition((prev) => ({
      x: prev.x - event.evt.deltaX,
      y: prev.y - event.evt.deltaY,
    }));
  };

  const handleMouseDown = (event) => {
    if (inlineTextEditor.open) return;
    const clickedOnStage = event.target === event.target.getStage() || event.target.name() === "whiteboard-base";

    if (tool === "select") {
      if (clickedOnStage) {
        setTypingAnchor(toCanvasPoint());
        setSelectedId(null);
      } else {
        setTypingAnchor(null);
      }
      return;
    }

    if (tool === "pan") return;
    if (!clickedOnStage) return;

    const point = toCanvasPoint();
    const id = createId();

    if (tool === "text") {
      setTypingAnchor(point);
      setInlineTextEditor({
        open: true,
        type: "text",
        targetId: null,
        x: point.x,
        y: point.y,
        width: 360,
        height: 180,
        fontSize: 20,
        fill: strokeColor,
        color: "#e2e8f0",
        language: "javascript",
        value: "",
      });
      setSelectedId(null);
      return;
    }

    if (tool === "code") {
      setTypingAnchor(point);
      setInlineTextEditor({
        open: true,
        type: "code",
        targetId: null,
        x: point.x,
        y: point.y,
        width: 420,
        height: 220,
        fontSize: 14,
        fill: "#0f172a",
        color: "#e2e8f0",
        language: "javascript",
        value: "",
      });
      setSelectedId(null);
      return;
    }

    const drawColor = tool === "highlighter" ? highlightColor : tool === "eraser" ? "#ffffff" : strokeColor;
    const drawWidth =
      tool === "highlighter"
        ? Math.max(14, strokeWidth + 10)
        : tool === "eraser"
          ? Math.max(18, strokeWidth + 12)
          : strokeWidth;

    let newObject = null;
    if (tool === "pen" || tool === "highlighter" || tool === "eraser") {
      newObject = {
        id,
        type: "line",
        mode: tool,
        points: [point.x, point.y],
        stroke: drawColor,
        strokeWidth: drawWidth,
        opacity: tool === "highlighter" ? 0.6 : 1,
        composite:
          tool === "highlighter"
            ? "multiply"
            : "source-over",
      };
    } else if (tool === "line" || tool === "arrow") {
      newObject = {
        id,
        type: tool,
        points: [point.x, point.y, point.x, point.y],
        stroke: drawColor,
        strokeWidth: drawWidth,
      };
    } else if (tool === "rect") {
      newObject = {
        id,
        type: "rect",
        x: point.x,
        y: point.y,
        width: 0,
        height: 0,
        stroke: drawColor,
        strokeWidth: drawWidth,
      };
    } else if (tool === "circle") {
      newObject = {
        id,
        type: "circle",
        x: point.x,
        y: point.y,
        radius: 0,
        stroke: drawColor,
        strokeWidth: drawWidth,
      };
    }

    if (!newObject) return;
    setObjects((prev) => [...prev, newObject]);
    setDraftId(id);
    setStartPoint(point);
    setIsDrawing(true);
    setSelectedId(id);
  };

  const handleMouseMove = () => {
    if (!isDrawing || !draftId) return;
    const point = toCanvasPoint();
    if (!startPoint) return;

    updateObject(draftId, (item) => {
      if (item.type === "line" && (item.mode === "pen" || item.mode === "highlighter" || item.mode === "eraser")) {
        return {
          ...item,
          points: [...item.points, point.x, point.y],
        };
      }

      if (item.type === "line" || item.type === "arrow") {
        return {
          ...item,
          points: [startPoint.x, startPoint.y, point.x, point.y],
        };
      }

      if (item.type === "rect") {
        return {
          ...item,
          x: Math.min(startPoint.x, point.x),
          y: Math.min(startPoint.y, point.y),
          width: Math.abs(point.x - startPoint.x),
          height: Math.abs(point.y - startPoint.y),
        };
      }

      if (item.type === "circle") {
        const radius = Math.sqrt(Math.pow(point.x - startPoint.x, 2) + Math.pow(point.y - startPoint.y, 2));
        return {
          ...item,
          radius,
        };
      }

      return item;
    });
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
    setDraftId(null);
    setStartPoint(null);
  };

  const handleViewportKeyDown = (event) => {
    if (inlineTextEditor.open) return;
    if (tool !== "select" || !typingAnchor) return;
    if (event.altKey || event.ctrlKey || event.metaKey) return;

    const printable = event.key.length === 1;
    const startFromEnter = event.key === "Enter";
    if (!printable && !startFromEnter) return;

    event.preventDefault();
    setInlineTextEditor({
      open: true,
      type: "text",
      targetId: null,
      x: typingAnchor.x,
      y: typingAnchor.y,
      width: 360,
      height: 180,
      fontSize: 20,
      fill: strokeColor,
      color: "#e2e8f0",
      language: "javascript",
      value: printable ? event.key : "",
    });
  };

  const deleteSelected = () => {
    if (!selectedId) return;
    setObjects((prev) => prev.filter((obj) => obj.id !== selectedId));
    setSelectedId(null);
  };

  const duplicateSelected = () => {
    if (!selectedObject) return;
    const copy = {
      ...selectedObject,
      id: createId(),
      x: typeof selectedObject.x === "number" ? selectedObject.x + 36 : selectedObject.x,
      y: typeof selectedObject.y === "number" ? selectedObject.y + 36 : selectedObject.y,
      points:
        Array.isArray(selectedObject.points) && selectedObject.points.length > 1
          ? selectedObject.points.map((value, index) => (index % 2 === 0 ? value + 28 : value + 28))
          : selectedObject.points,
    };
    setObjects((prev) => [...prev, copy]);
    setSelectedId(copy.id);
  };

  const moveLayer = (direction) => {
    if (!selectedId) return;
    setObjects((prev) => {
      const index = prev.findIndex((item) => item.id === selectedId);
      if (index < 0) return prev;
      const target = direction === "up" ? index + 1 : index - 1;
      if (target < 0 || target >= prev.length) return prev;

      const next = [...prev];
      const [item] = next.splice(index, 1);
      next.splice(target, 0, item);
      return next;
    });
  };

  const renderShape = (item) => {
    const commonProps = {
      id: item.id,
      key: item.id,
      draggable: tool === "select",
      onClick: () => setSelectedId(item.id),
      onTap: () => setSelectedId(item.id),
      onDragEnd: (event) => {
        const node = event.target;
        updateObject(item.id, (current) => ({ ...current, x: node.x(), y: node.y() }));
      },
      onDblClick: () => {
        openEditor(item);
      },
    };

    if (item.type === "line") {
      return (
        <Line
          {...commonProps}
          x={0}
          y={0}
          points={item.points}
          stroke={item.stroke}
          strokeWidth={item.strokeWidth}
          lineCap="round"
          lineJoin="round"
          opacity={item.opacity || 1}
          globalCompositeOperation={item.composite || "source-over"}
        />
      );
    }

    if (item.type === "arrow") {
      return (
        <Arrow
          {...commonProps}
          x={0}
          y={0}
          points={item.points}
          stroke={item.stroke}
          fill={item.stroke}
          strokeWidth={item.strokeWidth}
          pointerLength={14}
          pointerWidth={14}
        />
      );
    }

    if (item.type === "rect") {
      return (
        <Rect
          {...commonProps}
          x={item.x}
          y={item.y}
          width={Math.max(6, item.width)}
          height={Math.max(6, item.height)}
          stroke={item.stroke}
          strokeWidth={item.strokeWidth}
          fill="transparent"
          onTransformEnd={(event) => {
            const node = event.target;
            const scaleX = node.scaleX();
            const scaleY = node.scaleY();
            updateObject(item.id, (current) => ({
              ...current,
              x: node.x(),
              y: node.y(),
              width: Math.max(12, node.width() * scaleX),
              height: Math.max(12, node.height() * scaleY),
            }));
            node.scaleX(1);
            node.scaleY(1);
          }}
        />
      );
    }

    if (item.type === "circle") {
      return (
        <Circle
          {...commonProps}
          x={item.x}
          y={item.y}
          radius={Math.max(4, item.radius)}
          stroke={item.stroke}
          strokeWidth={item.strokeWidth}
          fill="transparent"
          onTransformEnd={(event) => {
            const node = event.target;
            const nextRadius = Math.max(8, node.radius() * node.scaleX());
            updateObject(item.id, (current) => ({
              ...current,
              x: node.x(),
              y: node.y(),
              radius: nextRadius,
            }));
            node.scaleX(1);
            node.scaleY(1);
          }}
        />
      );
    }

    if (item.type === "text") {
      return (
        <Text
          {...commonProps}
          x={item.x}
          y={item.y}
          width={item.width || 360}
          text={item.text}
          fontSize={item.fontSize || 20}
          fill={item.fill || "#0f172a"}
          lineHeight={1.4}
          onTransformEnd={(event) => {
            const node = event.target;
            const scaleX = node.scaleX();
            updateObject(item.id, (current) => ({
              ...current,
              x: node.x(),
              y: node.y(),
              width: Math.max(140, node.width() * scaleX),
            }));
            node.scaleX(1);
            node.scaleY(1);
          }}
        />
      );
    }

    if (item.type === "code") {
      const language = item.language || "javascript";
      const output = item.output ? String(item.output) : "";
      const hasOutput = output.trim().length > 0;
      const isRunningThis = codeRunState.running && codeRunState.sourceId === item.id;
      const headerHeight = 26;
      const contentTop = 31;
      const bottomPadding = 9;
      const runButtonWidth = 54;
      const runButtonHeight = 18;
      const runButtonX = Math.max(92, item.width - runButtonWidth - 8);
      const runButtonY = 4;
      const availableBodyHeight = Math.max(28, item.height - contentTop - bottomPadding);
      let outputHeight = 0;
      if (hasOutput) {
        outputHeight = Math.min(170, Math.max(64, availableBodyHeight * 0.42));
        if (outputHeight > availableBodyHeight - 32) {
          outputHeight = Math.max(52, availableBodyHeight - 32);
        }
      }
      const codeTextHeight = Math.max(
        24,
        availableBodyHeight - outputHeight - (hasOutput ? 6 : 0)
      );
      const outputY = item.height - outputHeight;

      return (
        <Group
          {...commonProps}
          x={item.x}
          y={item.y}
          onTransformEnd={(event) => {
            const node = event.target;
            const scaleX = node.scaleX();
            const scaleY = node.scaleY();
            updateObject(item.id, (current) => ({
              ...current,
              x: node.x(),
              y: node.y(),
              width: Math.max(220, current.width * scaleX),
              height: Math.max(140, current.height * scaleY),
            }));
            node.scaleX(1);
            node.scaleY(1);
          }}
        >
          <Rect width={item.width} height={item.height} fill={item.fill || "#0f172a"} cornerRadius={12} />
          <Rect width={item.width} height={headerHeight} fill="#1e293b" cornerRadius={[12, 12, 0, 0]} />
          <Text
            text={language.toUpperCase()}
            x={10}
            y={7}
            fill="#93c5fd"
            fontFamily="Inter, sans-serif"
            fontSize={10}
            fontStyle="bold"
          />
          <Rect
            x={runButtonX}
            y={runButtonY}
            width={runButtonWidth}
            height={runButtonHeight}
            cornerRadius={7}
            fill={isRunningThis ? "#1d4ed8" : "#2563eb"}
            stroke="rgba(191, 219, 254, 0.45)"
            strokeWidth={1}
            onClick={(event) => {
              event.cancelBubble = true;
              setSelectedId(item.id);
              runCodeObject(item);
            }}
            onTap={(event) => {
              event.cancelBubble = true;
              setSelectedId(item.id);
              runCodeObject(item);
            }}
          />
          <Text
            text={isRunningThis ? "RUN..." : "RUN"}
            x={runButtonX}
            y={runButtonY + 4}
            width={runButtonWidth}
            align="center"
            fill="#ffffff"
            fontFamily="Inter, sans-serif"
            fontSize={10}
            fontStyle="bold"
            onClick={(event) => {
              event.cancelBubble = true;
              setSelectedId(item.id);
              runCodeObject(item);
            }}
            onTap={(event) => {
              event.cancelBubble = true;
              setSelectedId(item.id);
              runCodeObject(item);
            }}
          />
          <Text
            text={item.text}
            width={item.width - 18}
            height={codeTextHeight}
            x={9}
            y={contentTop}
            fill={item.color || "#e2e8f0"}
            fontFamily="Fira Code, monospace"
            fontSize={14}
            lineHeight={1.45}
          />
          {hasOutput && (
            <>
              <Rect
                x={0}
                y={outputY}
                width={item.width}
                height={outputHeight}
                fill="#111827"
                cornerRadius={[0, 0, 12, 12]}
              />
              <Text
                text="OUTPUT"
                x={10}
                y={outputY + 7}
                fill="#67e8f9"
                fontFamily="Inter, sans-serif"
                fontSize={10}
                fontStyle="bold"
              />
              <Text
                text={output}
                x={9}
                y={outputY + 24}
                width={item.width - 18}
                height={Math.max(16, outputHeight - 30)}
                fill="#e2e8f0"
                fontFamily="Fira Code, monospace"
                fontSize={12}
                lineHeight={1.35}
              />
            </>
          )}
        </Group>
      );
    }

    return null;
  };

  return (
    <div className="whiteboard-shell">
      <div className="whiteboard-toolbar">
        <div className="whiteboard-toolset">
          {TOOL_ORDER.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`whiteboard-tool ${tool === item.id ? "active" : ""}`}
              onClick={() => setTool(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="whiteboard-controls">
          <label>
            Width
            <input
              type="range"
              min="1"
              max="18"
              value={strokeWidth}
              onChange={(event) => setStrokeWidth(Number(event.target.value))}
            />
          </label>
          <div className="whiteboard-palette-group">
            <span>Stroke</span>
            <div className="whiteboard-palette">
              {COLOR_CHOICES.map((color) => (
                <button
                  type="button"
                  key={color}
                  className={`whiteboard-color ${strokeColor === color ? "selected" : ""}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setStrokeColor(color)}
                  title="Stroke color"
                />
              ))}
            </div>
          </div>
          <div className="whiteboard-palette-group">
            <span>Highlight</span>
            <div className="whiteboard-palette">
              {HIGHLIGHT_CHOICES.map((color) => (
                <button
                  type="button"
                  key={color}
                  className={`whiteboard-color ${highlightColor === color ? "selected" : ""}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setHighlightColor(color)}
                  title="Highlight color"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="whiteboard-actions">
          <button type="button" onClick={zoomOut}>-</button>
          <button type="button" onClick={zoomIn}>+</button>
          <button type="button" onClick={fitView}>Fit</button>
          <button type="button" onClick={resetView}>Reset</button>
          <button
            type="button"
            onClick={() => openEditor(selectedObject)}
            disabled={!selectedObject || !["text", "code"].includes(selectedObject.type)}
          >
            Edit
          </button>
          {selectedCodeObject && (
            <select
              className="whiteboard-language-select"
              value={selectedCodeObject.language || "javascript"}
              onChange={(event) => updateSelectedCodeLanguage(event.target.value)}
              title="Code block language"
            >
              {CODE_LANGUAGES.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
          )}
          <button
            type="button"
            onClick={runSelectedCode}
            disabled={!selectedCodeObject || codeRunState.running}
          >
            {codeRunState.running && codeRunState.sourceId === selectedCodeObject?.id
              ? "Running..."
              : "Run"}
          </button>
          <button type="button" onClick={duplicateSelected} disabled={!selectedId}>Duplicate</button>
          <button type="button" onClick={() => moveLayer("up")} disabled={!selectedId}>Forward</button>
          <button type="button" onClick={() => moveLayer("down")} disabled={!selectedId}>Back</button>
          <button type="button" onClick={deleteSelected} disabled={!selectedId}>Delete</button>
          <button type="button" onClick={() => { setObjects([]); setSelectedId(null); }}>Clear</button>
        </div>
      </div>

      <div
        className="whiteboard-viewport"
        ref={containerRef}
        tabIndex={0}
        onPointerDownCapture={() => containerRef.current?.focus()}
        onWheel={(event) => event.preventDefault()}
        onKeyDown={handleViewportKeyDown}
      >
        <Stage
          ref={stageRef}
          width={viewportSize.width}
          height={viewportSize.height}
          x={stagePosition.x}
          y={stagePosition.y}
          scaleX={stageScale}
          scaleY={stageScale}
          draggable={tool === "pan" || isSpacePanning}
          onDragEnd={(event) => setStagePosition({ x: event.target.x(), y: event.target.y() })}
          onWheel={handleWheel}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <Layer>
            <Rect
              name="whiteboard-base"
              x={0}
              y={0}
              width={BOARD_WIDTH}
              height={BOARD_HEIGHT}
              fill="#ffffff"
              stroke="#dbe2ea"
              strokeWidth={1}
            />
            {objects.map(renderShape)}
            {selectedId && tool === "select" && selectedObject && (
              <Transformer
                ref={transformerRef}
                rotateEnabled={false}
                enabledAnchors={
                  selectedObject.type === "code"
                    ? [
                        "top-left",
                        "top-center",
                        "top-right",
                        "middle-left",
                        "middle-right",
                        "bottom-left",
                        "bottom-center",
                        "bottom-right",
                      ]
                    : ["rect", "circle", "text"].includes(selectedObject.type)
                      ? ["top-left", "top-right", "bottom-left", "bottom-right"]
                      : []
                }
                keepRatio={false}
              />
            )}
          </Layer>
        </Stage>

        {inlineTextEditor.open && (
          <div
            className={`whiteboard-inline-editor ${inlineTextEditor.type === "code" ? "code" : ""}`}
            style={inlineEditorStyle}
            ref={inlineEditorRef}
          >
            {inlineTextEditor.type === "code" && (
              <div
                className={`whiteboard-inline-dragbar ${isInlineDragging ? "dragging" : ""}`}
                onPointerDown={startInlineDrag}
              >
                <span>Code Block</span>
                <span>Drag to move</span>
              </div>
            )}
            <textarea
              ref={inlineTextRef}
              className={`whiteboard-inline-input ${inlineTextEditor.type === "code" ? "code" : ""}`}
              style={inlineInputStyle}
              value={inlineTextEditor.value}
              onChange={(event) =>
                setInlineTextEditor((prev) => ({ ...prev, value: event.target.value }))
              }
              onBlur={(event) => {
                if (skipInlineBlurCommitRef.current) {
                  skipInlineBlurCommitRef.current = false;
                  return;
                }
                const nextTarget = event.relatedTarget;
                if (nextTarget && inlineEditorRef.current?.contains(nextTarget)) {
                  return;
                }
                commitInlineTextEditor();
              }}
              onKeyDown={(event) => {
                if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
                  event.preventDefault();
                  commitInlineTextEditor();
                  return;
                }
                if (event.key === "Escape") {
                  event.preventDefault();
                  cancelInlineTextEditor();
                }
                if (inlineTextEditor.type === "code" && event.key === "Tab") {
                  event.preventDefault();
                  const input = event.currentTarget;
                  const start = input.selectionStart;
                  const end = input.selectionEnd;
                  const nextValue = `${inlineTextEditor.value.slice(0, start)}  ${inlineTextEditor.value.slice(end)}`;
                  setInlineTextEditor((prev) => ({ ...prev, value: nextValue }));
                  window.requestAnimationFrame(() => {
                    input.selectionStart = start + 2;
                    input.selectionEnd = start + 2;
                  });
                }
                event.stopPropagation();
              }}
              placeholder={
                inlineTextEditor.type === "code"
                  ? "Type code block content..."
                  : "Type note..."
              }
            />
            {inlineTextEditor.type === "code" && (
              <div className="whiteboard-inline-code-actions">
                <select
                  className="whiteboard-language-select"
                  value={inlineTextEditor.language || "javascript"}
                  onChange={(event) =>
                    setInlineTextEditor((prev) => ({
                      ...prev,
                      language: event.target.value,
                    }))
                  }
                >
                  {CODE_LANGUAGES.map((language) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  className="whiteboard-inline-run"
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => {
                    const sourceId = ensureInlineCodeTarget();
                    runCodeSnippet({
                      code: inlineTextEditor.value,
                      language: inlineTextEditor.language || "javascript",
                      sourceId,
                    });
                  }}
                  disabled={codeRunState.running}
                >
                  {codeRunState.running &&
                  codeRunState.sourceId === inlineSourceId
                    ? "Running..."
                    : "Run"}
                </button>
              </div>
            )}
            {showInlineRunOutput && (
              <div className="whiteboard-inline-output">
                <div className="whiteboard-inline-output-label">
                  {codeRunState.language} output
                </div>
                <pre className="whiteboard-inline-output-body">{codeRunState.output}</pre>
              </div>
            )}
          </div>
        )}

        {codeRunState.output && (
          <div className="whiteboard-output-panel floating">
            <div className="whiteboard-output-header">
              <strong>{codeRunState.language} output</strong>
              <button
                type="button"
                onClick={() =>
                  setCodeRunState((prev) => ({
                    ...prev,
                    output: "",
                  }))
                }
              >
                Clear
              </button>
            </div>
            <pre className="whiteboard-output-body">{codeRunState.output}</pre>
          </div>
        )}
      </div>

      <div className="whiteboard-status">
        <span>Zoom: {Math.round(stageScale * 100)}%</span>
        <span>Objects: {objects.length}</span>
        <span>Tool: {tool}</span>
        <span>Hold Space to pan</span>
      </div>

    </div>
  );
}

export default WhiteboardCanvas;
