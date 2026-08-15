import { useEffect } from "react";

export default function GoogleTranslateProvider() {
	useEffect(() => {
		// Prevent Google from displaying its own top translation bar
		window.googleTranslateElementInit = () => {
			if (!window.google?.translate) return;

			new window.google.translate.TranslateElement(
				{
					pageLanguage: "en",
					autoDisplay: false,
					includedLanguages:
						"af,sq,am,ar,hy,as,ay,az,bn,bs,bg,ca,ceb,ny,zh-CN,zh-TW,co,hr,cs,da,nl,en,eo,et,eu,fi,fr,gl,de,el,gu,ht,ha,haw,he,hi,hu,is,id,ig,ga,it,ja,jv,kn,ko,la,lv,lt,mk,ms,ml,mt,mi,mr,mn,ne,no,or,ps,fa,pl,pt,pa,ro,ru,sm,gd,sr,sk,sl,so,es,su,sw,sv,tl,ta,te,th,tr,uk,ur,uz,vi,cy,yo,zu",
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

		return () => {
			delete window.googleTranslateElementInit;
		};
	}, []);

	return (
		<div
			id="google_translate_element"
			style={{
				display: "none",
			}}
		/>
	);
}
