import express from 'express';

const cors = require('cors');
const server = express();

server.use(cors());

export default server;
