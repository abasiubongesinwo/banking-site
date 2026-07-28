import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import LanguageItem from "./LanguageItem";
import { languages } from "./languages";

export default function LanguageDropdown({
	open,
	selected,
	onSelect,
	onClose,
}) {
	const [search, setSearch] = useState("");

	const dropdownRef = useRef(null);

	// Close when clicking outside
	useEffect(() => {
		function handleClickOutside(e) {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
				onClose();
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, [onClose]);

	// Filter languages
	const filteredLanguages = useMemo(() => {
		return languages.filter((language) => {
			const value = search.toLowerCase();

			return (
				language.name.toLowerCase().includes(value) ||
				language.native.toLowerCase().includes(value)
			);
		});
	}, [search]);

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					ref={dropdownRef}
					initial={{
						opacity: 0,
						y: 15,
						scale: 0.96,
					}}
					animate={{
						opacity: 1,
						y: 0,
						scale: 1,
					}}
					exit={{
						opacity: 0,
						y: 15,
						scale: 0.96,
					}}
					transition={{
						duration: 0.22,
					}}
					className="relative w-96 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">
					{/* Header */}

					<div className="border-b border-gray-100 p-5">
						<h3 className="text-lg font-bold">Select Language</h3>

						<p className="mt-1 text-sm text-gray-500">
							Translate the website into your preferred language.
						</p>

						<div className="relative mt-5">
							<Search
								size={18}
								className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
							/>

							<input
								type="text"
								placeholder="Search language..."
								value={search}
								onChange={(e) => setSearch(e.target.value)}
								className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 outline-none transition focus:border-emerald-500"
							/>
						</div>
					</div>

					{/* Languages */}

					<div className="max-h-[420px] overflow-y-auto p-3">
						{filteredLanguages.length > 0 ?
							filteredLanguages.map((language) => (
								<LanguageItem
									key={language.code}
									language={language}
									selected={selected}
									onSelect={(lang) => {
										onSelect(lang);
										onClose();
									}}
								/>
							))
						:	<div className="py-10 text-center text-gray-500">
								No language found.
							</div>
						}
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
