export function Sobre() {
  return (
    <div className="py-10 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-[#0057B8] text-3xl md:text-4xl font-bold mb-4 border-b-2 border-[#FFD700] inline-block pb-2">
          Sobre o Projeto
        </h2>
      </div>

      <div className="space-y-8 text-lg text-gray-700">
        <section className="bg-[#F9F9F9] p-6 md:p-8 rounded-lg shadow-sm">
          <h3 className="text-[#0057B8] text-2xl font-bold mb-4">A Ideia</h3>
          <p className="mb-4">
            A motivação para criar esse projeto veio da dificuldade que a ONG enfrentava para lidar com tantos contatos e informações espalhadas. Percebemos que isso atrapalhava o atendimento e a comunicação com quem mais precisa.
          </p>
          <p>
            Por isso, decidimos desenvolver uma ferramenta que organizasse tudo em um só lugar, tornando o trabalho mais fácil, rápido e eficiente.
          </p>
        </section>

        <section className="bg-[#F9F9F9] p-6 md:p-8 rounded-lg shadow-sm">
          <h3 className="text-[#0057B8] text-2xl font-bold mb-4">Tecnologias Utilizadas</h3>
          <p className="mb-4">Para esta nova fase do projeto (Sprint 03), evoluímos nossa stack para:</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li><strong>React + Vite:</strong> Para componentização e alta performance (SPA).</li>
            <li><strong>TypeScript:</strong> Para garantir a tipagem e segurança do código.</li>
            <li><strong>TailwindCSS:</strong> Para uma estilização responsiva e ágil.</li>
            <li><strong>React Router DOM:</strong> Para navegação fluida sem recarregar a página.</li>
          </ul>
        </section>

        <section className="bg-[#F9F9F9] p-6 md:p-8 rounded-lg shadow-sm">
          <h3 className="text-[#0057B8] text-2xl font-bold mb-4">Roadmap do Projeto</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="text-[#0057B8] font-bold">✓ Sprint 1:</span> Criação da estrutura HTML e CSS para desktop.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0057B8] font-bold">✓ Sprint 2:</span> Implementação da responsividade e JavaScript básico.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#0057B8] font-bold">🚀 Sprint 3:</span> Migração para React, componentização e TailwindCSS.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}