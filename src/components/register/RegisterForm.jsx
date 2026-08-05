import { useState } from "react";
import { motion } from "framer-motion";
import PersonalInfo from "./PersonalInfo";
import PhoneField from "./PhoneField";
import CountryField from "./CountryField";
import AccountTypeField from "./AccountTypeField";
import CurrencyField from "./CurrencyField";
import SecurityFields from "./SecurityFields";
import TermsCheckbox from "./TermsCheckbox";
import RegisterSubmit from "./RegisterSubmit";

export default function RegisterForm() {
	const [termsAccepted, setTermsAccepted] = useState(false);

	const handleFormSubmit = () => {
		if (!termsAccepted) {
			alert("Please accept the Terms & Conditions to continue.");
			return;
		}

		// Replace with your API call logic here
		console.log("Registration submitted");
	};

	return (
		<div className="flex items-center justify-center bg-[#f8faf9] px-6 py-20">
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="w-full max-w-3xl rounded-[32px] bg-white p-10 shadow-2xl">
				{/* Header */}
				<div className="text-center">
					<span className="rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold uppercase tracking-[4px] text-emerald-700">
						Create Account
					</span>

					<h1 className="mt-6 font-serif text-5xl font-bold text-gray-900">
						Open Your Account
					</h1>

					<div className="mx-auto mt-5 h-1 w-20 rounded-full bg-amber-400" />

					<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
						Please complete the form below to create your secure online banking
						account.
					</p>
				</div>

				{/* Form */}
				<form
					className="mt-12 space-y-10"
					onSubmit={(e) => {
						e.preventDefault();
						handleFormSubmit();
					}}>
					{/* Personal Information */}
					<PersonalInfo />

					{/* Contact Information */}
					<div className="border-t border-gray-100 pt-8">
						<PhoneField />

						<div className="mt-8">
							<CountryField />
						</div>
					</div>

					{/* Account Details */}
					<div className="border-t border-gray-100 pt-8">
						<div className="mb-8">
							<h3 className="text-2xl font-bold text-gray-900">
								Account Details
							</h3>

							<p className="mt-2 text-gray-500">
								Select the account type and currency for your new banking
								account.
							</p>
						</div>

						<div className="space-y-6">
							<AccountTypeField />

							<CurrencyField />
						</div>
					</div>

					{/* Security */}
					<SecurityFields />

					{/* Terms */}
					<div id="terms">
						<TermsCheckbox
							checked={termsAccepted}
							onChange={setTermsAccepted}
						/>
					</div>

					{/* Submit */}
					<RegisterSubmit onSubmit={handleFormSubmit} />
				</form>
			</motion.div>
		</div>
	);
}
