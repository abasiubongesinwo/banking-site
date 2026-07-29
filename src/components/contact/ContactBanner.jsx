import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function ContactBanner() {
	return (
		// <section
		// 	className="relative flex h-[420px] items-center justify-center overflow-hidden"
		// 	style={{
		// 		backgroundImage: `
		// 			linear-gradient(rgba(8,40,28,.82), rgba(8,40,28,.82)),
		// 			url('/page-title-bg2.jpg')
		// 		`,
		// 		backgroundSize: "cover",
		// 		backgroundPosition: "center",
		// 	}}>
		// 	{/* Animated Vertical Lines */}
		// 	<div className="absolute inset-0 opacity-10">
		// 		<div className="mx-auto flex h-full max-w-7xl justify-between">
		// 			{[...Array(6)].map((_, i) => (
		// 				<motion.div
		// 					key={i}
		// 					initial={{ opacity: 0.2 }}
		// 					animate={{ opacity: [0.1, 0.3, 0.1] }}
		// 					transition={{
		// 						duration: 3,
		// 						repeat: Infinity,
		// 						delay: i * 0.3,
		// 					}}
		// 					className="h-full w-px bg-white"
		// 				/>
		// 			))}
		// 		</div>
		// 	</div>

		// 	{/* Gold Accent */}
		// 	<div className="absolute left-0 top-0 h-1 w-full bg-amber-400" />

		// 	{/* Content */}
		// 	<div className="relative z-10 py-6 text-center">
		// 		<motion.span
		// 			initial={{ opacity: 0, y: 15 }}
		// 			animate={{ opacity: 1, y: 0 }}
		// 			transition={{ duration: 0.5 }}
		// 			className="mt-5 text-sm font-semibold uppercase tracking-[6px] text-amber-400">
		// 			Contact Us
		// 		</motion.span>

		// 		<motion.h1
		// 			initial={{ opacity: 0, y: 30 }}
		// 			animate={{ opacity: 1, y: 0 }}
		// 			transition={{ delay: 0.2 }}
		// 			className="mt-6 font-serif text-5xl font-bold text-white md:text-7xl">
		// 			Let's Start A
		// 			<br />
		// 			Conversation
		// 		</motion.h1>

		// 		<div className="mx-auto mt-8 h-1 w-24 rounded-full bg-amber-400" />

		// 		<motion.p
		// 			initial={{ opacity: 0 }}
		// 			animate={{ opacity: 1 }}
		// 			transition={{ delay: 0.4 }}
		// 			className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-200">
		// 			Whether you're opening an account, applying for financing, or simply
		// 			have a question, our banking specialists are ready to provide
		// 			professional assistance every step of the way.
		// 		</motion.p>

		// 		<motion.div
		// 			initial={{ opacity: 0, y: 15 }}
		// 			animate={{ opacity: 1, y: 0 }}
		// 			transition={{ delay: 0.6 }}
		// 			className="mt-12 flex justify-center">
		// 			<div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md">
		// 				<Link
		// 					to="/"
		// 					className="flex items-center gap-2 text-white transition hover:text-amber-400">
		// 					<Home size={16} />
		// 					Home
		// 				</Link>

		// 				<ChevronRight size={16} className="text-white/50" />

		// 				<span className="text-amber-400">Contact Us</span>
		// 			</div>
		// 		</motion.div>
		// 	</div>

		// 	{/* Bottom Accent */}
		// 	<div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
		// </section>
		<section
			className="relative flex h-[420px] items-center justify-center overflow-hidden"
			style={{
				backgroundImage: `
					linear-gradient(rgba(8,40,28,.82), rgba(8,40,28,.82)),
					url('/page-title-bg2.jpg')
				`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}>
			{/* Animated Vertical Lines */}
			<div className="absolute inset-0 opacity-10">
				<div className="mx-auto flex h-full max-w-7xl justify-between">
					{[...Array(6)].map((_, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0.2 }}
							animate={{ opacity: [0.1, 0.3, 0.1] }}
							transition={{
								duration: 3,
								repeat: Infinity,
								delay: i * 0.3,
							}}
							className="h-full w-px bg-white"
						/>
					))}
				</div>
			</div>

			{/* Small Gold Accent */}
			<div className="absolute left-0 top-0 h-1 w-full bg-amber-400" />

			{/* Content */}
			<div className="relative z-10 text-center px-6">
				<motion.span
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-sm uppercase tracking-[6px] text-amber-400">
					Contact Us
				</motion.span>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="mt-6 font-serif text-5xl font-bold text-white md:text-7xl">
					Contact Us
				</motion.h1>

				<div className="mx-auto mt-8 h-1 w-24 rounded-full bg-amber-400" />

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}
					className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-200">
					Whether you're opening an account, applying for financing, or simply
					have a question, our banking specialists are ready to provide
					professional assistance every step of the way.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
					className="mt-12 flex justify-center">
					<div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-md">
						<Link
							to="/"
							className="flex items-center gap-2 text-white hover:text-amber-400">
							<Home size={16} />
							Home
						</Link>

						<ChevronRight size={16} className="text-white/50" />

						<span className="text-amber-400">Contact Us</span>
					</div>
				</motion.div>
			</div>

			{/* Bottom Border */}
			<div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
		</section>
	);
}
