export const Product = {
  reviews: ({ id: productId }, args, { db }) => (
    db.reviews.filter(review => review.productId == productId)
  )
}
