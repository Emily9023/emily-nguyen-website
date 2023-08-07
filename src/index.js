import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';

import { pages } from './util/pages';


function App() {
  let component 
  const path = window.location.pathname
  switch(path) {
    case "/":
      pages.navbar.forEach(page => {
        if (page.path === path) {
          component = page.component
        }
      });
      break;
    case "/about":
      pages.navbar.forEach(page => {
        if (page.path === path) {
          component = page.component
        }
      });
    break;
    case "/experience":
      pages.navbar.forEach(page => {
        if (page.path === path) {
          component = page.component
        }
      });
    break;
    case "/portfolio":
      pages.navbar.forEach(page => {
        if (page.path === path) {
          component = page.component
        }
      });
    break;
    default:
      component = pages.page404.component
      break;
  }
  return (
    <>
      <Navbar/>
      <div className='App-container-main'>
        {component}
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
