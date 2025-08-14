import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from './components/Footer';
import Properties from './pages/Properties';
import About from './pages/About';
import Contact from './pages/Contact';
import Favorites from './pages/Favorites';
import PropertyDetail from './pages/PropertyDetail';


function App() {

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/imoveis" element={<Properties />} />
            <Route path="/imovel/:id" element={<PropertyDetail />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/favoritos" element={<Favorites />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
