import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    hello: String
    categories: [Category!]!
    products: [Product!]!
    category(id: ID!): Category
    product(id: ID!): Product
  }

  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }

  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    reviews: [Review!]!
  }
`;
