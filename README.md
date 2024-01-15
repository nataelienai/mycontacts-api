# MyContacts API

MyContacts API é a API que permite o funcionamento do Web App [MyContacts](https://github.com/nataelienai/mycontacts).

## Tecnologias

- Linguagem: JavaScript (Node.js)
- Gerenciador de pacotes: Yarn
- Bibliotecas: Express e pg
- Banco de dados: PostgreSQL
- Ferramentas: ESLint, EditorConfig, Git e Docker

## Dependências

Para executar a API em seu computador, você precisará de [Git](https://git-scm.com/downloads), [Node.js](https://nodejs.org/) e [Docker](https://docs.docker.com/engine/install/) instalados.

## Como executar

### Banco de dados

Antes de tudo, é necessário que uma instância de banco de dados PostgreSQL esteja em execução no seu computador. Para isso, execute o seguinte comando num terminal:

```sh
docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -e POSTGRES_DB=mycontacts -p 5432:5432 -d postgres
```

O servidor pode levar alguns minutos para iniciar.

### API

1. Usando um terminal, clone o repositório:
```sh
git clone https://github.com/nataelienai/mycontacts-api.git
```

2. Entre na pasta do repositório clonado:
```sh
cd mycontacts-api
```

3. Instale o Yarn (caso não o tenha):
```sh
npm install -g yarn
```

4. Instale as dependências do projeto:
```sh
yarn
```

5. Inicialize a aplicação:
```sh
yarn start
```

Caso apareça o erro `Error: Connection terminated unexpectedly`, espere mais alguns segundos e tente novamente, pois o servidor do banco de dados não terminou de inicializar.
