import { motion } from "framer-motion";
import {
	Building2,
	MapPin,
	Phone,
	Mail,
	Clock,
	// Facebook,
	// Twitter,
	// Linkedin,
	// Instagram,
} from "lucide-react";

const contactDetails = [
	{
		icon: <MapPin size={22} />,
		title: "Office Address",
		value: "301 East Water Street\nCharlottesville, VA 22904\nVirginia",
	},
	{
		icon: <Phone size={22} />,
		title: "Call Us",
		value: "+1 (302) 555-2480\n+1 (302) 555-0115",
	},
	{
		icon: <Mail size={22} />,
		title: "Email Address",
		value: "support@firbod.com\ninfo@firbod.com",
	},
	{
		icon: <Clock size={22} />,
		title: "Working Hours",
		value: "Monday - Friday\n8:30 AM - 5:30 PM",
	},
];

const socials = [
	// {
	// 	icon: <Facebook size={18} />,
	// },
	// {
	// 	icon: <Twitter size={18} />,
	// },
	// {
	// 	icon: <Linkedin size={18} />,
	// },
	// {
	// 	icon: <Instagram size={18} />,
	// },
];

export default function ContactInfo() {
	return (
		<motion.div
			initial={{ opacity: 0, x: 60 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7 }}
			className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-700 via-emerald-600 to-emerald-800 p-10 text-white shadow-2xl">
			{/* Background Glow */}
			<div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

			<div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />

			<div className="relative z-10">
				<div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-md">
					<Building2 size={38} />
				</div>

				<h2 className="mt-8 font-serif text-4xl font-bold">
					Contact Information
				</h2>

				<p className="mt-5 leading-8 text-emerald-50">
					Our relationship managers are available to answer your questions and
					assist with your banking needs.
				</p>

				<div className="mt-10 space-y-5">
					{contactDetails.map((item, index) => (
						<motion.div
							key={item.title}
							initial={{
								opacity: 0,
								y: 20,
							}}
							whileInView={{
								opacity: 1,
								y: 0,
							}}
							transition={{
								delay: index * 0.15,
							}}
							whileHover={{
								scale: 1.02,
							}}
							className="flex gap-5 rounded-2xl bg-white/10 p-5 backdrop-blur-md transition">
							<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 text-amber-300">
								{item.icon}
							</div>

							<div>
								<h3 className="font-semibold text-xl">{item.title}</h3>

								<p className="mt-2 whitespace-pre-line leading-7 text-emerald-50">
									{item.value}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Divider */}

				<div className="my-10 h-px bg-white/10" />

				<h3 className="text-xl font-semibold">Follow Us</h3>

				<div className="mt-5 flex gap-4">
					{socials.map((item, index) => (
						<motion.button
							key={index}
							whileHover={{
								y: -5,
								scale: 1.08,
							}}
							whileTap={{
								scale: 0.95,
							}}
							className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-amber-400 hover:text-gray-900">
							{item.icon}
						</motion.button>
					))}
				</div>

				{/* Bottom Card */}

				<div className="mt-10 rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
					<h4 className="text-lg font-semibold">Need Immediate Assistance?</h4>

					<p className="mt-2 leading-7 text-emerald-50">
						Our customer support team is available to provide personalized
						assistance and answer any questions about your accounts, cards,
						loans, or digital banking services.
					</p>
				</div>
			</div>
		</motion.div>
	);
}
