export const Category = {
  products: ({ id: categoryId }, args, { db }) => (
    db.products.filter(product => product.categoryId === categoryId)
  )
};
