##Project Setup and Overview

This project consists of a backend and frontend, built using Node.js, Fastify, GraphQL, Jet, and React with Vite.

###Backend (API)
The backend code is located in the *__api__* folder. It is built using Fastify, a fast and low-overhead web framework for `Node.js(v18.16)`, which provides an efficient API for handling requests. The GraphQL schema and resolvers are implemented using Jet, which allows for efficient and flexible data fetching.

###Frontend (UI)
The frontend code is organized in the *__client__* folder. It is developed using React, a popular JavaScript library for building user interfaces. Vite is used as the build tool for the frontend, providing a fast development environment with instant server start and hot module replacement.

###Running the Project
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

Feel free to explore the codebase and experiment with the project to better understand its functionality and implementation.