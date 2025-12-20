-- 📂 Arquivo de Referência: Estrutura do Banco de Dados
-- Este script reflete a estrutura de dados utilizada no mock (src/data/events.ts)
-- e prepara o terreno para uma futura migração para banco relacional.

CREATE DATABASE IF NOT EXISTS event_manager;

USE event_manager;

-- Criação da Tabela de Eventos
CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- Identificador único
    title VARCHAR(255) NOT NULL,        -- No código Typescript é 'title', não 'name'
    location VARCHAR(255) NOT NULL,     -- Localização
    date DATE NOT NULL,                 -- Data do evento (YYYY-MM-DD)
    category VARCHAR(100) NOT NULL,     -- Categoria (Educação, Networking, etc)
    description TEXT,                   -- Opcional (usado no formulário de criação, mas null nos dados iniciais)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed de Dados (Espelho exato do arquivo src/data/events.ts)
INSERT INTO events (id, title, location, date, category) VALUES 
(1, 'Workshop Next.js 15', 'Rio de Janeiro, RJ', '2025-12-05', 'Educação'),
(2, 'Meetup React Brasil', 'Rio de Janeiro, RJ', '2025-12-12', 'Networking'),
(3, 'Hackathon Open Source', 'Rio de Janeiro, RJ', '2025-12-19', 'Competição'),
(4, 'Imersão Front-end Moderno', 'Rio de Janeiro, RJ', '2025-12-02', 'Educação'),
(5, 'Encontro Devs do Rio', 'Rio de Janeiro, RJ', '2025-12-03', 'Networking'),
(6, 'Bootcamp React & Tailwind', 'Rio de Janeiro, RJ', '2025-12-04', 'Educação'),
(7, 'Tech Talk: IA no Front-end', 'Rio de Janeiro, RJ', '2025-12-06', 'Palestra'),
(8, 'Comunidade Angular RJ', 'Rio de Janeiro, RJ', '2025-12-07', 'Networking'),
(9, 'Maratona de UX & UI Design', 'Rio de Janeiro, RJ', '2025-12-08', 'Design'),
(10, 'Workshop APIs e Integrações', 'Rio de Janeiro, RJ', '2025-12-09', 'Educação'),
(11, 'Dev Experience Summit', 'Rio de Janeiro, RJ', '2025-12-10', 'Conferência'),
(12, 'Noite do Código Aberto', 'Rio de Janeiro, RJ', '2025-12-11', 'Comunidade'),
(13, 'Workshop Testes em React', 'Rio de Janeiro, RJ', '2025-12-13', 'Educação'),
(14, 'Frontend Career Day', 'Rio de Janeiro, RJ', '2025-12-14', 'Carreira'),
(15, 'Coding Dojo JavaScript', 'Rio de Janeiro, RJ', '2025-12-15', 'Prática'),
(16, 'Startup & Dev Meetup', 'Rio de Janeiro, RJ', '2025-12-16', 'Networking'),
(17, 'Competição Clean Code', 'Rio de Janeiro, RJ', '2025-12-18', 'Competição'),
(18, 'Encerramento Tech do Ano', 'Rio de Janeiro, RJ', '2025-12-20', 'Conferência');

-- Observação: A coluna 'description' fica NULL nesses registros iniciais, 
-- pois o mock original não possui esse dado, mas novos cadastros via sistema poderão preenchê-la.