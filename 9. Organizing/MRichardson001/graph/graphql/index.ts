import { ApolloServer, IResolvers } from 'apollo-server-express';
import logger from '../logger';
import { makeContext } from './context';
import mutations from './mutations';
import queries from './queries';
import typeDefs from './types';
import { ObjectScalarType } from './types/custom';

const resolvers: IResolvers = {
  // @ts-ignore
  Mutation: mutations,
  Object: ObjectScalarType,
  Query: queries
};

export const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context({ req, res }: any) {
    return { ...makeContext(req, res), req };
  },
  formatError(error: any) {
    logger.warn(error);
    return error;
  },
  formatResponse(response: any) {
    // logger.info(response);
    return response;
  }
});
