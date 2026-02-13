import { useEffect, useRef, useCallback } from 'react';

const useAutoSave = (data, saveFunction, interval = 30000) => {
  const intervalRef = useRef(null);
  const lastSavedRef = useRef(null);

  const save = useCallback(async () => {
    if (data && JSON.stringify(data) !== JSON.stringify(lastSavedRef.current)) {
      try {
        await saveFunction(data);
        lastSavedRef.current = data;
        console.log('Auto-saved at:', new Date().toLocaleTimeString());
      } catch (error) {
        console.error('Auto-save failed:', error);
      }
    }
  }, [data, saveFunction]);

  useEffect(() => {
    if (data) {
      intervalRef.current = setInterval(save, interval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [save, interval, data]);

  const forceSave = useCallback(() => {
    save();
  }, [save]);

  return { forceSave };
};

export default useAutoSave;