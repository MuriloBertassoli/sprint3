  
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Integrantes } from './pages/Integrantes';

export function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen font-sans text-[#333333] bg-white">
      
        <Header />
        
        <main className="flex-grow w-full max-w-[1300px] mx-auto px-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/integrantes" element={<Integrantes />} />
          
          </Routes>
        </main>

        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;