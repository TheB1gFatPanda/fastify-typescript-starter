<h1 align="center">
    <br>
  Fastify Typescript Starter
  <br>
</h1>

<h4 align="center"> Fastify Rest API Boilerplate Using TypeScript</h4>
 <br>
  <br>

## Features:

<p>
  <a href="https://www.fastify.io/" target="_blank" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/fastify-%23000000.svg?style=for-the-badge&logo=fastify&logoColor=white" />
  </a>&nbsp;&nbsp;
  <a href="https://www.typescriptlang.org/" target="_blank" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/-TypeScript-007ACC?style=for-the-badge&logo=TypeScript&logoColor=fff" />
  </a>&nbsp;&nbsp;
  <a href="https://nodejs.org/" target="_blank" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=fff" />
  </a>&nbsp;&nbsp;
  <a href="https://www.prisma.io/" target="_blank" style="text-decoration: none;">
    <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white"/>
  </a>&nbsp;&nbsp;
</p>

<p>
  <a href="https://www.npmjs.com/" target="_blank">
    <img src="https://img.shields.io/badge/-NPM-CB3837?style=for-the-badge&logo=NPM&logoColor=fff" />
  </a>&nbsp;&nbsp;
  <a href="https://www.docker.com/" target="_blank">
    <img src="https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=fff" />
  </a>&nbsp;&nbsp;
  <a href="https://nodemon.io/" target="_blank">
    <img src="https://img.shields.io/badge/-Nodemon-76D04B?style=for-the-badge&logo=Nodemon&logoColor=fff" />
  </a>&nbsp;&nbsp;
  <a href="https://eslint.org/" target="_blank">
    <img src="https://img.shields.io/badge/-ESLint-4B32C3?style=for-the-badge&logo=ESLint&logoColor=fff" />
  </a>&nbsp;&nbsp;
  <a href="https://prettier.io/" target="_blank">
    <img src="https://img.shields.io/badge/-Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=000" />
  </a>&nbsp;&nbsp;
  <a href="https://swagger.io/" target="_blank">
    <img src="https://img.shields.io/badge/-Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=000" />
  </a>&nbsp;&nbsp;
  <a href="https://swc.rs/" target="_blank">
    <img src="https://img.shields.io/badge/-SWC-FFFFFF?style=for-the-badge&logo=swc&logoColor=FBE1A6" />
  </a>
</p>

## How to use

### 1. Clone this repo & install dependencies

Install Node dependencies:

`npm install`

### 2. Create env files

Create the env files for dev, test and prod,
refer <span style="color:red;">env.example</span>

```sh
.env.development.local
.env.test.local
.env.production.local
```

### 2. Set up the database

The boilerplate uses [Postgres database](https://www.postgresql.org/).

and update the db credentials in the env file

### 3. Generate Prisma Client

Run the following command to generate [Prisma Client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/generating-prisma-client):

```sh
npm run prisma:generate:dev
```

### 4. Migrate Schema

Run the following command to migrate [Prisma Migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate)

```sh
npm run prisma:migrate:dev
```

### 5. Start the server

Launch your server with this command:

```sh
npm run dev
```
