import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import NotFound from './components/NotFound.tsx';
import './index.css';

const path = window.location.pathname;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      {path === '/' ? <App /> : <NotFound />}
    </HelmetProvider>
  </StrictMode>,
);
