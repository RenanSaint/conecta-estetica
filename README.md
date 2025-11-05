# 💈 Conecta Estética

**Conecta Estética** é um protótipo de aplicação web desenvolvida em **Angular 20**, com o objetivo de oferecer uma plataforma de **agendamento inteligente para profissionais autônomos da área de estética** — como barbeiros, cabeleireiros e maquiadores — e seus clientes.  

O projeto nasce no contexto do **Programa de Extensão UFMS Digital**, com foco em **inclusão digital e desenvolvimento comunitário**. Embora ainda esteja em versão inicial, o protótipo já implementa toda a estrutura de componentes, layout e navegação, servindo como base para futuras funcionalidades.

---

## 🚀 Status do Projeto

🧩 **Fase:** Protótipo funcional (sem integração com backend)  
🔧 **Versão atual:** 0.3.0  
📅 **Atualizado em:** Novembro/2025  

---

## 🧠 Objetivo do Projeto

Desenvolver uma aplicação web que:
- Facilite o agendamento de serviços estéticos entre profissionais e clientes;
- Organize horários e atendimentos de forma centralizada;
- Promova a inclusão digital de trabalhadores autônomos de comunidades locais;
- Sirva como base escalável para integração futura com banco de dados e autenticação Firebase.

---

## 🖥️ Tecnologias Utilizadas

| Categoria | Tecnologia |
|------------|-------------|
| **Framework principal** | [Angular 20](https://angular.dev) |
| **Linguagem** | TypeScript (strict mode) |
| **Biblioteca de UI** | Angular Material |
| **Gerenciamento de estado** | Angular Signals |
| **Estilização** | CSS3 com variáveis e grid |
| **Imagens** | `NgOptimizedImage` |
| **Hospedagem (futura)** | Firebase Hosting (planejado) |

---

## 📂 Estrutura do Projeto

```
📦app
 ┣ 📂core
 ┃ ┣ 📂models
 ┃ ┗ 📂services
 ┣ 📂features
 ┃ ┣ 📂appointments
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┗ 📂register
 ┃ ┣ 📂home
 ┃ ┣ 📂professionals
 ┃ ┃ ┣ 📂professional-detail
 ┃ ┃ ┗ 📂professionals-list
 ┃ ┗ 📂resources
 ┃ ┃ ┣ 📂resource-detail
 ┃ ┃ ┗ 📂resources-list
 ┗ 📂shared
   ┗ 📂components
     ┗ 📂header
```

**Principais componentes:**
- `home` → Página inicial e navegação geral  
- `login` → Tela de autenticação (simulada)  
- `cadastro` → Registro de profissionais e clientes  
- `perfil` → Exibição de dados do usuário  

---

## 🧩 Funcionalidades Implementadas

✅ Interface responsiva com **Angular Material**  
✅ Navegação por rotas e lazy loading  
✅ Estrutura de componentes standalone  
✅ Sistema de estados locais com Signals  
✅ Layout preparado para futura integração com backend  

---

## 🔜 Funcionalidades Futuras

🔹 Integração com **Firebase Authentication** e **Firestore**  
🔹 Notificações em tempo real (push)  
🔹 Sistema de avaliações e feedback  
🔹 Suporte a múltiplos perfis de usuário  
🔹 Modo offline (PWA)

---

## 🛠️ Como Executar o Projeto

### **1. Clonar o repositório**
```bash
git clone https://github.com/renanfsantana/conecta-estetica.git
cd conecta-estetica
```

### **2. Instalar as dependências**
```bash
npm install
```

### **3. Executar o servidor de desenvolvimento**
```bash
ng serve
```

Acesse em: [http://localhost:4200](http://localhost:4200)

---

## 📘 Boas Práticas Seguidas

- Componentes **pequenos e de responsabilidade única**  
- Uso de **signals** e `computed()` para estados derivados  
- **ChangeDetectionStrategy.OnPush** em todos os componentes  
- Templates simples com controle de fluxo nativo (`@if`, `@for`)  
- Layout **totalmente responsivo** e **acessível**

---

## 📚 Referências Técnicas

- [Angular Documentation – angular.dev](https://angular.dev)  
- [W3Schools – Angular Tutorial](https://www.w3schools.com/angular/)  
- [MDN Web Docs – Front-end frameworks overview](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Frameworks_libraries)  
- [IPEA – Inovação Social e Inclusão Digital](https://repositorio.ipea.gov.br/items/4023d8c9-21ea-4d06-a35d-b9fc96e57ab8)

---

## 👨‍💻 Autor

**Renan Fonseca Santana**  
Desenvolvedor e estudante de Tecnologia da Informação — UFMS Digital  
📍 Salvador, BA  
📧 [renan.santana@ufms.br](mailto:renan.santana@ufms.br)

---

## 📄 Licença

Este projeto está sob a licença **MIT** — sinta-se livre para usar, modificar e compartilhar.
