import { ApolloServer } from 'apollo-server';

import { db } from './db';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,

  context: {
    db
  }
});

server.listen().then(({ url }) => {
  console.log(`Server ready on ${url}`);
});
