import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import { FaExclamationTriangle } from 'react-icons/fa'
import '../App.css';

function Erro() {
  return (
	<Container className="page-wrap d-flex flex-row align-items-center">
		<Row className="col-md-12 text-center">
			<Col className="text-light">
			<FaExclamationTriangle className="display-5" />
				<span className="display-1 d-block">404</span>
				<div className="mb-3 lead">Não encontramos essa página.</div>
				<Button variant="link">Voltar para o Início/Home</Button>
			</Col>
		</Row>
	</Container>
  )
}
export default Erro