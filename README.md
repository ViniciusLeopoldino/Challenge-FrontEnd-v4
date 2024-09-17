
# Projeto PortoAutoCheck

Este é o README do projeto PortoAutoCheck, um sistema de verificação automática de veículos no Porto.

## Descrição

O projeto Porto Auto Check é uma aplicação de autoatendimento para serviços automotivos, onde os usuários podem realizar autodiagnósticos e obter orçamentos de peças. A aplicação foi desenvolvida utilizando React, Vite e TypeScript. Seu objetivo é facilitar o processo de diagnóstico de veículos e estimativa de custos de manutenção, sem a necessidade de interações humanas diretas. A interface é responsiva e adaptada para diferentes dispositivos.

## Funcionalidades

- Autodiagnóstico: Permite ao usuário responder perguntas sobre o estado do seu veículo e obter um diagnóstico preliminar.
- Auto-Orçamento: O usuário pode fornecer informações sobre as peças necessárias e obter uma estimativa de custos com base nessas informações.
- Menu Responsivo: Inclui um menu lateral que se adapta a dispositivos móveis, exibindo um menu hambúrguer para navegação.
- Navegação: Usa o React Router para navegação entre páginas como login, perfil, e consulta de oficinas.
- Interface Responsiva: Todo o design é responsivo e otimizado para diferentes dispositivos e resoluções.

## Instalação

1. Clone o repositório do PortoAutoCheck.
2. Navegue até o diretório do projeto portoAutoCheck-v3.
3. Execute o comando `npm install vite@latest` para instalar as dependências.
4. Execute o comando `npm run dev` para iniciar a aplicação.

## Uso

### Navegação

- Ao abrir o sistema, a página principal exibe as opções de autodiagnóstico e auto-orçamento.
- Ao clicar em "Iniciar Autodiagnóstico", um chatbot será iniciado para guiar o usuário através de perguntas sobre o veículo.
- Ao clicar em "Iniciar Auto-Orçamento", outro chatbot será iniciado para calcular os custos de peças de acordo com as informações fornecidas pelo usuário.
- O menu lateral contém links para páginas como Perfil, Histórico de Manutenções, e outras funcionalidades.

### Componentes Personalizados

O projeto contém componentes reutilizáveis, como:

- Button: Um componente estilizado de botão.
- Header e Footer: Componentes que encapsulam o cabeçalho e rodapé da aplicação.
- Chatbot: Um componente dinâmico que simula uma interface de chatbot para interação com os usuários.

### Estilo

Todo o estilo do projeto foi feito utilizando CSS Modules, garantindo isolamento de estilos para evitar conflitos entre componentes.

## Tecnologias Utilizadas

- React: Biblioteca JavaScript para construção de interfaces de usuário.
- TypeScript: Superset do JavaScript que adiciona tipagem estática ao código.
- Vite: Ferramenta de build rápida e leve para projetos em React.
- CSS Modules: Estilização local para componentes React.
- React Router: Para gerenciar a navegação e rotas dentro da aplicação.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
