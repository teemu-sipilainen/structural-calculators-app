import express from 'express';
import cors from 'cors';
import authRouter from './routers/authRouter';
import reinforcedConcreteBeamsRouter from './routers/reinforcedConcreteBeamsRouter';
import { logger } from './middlewares/generalMiddlewares';

const server = express();

server.use(cors());
server.use(express.json());

server.use(logger);

server.use(express.static('public'));

server.use('/api/auth', authRouter);
server.use('/api/reinforcedConcreteBeams', reinforcedConcreteBeamsRouter);

server.get('/', (_request, response) => {
  response.status(200).send('Hello World!');
});

export default server;