import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Landing from './views/Landing';
import About from './views/About';
import Music from './views/Music';
import Video from './views/Video';
import Social from './views/Social';
import Contact from './views/Contact';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="About" element={<About/>}/>
        <Route path="Music" element={<Music/>}/>
        <Route path="Video" element={<Video/>}/>
        <Route path="Social" element={<Social/>}/>
        <Route path="Contact" element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
