import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language'; // tslint:disable-line

export const ObjectScalarType: any = new GraphQLScalarType({
  name: 'Object',
  description: 'Arbitrary object',
  parseValue: value => {
    try {
      return typeof value === 'object'
        ? value
        : typeof value === 'string'
          ? JSON.parse(value)
          : null;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
  serialize: value => {
    try {
      return typeof value === 'object'
        ? value
        : typeof value === 'string'
          ? JSON.parse(value)
          : null;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
  parseLiteral: ast => {
    switch (ast.kind) {
      case Kind.STRING:
        try {
          return JSON.parse(ast.value);
        } catch (e) {
          console.log(e);
          return null;
        }
      case Kind.OBJECT:
        throw new Error(`Not sure what to do with OBJECT for ObjectScalarType`);
      default:
        return null;
    }
  }
});
