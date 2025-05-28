import { useState } from "react";
import { postFetch } from "../../../helpers/postFetch";

export const Login = () => {
	const [formData, setFormData] = useState({
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

		const response = await postFetch(
			formData,
			"http://localhost:3000/users/login",
		);

		setFormData({
			email: "",
			password: "",
		});
	};

	return (
		<>
			<h1>Login</h1>

			<form onSubmit={onSubmit}>
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
