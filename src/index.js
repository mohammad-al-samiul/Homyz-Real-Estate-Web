import '@smastrom/react-rating/style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-tabs/style/react-tabs.css';
import App from './App';
import AuthProvider from './Providers/AuthProvider';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Toaster position="top-center">
    <AuthProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </AuthProvider>
  </Toaster>
);
