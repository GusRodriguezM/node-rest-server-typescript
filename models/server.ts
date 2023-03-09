import express, { Application } from 'express';

//Class for the server
class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
    }

    //Port where the app will run
    listen() {
        this.app.listen( this.port, () => {
            console.log(`Server running in the port: ${this.port}`);
        });
    }
    
}

export default Server;