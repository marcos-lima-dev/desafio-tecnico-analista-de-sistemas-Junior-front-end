"use client";

import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

export default function Header() {
  const { user, logout } = useAuth(); 

  return (
    <header className="flex h-20 items-center justify-between bg-slate-900 px-8 text-white shadow-md">
      {/* Logo / Título */}
      <Link href="/" className="text-xl font-bold tracking-tight hover:text-slate-300 transition">
        Gerenciador de Eventos
      </Link>

      {/* Área do Usuário */}
      <div>
        {user ? (
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium text-white">{user.name}</p>
              <p className="text-xs text-slate-400">{user.email}</p>
            </div>
            
            <Link 
              href="/events/new"
              className="hidden rounded bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700 sm:inline-block"
            >
              + Criar Evento
            </Link>

            <button
              onClick={logout}
              className="rounded border border-slate-600 px-4 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition"
            >
              Sair
            </button>
          </div>
        ) : (
          <Link
            href="/login"
            // CORREÇÃO AQUI: px-4 (menor no mobile), md:px-6 (maior no desktop) e whitespace-nowrap (não quebra linha)
            className="rounded bg-blue-600 px-4 md:px-6 py-2 text-sm font-bold text-white transition hover:bg-blue-700 shadow-lg hover:shadow-blue-500/25 whitespace-nowrap"
          >
            Fazer Login
          </Link>
        )}
      </div>
    </header>
  );
}