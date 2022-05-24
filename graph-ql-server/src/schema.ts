import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    hello: String
  }

  type Category {
    id: ID!
    name: String!
  }
`;
