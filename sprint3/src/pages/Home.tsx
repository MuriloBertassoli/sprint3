import bannerImg from '../assets/Banner amigos do bem front.png';

export function Home() {
  return (
    <div className="py-10">
      
      <section className="text-center mb-12">
        <h2 className="text-[#0057B8] text-3xl md:text-4xl font-bold mb-8 border-b-2 border-[#FFD700] inline-block pb-2">
          Bem-vindo ao nosso projeto!
        </h2>
        <p className="text-lg mb-5 max-w-3xl mx-auto">
          Este projeto desenvolve uma plataforma digital para a ONG Turma do Bem, solucionando a gestão de dados e ampliando seu alcance.
        </p>
        <img 
         src={bannerImg} 
          alt="Banner do Projeto" 
          className="max-w-full md:max-w-[750px] mx-auto rounded-lg shadow-md mt-5"
        />
      </section>

      <section className="mb-12 mt-16">
        <h3 className="text-[#0057B8] text-2xl font-bold mb-8 text-center">
          Principais Funcionalidades
        </h3>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 text-center">
          
          <div className="bg-[#F9F9F9] p-6 rounded-lg flex-1 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
            <h4 className="text-[#0057B8] font-bold mb-3 text-xl">Funcionalidade 1</h4>
            <p className="text-gray-700">Cada vez que chego a uma comunidade, sou recebido com sorrisos e percebo o quanto pequenas ações fazem diferença, é o que eu mais gosto. Sinto que faço parte de algo maior, que realmente transforma vidas.</p>
          </div>
          
          <div className="bg-[#F9F9F9] p-6 rounded-lg flex-1 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
            <h4 className="text-[#0057B8] font-bold mb-3 text-xl">Funcionalidade 2</h4>
            <p className="text-gray-700">Sistema para registrar e organizar dados de pacientes e voluntários, garantindo segurança e fácil acesso às informações.</p>
          </div>
          
          <div className="bg-[#F9F9F9] p-6 rounded-lg flex-1 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
            <h4 className="text-[#0057B8] font-bold mb-3 text-xl">Funcionalidade 3</h4>
            <p className="text-gray-700">Conheci a Amigos do Bem quando precisei de atendimento odontológico e não tinha condições de pagar por uma consulta. Fui acolhido com muito respeito e atenção pelo doutor e pela equipe, cuidaram de mim como família.</p>
          </div>
          
        </div>
      </section>

    </div>
  );
}