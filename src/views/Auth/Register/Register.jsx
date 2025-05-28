import { useState } from "react";
import { postFetch } from "../../../helpers/postFetch";

export const Register = () => {
	const [formData, setFormData] = useState({
		name: "",
		username: "",
		email: "",
		password: "",
	});

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		await postFetch(formData, "http://localhost:3000/users/register");

		setFormData({
			name: "",
			username: "",
			email: "",
			password: "",
		});
	};

	return (
		<>
			<h1>Register</h1>
			<form onSubmit={onSubmit}>
				<input
					id="name"
					type="text"
					placeholder="Nombre completo"
					value={formData.name}
					onChange={onChange}
				/>
				<input
					id="username"
					type="text"
					placeholder="Nombre de usuario"
					value={formData.username}
					onChange={onChange}
				/>
				<input
					id="email"
					type="text"
					placeholder="Email"
					value={formData.email}
					onChange={onChange}
				/>
				<input
					id="password"
					type="password"
					placeholder="Contraseña"
					value={formData.password}
					onChange={onChange}
				/>
				<button type="submit">Crear</button>
			</form>
		</>
	);
};
