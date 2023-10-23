# Projeto: Loja de Itens Medievais API

Este projeto consiste em uma API que simula o funcionamento de uma loja de itens medievais, incluindo produtos personalizados, como espadas feitas sob encomenda. Foi desenvolvido utilizando TypeScript, Node.js, Express, MySQL, Sequelize e Docker, abordando aspectos fundamentais de desenvolvimento de software e oferecendo recursos essenciais.

## Recursos Destacados

- **Camadas de Serviço e Controladores:** A aplicação foi estruturada com camadas de serviço e controladores para garantir um código organizado e de fácil manutenção.

- **Autenticação JWT:** Algumas rotas da API estão protegidas por autenticação JWT, fornecendo segurança às operações sensíveis.

- **Testes Unitários:** Foram implementados testes unitários para garantir a confiabilidade e o correto funcionamento da aplicação.

## Como Usar

1. Clone o repositório para a sua máquina local.
2. Instale as dependências usando `npm install`.
3. Configure as variáveis de ambiente, se necessário.
4. Execute o projeto com o comando `npm start`.
5. Acesse a API por meio dos endpoints para criar, ler e atualizar informações sobre itens medievais.

## Docker

Para rodar a aplicação com Docker, siga estas etapas:

1. Clone o repositório para a sua máquina local.

2. Abra o terminal na pasta raiz do projeto.

3. Execute o seguinte comando para iniciar os serviços `app-trybesmith` e `db` com o `docker-compose`:

   ```bash
   docker-compose up -d --build
Isso inicializará os contêineres chamados trybesmith_api e trybesmith_db.

Certifique-se de parar o MySQL local se estiver usando a porta padrão (3306) ou ajuste as configurações de porta conforme necessário para evitar conflitos.

Após a inicialização dos contêineres, execute o seguinte comando para criar o banco de dados, tabelas e populá-las:

   ```bash
      npm run db:reset
   ```

   ```bash
   docker exec -it trybesmith_api bash
   ```
Isso fornecerá acesso ao terminal interativo do container do aplicativo.

Para visualizar os logs do Nodemon em seu terminal, siga estas etapas:

a. Execute o seguinte comando para listar os contêineres ativos e pegar o ID do contêiner do trybesmith_api:

   ```bash
   docker ps
   ```
Anote o CONTAINER ID associado ao trybesmith_api.

b. Agora você pode usar o ID do contêiner para visualizar os logs com o comando docker logs. Substitua <id_do_container> pelo ID do contêiner do `trybesmith_api:

   ```bash
   docker logs -f <id_do_container>
   ```
Isso permitirá que você veja os logs do servidor com o Nodemon em tempo real.

##

Observações:
Este projeto não inclui uma interface de usuário (front-end), concentrando-se apenas nas funcionalidades e qualidade do código.
A API deve ser desenvolvida na pasta ./src.
Os testes unitários foram desenvolvidos na raiz do projeto, no diretório tests.
