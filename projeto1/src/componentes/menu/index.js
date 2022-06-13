
import {Link} from 'react-router-dom';
import './style.css';

function Menu() {
	return (
		<div className="menu">
			<h4>Empresa XYZ</h4>
			<div>
				<Link to='/'>Home</Link>
				<Link to='/contato'>Contato</Link>
				<Link to='/funcionario'>Funcionario</Link>
			</div>
		</div>
	)
}

export default Menu