const path = require('path');
//const express = require('express');
import express, { Request, Response, NextFunction, response } from 'express';
import type { ErrorRequestHandler } from 'express';
const expressGraphQL = require('express-graphql').graphqlHTTP;
const lightQL = require('../../npm-package/lightql.js');
const schema = require('./graphQLSchemas');
const app = express();
const cors = require('cors');
const PORT = 3000;
const {LRUCache, DLLNode, DoublyLinkedList} = require('../../npm-package/lightql');
//const { buildSchema } = require('graphql');

//const cache = lightQL(6);
//const cache = lightQL(6);
// console.log(cache);
// const cache1 = new LRUCache(3);
// cache1.put(1,3);
// cache1.put(2, 4)
// console.log('cache1:' + JSON.stringify(cache1));

// function (req, res, next) {
//   lightQL(10);
//   return next();
// }

 // user_name: String!,
// fav_song: String,
// fav_movie: String

// construct a schema, using GraphQL schema language
// 
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../../dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.use('/graphql', expressGraphQL({
  schema: schema,
  //rootValue: resolvers,
  graphiql: true})
);

type ErrObject = {
  log: string;
  status: number;
  message: { err: string };
};

  // unknown route handler:
  //app.use((req, res) => res.status(404).send('Cannot get route'));

  // global error handler:
  app.use((err: ErrObject, req: Request, res: Response, next: NextFunction) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });


//have the server running up on the 3000
app.listen(PORT, () => console.log(`Express GraphQL server now running on localhost:${PORT}/graphql`));


