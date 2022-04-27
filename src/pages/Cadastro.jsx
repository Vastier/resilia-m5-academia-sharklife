import React, { useState } from 'react'
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import '../App.css'


function Cadastro() {

	const [value, setValue] = useState({});

	function handleChange(e) {
		setValue({ ...value, [e.target.name]: e.target.value });
	}

	function submit(e) {
		e.preventDefault()
		console.log('Event:', e)
	}

	return (
		<Container>
			<Row className="page-wrap d-flex justify-content-center align-items-center">
				<Col xs='auto' className="text-center">
					<Form onSubmit={submit} className='be-tomato bg-dark rounded p-4 p-sm-3'>

						<Form.Group className='mb-3' controlId='formBasicNome'>
							<Form.Label>Nome:</Form.Label>
							<Form.Control type='text' placeholder='Insira seu Nome' onChange={handleChange} name='nome'/>
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicCPF'>
							<Form.Label>CPF:</Form.Label>
							<Form.Control type='numbers' placeholder='Insira seu CPF' onChange={handleChange} name='cpf'/>
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>Email:</Form.Label>
							<Form.Control type='email' placeholder='Insira seu Email' onChange={handleChange} name='email'/>
						</Form.Group>

						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label>Senha:</Form.Label>
							<Form.Control type='password' placeholder='Insira sua Senha' onChange={handleChange} name='senha'/>
						</Form.Group>

						<Button variant='primary' type='submit'>
							Cadastrar
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	)
}

export default Cadastro