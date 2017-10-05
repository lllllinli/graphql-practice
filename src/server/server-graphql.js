import express from 'express';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';

const app = express();
const port = 4000;
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(port, () => {
  console.log(`server listen port: ${port}`);
});

console.log('Running a GraphQL API server at localhost:4000/graphql');
