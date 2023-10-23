<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            background-color: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
        p {
            background-color: #fff;
            padding: 20px;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Projeto: Loja de Itens Medievais API</h1>
        <p>
            Este projeto consiste em uma API que simula o funcionamento de uma loja de itens medievais, incluindo produtos personalizados, como espadas feitas sob encomenda. Desenvolvido utilizando TypeScript, Node.js, Express, MySQL, Sequelize e Docker, o projeto aborda aspectos fundamentais de desenvolvimento de software e oferece recursos essenciais.
        </p>

        <h2>Recursos Destacados:</h2>
        <p>
            <ul>
                <li><strong>Camadas de Serviço e Controladores:</strong> A aplicação foi estruturada com camadas de serviço e controladores para garantir um código organizado e de fácil manutenção.</li>
                <li><strong>Autenticação JWT:</strong> Algumas rotas da API estão protegidas por autenticação JWT, fornecendo segurança às operações sensíveis.</li>
                <li><strong>Testes Unitários:</strong> Para garantir a confiabilidade e o correto funcionamento, foram implementados testes unitários que cobrem os principais aspectos da aplicação.</li>
            </ul>
        </p>

        <h2>Como Usar:</h2>
        <p>
            <ol>
                <li>Clone o repositório para a sua máquina local.</li>
                <li>Instale as dependências usando <code>npm install</code>.</li>
                <li>Configure as variáveis de ambiente, se necessário.</li>
                <li>Execute o projeto com o comando <code>npm start</code>.</li>
                <li>Acesse a API por meio dos endpoints para criar, ler e atualizar informações sobre itens medievais.</li>
            </ol>
        </p>

        <h2>Observações:</h2>
        <p>
            <ul>
                <li>Este projeto não inclui uma interface de usuário (front-end), concentrando-se apenas nas funcionalidades e qualidade do código.</li>
                <li>A API deve ser desenvolvida na pasta <code>./src</code>.</li>
                <li>Os testes unitários foram desenvolvidos na raiz do projeto, no diretório <code>tests</code>.</li>
            </ul>
        </p>
    </div>
</body>
</html>
