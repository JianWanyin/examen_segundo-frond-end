import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Head from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Sevices";
import Cta from "./components/Cta";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Blog from "./components/Blog"; // Importa el componente Blog

function App() {
  return (
    <Router>
      <Head/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cta" element={<Cta />} />
        <Route path="/contacto" element={<Contacto />} />
        
        <Route path="/blog" element={<Blog />} /> {/* Agrega la ruta para el Blog */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
