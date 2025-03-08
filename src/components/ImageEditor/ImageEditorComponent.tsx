import React, { useEffect, useRef } from "react";
import "tui-image-editor/dist/tui-image-editor.css"; // Import styles
import ImageEditor from "tui-image-editor";

// Import icons (optional, only needed if using the full UI)
import "tui-image-editor/dist/svg/icon-a.svg";
import "tui-image-editor/dist/svg/icon-b.svg";
import "tui-image-editor/dist/svg/icon-c.svg";
import "tui-image-editor/dist/svg/icon-d.svg";

const ImageEditorComponent: React.FC = () => {
	const editorRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!editorRef.current) return;

		// Initialize Toast UI Image Editor
		const editor = new ImageEditor(editorRef.current, {
			includeUI: {
				loadImage: {
					path: "",
					name: "SampleImage",
				},
				theme: {
					"common.bi.image": "https://placehold.co/600x100/transparent/white?text=..",
				},
				uiSize: {
					width: "100%",
					height: "100%",
				},
				menuBarPosition: "left",
			},
			cssMaxWidth: 600,
			cssMaxHeight: 700,
			usageStatistics: false,
		});

		return () => {
			editor.destroy();
		};
	}, []);

	return <div ref={editorRef} />;
};

export default ImageEditorComponent;
