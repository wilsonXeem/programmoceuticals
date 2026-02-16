const DB_NAME = 'ctd_compiler_storage';
const STORE_NAME = 'key_value_store';
const UPLOADS_KEY = 'ctd-uploaded-files-v1';
const LEGACY_LOCAL_STORAGE_KEY = 'ctd-uploaded-files';

const hasIndexedDb = () => typeof window !== 'undefined' && typeof window.indexedDB !== 'undefined';

const openDatabase = () => {
  return new Promise((resolve, reject) => {
    if (!hasIndexedDb()) {
      reject(new Error('IndexedDB is not supported'));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('Failed to open IndexedDB'));
  });
};

const runWithStore = async (mode, action) => {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction(STORE_NAME, mode);
    const store = transaction.objectStore(STORE_NAME);
    const request = action(store);

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('IndexedDB request failed'));

    transaction.oncomplete = () => {
      db.close();
    };
    transaction.onerror = () => {
      db.close();
    };
    transaction.onabort = () => {
      db.close();
    };
  });
};

const safeParseMapEntries = (value) => {
  if (!value) return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const loadFromLegacyLocalStorage = () => {
  if (typeof window === 'undefined') return [];
  return safeParseMapEntries(window.localStorage.getItem(LEGACY_LOCAL_STORAGE_KEY));
};

const saveToLegacyLocalStorage = (entries) => {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(LEGACY_LOCAL_STORAGE_KEY, JSON.stringify(entries));
};

export const saveUploadedFiles = async (entries) => {
  const safeEntries = Array.isArray(entries) ? entries : [];

  if (hasIndexedDb()) {
    try {
      await runWithStore('readwrite', (store) => store.put({ id: UPLOADS_KEY, entries: safeEntries }));
      return;
    } catch (error) {
      console.warn('IndexedDB save failed; falling back to localStorage.', error);
    }
  }

  saveToLegacyLocalStorage(safeEntries);
};

export const loadUploadedFiles = async () => {
  if (hasIndexedDb()) {
    try {
      const result = await runWithStore('readonly', (store) => store.get(UPLOADS_KEY));
      if (result && Array.isArray(result.entries)) {
        return new Map(result.entries);
      }

      const legacyEntries = loadFromLegacyLocalStorage();
      if (legacyEntries.length > 0) {
        try {
          await runWithStore('readwrite', (store) => store.put({ id: UPLOADS_KEY, entries: legacyEntries }));
        } catch (migrationError) {
          console.warn('Could not migrate legacy uploads to IndexedDB.', migrationError);
        }
        return new Map(legacyEntries);
      }

      return new Map();
    } catch (error) {
      console.warn('IndexedDB load failed; falling back to localStorage.', error);
    }
  }

  return new Map(loadFromLegacyLocalStorage());
};

export const clearUploadedFiles = async () => {
  if (hasIndexedDb()) {
    try {
      await runWithStore('readwrite', (store) => store.delete(UPLOADS_KEY));
    } catch (error) {
      console.warn('IndexedDB clear failed.', error);
    }
  }

  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(LEGACY_LOCAL_STORAGE_KEY);
  }
};
