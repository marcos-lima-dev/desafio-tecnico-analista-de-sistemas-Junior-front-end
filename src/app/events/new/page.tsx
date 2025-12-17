"use client"; 
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewEvent() {
  const router = useRouter(); // Para redirecionar o usuário depois de salvar
  
  // Estado para guardar se está carregando (feedback visual é importante)
  const [loading, setLoading] = useState(false);

  // Função disparada quando o usuário clica em "Salvar"
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // 🛑 Evita que a página recarregue (padrão do HTML)
    setLoading(true);

    // 1. Captura os dados do formulário de um jeito inteligente (FormData)
    const formData = new FormData(event.currentTarget);
    
    // Transforma os dados em um objeto JSON simples
    const data = {
      title: formData.get("title"),
      location: formData.get("location"),
      date: formData.get("date"),
      category: formData.get("category"),
    };

    // 2. Validação simples (Console log por enquanto)
    console.log("Dados capturados:", data);

    // 3. Simula o envio para a API (Back-end)
    // Como ainda não temos o endpoint POST (Task BE-04), vamos só simular o delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    alert("Evento cadastrado com sucesso! (Simulação)");
    
    // 4. Manda o usuário de volta para a Home
    router.push("/");
    
    // Nota: O evento não vai aparecer na lista AINDA, pois nosso mock na Home é fixo.
    // Isso será resolvido quando conectarmos o Back-end real.
  }

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="mb-6 text-2xl font-bold text-slate-800">Cadastrar Novo Evento</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4 rounded-lg bg-white p-6 shadow-md border border-slate-200">
        
        {/* Campo: Título */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-slate-700">Título do Evento</label>
          <input 
            type="text" 
            name="title" 
            id="title" 
            required // Validação HTML5 nativa
            className="mt-1 w-full rounded-md border border-slate-300 p-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Ex: Workshop React"
          />
        </div>

        {/* Campo: Categoria */}
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-slate-700">Categoria</label>
          <select 
            name="category" 
            id="category"
            required
            className="mt-1 w-full rounded-md border border-slate-300 p-2 text-slate-900 focus:border-blue-500 focus:outline-none"
          >
            <option value="">Selecione...</option>
            <option value="Educação">Educação</option>
            <option value="Networking">Networking</option>
            <option value="Competição">Competição</option>
            <option value="Festa">Festa</option>
          </select>
        </div>

        {/* Grupo: Data e Local */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-slate-700">Data</label>
            <input 
              type="date" 
              name="date" 
              id="date" 
              required
              className="mt-1 w-full rounded-md border border-slate-300 p-2 text-slate-900 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-slate-700">Local</label>
            <input 
              type="text" 
              name="location" 
              id="location" 
              required
              placeholder="Ex: Online"
              className="mt-1 w-full rounded-md border border-slate-300 p-2 text-slate-900 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Botão Salvar */}
        <div className="pt-4">
          <button 
            type="submit" 
            disabled={loading} // Desabilita se estiver carregando
            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:bg-blue-300"
          >
            {loading ? "Salvando..." : "Cadastrar Evento"}
          </button>
        </div>
      </form>
    </div>
  );
}