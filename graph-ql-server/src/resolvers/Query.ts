export const Query = {
  hello: (parent, args, context) => 'World!',
  categories: (parent, args, { db }) => db.categories,
}
