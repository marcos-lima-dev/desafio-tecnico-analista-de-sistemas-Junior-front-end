"use client"; // ⚠️ Obrigatório: Contexto precisa rodar no navegador

import { createContext, useContext, useState, ReactNode } from "react";

// Definindo o formato do Usuário
interface User {
  name: string;
  email: string;
}

// Definindo o que o nosso Contexto vai expor para os componentes
interface AuthContextType {
  user: User | null; // Se null, não tá logado
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = () => {
    // Simulando um SSO: setamos o usuário direto "na mão"
    setUser({
      name: "Dev Senior",
      email: "dev@eventmanager.com",
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para facilitar o uso (Dica de Pro)
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}