import express, {Request, Response, NextFunction} from 'express';
import {router} from './routes';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3001,()=>console.log('Servidor OK'));
