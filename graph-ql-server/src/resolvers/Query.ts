export const Query = {
  hello: (parent, args, context) => 'World!',
  categories: (parent, args, { db }) => db.categories,
  products: (parent, args, { db }) => db.products,
  
  category: (parent, { id }, { db }) => {
    return db.categories.find(category => category.id === id) || null;
  },

  product: (parent, { id }, { db }) => {
    return db.products.find(product => product.id === id) || null;
  }
}
