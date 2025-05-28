import { createRoot } from "react-dom/client";
import "./index.css";
import { LoveLetterApp } from "./LoveLetterApp.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<LoveLetterApp />
	</BrowserRouter>,
);
