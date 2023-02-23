import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { Routes } from './routes/index';

class AppController {

    server: express.Express;

    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    };

    private middlewares() {
        this.server.use(express.json());
        this.server.use(cors({
            methods: '[GET, POST, DELETE, PUT]',
            origin: '*',
            allowedHeaders: 'Content-Type, Authorization',
            optionsSuccessStatus: 204
        }));
    };

    private routes() {
        Routes.forEach(route => {
            this.server.use(route)
        });
    };

};

export default new AppController().server;