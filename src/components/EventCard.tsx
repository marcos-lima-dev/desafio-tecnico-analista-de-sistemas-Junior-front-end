import Link from "next/link";
import { Event } from "@/types";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="flex flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      {/* Cabeçalho do Card */}
      <div className="mb-4">
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
          {event.category}
        </span>
      </div>

      {/* Conteúdo */}
      <h3 className="mb-2 text-xl font-bold text-slate-900">
        {event.title}
      </h3>
      <p className="text-sm text-slate-500">{event.location}</p>
      <p className="text-sm text-slate-500">📅 {event.date}</p>

      {/* Botão de Ação */}
      <div className="mt-auto pt-4">
        <Link 
          href={`/events/${event.id}`} 
          className="block w-full rounded bg-slate-900 py-2 text-center text-sm font-medium text-white transition hover:bg-slate-800"
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  );
}