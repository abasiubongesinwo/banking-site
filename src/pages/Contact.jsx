import ContactBanner from "../components/contact/ContactBanner";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import QuickContactCards from "../components/contact/QuickContactCards";
import ContactMap from "../components/contact/ContactMap";
import ContactFAQ from "../components/contact/ContactFAQ";
import AccountBanner from "../components/home/AccountBanner";

export default function Contact() {
	return (
		<>
			{/* Banner */}
			<ContactBanner />

			{/* Contact Form & Contact Info */}
			<section className="bg-[#f8faf9] py-24">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-20 text-center">
						<span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold uppercase tracking-[3px] text-emerald-700">
							Get In Touch
						</span>

						<h2 className="mt-6 font-serif text-5xl font-bold text-gray-900">
							We're Here To Help
						</h2>

						<div className="mx-auto mt-6 h-1 w-20 rounded-full bg-amber-400" />

						<p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
							Whether you have questions about your account, digital banking,
							loans, investments, or any of our financial services, our
							experienced banking professionals are ready to assist you.
						</p>
					</div>

					<div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
						<ContactForm />
						<ContactInfo />
					</div>
				</div>
			</section>

			{/* Quick Contact Cards */}
			<QuickContactCards />

			{/* Google Map */}
			<ContactMap />

			{/* FAQ */}
			<ContactFAQ />

			{/* CTA */}
			<AccountBanner />
		</>
	);
}
