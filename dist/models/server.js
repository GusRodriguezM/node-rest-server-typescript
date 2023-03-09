"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_1 = __importDefault(require("../routes/users"));
//Class for the server
class Server {
    constructor() {
        this.apiPaths = {
            users: '/api/users'
        };
        this.app = (0, express_1.default)();
        //Port to run the app
        this.port = process.env.PORT || '8000';
        //Middlewares
        this.middlewares();
        //App routes
        this.routes();
    }
    //Middlewares
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //Reading and parsing the body
        this.app.use(express_1.default.json());
        //Public folder
        this.app.use(express_1.default.static('public'));
    }
    //App routes
    routes() {
        this.app.use(this.apiPaths.users, users_1.default);
    }
    //Port where the app will run
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running in the port: ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map