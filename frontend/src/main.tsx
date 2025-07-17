import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import Modal from 'react-modal';
import { AuthProvider } from './contexts/AuthProvider';
import './index.css'
import App from './App';


Modal.setAppElement('#root');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
