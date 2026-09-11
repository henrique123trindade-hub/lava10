import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { CustomPhotosProvider } from './context/CustomPhotosContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomPhotosProvider>
      <App />
    </CustomPhotosProvider>
  </StrictMode>,
);
