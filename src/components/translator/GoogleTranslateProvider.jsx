import { useEffect } from "react";

export default function GoogleTranslateProvider() {
	useEffect(() => {
		window.googleTranslateElementInit = () => {
			new window.google.translate.TranslateElement(
				{
					pageLanguage: "en",
					autoDisplay: false,
				},
				"google_translate_element",
			);
		};

		if (!document.getElementById("google-translate-script")) {
			const script = document.createElement("script");

			script.id = "google-translate-script";

			script.src =
				"https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

			script.async = true;

			document.body.appendChild(script);
		}
	}, []);

	return <div id="google_translate_element" style={{ display: "none" }} />;
}
