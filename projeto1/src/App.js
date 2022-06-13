
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './paginas/home';
import Contato from './paginas/contato';
import Menu from './componentes/menu';
import Funcionario from './paginas/funcionario';
import FuncionarioCreate from './paginas/funcionario/FuncionarioCreate';

function App() {
	return (
		<BrowserRouter>
			<Menu/>
			<Routes>
				<Route path='/' element={ <Home/> }  />
				<Route path='/contato' element={ <Contato/> }  />
				<Route path='/funcionario' element={ <Funcionario/> } />
				<Route path='/funcionario/create' element={ <FuncionarioCreate/> }/>

				<Route path='*' element= { <Home/> } />
			</Routes>
		</BrowserRouter>
	)
}

export default App;