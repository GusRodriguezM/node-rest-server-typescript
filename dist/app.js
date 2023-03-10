"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const server_1 = __importDefault(require("./models/server"));
//dot.evn configuration
dotenv_1.default.config();
//Instance of the class Server
const server = new server_1.default();
server.listen();
//# sourceMappingURL=app.js.map