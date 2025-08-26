import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar.jsx';
import { Home } from './pages/Home';
import { AboutMe } from './components/AboutMe.jsx';
import { Projects } from './components/Projects.jsx';
import { ContactMe } from './components/ContactMe.jsx';
import { NotFound } from './pages/NotFound';
// import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      {/* <Toaster /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Navbar />} />
          <Route path="/home" index element={<Home />} />
          <Route path="/aboutme" index element={<AboutMe />} />
          <Route path="/projects" index element={<Projects />} />
          <Route path="/contactme" index element={<ContactMe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
