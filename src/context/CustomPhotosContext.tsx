import React, { createContext, useContext, useState, useEffect } from 'react';
import { compressImage, savePhoto, loadPhoto, getStoredPhotoSync, removePhoto } from '../utils/imageStorage';

interface CustomPhotosContextType {
  matrizPhoto: string | null;
  filialPhoto: string | null;
  isMatrizLocked: boolean;
  isFilialLocked: boolean;
  setMatrizPhotoFromFile: (file: File, force?: boolean) => Promise<boolean>;
  setFilialPhotoFromFile: (file: File, force?: boolean) => Promise<boolean>;
  resetMatrizPhoto: () => Promise<void>;
  resetFilialPhoto: () => Promise<void>;
  isProcessing: boolean;
  toastMessage: string | null;
}

const CustomPhotosContext = createContext<CustomPhotosContextType>({
  matrizPhoto: null,
  filialPhoto: null,
  isMatrizLocked: false,
  isFilialLocked: false,
  setMatrizPhotoFromFile: async () => false,
  setFilialPhotoFromFile: async () => false,
  resetMatrizPhoto: async () => {},
  resetFilialPhoto: async () => {},
  isProcessing: false,
  toastMessage: null,
});

const testImageLoad = (url: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = `${url}?t=${Date.now()}`;
  });
};

export const CustomPhotosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Synchronous 0ms immediate initialization from storage (no blank state or loading delay)
  const [matrizPhoto, setMatrizPhotoState] = useState<string | null>(() => getStoredPhotoSync('matriz'));
  const [filialPhoto, setFilialPhotoState] = useState<string | null>(() => getStoredPhotoSync('filial'));
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  useEffect(() => {
    // Purge any dead blob URLs immediately
    if (matrizPhoto && matrizPhoto.startsWith('blob:')) {
      removePhoto('matriz');
      setMatrizPhotoState(null);
    }
    if (filialPhoto && filialPhoto.startsWith('blob:')) {
      removePhoto('filial');
      setFilialPhotoState(null);
    }

    let isMounted = true;
    const init = async () => {
      // 1. Matriz check if not in localStorage
      if (!matrizPhoto) {
        const cachedMatriz = await loadPhoto('matriz');
        if (isMounted && cachedMatriz && !cachedMatriz.startsWith('blob:')) {
          setMatrizPhotoState(cachedMatriz);
        }
      }

      // 2. Filial check if not in localStorage
      if (!filialPhoto) {
        const cachedFilial = await loadPhoto('filial');
        if (isMounted && cachedFilial && !cachedFilial.startsWith('blob:')) {
          setFilialPhotoState(cachedFilial);
        }
      }
    };

    init();

    return () => {
      isMounted = false;
    };
  }, [matrizPhoto, filialPhoto]);

  const resetMatrizPhoto = async () => {
    await removePhoto('matriz');
    setMatrizPhotoState(null);
    showToast('Foto da Matriz redefinida.');
  };

  const resetFilialPhoto = async () => {
    await removePhoto('filial');
    setFilialPhotoState(null);
    showToast('Foto da Filial redefinida.');
  };

  // Global paste handler (Ctrl+V anywhere in app)
  useEffect(() => {
    const handlePaste = async (e: ClipboardEvent) => {
      if (matrizPhoto && filialPhoto) return;
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith('image/')) {
          const file = items[i].getAsFile();
          if (file) {
            if (!matrizPhoto) {
              await setMatrizPhotoFromFile(file);
            } else if (!filialPhoto) {
              await setFilialPhotoFromFile(file);
            }
            break;
          }
        }
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, [matrizPhoto, filialPhoto]);

  const setMatrizPhotoFromFile = async (file: File, force = false): Promise<boolean> => {
    if (matrizPhoto && !force) {
      showToast('A foto da fachada já foi definida.');
      return false;
    }

    setIsProcessing(true);
    try {
      const compressed = await compressImage(file);
      setMatrizPhotoState(compressed);
      await savePhoto('matriz', compressed);
      showToast('✓ Foto da Matriz (Andrade Neves) salva com sucesso!');
      return true;
    } catch (err) {
      console.warn('Compressão falhou, usando FileReader:', err);
      try {
        const rawData = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
        setMatrizPhotoState(rawData);
        await savePhoto('matriz', rawData);
        showToast('✓ Foto da Matriz salva com sucesso!');
        return true;
      } catch {
        showToast('Erro ao carregar a imagem. Tente novamente.');
        return false;
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const setFilialPhotoFromFile = async (file: File, force = false): Promise<boolean> => {
    if (filialPhoto && !force) {
      showToast('A foto da Filial já foi definida.');
      return false;
    }

    setIsProcessing(true);
    try {
      const compressed = await compressImage(file);
      setFilialPhotoState(compressed);
      await savePhoto('filial', compressed);
      showToast('✓ Foto da Filial Zona Norte salva com sucesso!');
      return true;
    } catch (err) {
      console.warn('Compressão falhou, usando FileReader:', err);
      try {
        const rawData = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
        setFilialPhotoState(rawData);
        await savePhoto('filial', rawData);
        showToast('✓ Foto da Filial salva com sucesso!');
        return true;
      } catch {
        showToast('Erro ao carregar a imagem. Tente novamente.');
        return false;
      }
    } finally {
      setIsProcessing(false);
    }
  };

  const isMatrizLocked = Boolean(matrizPhoto);
  const isFilialLocked = Boolean(filialPhoto);

  return (
    <CustomPhotosContext.Provider
      value={{
        matrizPhoto,
        filialPhoto,
        isMatrizLocked,
        isFilialLocked,
        setMatrizPhotoFromFile,
        setFilialPhotoFromFile,
        resetMatrizPhoto,
        resetFilialPhoto,
        isProcessing,
        toastMessage,
      }}
    >
      {children}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#123B8E] text-white px-5 py-3.5 rounded-xl shadow-2xl flex items-center gap-3 border border-white/20 animate-fade-in text-sm font-semibold max-w-md">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping flex-shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </CustomPhotosContext.Provider>
  );
};

export const useCustomPhotos = () => useContext(CustomPhotosContext);
