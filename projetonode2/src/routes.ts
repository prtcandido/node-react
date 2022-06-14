import {Router, Request, Response} from 'express';

const router = Router();

router.get('/teste',(req:Request,res:Response)=>{
    console.log('meio');
    throw new Error('Erro');
	return res.json({x:10});
});

export {router};