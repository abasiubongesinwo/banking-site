import { motion } from "framer-motion";
import { MapPin, Navigation, Phone } from "lucide-react";

export default function ContactMap() {
	return (
		<section className="bg-white py-24">
			<div className="mx-auto max-w-7xl px-6">
				{/* Heading */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mb-16 text-center">
					<span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-emerald-700">
						Find Us
					</span>

					<h2 className="mt-6 font-serif text-5xl font-bold text-gray-900">
						Visit Our Headquarters
					</h2>

					<div className="mx-auto mt-5 h-1 w-20 rounded-full bg-amber-400" />

					<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
						Visit our banking headquarters or schedule an appointment with one
						of our financial advisors.
					</p>
				</motion.div>

				<div className="relative overflow-hidden rounded-[36px] shadow-2xl">
					{/* Google Map */}
					<iframe
						title="First Bank of Delaware"
						src="https://www.google.com/maps?q=301+East+Water+Street,+Charlottesville,+VA+22904&output=embed"
						width="100%"
						height="600"
						loading="lazy"
						className="border-0"
						allowFullScreen
					/>

					{/* Floating Information Card */}
					<motion.div
						initial={{
							opacity: 0,
							x: -40,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						className="absolute left-8 top-8 max-w-sm rounded-3xl bg-white p-8 shadow-2xl">
						<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-white">
							<MapPin size={30} />
						</div>

						<h3 className="mt-6 text-3xl font-bold text-gray-900">
							Main Branch
						</h3>

						<p className="mt-5 leading-8 text-gray-600">
							301 East Water Street
							<br />
							Charlottesville
							<br />
							VA 22904
							<br />
							Virginia
						</p>

						<div className="mt-8 flex items-center gap-3 text-emerald-600">
							<Phone size={18} />

							<span className="font-medium">+1 (302) 555-2480</span>
						</div>

						<button className="mt-8 flex items-center gap-3 rounded-xl bg-emerald-600 px-6 py-4 font-semibold text-white transition hover:bg-emerald-700">
							<Navigation size={18} />
							Get Directions
						</button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
