import server from './server';

const PORT = 8888;

server.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
