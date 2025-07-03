import express from 'express';
import reinforcedConcreteBeams from './routers/reinforcedConcreteBeamsRouter';

const server = express();

server.use(express.json());

server.use('/api/reinforcedConcreteBeams', reinforcedConcreteBeams);

server.get('/', (_request, response) => {
  response.status(200).send('Hello World!');
});

export default server;