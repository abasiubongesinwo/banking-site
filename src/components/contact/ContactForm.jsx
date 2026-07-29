import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Phone, FileText, MessageSquare, Send } from "lucide-react";

export default function ContactForm() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: -60 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.7 }}
			className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-xl">
			<span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-emerald-700">
				Send Message
			</span>

			<h2 className="mt-5 font-serif text-4xl font-bold text-gray-900">
				How Can We Help?
			</h2>

			<p className="mt-4 leading-8 text-gray-600">
				Complete the form below and one of our banking specialists will contact
				you as soon as possible.
			</p>

			<form onSubmit={handleSubmit} className="mt-10 space-y-6">
				<div className="grid gap-6 md:grid-cols-2">
					<div className="relative">
						<User
							size={20}
							className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald-600"
						/>

						<input
							type="text"
							name="name"
							placeholder="Full Name"
							value={formData.name}
							onChange={handleChange}
							className="w-full rounded-xl border border-gray-200 bg-gray-50 py-4 pl-14 pr-5 outline-none transition focus:border-emerald-600 focus:bg-white"
						/>
					</div>

					<div className="relative">
						<Mail
							size={20}
							className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald-600"
						/>

						<input
							type="email"
							name="email"
							placeholder="Email Address"
							value={formData.email}
							onChange={handleChange}
							className="w-full rounded-xl border border-gray-200 bg-gray-50 py-4 pl-14 pr-5 outline-none transition focus:border-emerald-600 focus:bg-white"
						/>
					</div>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					<div className="relative">
						<Phone
							size={20}
							className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald-600"
						/>

						<input
							type="tel"
							name="phone"
							placeholder="Phone Number"
							value={formData.phone}
							onChange={handleChange}
							className="w-full rounded-xl border border-gray-200 bg-gray-50 py-4 pl-14 pr-5 outline-none transition focus:border-emerald-600 focus:bg-white"
						/>
					</div>

					<div className="relative">
						<FileText
							size={20}
							className="absolute left-5 top-1/2 -translate-y-1/2 text-emerald-600"
						/>

						<input
							type="text"
							name="subject"
							placeholder="Subject"
							value={formData.subject}
							onChange={handleChange}
							className="w-full rounded-xl border border-gray-200 bg-gray-50 py-4 pl-14 pr-5 outline-none transition focus:border-emerald-600 focus:bg-white"
						/>
					</div>
				</div>

				<div className="relative">
					<MessageSquare
						size={20}
						className="absolute left-5 top-6 text-emerald-600"
					/>

					<textarea
						rows={8}
						name="message"
						placeholder="Write your message..."
						value={formData.message}
						onChange={handleChange}
						className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 py-5 pl-14 pr-5 outline-none transition focus:border-emerald-600 focus:bg-white"
					/>
				</div>

				<motion.button
					whileHover={{
						scale: 1.03,
						y: -2,
					}}
					whileTap={{
						scale: 0.97,
					}}
					type="submit"
					className="flex items-center gap-3 rounded-xl bg-emerald-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-emerald-700">
					<Send size={18} />
					Send Message
				</motion.button>
			</form>
		</motion.div>
	);
}
