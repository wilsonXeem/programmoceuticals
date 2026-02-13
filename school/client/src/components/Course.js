import React, { useState, useEffect, useRef } from "react";
import Navigation from "./Navigation";
import SlideContainer from "./SlideContainer";
import Controls from "./Controls";
import { progressAPI } from "../services/api";
import CodeExecutionService, {
  codeTemplates,
} from "../services/codeExecutionService";
import WhiteboardCanvas from "./WhiteboardCanvas";
import "../styles/ProgrammingNotepad.css";

function Course({ language, slidesData, onBackToHome, user }) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [visitedSlides, setVisitedSlides] = useState(new Set([1]));
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showNotepad, setShowNotepad] = useState(false);
  const [isNotepadExpanded, setIsNotepadExpanded] = useState(false);
  const [noteFontSize, setNoteFontSize] = useState(18);
  const notepadRef = useRef(null);
  const [notepadPosition, setNotepadPosition] = useState({
    top: 96,
    right: 28,
  });
  const dragStateRef = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    startTop: 0,
    startRight: 28,
  });
  const [noteMode, setNoteMode] = useState("rich");
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [codeOutput, setCodeOutput] = useState("");
  const [noteCategory, setNoteCategory] = useState("general");
  const codeEditorRef = useRef(null);
  const totalSlides = slidesData.length;

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const response = await progressAPI.getCourse(language);
        if (response?.progress) {
          const completedSlides = response.progress.completed_slides || 1;
          const lastSlide = response.progress.last_slide_index || 1;
          const initialVisited = new Set(
            Array.from({ length: completedSlides }, (_, index) => index + 1)
          );
          setVisitedSlides(initialVisited);
          setCurrentSlide(lastSlide);
        }
      } catch (error) {
        setVisitedSlides(new Set([1]));
        setCurrentSlide(1);
      }
    };

    if (user?.id && language) {
      loadProgress();
    }
  }, [user, language]);

  useEffect(() => {
    setVisitedSlides((prev) => new Set([...prev, currentSlide]));
  }, [currentSlide]);

  useEffect(() => {
    const updateProgress = async () => {
      try {
        await progressAPI.updateCourse({
          courseId: language,
          lastSlideIndex: currentSlide,
          completedSlides: visitedSlides.size,
          totalSlides,
        });
      } catch (error) {
        // Ignore progress update failures for now.
      }
    };

    if (user?.id && language && totalSlides > 0) {
      updateProgress();
    }
  }, [user, language, currentSlide, visitedSlides, totalSlides]);

  useEffect(() => {
    const savedNotes = localStorage.getItem(
      `notes:${language}:${currentSlide}`
    );
    if (savedNotes) {
      try {
        const noteData = JSON.parse(savedNotes);
        setNoteMode(noteData.mode || "rich");
        setSelectedLanguage(noteData.language || "javascript");
        setNoteCategory(noteData.category || "general");

        if (noteData.mode === "code" && codeEditorRef.current) {
          codeEditorRef.current.value = noteData.content || "";
        } else if (noteData.mode === "rich" && notepadRef.current) {
          notepadRef.current.innerHTML = noteData.content || "";
        }
      } catch (error) {
        // Fallback to old format
        if (notepadRef.current) {
          notepadRef.current.innerHTML = savedNotes;
        }
      }
    } else {
      setNoteMode("rich");
      if (codeEditorRef.current) {
        codeEditorRef.current.value = "";
      }
      if (notepadRef.current) {
        notepadRef.current.innerHTML = "";
      }
    }

    const savedPosition = localStorage.getItem(`notes-position:${language}`);
    if (savedPosition) {
      try {
        const parsed = JSON.parse(savedPosition);
        setNotepadPosition(parsed);
      } catch (error) {
        // Ignore bad saved position data.
      }
    }
  }, [language, currentSlide]);

  useEffect(() => {
    if (!language) return;
    localStorage.setItem(
      `notes-position:${language}`,
      JSON.stringify(notepadPosition)
    );
  }, [language, notepadPosition]);

  useEffect(() => {
    if (showNotepad && notepadRef.current) {
      notepadRef.current.focus();
    }
  }, [showNotepad]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const target = event.target;
      const isTypingSurface =
        showNotepad &&
        (target?.closest?.(".notepad-panel") ||
          target?.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(target?.tagName));

      if (isTypingSurface) {
        return;
      }

      switch (event.key) {
        case "ArrowRight":
        case " ":
          event.preventDefault();
          nextSlide();
          break;
        case "ArrowLeft":
          event.preventDefault();
          previousSlide();
          break;
        case "Home":
          event.preventDefault();
          setCurrentSlide(1);
          break;
        case "End":
          event.preventDefault();
          setCurrentSlide(totalSlides);
          break;
        case "Escape":
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
          break;
        default:
          break;
      }
    };

    const handleClickOutside = (event) => {
      const nav = document.querySelector(".side-nav");
      const toggle = document.querySelector(".nav-toggle");
      if (
        nav &&
        nav.classList.contains("open") &&
        !nav.contains(event.target) &&
        !toggle.contains(event.target)
      ) {
        nav.classList.remove("open");
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [currentSlide, totalSlides, showNotepad]);

  const nextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const previousSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const executeCode = async () => {
    const code = codeEditorRef.current?.value || "";
    if (!code.trim()) return;

    try {
      setCodeOutput("Running...");
      const result = await CodeExecutionService.execute(code, selectedLanguage);
      setCodeOutput(result);
    } catch (error) {
      setCodeOutput(`Error: ${error.message}`);
    }
  };

  const insertCodeSnippet = () => {
    const templates = codeTemplates[selectedLanguage];
    if (!templates) return;

    const templateName = Object.keys(templates)[0];
    const snippet = templates[templateName];

    if (noteMode === "code") {
      codeEditorRef.current.value +=
        (codeEditorRef.current.value ? "\n\n" : "") + snippet;
    } else {
      const template = `<div class="code-block"><pre><code class="language-${selectedLanguage}">${snippet}</code></pre></div>`;
      document.execCommand("insertHTML", false, template);
    }
  };

  const insertTemplate = (templateName) => {
    const templates = codeTemplates[selectedLanguage];
    if (!templates || !templates[templateName]) return;

    const snippet = templates[templateName];

    if (noteMode === "code") {
      codeEditorRef.current.value = snippet;
    } else {
      const template = `<div class="code-block"><div class="code-header">${templateName}</div><pre><code class="language-${selectedLanguage}">${snippet}</code></pre></div>`;
      document.execCommand("insertHTML", false, template);
    }
  };

  const exportNotes = () => {
    const content =
      noteMode === "code"
        ? codeEditorRef.current?.value
        : notepadRef.current?.innerHTML;
    const notesData = {
      course: language,
      slide: currentSlide,
      content,
      mode: noteMode,
      language: selectedLanguage,
      category: noteCategory,
      timestamp: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(notesData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `notes-${language}-slide${currentSlide}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const saveNotes = () => {
    let content = "";
    if (noteMode === "code") {
      content = codeEditorRef.current?.value || "";
    } else if (noteMode === "rich") {
      content = notepadRef.current?.innerHTML || "";
    }
    const noteData = {
      content,
      mode: noteMode,
      language: selectedLanguage,
      category: noteCategory,
      slide: currentSlide,
    };
    localStorage.setItem(
      `notes:${language}:${currentSlide}`,
      JSON.stringify(noteData)
    );
  };

  return (
    <div className="course-view" data-course={language}>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${(visitedSlides.size / totalSlides) * 100}%` }}
        ></div>
      </div>

      <Navigation
        currentSlide={currentSlide}
        visitedSlides={visitedSlides}
        goToSlide={goToSlide}
        slidesData={slidesData}
      />

      <button
        className="nav-toggle"
        onClick={() =>
          document.querySelector(".side-nav").classList.toggle("open")
        }
        title="Toggle Navigation (N)"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <button className="back-btn" onClick={onBackToHome} title="Back to Home">
        <i className="fa-solid fa-home"></i>
      </button>

      <button
        className="fullscreen-btn"
        onClick={toggleFullscreen}
        title="Toggle Fullscreen (F)"
      >
        <i
          className={`fa-solid ${isFullscreen ? "fa-compress" : "fa-expand"}`}
        ></i>
      </button>

      <button
        className="notepad-btn programming-notepad-btn"
        onClick={() => setShowNotepad((prev) => !prev)}
        title="Programming Notepad"
      >
        <i className="fa-solid fa-code"></i>
      </button>

      <div className="main-content">
        <SlideContainer
          currentSlide={currentSlide}
          slidesData={slidesData}
          language={language}
        />
      </div>

      <Controls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        nextSlide={nextSlide}
        previousSlide={previousSlide}
      />

      {showNotepad && (
        <div
          className={`notepad-panel enhanced-notepad ${isNotepadExpanded ? "expanded" : ""}`}
          style={{
            top: isNotepadExpanded ? "16px" : `${notepadPosition.top}px`,
            right: isNotepadExpanded ? "16px" : `${notepadPosition.right}px`,
          }}
        >
          <div
            className="notepad-header"
            onPointerDown={(event) => {
              if (isNotepadExpanded) return;
              dragStateRef.current = {
                isDragging: true,
                startX: event.clientX,
                startY: event.clientY,
                startTop: notepadPosition.top,
                startRight: notepadPosition.right,
              };
              event.currentTarget.setPointerCapture(event.pointerId);
            }}
            onPointerMove={(event) => {
              if (isNotepadExpanded) return;
              if (!dragStateRef.current.isDragging) return;
              const deltaX = event.clientX - dragStateRef.current.startX;
              const deltaY = event.clientY - dragStateRef.current.startY;
              setNotepadPosition({
                top: Math.max(40, dragStateRef.current.startTop + deltaY),
                right: Math.max(12, dragStateRef.current.startRight - deltaX),
              });
            }}
            onPointerUp={(event) => {
              if (isNotepadExpanded) return;
              dragStateRef.current.isDragging = false;
              event.currentTarget.releasePointerCapture(event.pointerId);
            }}
          >
            <div className="notepad-header-content">
              <div
                className="notepad-toolbar"
                onPointerDown={(event) => event.stopPropagation()}
              >
                <div className="toolbar-row">
                  <select
                    value={noteMode}
                    onChange={(e) => setNoteMode(e.target.value)}
                    className="mode-select"
                  >
                    <option value="rich">📝 Notes</option>
                    <option value="code">💻 Code</option>
                    <option value="whiteboard">🧭 Whiteboard</option>
                  </select>

                  {noteMode !== "whiteboard" && (
                    <>
                      <select
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)}
                        className="language-select"
                      >
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="cpp">C++</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                      </select>

                      <select
                        value={noteCategory}
                        onChange={(e) => setNoteCategory(e.target.value)}
                        className="category-select"
                      >
                        <option value="general">📋 General</option>
                        <option value="concept">💡 Concept</option>
                        <option value="code">⚡ Code</option>
                        <option value="question">❓ Question</option>
                        <option value="important">⭐ Important</option>
                      </select>
                    </>
                  )}
                </div>

                <div className="toolbar-row">
                  {noteMode === "whiteboard" ? (
                    <div className="whiteboard-hint">
                      Draw, pan, zoom, and arrange objects in the board workspace.
                    </div>
                  ) : (
                    <>
                      <select
                        onChange={(e) =>
                          e.target.value && insertTemplate(e.target.value)
                        }
                        value=""
                        className="template-select"
                      >
                        <option value="">📄 Templates</option>
                        {codeTemplates[selectedLanguage] &&
                          Object.keys(codeTemplates[selectedLanguage]).map(
                            (template) => (
                              <option key={template} value={template}>
                                {template}
                              </option>
                            )
                          )}
                      </select>

                      <div className="action-buttons">
                        <button
                          onClick={insertCodeSnippet}
                          title="Insert Code"
                          className="action-btn"
                        >
                          📝
                        </button>
                        {noteMode === "code" && (
                          <button
                            onClick={executeCode}
                            title="Run Code"
                            className="run-btn"
                          >
                            ▶️ Run
                          </button>
                        )}
                        <button
                          onClick={exportNotes}
                          title="Export Notes"
                          className="action-btn"
                        >
                          💾
                        </button>
                        <button
                          onClick={saveNotes}
                          title="Save Notes"
                          className="action-btn"
                        >
                          💿
                        </button>
                        {codeOutput && (
                          <button
                            onClick={() => setCodeOutput("")}
                            title="Clear Output"
                            className="clear-btn"
                          >
                            🗑️
                          </button>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            <button
              className="notepad-expand-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsNotepadExpanded((prev) => !prev);
              }}
              onPointerDown={(e) => e.stopPropagation()}
              title={isNotepadExpanded ? "Restore size" : "Expand notepad"}
            >
              {isNotepadExpanded ? "⤢" : "⤡"}
            </button>
            <button
              className="notepad-close-btn"
              onClick={(e) => {
                e.stopPropagation();
                setShowNotepad(false);
                setIsNotepadExpanded(false);
              }}
              onPointerDown={(e) => e.stopPropagation()}
              title="Close Notepad"
            >
              ✕
            </button>
          </div>

          <div className="notepad-content">
            {noteMode === "whiteboard" ? (
              <WhiteboardCanvas storageKey={`whiteboard:${language}:${currentSlide}`} />
            ) : noteMode === "code" ? (
              <div className="code-workspace">
                <div className="code-editor-section">
                  <div className="code-editor-header">
                    <span>Code Editor</span>
                    <button onClick={executeCode} className="inline-run-btn">
                      ▶️ Execute
                    </button>
                  </div>
                  <textarea
                    ref={codeEditorRef}
                    className="code-editor"
                    placeholder={`Write ${selectedLanguage} code here...\n\n// Example:\nconsole.log('Hello World!');`}
                    style={{ fontSize: `${noteFontSize}px` }}
                    onInput={saveNotes}
                  />
                </div>
                {codeOutput && (
                  <div className="code-output-section">
                    <div className="output-header">
                      <span>Output</span>
                      <button
                        onClick={() => setCodeOutput("")}
                        className="clear-output-btn"
                      >
                        Clear
                      </button>
                    </div>
                    <pre className="code-output">{codeOutput}</pre>
                  </div>
                )}
              </div>
            ) : (
              <div
                ref={notepadRef}
                className="notepad-textarea"
                style={{ fontSize: `${noteFontSize}px` }}
                contentEditable
                suppressContentEditableWarning
                tabIndex={0}
                data-placeholder="Write your notes here...\n\nTip: Switch to Code mode to write and execute code!"
                onInput={saveNotes}
              />
            )}
          </div>

          <div className="notepad-footer">
            {noteMode === "whiteboard" ? (
              <span className="note-info">
                Whiteboard mode | Large canvas | Zoom and object tools enabled
              </span>
            ) : (
              <>
                <button
                  onClick={() =>
                    setNoteFontSize((size) => Math.max(12, size - 2))
                  }
                >
                  A-
                </button>
                <button
                  onClick={() =>
                    setNoteFontSize((size) => Math.min(24, size + 2))
                  }
                >
                  A+
                </button>
                <span className="note-info">
                  {noteCategory} | {selectedLanguage}
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Course;
