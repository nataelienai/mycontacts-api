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

1. Usando um terminal, clone o repositório:
```sh
git clone https://github.com/nataelienai/mycontacts-api.git
```

2. Entre na pasta do repositório clonado:
```sh
cd mycontacts-api
```

3. Inicialize o banco de dados:

- Na primeira vez, execute o comando:
```sh
docker run -v ./src/database/schema.sql:/docker-entrypoint-initdb.d/schema.sql --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -e POSTGRES_DB=mycontacts -p 5432:5432 -d postgres
```

- Nas outras, basta executar o comando:
```sh
docker start pg
```

4. Instale o Yarn (caso não o tenha):
```sh
npm install -g yarn
```

5. Instale as dependências do projeto:
```sh
yarn
```

6. Inicialize a aplicação:
```sh
yarn start
```

Caso apareça o erro `Error: Connection terminated unexpectedly`, espere mais alguns segundos e tente novamente, pois o servidor do banco de dados ainda não terminou de inicializar.

## Rotas

### Categorias

- **GET /categories**: Busca todas as categorias.
- **GET /categories/:id**: Busca uma categoria.
- **POST /categories**: Cria uma categoria.
- **PUT /categories/:id**: Atualiza uma categoria.
- **DELETE /categories/:id**: Exclui uma categoria.

### Contatos

- **GET /contacts**: Busca todos os contatos.
- **GET /contacts/:id**: Busca um contato.
- **POST /contacts**: Cria um contato.
- **PUT /contacts/:id**: Atualiza um contato.
- **DELETE /contacts/:id**: Exclui um contato.

## Exemplos

Aqui estão exemplos de uso de cada rota da API:

### Categorias

- **Buscar todas as categorias**:

```sh
GET /categories
```

- **Buscar uma categoria**:

```sh
GET /categories/945f2528-2d90-45aa-9c8a-7140e4490e78
```

- **Criar uma categoria**:
```sh
POST /categories
Content-Type: application/json

{
  "name": "faculdade"
}
```

- **Atualizar uma categoria**:
```sh
PUT /categories/945f2528-2d90-45aa-9c8a-7140e4490e78
Content-Type: application/json

{
  "name": "instagram"
}
```

- **Excluir uma categoria**:
```sh
DELETE /categories/945f2528-2d90-45aa-9c8a-7140e4490e78
```

### Contatos

- **Buscar todos os contatos**:

```sh
GET /contacts
```

- **Buscar um contato**:

```sh
GET /contacts/945f2528-2d90-45aa-9c8a-7140e4490e78
```

- **Criar um contato**:
```sh
POST /contacts
Content-Type: application/json

{
  "name": "Natã",
  "email": "nata@email.com",
  "phone": "(12) 99999-9999",
  "category_id": "197a0d11-9715-4e01-933f-a30ce9c6b06b",
}
```

- **Atualizar um contato**:
```sh
PUT /contacts/945f2528-2d90-45aa-9c8a-7140e4490e78
Content-Type: application/json

{
  "name": "Natã",
  "email": "nata@email.com",
  "phone": "(12) 98888-8888",
  "category_id": "197a0d11-9715-4e01-933f-a30ce9c6b06b",
}
```

- **Excluir um contato**:
```sh
DELETE /contacts/945f2528-2d90-45aa-9c8a-7140e4490e78
```
