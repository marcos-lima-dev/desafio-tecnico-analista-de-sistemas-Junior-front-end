# 📅 Gerenciador de Eventos (Next.js 15+)

Sistema de gerenciamento de eventos desenvolvido como desafio técnico. O projeto permite visualizar, buscar, paginar e gerenciar eventos (CRUD), utilizando uma arquitetura moderna com **Next.js 15 (App Router)** e **Server Components**.

## 🚀 Tecnologias

- **Framework:** Next.js 15.0+ (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Estado Global:** React Context API (Auth Mock)
- **Feedback Visual:** React Hot Toast (Notificações)
- **API:** Next.js API Routes (Backend Mockado)

## ⚙️ Funcionalidades

- [x] **CRUD Completo:** Criação, Leitura e Exclusão de eventos.
- [x] **Paginação:** Navegação otimizada entre listas de eventos.
- [x] **Busca em Tempo Real:** Filtragem por título ou categoria.
- [x] **Detalhes Dinâmicos:** Rotas individuais (`/events/[id]`) com dados atualizados.
- [x] **Autenticação Simulada:**
  - Login com validação de credenciais.
  - Proteção de rotas privadas (Middleware/Context).
  - Feedback de carregamento e erro.
- [x] **UX Aprimorada:**
  - Confirmação interativa para exclusão.
  - Toasts de sucesso e erro.
  - Estados de loading em botões.
- [x] **Design Responsivo:** Layout fluido para Mobile e Desktop.

## 📸 Galeria do Projeto

### 🏠 Dashboard e Detalhes
| Tela Inicial (Listagem e Busca) | Detalhes do Evento |
| :---: | :---: |
| ![Home](./public/home-screen.png) | ![Detalhes](./public/details-screen.png) |

### 🔐 Área Administrativa
| Login & Validação | Cadastro de Eventos | Confirmação de Exclusão |
| :---: | :---: | :---: |
| ![Login](./public/login-screen.png) | ![Cadastro](./public/create-event-screen.png) | ![Delete](./public/delete-modal.png) |

> *O sistema conta com feedback visual (Toasts) para todas as ações do usuário.*

## 🔐 Credenciais de Acesso

Para testar as funcionalidades administrativas (Criar e Excluir eventos), utilize as credenciais abaixo na tela de login:

- **E-mail:** `teste@iplan.rio.rj.gov.br` (ou qualquer e-mail válido)
- **Senha:** `123456`

## 📦 Como rodar o projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/marcos-lima-dev/desafio-tecnico-analista-de-sistemas-Junior-front-end.git](https://github.com/marcos-lima-dev/desafio-tecnico-analista-de-sistemas-Junior-front-end.git)
   cd desafio-tecnico-analista-de-sistemas-Junior-front-end