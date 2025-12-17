import { NextResponse } from "next/server";
import { Event } from "@/types";
import { events } from "@/data/events";

export async function GET() {
  return NextResponse.json(events);
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.title || !body.date) {
    return NextResponse.json({ message: "Dados incompletos" }, { status: 400 });
  }

  const newEvent: Event = {
    id: Date.now(), // Gera um ID único baseado no tempo (melhor que length + 1)
    title: body.title,
    location: body.location,
    date: body.date,
    category: body.category,
  };

  events.push(newEvent); // Salva no array compartilhado

  return NextResponse.json(newEvent, { status: 201 });
}