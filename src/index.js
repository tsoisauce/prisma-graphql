const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client"); // attaches prisma client to context

const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Subscription = require("./resolvers/Subscription");

const resolvers = {
  Query,
  Mutation,
  Subscription
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { prisma }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
