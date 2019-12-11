function info() {
  return `This is the API for product data.`;
}

function allProducts(root, args, context, info) {
  return context.prisma.products();
}

module.exports = {
  info,
  allProducts
};
