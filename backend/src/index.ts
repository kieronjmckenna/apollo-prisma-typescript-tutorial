import { ApolloServer } from "apollo-server";

import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

import { PrismaClient } from "@prisma/client";

const runServer = () => {
  const prisma = new PrismaClient();

  const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: () => {
      return {
        prisma,
      };
    },
  });

  const port = 4000;
  server.listen(port, () => {
    console.log(
      `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
    );
  });
};

runServer();
