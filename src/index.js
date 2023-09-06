import '@smastrom/react-rating/style.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
