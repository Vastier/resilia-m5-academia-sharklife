import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx"
import Cadastro from "./pages/Cadastro.jsx"
import Contato from "./pages/Contato.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Login from "./pages/Login.jsx"
import Perfil from "./pages/Perfil.jsx"
import Erro from "./pages/Erro.jsx"

function SharkRoutes() {
return (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="cadastro" element={<Cadastro />} />
		<Route path="contato" element={<Contato />} />
		<Route path="dashboard" element={<Dashboard />} />
		<Route path="login" element={<Login />} />
		<Route path="perfil" element={<Perfil />} />
		<Route path="*" element={<Erro />} />
	</Routes>
)}

export default SharkRoutes