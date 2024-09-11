import express, { Application } from "express";
import cors from 'cors'
import morgan from "morgan";
import { router } from './routes/routes';

import { dbConnection } from './db/config';

import dotenv from 'dotenv';
dotenv.config();

class Server {

    private app: Application;
    private port: number;

    constructor() {

        this.app = express();
        this.port = parseInt(process.env.APP_PORT || '3000', 10); // Convertir a número y proporcionar valor predeterminado
        this.dbConnect();

        this.middlewares();
        this.routes();
    }

    private async dbConnect(){
        await dbConnection()
    }

    private middlewares(){
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    private routes(){
        this.app.use(router)
    }

    public listen(){
        this.app.listen(this.port, () => console.log(`Server on http://127.0.0.1:${this.port}`))
    }
}

export default Server;