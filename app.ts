import dotenv from 'dotenv';
import Server from './models/server';

//dot.evn configuration
dotenv.config();

//Instance of the class Server
const server = new Server();

server.listen();