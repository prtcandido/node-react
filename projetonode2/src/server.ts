import express, {Request,Response,NextFunction} from 'express';
import 'express-async-errors';
import {router} from './routes';

const app = express();
app.use(express.json());

app.use( (req: Request, res:Response, next: NextFunction) => {
	console.log('middleware');
	return next();
});

app.use( (err: Error, req: Request, res: Response, next: NextFunction) => {
	console.log('Saida');
	return res.status(500).json({a:0});
});

app.use(router);

app.listen(3001,()=>console.log('Servidor iniciado'));