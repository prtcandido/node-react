
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';

function Contato() {

	const [aluno,setAluno] = useState('Paulo');

	useEffect(()=>{alert('Carregou'); setAluno('Maria'); return ()=>{alert('Descarregou')}},[]);

	useEffect(()=>{alert('Mudou Aluno')},[aluno]);

	return ( 
		<div>
			<h1>{aluno}</h1>
			<button onClick={ () => setAluno(prompt('Qual Aluno?')) }>
				Mudar
			</button>
			<input value={aluno} onChange={(e)=>setAluno(e.target.value)} />	
			<Link to='/'>Home</Link>
		</div>
	)
}

export default Contato