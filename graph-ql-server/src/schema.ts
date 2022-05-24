import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    hello: String
    categories: [Category!]!
  }

  type Category {
    id: ID!
    name: String!
  }
`;
