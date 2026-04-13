# 🦷 Turma do Bem - Plataforma de Gestão (Sprint 03)

Bem-vindo ao repositório oficial da nova plataforma digital da ONG **Turma do Bem**. Este projeto faz parte da Sprint 03 do curso de Análise e Desenvolvimento de Sistemas (Turma 1TDSPA) e tem como objetivo modernizar e otimizar a gestão de contatos e atendimentos da instituição.

---

## 🎯 O Projeto
A motivação principal para a evolução desta plataforma foi a dificuldade que a ONG enfrentava para lidar com informações espalhadas. A solução foi criar uma **SPA (Single Page Application)** moderna, rápida e responsiva, garantindo que o atendimento a quem mais precisa seja eficiente.

## 🚀 Funcionalidades e Requisitos Atendidos
Nesta terceira Sprint, o projeto evoluiu de HTML/CSS/JS puro para um ecossistema React completo:

- **Navegação SPA:** Implementada com `react-router-dom`, permitindo transição de páginas (Home, Sobre, Integrantes, FAQ e Contato) sem recarregar o navegador.
- **Componentização:** Estrutura modular dividida em `pages` e `components` (Header, Footer).
- **Estilização com TailwindCSS:** Todo o layout, responsividade e paleta de cores institucional foram construídos utilizando classes utilitárias do Tailwind, sem dependência de bibliotecas externas de UI.
- **Interatividade (Hooks):** A página de FAQ utiliza o hook `useState` do React para criar componentes de acordeão (expandir/recolher respostas) de forma dinâmica.
- **Formulários Dinâmicos:** A página de Contato utiliza a biblioteca `react-hook-form` para captura de dados e validação, combinada com o hook `useNavigate` para redirecionamento após o envio bem-sucedido.

## 🛠️ Tecnologias Utilizadas
* **React.js** (com Vite)
* **TypeScript** (para tipagem estática e segurança)
* **TailwindCSS** (Estilização)
* **React Router DOM** (Roteamento)
* **React Hook Form** (Gestão de formulários)

---

## ⚙️ Como executar o projeto localmente

Siga os passos abaixo para rodar a aplicação na sua máquina:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/MuriloBertassoli/sprint3.git