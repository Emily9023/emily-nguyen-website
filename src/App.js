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
    default:
      component = pages.page404.component
      break;
  }
  return (
    <>
      {console.log(component)}
      <Navbar/>
      <div style={{ float: 'left' }}>
        {component}
      </div>
    </>
  );
}

export default App;
