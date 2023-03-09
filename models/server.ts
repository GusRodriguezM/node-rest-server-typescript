import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from '../routes/users';

//Class for the server
class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        users: '/api/users'
    }

    constructor() {
        this.app = express();
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
        this.app.use( cors() );

        //Reading and parsing the body
        this.app.use( express.json() );

        //Public folder
        this.app.use( express.static('public') );
    }

    //App routes
    routes() {
        this.app.use( this.apiPaths.users, userRoutes );
    }

    //Port where the app will run
    listen() {
        this.app.listen( this.port, () => {
            console.log(`Server running in the port: ${this.port}`);
        });
    }
    
}

export default Server;