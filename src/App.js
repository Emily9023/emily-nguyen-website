import './App.css';
import { Navbar } from './components/Navbar/Navbar';

import { pages } from './util/pages';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About.jsx';
import { Experience } from './pages/Experience/Experience.jsx';

const App = () => {

  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={pages.page404.component} />
        </Routes>
      </BrowserRouter>
  );
};

const documentHeight = () => {
  const doc = document.documentElement
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
 }
 window.addEventListener('resize', documentHeight)
 documentHeight()

export default App;
