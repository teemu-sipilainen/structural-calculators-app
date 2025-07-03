import express from 'express';

const server = express();

server.get('/', (_request, response) => {
  response.status(200).send('Hello World!');
});

export default server;