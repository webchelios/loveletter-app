import { Navbar } from "./components/Navbar";
import { AppRouter } from "./router/AppRouter";
import "./LoveLetterApp.css";

export const LoveLetterApp = () => {
	return (
		<>
			<Navbar />
			<AppRouter />
		</>
	);
};
