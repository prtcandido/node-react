const express = require('express');

const server = express();

console.log('Express iniciou...');

const funcionarios = [{id:1,nome:"João"},{id:2,nome:"Maria"},
	{id:3,nome:"Carlos"}];

server.get('/teste/:id', (req,res)=>{
	
	// Obter parâmetro da rota
	const id = req.params.id;

	// Como obter parâmetros de requisição ?...
	const px = req.query.px;

	// Gerar resposta
	res.send(`<h1>${id}</h1><h2>${px}</h2>`);
});

server.get('/funcionario/:id',(req, res)=>{
	const { id } = req.params;
	const r = funcionarios.filter( (x)=>x.id == id );
	if(r.length>0) {res.json(r[0])} else {res.json({})};
});

server.listen(3000);