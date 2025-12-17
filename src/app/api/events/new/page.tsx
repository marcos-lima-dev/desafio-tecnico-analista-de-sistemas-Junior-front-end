"use client"; 

import { useState } from "react";
import { useRouter } from "next/navigation";
// 👇 IMPORTANTE: Importando a função que fala com a API real
import { createEvent } from "@/services/events"; 

export default function NewEvent() {
  const router = useRouter(); 
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    
    // 👇 Preparando os dados (com tipagem 'as string' para o TypeScript não reclamar)
    const newEventData = {
      title: formData.get("title") as string,
      location: formData.get("location") as string,
      date: formData.get("date") as string,
      category: formData.get("category") as string,
    };

    try {
      // 👇 AQUI MUDOU: Chamada Real à API (nada de setTimeout mais!)
      await createEvent(newEventData);
      
      alert("Evento cadastrado com sucesso!");
      
      // Força o Next.js a limpar o cache da página inicial para exibir o novo evento
      router.refresh(); 
      
      router.push("/");
      
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar evento. Verifique o console.");
    } finally {
      setLoading(false);
    }
  }

  // O restante do HTML (return) continua IDÊNTICO ao que você já tem
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
            required 
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
            disabled={loading} 
            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:bg-blue-300"
          >
            {loading ? "Salvando..." : "Cadastrar Evento"}
          </button>
        </div>
      </form>
    </div>
  );
}