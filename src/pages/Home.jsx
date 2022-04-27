import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"


import imghome from "../assets/undraw_personal_trainer_ote3.svg"

function Home() {
	return (
	<Container className='bg-dark text-light p-5'>
		<Row className='mt-5'>
			<Col>
				<h1 className='p-5 text-center'>Venha para a SharkFit você também! <br/> [: </h1>
			</Col>
			<Col>
				<Image fluid src={imghome} className='p-2'/>
			</Col>
		</Row>
	</Container>
	)
}
export default Home