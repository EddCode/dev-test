## Project Setup and Overview

This project consists of a backend and frontend, built using Node.js, Fastify, GraphQL, Jet, and React with Vite.

### Backend (API)
The backend code is located in the *__api__* folder. It is built using Fastify, a fast and low-overhead web framework for `Node.js(v18.16)`, which provides an efficient API for handling requests. The GraphQL schema and resolvers are implemented using Jet, which allows for efficient and flexible data fetching.

<details>
  <summary>Api Arquitecture</summary>

 ```bash
api
├── jest.config.js
├── nodemon.json
├── package-lock.json
├── package.json
├── src
│   ├── Auth
│   │   ├── application
│   │   │   ├── index.ts
│   │   │   └── signin.ts
│   │   ├── domain
│   │   │   └── AuthRepository.ts
│   │   └── infra
│   │       ├── gateway
│   │       │   └── graphql
│   │       │       ├── index.ts
│   │       │       ├── query.ts
│   │       │       ├── resolver.ts
│   │       │       └── types.ts
│   │       └── lowdb
│   │           └── loginRepository.ts
│   ├── User
│   │   ├── application
│   │   │   ├── details.ts
│   │   │   └── index.ts
│   │   ├── domain
│   │   │   └── UserRepository.ts
│   │   └── infra
│   │       ├── gateway
│   │       │   └── graphql
│   │       │       ├── index.ts
│   │       │       ├── query.ts
│   │       │       ├── resolver.ts
│   │       │       └── types.ts
│   │       └── lowdb
│   │           └── UserRepository.ts
│   ├── index.ts
│   ├── infraestructure
│   │   ├── config
│   │   │   └── index.ts
│   │   ├── db
│   │   │   ├── data
│   │   │   │   └── users.json
│   │   │   └── lowdb.ts
│   │   ├── graphql
│   │   │   ├── index.ts
│   │   │   ├── resolvers
│   │   │   │   └── index.ts
│   │   │   └── schemas
│   │   │       └── index.ts
│   │   └── server.ts
│   └── shared
│       ├── jwt
│       │   └── index.ts
│       └── logger
│           └── index.ts
├── tsconfig.json
└── yarn.lock
```
</details>

### Frontend (UI)
The frontend code is organized in the *__client__* folder. It is developed using React, a popular JavaScript library for building user interfaces. Vite is used as the build tool for the frontend, providing a fast development environment with instant server start and hot module replacement.

<details>
  <summary>Ui Arquitecture</summary>

 ```bash
client
├── README.md
├── index.html
├── jest.config.cjs
├── package.json
├── public
│   ├── logo.png
│   └── vite.svg
├── src
│   ├── app
│   │   ├── App.jsx
│   │   └── index.js
│   ├── main.jsx
│   ├── modules
│   │   ├── Auth
│   │   │   └── infra
│   │   │       ├── gateway
│   │   │       │   ├── hooks
│   │   │       │   │   └── useLogin.js
│   │   │       │   └── index.js
│   │   │       ├── storage
│   │   │       │   ├── index.js
│   │   │       │   ├── saveToken.js
│   │   │       │   └── saveUser.js
│   │   │       └── views
│   │   │           ├── components
│   │   │           │   ├── Form
│   │   │           │   │   ├── Form.styled.js
│   │   │           │   │   └── index.jsx
│   │   │           │   ├── HeaderLogo
│   │   │           │   │   └── index.jsx
│   │   │           │   └── index.js
│   │   │           ├── index.js
│   │   │           ├── login.jsx
│   │   │           ├── login.styled.js
│   │   │           └── login.test.jsx
│   │   └── User
│   │       └── infra
│   │           ├── gateway
│   │           │   ├── hooks
│   │           │   │   ├── useEditUser.js
│   │           │   │   └── useUserDetails.js
│   │           │   └── index.js
│   │           ├── storage
│   │           │   ├── index.js
│   │           │   ├── token.js
│   │           │   └── userData.js
│   │           └── views
│   │               ├── components
│   │               │   ├── Content
│   │               │   │   └── index.jsx
│   │               │   ├── EditUser
│   │               │   │   ├── Form.styled.js
│   │               │   │   └── index.jsx
│   │               │   ├── Header
│   │               │   │   ├── Header.style.js
│   │               │   │   └── index.jsx
│   │               │   ├── NavBar
│   │               │   │   ├── NavBar.style.js
│   │               │   │   └── index.jsx
│   │               │   └── index.js
│   │               ├── user.jsx
│   │               ├── user.styled.js
│   │               └── user.test.jsx
│   └── router
│       ├── ProtectedRoute.jsx
│       ├── Routing.jsx
│       ├── index.js
│       └── routes.jsx
├── vite.config.js
└── yarn.lock
```
</details>

### Running the Project
To run the project, follow these steps:

* Clone the repository to your local machine.
Navigate to the 'api' folder and run the following commands:
```bash
yarn install
yarn dev
```
> Api is runing on port 8080. Also if you go to localhost:8080/graphiql you can see a graphql playground
* Next, navigate to the 'client' folder and run the following commands:

```bash
npm install
npm start
```

> Ui is runing on port 5173

Now, the backend server and frontend development server are running, and you can access the application in your web browser.

### Commit History
Throughout the development process, commits were made to track the progress and changes made to the project. You can review the commit history to see how the project evolved from start to finish.

This setup allows for a clear separation between the backend and frontend, making it easier to maintain and develop each part independently. The use of Fastify and Jet in the backend ensures efficiency and robustness in handling requests and data retrieval, while React and Vite in the frontend provide a smooth and performant user experience.


