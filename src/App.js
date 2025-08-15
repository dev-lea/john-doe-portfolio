import { Routes, Route, Navigate } from 'react-router-dom';
import SiteNavbar from './components/SiteNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <SiteNavbar />
      <main className="flex-fill">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          {/* Catch-all : redirige toute URL inconnue vers la Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}