import express, { Application } from 'express';
import cors from 'cors';
import userRoutes from '../routes/users';
import db from '../db/connection';

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

        //Connection to the DB
        this.dbConnection();

        //Middlewares
        this.middlewares();

        //App routes
        this.routes();
    }

    async dbConnection() {
        try {
            await db.authenticate();
            console.log('Connection with the DB is successful...');
        } catch (error) {
            throw new Error( error as string );
        }
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