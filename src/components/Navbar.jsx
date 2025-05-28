import { NavLink } from "react-router";

export const Navbar = () => {
	return (
		<nav>
			<NavLink to="/">Inicio</NavLink>
			<NavLink to="/peliculas">Películas</NavLink>
			<NavLink to="/iniciar">Iniciar Sesión</NavLink>
			<NavLink to="/registrarse">Registrarse</NavLink>
		</nav>
	);
};
