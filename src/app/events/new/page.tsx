"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createEvent } from "@/services/events";
import toast from "react-hot-toast";

export default function NewEvent() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    category: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    if (!formData.title || !formData.date || !formData.category) {
      toast.error("Preencha os campos obrigatórios!");
      setLoading(false);
      return;
    }

    const savePromise = createEvent(formData);

    await toast.promise(savePromise, {
      loading: 'Salvando evento no sistema...',
      success: 'Evento criado com sucesso! 🎉',
      error: 'Erro ao criar evento.',
    })
    .then(() => {
      router.refresh();
      router.push("/");
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="mb-8 text-3xl font-bold text-slate-800">Criar Novo Evento</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 rounded-xl bg-white p-8 shadow-sm border border-slate-200">
        
        {/* Título */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Título do Evento *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Ex: Workshop de Next.js"
            className="w-full rounded border border-slate-300 px-4 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Data */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Data *
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full rounded border border-slate-300 px-4 py-2 text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Categoria */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Categoria *
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded border border-slate-300 px-4 py-2 text-slate-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="">Selecione...</option>
              <option value="Tecnologia">Tecnologia</option>
              <option value="Educação">Educação</option>
              <option value="Cultura">Cultura</option>
              <option value="Lazer">Lazer</option>
            </select>
          </div>
        </div>

        {/* Local */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Localização
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Ex: Auditório Iplan"
            className="w-full rounded border border-slate-300 px-4 py-2 text-slate-900 placeholder-slate-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Botões */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="rounded px-6 py-2 text-slate-600 hover:bg-slate-100 transition"
          >
            Cancelar
          </button>
          
          <button
            type="submit"
            disabled={loading}
            className="rounded bg-blue-600 px-6 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:bg-blue-300 flex items-center gap-2"
          >
            {loading ? "Salvando..." : "Criar Evento"}
          </button>
        </div>
      </form>
    </div>
  );
}