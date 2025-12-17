import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import Header from "@/components/Header";
import { AuthProvider } from "@/contexts/AuthContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portal de Cadastro de Eventos Culturais",
  description: "Gerenciamento de eventos simplificado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen bg-slate-50 text-slate-900`}>
        {/* O Header fica fixo no topo da estrutura */}
        <AuthProvider>
            <Header />
            
            {/* O 'children' é onde o Next.js injeta o conteúdo de cada página (page.tsx) */}
            <main className="container mx-auto max-w-5xl p-6">
              {children}
            </main>
        </AuthProvider>    
      </body>
    </html>
  );
}