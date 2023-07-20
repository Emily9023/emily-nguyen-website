import './App.css';
import { Navbar } from './components/Navbar/Navbar';

import { pages } from './util/pages';

function App() {
  let component 
  const path = window.location.pathname
  switch(path) {
    case "/":
      pages.navbar.forEach(page => {
        if (page.path == path) {
          component = page.component
        }
      });
      break;
    case "/about":
      pages.navbar.forEach(page => {
        if (page.path == path) {
          component = page.component
        }
      });
    break;
    case "/experience":
      pages.navbar.forEach(page => {
        if (page.path == path) {
          component = page.component
        }
      });
    break;
    case "/portfolio":
      pages.navbar.forEach(page => {
        if (page.path == path) {
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

const documentHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
 }
 window.addEventListener('resize', documentHeight)
 documentHeight()

export default App;
