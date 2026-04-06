import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white py-5 border-b-[3px] border-[#FFD700] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        
        <Link to="/" className="text-[#0057B8] text-2xl font-bold no-underline hover:text-[#00418C] hover:underline">
          Projeto Turma do Bem
        </Link>

        <button 
          className="lg:hidden flex flex-col gap-[5px] p-2 z-[1002]"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          <span className={`block w-7 h-[3px] bg-[#0057B8] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
          <span className={`block w-7 h-[3px] bg-[#0057B8] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-7 h-[3px] bg-[#0057B8] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
        </button>

        <nav className={`
          fixed top-0 right-0 h-screen w-[70%] max-w-[300px] bg-white shadow-[-5px_0_15px_rgba(0,0,0,0.1)] transition-transform duration-400 z-[1001] pt-[100px]
          lg:static lg:h-auto lg:w-auto lg:max-w-none lg:bg-transparent lg:shadow-none lg:translate-x-0 lg:pt-0
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <ul className="flex flex-col lg:flex-row items-center gap-5 lg:gap-[25px] p-5 lg:p-0 list-none">
            <li>
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-[#0057B8] font-bold text-lg lg:text-[1.1em] px-2.5 py-1.5 rounded transition-colors duration-300 hover:bg-[#0057B8] hover:text-white">Início</Link>
            </li>
            <li>
              <Link to="/sobre" onClick={() => setIsMenuOpen(false)} className="text-[#0057B8] font-bold text-lg lg:text-[1.1em] px-2.5 py-1.5 rounded transition-colors duration-300 hover:bg-[#0057B8] hover:text-white">Sobre o Projeto</Link>
            </li>
            <li>
              <Link to="/integrantes" onClick={() => setIsMenuOpen(false)} className="text-[#0057B8] font-bold text-lg lg:text-[1.1em] px-2.5 py-1.5 rounded transition-colors duration-300 hover:bg-[#0057B8] hover:text-white">Integrantes</Link>
            </li>
            <li>
              <Link to="/faq" onClick={() => setIsMenuOpen(false)} className="text-[#0057B8] font-bold text-lg lg:text-[1.1em] px-2.5 py-1.5 rounded transition-colors duration-300 hover:bg-[#0057B8] hover:text-white">FAQ</Link>
            </li>
            <li>
              <Link to="/contato" onClick={() => setIsMenuOpen(false)} className="text-[#0057B8] font-bold text-lg lg:text-[1.1em] px-2.5 py-1.5 rounded transition-colors duration-300 hover:bg-[#0057B8] hover:text-white">Contato</Link>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}