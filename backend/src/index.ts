import server from './server';

const PORT: number = process.env.PORT ? Number(process.env.PORT) : 3000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
