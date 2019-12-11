const { GraphQLServer } = require("graphql-yoga");

let products = [
  {
    id: "product-0",
    title: "widget 1",
    sku: "widget:1",
    description: "This is a sample widget",
    price: 1200,
    inStock: true
  }
];
let idCount = products.length;

const resolvers = {
  Query: {
    info: () => `This is the API for product data.`,
    products: () => products
  },
  Mutation: {
    addProduct: (parent, args) => {
      const product = {
        id: `product-${idCount++}`,
        title: args.title,
        sku: args.sku,
        description: args.description,
        price: args.price,
        inStock: args.inStock
      };
      products.push(product);
      return product;
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
