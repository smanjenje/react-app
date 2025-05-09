// index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MenuProvider } from './hooks/MenuProvider'; // Importe o MenuProvider
import App from './App.jsx';
import './index.css'; // Apenas uma vez
import "@fortawesome/fontawesome-free/css/all.min.css"; // Importa o FontAwesome para os ícones

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MenuProvider> {/* Envolva sua aplicação com o MenuProvider */}
        <App />
      </MenuProvider>
    </BrowserRouter>
  </React.StrictMode>
);
