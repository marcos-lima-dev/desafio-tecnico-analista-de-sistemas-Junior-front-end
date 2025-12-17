import { Event } from "@/types";

// Isso age como nosso banco de dados. 
// Como é uma variável exportada, ela mantém o valor na memória enquanto o servidor roda.
export const events: Event[] = [
  {
    id: 1,
    title: "Workshop Next.js 15",
    location: "Rio de Janeiro, RJ",
    date: "2025-12-05",
    category: "Educação",
  },
  {
    id: 2,
    title: "Meetup React Brasil",
    location: "Rio de Janeiro, RJ",
    date: "2025-12-12",
    category: "Networking",
  },
  {
    id: 3,
    title: "Hackathon Open Source",
    location: "Rio de Janeiro, RJ",
    date: "2025-12-19",
    category: "Competição",
  },
];