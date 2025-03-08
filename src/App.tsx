import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ImageEditorComponent from "./components/ImageEditor/ImageEditorComponent";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div
			style={{
				height: "100vh",
				width: "100vw",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<ImageEditorComponent />
		</div>
	);
}

export default App;
