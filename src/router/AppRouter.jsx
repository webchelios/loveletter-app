import { Route, Routes } from "react-router";
import { Movies } from "./../views/Movies/Movies";
import { Login } from "./../views/Auth/Login/Login";
import { Register } from "./../views/Auth/Register/Register";
import { Home } from "./../views/Home/Home";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/peliculas" element={<Movies />} />
			<Route path="/iniciar" element={<Login />} />
			<Route path="/registrarse" element={<Register />} />
		</Routes>
	);
};
