"use client"; 

import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
export default function Header() {
  const { user, login, logout } = useAuth(); 

  return (
    <header className="flex items-center justify-between bg-slate-900 px-6 py-4 text-white shadow-md">
      {/* Título vira um Link para a Home */}
      <Link href="/" className="hover:opacity-80">
        <h1 className="text-xl font-bold tracking-wide">Event Manager</h1>
      </Link>

      <nav className="flex items-center gap-4">
        
        <Link 
          href="/events/new"
          className="text-sm font-medium text-slate-300 hover:text-white hover:underline transition"
        >
          + Criar Evento
        </Link>
        
        <div className="h-4 w-px bg-slate-700"></div> {/* Separador visual */}

        {user ? (
          <>
            <span className="hidden text-sm text-slate-300 sm:block">Olá, {user.name}</span>
            <button 
              onClick={logout}
              className="rounded border border-red-500 px-3 py-1 text-sm text-red-400 transition hover:bg-red-500/10"
            >
              Sair
            </button>
          </>
        ) : (
          <button 
            onClick={login}
            className="rounded bg-blue-600 px-4 py-2 text-sm font-semibold transition hover:bg-blue-500"
          >
            Login (Simulado)
          </button>
        )}
      </nav>
    </header>
  );
}