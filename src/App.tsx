import ImageEditorComponent from "./components/ImageEditor/ImageEditorComponent";

function App() {
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
