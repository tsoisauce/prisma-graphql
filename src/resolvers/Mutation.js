function addProduct(root, args, context, info) {
  return context.prisma.createProduct({
    title: args.title,
    sku: args.sku,
    description: args.description,
    price: args.price,
    inStock: args.inStock
  });
}

module.exports = {
  addProduct
};
