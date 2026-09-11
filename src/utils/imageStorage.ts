// Client-side image compression and durable storage utility
// Handles large camera images (5-15MB) by downsizing and compressing to ~100KB JPEG
// Persists in localStorage and IndexedDB so it never fails even in partitioned iframes

const MATRIZ_KEY = 'lava10_matriz_photo_v2';
const FILIAL_KEY = 'lava10_filial_photo_v2';
const DB_NAME = 'lava10_assets_db';
const STORE_NAME = 'photos';

export async function compressImage(file: File, maxWidth = 1280, quality = 0.82): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxWidth || height > maxWidth) {
          if (width > height) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxWidth) / height);
            height = maxWidth;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = () => reject(new Error('Falha ao carregar imagem'));
      img.src = e.target?.result as string;
    };
    reader.onerror = () => reject(new Error('Falha ao ler arquivo'));
    reader.readAsDataURL(file);
  });
}

// Open IndexedDB
function getDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// Save photo
export async function savePhoto(type: 'matriz' | 'filial', dataUrl: string): Promise<void> {
  const key = type === 'matriz' ? MATRIZ_KEY : FILIAL_KEY;

  // 1. Try LocalStorage
  try {
    localStorage.setItem(key, dataUrl);
  } catch (e) {
    console.warn('LocalStorage save failed, relying on IndexedDB:', e);
  }

  // 2. Try IndexedDB
  try {
    const db = await getDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).put(dataUrl, key);
  } catch (e) {
    console.warn('IndexedDB save failed:', e);
  }
}

// Synchronously get photo from LocalStorage for instant 0ms render
export function getStoredPhotoSync(type: 'matriz' | 'filial'): string | null {
  if (typeof window === 'undefined') return null;
  const fallbackKeys = type === 'matriz'
    ? [MATRIZ_KEY, 'lava10_matriz_photo', 'matriz_photo', 'matriz']
    : [FILIAL_KEY, 'lava10_filial_photo', 'filial_photo', 'filial'];

  for (const k of fallbackKeys) {
    try {
      const val = localStorage.getItem(k);
      if (val) {
        // Blob URLs are temporary and die on page reload - purge immediately
        if (val.startsWith('blob:')) {
          localStorage.removeItem(k);
          continue;
        }
        if (val.startsWith('data:image') || val.startsWith('/') || val.startsWith('http')) {
          return val;
        }
      }
    } catch {
      // ignore
    }
  }
  return null;
}

// Load photo
export async function loadPhoto(type: 'matriz' | 'filial'): Promise<string | null> {
  const key = type === 'matriz' ? MATRIZ_KEY : FILIAL_KEY;

  // 1. Try LocalStorage first (fastest)
  try {
    const local = localStorage.getItem(key);
    if (local && local.startsWith('data:image')) {
      return local;
    }
  } catch (e) {
    console.warn('LocalStorage read error:', e);
  }

  // 2. Try IndexedDB
  try {
    const db = await getDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const request = tx.objectStore(STORE_NAME).get(key);
    return new Promise((resolve) => {
      request.onsuccess = () => resolve(request.result || null);
      request.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

// Remove photo
export async function removePhoto(type: 'matriz' | 'filial'): Promise<void> {
  const key = type === 'matriz' ? MATRIZ_KEY : FILIAL_KEY;
  try {
    localStorage.removeItem(key);
  } catch {
    // ignore
  }
  try {
    const db = await getDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    tx.objectStore(STORE_NAME).delete(key);
  } catch {
    // ignore
  }
}
