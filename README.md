# **Sistema de Votação de Filmes e Séries**

## **Descrição**

_Este projeto é um sistema **full-stack** que permite aos usuários visualizar uma lista de filmes e séries, votar positivamente ou negativamente em cada item e cadastrar novos filmes ou séries. O backend é desenvolvido em Java com Spring Boot e o banco de dados utilizado é MySQL. O frontend é feito em HTML, CSS e JavaScript puro._

## **Funcionalidades**

_- Visualizar lista de filmes e séries cadastrados._

_- Votar positivamente (gostei) ou negativamente (não gostei) em cada item._

_- Cadastro de novos filmes ou séries via API._

_- Persistência dos dados no banco MySQL._

_- API REST para manipulação dos dados (CRUD)._

_- Validação básica de dados._

## **Tecnologias Utilizadas**

**Backend:** _Java 17, Spring Boot, Spring Data JPA_

**Banco de Dados:** _MySQL_

**Frontend:** _HTML, CSS, JavaScript_

**Ferramentas:** _Postman para testes, Maven para gerenciamento de dependências._

## **API Endpoints**

| **Método** | **Endpoint**    | **Descrição**                   |
| ---------- | --------------- | ------------------------------- |
| **GET**    | /api/itens      | Lista todos os filmes/séries    |
| **POST**   | /api/itens      | Cadastra um novo filme/série    |
| **PUT**    | /api/itens/{id} | Atualiza um filme/série pelo ID |
| **DELETE** | /api/itens/{id} | Deleta um filme/série pelo ID   |
