import express, { Application } from "express";
import cors from 'cors'
import morgan from "morgan";
import { router } from './routes/routes';

class Server {

    private app: Application;
    private port: number | string;
    private app_host: string;

    constructor() {

        this.app = express();
        this.port = process.env.APP_PORT || 3000;
        this.app_host = process.env.APP_HOST || "localhost";

        this.middlewares();
        this.routes();
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