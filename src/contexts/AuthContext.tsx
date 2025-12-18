"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast"; 

interface AuthContextType {
  user: { name: string; email: string } | null;
  login: (email: string, pass: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function login(email: string, pass: string) {
    setIsLoading(true);

    // 1. Promessa da validação
    const loginPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (pass === "123456") {
          resolve("Bem-vindo, Chef! 👨‍🍳");
        } else {
          reject(new Error("Senha incorreta (Dica: 123456)"));
        }
      }, 1500);
    });

    // 2. O toast.promise gerencia o visual baseado na promessa acima
    await toast.promise(loginPromise, {
      loading: 'Verificando credenciais...',
      success: (msg: any) => `${msg}`,
      error: (err: any) => `${err.message}`,
    })
    .then(() => {
      // 3. Só entra aqui se DEU CERTO (resolve)
      setUser({ name: "Admin Iplan", email });
      router.push("/");
    })
    .catch((error) => {
      // 4. Só entra aqui se DEU ERRO (reject)
      console.error("Erro de login:", error);
      // Não precisamos fazer nada visual, o Toast vermelho já apareceu.
    })
    .finally(() => {
      setIsLoading(false);
    });
  }

  function logout() {
    setUser(null);
    router.push("/login");
    toast.success("Você saiu do sistema."); // Feedback visual ao sair
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);