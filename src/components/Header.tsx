export default function Header() {
  return (
    <header className="flex items-center justify-between bg-slate-900 px-6 py-4 text-white shadow-md">
      {/* Lado Esquerdo: Logo / Título */}
      <div>
        <h1 className="text-xl font-bold tracking-wide">Portal de Cadastro de Eventos Culturais</h1>
      </div>

      {/* Lado Direito: Ações */}
      <nav>
        <button 
          className="rounded bg-blue-600 px-4 py-2 text-sm font-semibold transition hover:bg-blue-500"
        >
          Login (Simulado)
        </button>
      </nav>
    </header>
  );
}