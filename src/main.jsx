import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './AppRouter';
import { ParallaxProvider } from 'react-scroll-parallax';
import UIStateProvider from './providers/UIStateProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <UIStateProvider>
        <AppRouter />
      </UIStateProvider>
    </ParallaxProvider>
  </React.StrictMode>,
)
