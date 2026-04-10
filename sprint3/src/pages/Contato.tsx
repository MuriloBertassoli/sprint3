import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
 
type FormData = {
  nome: string;
  email: string;
  mensagem: string;
};
 
export function Contato() {
  const navigate = useNavigate();
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();
 
  const onSubmit = (data: FormData) => {
    console.log("Dados enviados:", data);
    alert(`Obrigado pelo contato, ${data.nome}! Sua mensagem foi enviada com sucesso.`);
    reset();
    navigate('/');
  };
 
  return (
    <div className="py-10">
      <h2 className="text-[#0057B8] text-3xl md:text-4xl font-bold mb-10 text-center border-b-2 border-[#FFD700] inline-block pb-2">
        Entre em Contato
      </h2>
 
      <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
       
        <section className="flex-1 bg-[#F9F9F9] p-8 rounded-lg shadow-sm h-fit">
          <h3 className="text-[#0057B8] text-2xl font-bold mb-6">Nossas Informações</h3>
          <div className="space-y-4 text-gray-700 text-lg">
            <p><strong className="text-[#333333]">CNPJ:</strong> 05.108.918/0001-72</p>
            <p><strong className="text-[#333333]">Email:</strong> relacionamento@amigosdobem.org</p>
            <p><strong className="text-[#333333]">Telefone:</strong> (11) 3019-0100</p>
            <p><strong className="text-[#333333]">Endereço:</strong> Rua Dr. Gabriel de Resende, 122. São Paulo/SP</p>
          </div>
        </section>
 
        <section className="flex-1 bg-[#F9F9F9] p-8 rounded-lg shadow-sm">
          <h3 className="text-[#0057B8] text-2xl font-bold mb-6">Envie uma Mensagem</h3>
         
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
           
            <div>
              <label htmlFor="nome" className="block font-bold mb-2">Nome:</label>
              <input
                type="text"
                id="nome"
                className={`w-full p-3 border rounded-md outline-none transition-colors ${errors.nome ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#0057B8]'}`}
                {...register("nome", { required: "Por favor, preencha seu nome." })}
              />
              {errors.nome && <span className="text-red-500 text-sm mt-1 block">{errors.nome.message}</span>}
            </div>
 
            <div>
              <label htmlFor="email" className="block font-bold mb-2">E-mail:</label>
              <input
                type="email"
                id="email"
                className={`w-full p-3 border rounded-md outline-none transition-colors ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#0057B8]'}`}
                {...register("email", {
                  required: "Por favor, preencha seu e-mail.",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Por favor, insira um e-mail válido."
                  }
                })}
              />
              {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email.message}</span>}
            </div>
 
            <div>
              <label htmlFor="mensagem" className="block font-bold mb-2">Mensagem:</label>
              <textarea
                id="mensagem"
                rows={5}
                className={`w-full p-3 border rounded-md outline-none transition-colors resize-none ${errors.mensagem ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-[#0057B8]'}`}
                {...register("mensagem", { required: "Por favor, escreva uma mensagem." })}
              ></textarea>
              {errors.mensagem && <span className="text-red-500 text-sm mt-1 block">{errors.mensagem.message}</span>}
            </div>
 
            <button
              type="submit"
              className="w-full md:w-auto bg-[#0057B8] hover:bg-[#00418C] text-white font-bold py-3 px-8 rounded-md transition-colors duration-300"
            >
              Enviar
            </button>
           
          </form>
        </section>
 
      </div>
    </div>
  );
}