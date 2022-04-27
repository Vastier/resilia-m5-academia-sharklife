import { Link } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

import { FaDumbbell } from 'react-icons/fa'

const NavBar = () => {
  return (
	<Navbar collapseOnSelect bg='dark' variant='dark' expand='lg' fixed="top" >
	<Container>
		<Navbar.Brand as={Link} to='/'><FaDumbbell /> SharkFit </Navbar.Brand>
		<Navbar.Toggle aria-controls="responsive-navbar" />
		<Navbar.Collapse id="responsive-navbar" className="justify-content-end" >
		<Nav>
			<Nav.Link as={Link} to="/">Home</Nav.Link>
			<Nav.Link as={Link} to="cadastro">Cadastro</Nav.Link>
			<Nav.Link as={Link} to="login">Login</Nav.Link>
			<Nav.Link as={Link} to="perfil">Perfil</Nav.Link>
			<Nav.Link as={Link} to="dashboard">Dashboard</Nav.Link>
			<Nav.Link as={Link} to="contato">Contato</Nav.Link>
			<Nav.Link as={Link} to="erro">Erro</Nav.Link>
		</Nav>
		</Navbar.Collapse>
	</Container>
	</Navbar>
  )
}
export default NavBar