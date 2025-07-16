import express from 'express';
import cors from 'cors';
import authRouter from './routers/authRouter';
import concreteRouter from './routers/concreteRouter';
import { logger } from './middlewares/generalMiddlewares';

const server = express();

server.use(cors());
server.use(express.json());

server.use(logger);

server.use('/', express.static('./dist/client'));

server.use(express.static('public'));

server.use('/api/auth', authRouter);
server.use('/api/concrete', concreteRouter);

server.get('/', (_request, response) => {
  response.status(200).send('Hello World!');
});

/*
server.get('*', (_request, response) => {
  response.sendFile('index.html', { root: './dist/client' });
});
*/

export default server;