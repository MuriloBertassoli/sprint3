import { useState } from 'react';

export function Faq() {
  const [perguntaAberta, setPerguntaAberta] = useState<number | null>(null);

  const togglePergunta = (index: number) => {
    setPerguntaAberta(perguntaAberta === index ? null : index);
  };

  const faqData = [
    {
      pergunta: "Qual o objetivo deste projeto?",
      resposta: "Nosso desafio é desenvolver uma ferramenta integrada de gestão de atendimentos capaz de organizar, direcionar e controlar de forma eficiente todos os contatos recebidos pelos diferentes públicos com os quais nos relacionamos."
    },
    {
      pergunta: "Como posso utilizar a plataforma?",
      resposta: "Você pode usar a plataforma de forma simples e rápida! Basta acessar com seu login para cadastrar ou atualizar seus dados, acompanhar atendimentos e receber informações sobre novos serviços. Nosso sistema foi feito para deixar tudo mais organizado e facilitar sua comunicação com a equipe da ONG."
    },
    {
      pergunta: "Quais tecnologias foram usadas?",
      resposta: "Para esta nova versão, a Sprint 03, o projeto foi totalmente reestruturado utilizando React, TypeScript, TailwindCSS para estilização e Vite como ferramenta de build."
    }
  ];

  return (
    <div className="py-10 max-w-3xl mx-auto">
      <h2 className="text-[#0057B8] text-3xl md:text-4xl font-bold mb-10 text-center border-b-2 border-[#FFD700] inline-block pb-2 w-full text-center">
        Perguntas Frequentes (FAQ)
      </h2>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <article 
            key={index} 
            className="bg-[#F9F9F9] border-l-[5px] border-[#0057B8] rounded-md shadow-sm overflow-hidden transition-all duration-300"
          >
            <button 
              onClick={() => togglePergunta(index)}
              className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
            >
              <h4 className="text-[#0057B8] font-bold text-lg">{item.pergunta}</h4>
              <span className={`text-[#0057B8] text-2xl font-bold transition-transform duration-300 ${perguntaAberta === index ? 'rotate-45' : ''}`}>
                +
              </span>
            </button>
            
            <div 
              className={`px-5 transition-all duration-500 ease-in-out ${perguntaAberta === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
              <p className="text-gray-700">{item.resposta}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}