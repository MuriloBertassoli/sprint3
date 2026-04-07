
import imgMurilo from '../assets/Murilo Bertassoli Massini.jpg';
import imgGiovanni from '../assets/Giovanni Barbosa Sacristan.jpg';
import imgGabriel from '../assets/Gabriel Deotti Zanatta.jpg';

export function Integrantes() {
  return (
    <div className="py-10 text-center">
      <h2 className="text-[#0057B8] text-3xl md:text-4xl font-bold mb-10 border-b-2 border-[#FFD700] inline-block pb-2">
        Nossa Equipe
      </h2>
      
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-stretch gap-8">
        
        <div className="bg-[#F9F9F9] border border-gray-200 rounded-xl p-6 w-full max-w-[300px] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
          <img src={imgMurilo} alt="Foto do Murilo" className="w-[150px] h-[150px] rounded-full object-cover border-4 border-[#FFD700] mx-auto mb-4" />
          <h3 className="text-[#0057B8] text-xl font-bold mb-2">Murilo Bertassoli Massini</h3>
          <p className="text-gray-700 mb-1"><strong>RM:</strong> 57383</p>
          <p className="text-gray-700 mb-4"><strong>Turma:</strong> 1TDSPA</p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/MuriloBertassoli" target="_blank" rel="noopener noreferrer" className="text-[#0057B8] font-bold hover:underline">GitHub</a>
            <span className="text-gray-400">|</span>
            <a href="https://www.linkedin.com/in/murilomassini" target="_blank" rel="noopener noreferrer" className="text-[#0057B8] font-bold hover:underline">LinkedIn</a>
          </div>
        </div>

        <div className="bg-[#F9F9F9] border border-gray-200 rounded-xl p-6 w-full max-w-[300px] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
          <img src={imgGiovanni} alt="Foto do Giovanni" className="w-[150px] h-[150px] rounded-full object-cover border-4 border-[#FFD700] mx-auto mb-4" />
          <h3 className="text-[#0057B8] text-xl font-bold mb-2">Giovanni Barbosa Sacristan</h3>
          <p className="text-gray-700 mb-1"><strong>RM:</strong> 567548</p>
          <p className="text-gray-700 mb-4"><strong>Turma:</strong> 1TDSPA</p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/gi13090" target="_blank" rel="noopener noreferrer" className="text-[#0057B8] font-bold hover:underline">GitHub</a>
            <span className="text-gray-400">|</span>
            <a href="https://www.linkedin.com/in/giovanni-sacristan-884383388" target="_blank" rel="noopener noreferrer" className="text-[#0057B8] font-bold hover:underline">LinkedIn</a>
          </div>
        </div>

        <div className="bg-[#F9F9F9] border border-gray-200 rounded-xl p-6 w-full max-w-[300px] shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
          <img src={imgGabriel} alt="Foto do Gabriel" className="w-[150px] h-[150px] rounded-full object-cover border-4 border-[#FFD700] mx-auto mb-4" />
          <h3 className="text-[#0057B8] text-xl font-bold mb-2">Gabriel Deotti Zanatta</h3>
          <p className="text-gray-700 mb-1"><strong>RM:</strong> 567258</p>
          <p className="text-gray-700 mb-4"><strong>Turma:</strong> 1TDSPA</p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/GabrielDeottiZanatta" target="_blank" rel="noopener noreferrer" className="text-[#0057B8] font-bold hover:underline">GitHub</a>
            <span className="text-gray-400">|</span>
            <a href="https://www.linkedin.com/in/gabriel-deotti-zanatta-42750735b/" target="_blank" rel="noopener noreferrer" className="text-[#0057B8] font-bold hover:underline">LinkedIn</a>
          </div>
        </div>

      </div>
    </div>
  );
}