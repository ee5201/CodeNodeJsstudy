import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema.

// resolvers : graphql 에서 부르는 api
const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  //shrthand property
});

const { url } = await startStandaloneServer(server,{
  listen:{port:3000}
});
console.log(`🚀 Server ready at ${url} on port ${3000}`);