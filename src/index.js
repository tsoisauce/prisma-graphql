const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client"); // attaches prisma client to context

const resolvers = {
  Query: {
    info: () => `This is the API for product data.`,
    allProducts: (root, args, context, info) => {
      return context.prisma.products();
    }
  },
  Mutation: {
    addProduct: (root, args, context, info) => {
      return context.prisma.createProduct({
        title: args.title,
        sku: args.sku,
        description: args.description,
        price: args.price,
        inStock: args.inStock
      });
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { prisma }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
