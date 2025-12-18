"use client";

import { deleteEvent } from "@/services/events";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function DeleteButton({ eventId }: { eventId: number }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Função que executa a exclusão de verdade
  async function performDelete() {
    setLoading(true);
    const deletePromise = deleteEvent(eventId);

    await toast.promise(deletePromise, {
      loading: 'Excluindo evento...',
      success: 'Evento removido com sucesso! 🗑️',
      error: 'Erro ao excluir evento.',
    })
    .then(() => {
      router.refresh();
      router.push("/");
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  // Função que chama o Toast de Confirmação
  function handleDeleteClick() {
    toast((t) => (
      // 👇 Adicionei 'bg-white' aqui para garantir, embora o style abaixo já resolva
      <div className="flex flex-col gap-3 min-w-[200px] bg-white">
        <span className="font-semibold text-slate-900 text-center text-base">
          Tem certeza que deseja excluir?
        </span>
        <div className="flex justify-center gap-2">
          {/* Botão Cancelar */}
          <button
            onClick={() => toast.dismiss(t.id)}
            className="rounded bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200 transition border border-slate-200"
          >
            Cancelar
          </button>

          {/* Botão Confirmar */}
          <button
            onClick={() => {
              toast.dismiss(t.id);
              performDelete();
            }}
            className="rounded bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700 transition shadow-sm"
          >
            Sim, excluir
          </button>
        </div>
      </div>
    ), {
      duration: 5000, // tempo de duração
      position: "top-center",
      
      // Específico para essa notificação
      style: {
        background: '#FFFFFF', 
        color: '#0F172A', 
        border: '1px solid #E2E8F0',
        padding: '24px',       
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', 
        borderRadius: '12px',  // Cantos mais arredondados
      },
    });
  }

  return (
    <button
      onClick={handleDeleteClick}
      disabled={loading}
      className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:bg-red-300 flex items-center gap-2 shadow-sm"
    >
      {loading ? "..." : "Excluir"}
    </button>
  );
}