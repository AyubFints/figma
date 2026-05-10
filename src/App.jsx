import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About';
import Kurslar from './pages/Kurslar';
import Event from './pages/Event';
import Blog from './pages/Blog';
import Design from "./pages/Desigin";
import Lekture from './pages/Lekture';
import Article from './pages/Article';
import Contacts from './pages/Contacts';
import Sigin from './pages/Sigin';
import Create from './pages/Create';

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/create" element={<Create/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/kurslar" element={<Kurslar />} />
        <Route path="/design" element={<Design />} />
        <Route path="/event" element={<Event />} />
        <Route path="/lekture" element={<Lekture/>}/>
        <Route path="/blog" element={<Blog />} />
        <Route path="article" element={<Article/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/sigin" element={<Sigin/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;