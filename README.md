# Documentação: Sub-rotas nas Páginas "Home" e "About"


### Estrutura das Páginas e Sub-rotas
- **Home**:
  - **Seção 1**: Visão geral e funcionalidades principais da aplicação.
  - **Seção 2**: Detalhes sobre a estrutura e o uso do React Router.

- **About**:
  - **História**: Histórico do projeto.
  - **Equipe**: Informações sobre os membros da equipe.

---


---

## Detalhes de Implementação

### Rotas e Sub-rotas
- Configuramos as rotas principais no arquivo `App.js` para as páginas **Home** e **About**.
- As sub-rotas foram configuradas diretamente dentro de cada componente de página principal (`Home.js` e `About.js`), utilizando o componente `Routes` e `Route` do React Router.

### Página "Home"
A página "Home" apresenta:
- Um cabeçalho com boas-vindas.
- Links para navegar entre "Seção 1" e "Seção 2".
- Conteúdo dinâmico baseado na sub-rota acessada.

#### Sub-rotas de "Home":
- **Seção 1**: Apresenta a visão geral da aplicação, incluindo funcionalidades principais.
- **Seção 2**: Descreve a estrutura do projeto e como o React Router foi implementado.

### Página "About"
A página "About" apresenta:
- Um cabeçalho sobre a aplicação.
- Links para acessar "História" e "Equipe".
- Conteúdo dinâmico baseado na sub-rota acessada.

#### Sub-rotas de "About":
- **História**: Explica o histórico do projeto, desde a configuração inicial até melhorias contínuas.
- **Equipe**: Lista os membros responsáveis pelo desenvolvimento do projeto, com suas respectivas funções.

---

## Estilos Básicos
Os estilos básicos foram aplicados para melhorar a aparência do menu de navegação. No arquivo `App.css`:
- O menu possui um fundo claro, com espaçamento entre os itens.
- Links ganham sublinhado ao passar o cursor, criando uma interação visual.

---

## Conclusão
Este projeto demonstra como configurar rotas principais e sub-rotas em uma aplicação React utilizando o React Router. Ele exibe como estruturar e organizar componentes para navegação eficiente, além de estilizar o conteúdo para proporcionar uma experiência amigável ao usuário.

