import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterBlog from './RouterBlog';
// springboot_react_blog_9

// BrowserRouter
// BrowserRouter  ==> http://localhost:3000/
// HashRouter     ==> http://localhost:3000/#/
import { BrowserRouter } from 'react-router-dom';

// Dil Seçeneği için ekledim
import './internationalization/i18nlanguage'

// ROOT
const root = ReactDOM.createRoot(document.getElementById('root'));

// RENDER
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouterBlog />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
