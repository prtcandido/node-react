
import { useState } from 'react';

function FuncionarioCreate() {

  const [funcionario,setFuncionario] = useState({});
  const [x,setX] = useState('');

  function enviar(e){
    e.preventDefault();
  	setX(JSON.stringify(funcionario)); 
  }

  return (
  	<div>
  	<form onSubmit={enviar}>
  	  Nome: <input value={funcionario.nome} onChange={ (e)=>setFuncionario({...funcionario,nome:e.target.value}) }  /> <br/>
  	  Endereco: <input value={funcionario.endereco} onChange={ (e)=>setFuncionario({...funcionario,endereco:e.target.value}) } /> <br/>
  	  <button type="submit">Enviar</button>
  	</form>

  	<h2>{funcionario.nome}</h2>
  	<h2>{funcionario.endereco}</h2>
  	<h1>{x}</h1>
  	</div>
  )
}

export default FuncionarioCreate