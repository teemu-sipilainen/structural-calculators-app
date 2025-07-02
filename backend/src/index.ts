import express, { request, response } from 'express';

const app = express();

app.get('/', (_request, response) => {
  response.status(200).send('Hello World!');

});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
