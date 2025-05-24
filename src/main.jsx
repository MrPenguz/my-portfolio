import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="relative min-h-screen">
        <div className="fixed top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(0,0,0,1))]"></div>
        <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#4f4f4f2e_1px,rgba(0,0,0,1)_1px),linear-gradient(to_bottom,#8080800a_1px,rgba(0,0,0,1)_1px)] bg-[size:14px_24px]"></div>
        <App />
      </div>
    </BrowserRouter>
  </StrictMode>,
);
