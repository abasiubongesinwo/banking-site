import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	FaArrowLeft,
	FaUser,
	FaEnvelope,
	FaPhone,
	FaGlobe,
	FaWallet,
	FaLock,
	FaEye,
	FaEyeSlash,
	FaSave,
} from "react-icons/fa";

const accountTypes = [
	"Checking Account",
	"Savings Account",
	"Fixed Deposit Account",
	"Current Account",
	"Money Market Account",
	"Certificate of Deposit Account",
	"Crypto Currency Account",
	"Business Account",
	"Corporate Business Account",
	"Non Resident Account",
	"Investment Account",
	"Retirement Account (IRA)",
	"Joint Account",
	"Trust Account",
	"Student Account",
	"Senior Citizen Account",
	"Premium Account",
	"Foreign Currency Account",
	"Escrow Account",
];

const currencies = [
	{ code: "USD", symbol: "$", name: "United States Dollar" },
	{ code: "EUR", symbol: "€", name: "Euro" },
	{ code: "GBP", symbol: "£", name: "British Pound" },
	{ code: "JPY", symbol: "¥", name: "Japanese Yen" },
	{ code: "CNY", symbol: "¥", name: "Chinese Yuan" },
	{ code: "CAD", symbol: "C$", name: "Canadian Dollar" },
	{ code: "AUD", symbol: "A$", name: "Australian Dollar" },
	{ code: "CHF", symbol: "CHF", name: "Swiss Franc" },
	{ code: "INR", symbol: "₹", name: "Indian Rupee" },
	{ code: "BRL", symbol: "R$", name: "Brazilian Real" },
	{ code: "MXN", symbol: "MX$", name: "Mexican Peso" },
	{ code: "ZAR", symbol: "R", name: "South African Rand" },
	{ code: "SGD", symbol: "S$", name: "Singapore Dollar" },
	{ code: "HKD", symbol: "HK$", name: "Hong Kong Dollar" },
	{ code: "SEK", symbol: "kr", name: "Swedish Krona" },
	{ code: "NOK", symbol: "kr", name: "Norwegian Krone" },
	{ code: "DKK", symbol: "kr", name: "Danish Krone" },
	{ code: "NZD", symbol: "NZ$", name: "New Zealand Dollar" },
	{ code: "KRW", symbol: "₩", name: "South Korean Won" },
	{ code: "TRY", symbol: "₺", name: "Turkish Lira" },
	{ code: "AED", symbol: "د.إ", name: "UAE Dirham" },
	{ code: "SAR", symbol: "﷼", name: "Saudi Riyal" },
	{ code: "PLN", symbol: "zł", name: "Polish Zloty" },
	{ code: "THB", symbol: "฿", name: "Thai Baht" },
	{ code: "IDR", symbol: "Rp", name: "Indonesian Rupiah" },
	{ code: "MYR", symbol: "RM", name: "Malaysian Ringgit" },
	{ code: "PHP", symbol: "₱", name: "Philippine Peso" },
	{ code: "KES", symbol: "KSh", name: "Kenyan Shilling" },
	{ code: "NGN", symbol: "₦", name: "Nigerian Naira" },
];

const countries = [
	"United States",
	"United Kingdom",
	"Canada",
	"Australia",
	"Germany",
	"France",
	"United Arab Emirates",
	"Saudi Arabia",
	"Nigeria",
	"South Africa",
	"Kenya",
	"Ghana",
	"India",
	"China",
	"Japan",
	"Singapore",
	"Malaysia",
	"Brazil",
	"Mexico",
	"Netherlands",
	"Switzerland",
	"Sweden",
	"Norway",
	"Denmark",
	"New Zealand",
	"Turkey",
	"Poland",
	"Philippines",
	"Indonesia",
];

function InputField({
	label,
	name,
	value,
	onChange,
	type = "text",
	placeholder,
	icon: Icon,
	required = true,
}) {
	return (
		<div>
			<label
				htmlFor={name}
				className="mb-2 block text-sm font-semibold text-gray-700">
				{label}
				{required && <span className="ml-1 text-red-500">*</span>}
			</label>

			<div className="relative">
				{Icon && (
					<Icon
						size={15}
						className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
					/>
				)}

				<input
					id={name}
					name={name}
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					required={required}
					className={`h-12 w-full rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 ${
						Icon ? "pl-11 pr-4" : "px-4"
					}`}
				/>
			</div>
		</div>
	);
}

function SelectField({ label, name, value, onChange, options, icon: Icon }) {
	return (
		<div>
			<label
				htmlFor={name}
				className="mb-2 block text-sm font-semibold text-gray-700">
				{label}
				<span className="ml-1 text-red-500">*</span>
			</label>

			<div className="relative">
				{Icon && (
					<Icon
						size={15}
						className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
					/>
				)}

				<select
					id={name}
					name={name}
					value={value}
					onChange={onChange}
					required
					className={`h-12 w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 ${
						Icon ? "pl-11 pr-4" : "px-4"
					}`}>
					<option value="">Select {label}</option>

					{options.map((option) => {
						const value = typeof option === "string" ? option : option.code;

						const text =
							typeof option === "string" ? option : (
								`${option.name} (${option.code})`
							);

						return (
							<option key={value} value={value}>
								{text}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
}

export default function CreateUser() {
	const navigate = useNavigate();

	const [showPassword, setShowPassword] = useState(false);
	const [showPin, setShowPin] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const [formData, setFormData] = useState({
		firstName: "",
		middleName: "",
		lastName: "",
		username: "",
		email: "",
		phone: "",
		country: "",
		accountType: "",
		currency: "USD",
		transactionPin: "",
		password: "",
		confirmPassword: "",
		initialBalance: "0",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormData((previous) => ({
			...previous,
			[name]: value,
		}));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (formData.password !== formData.confirmPassword) {
			alert("Passwords do not match.");
			return;
		}

		if (formData.transactionPin.length !== 4) {
			alert("Transaction PIN must contain exactly 4 digits.");
			return;
		}

		try {
			setIsSubmitting(true);

			// Temporary frontend submission.
			// We will connect this to the backend API later.

			await new Promise((resolve) => setTimeout(resolve, 800));

			console.log("Create user payload:", formData);

			alert("User created successfully.");

			navigate("/admin/users");
		} catch (error) {
			console.error("Create user error:", error);
			alert("Unable to create user.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="mx-auto max-w-6xl space-y-6">
			{/* Header */}

			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<Link
						to="/admin/users"
						className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-emerald-600">
						<FaArrowLeft size={12} />
						Back to Users
					</Link>

					<h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
						Create New User
					</h1>

					<p className="mt-2 text-sm text-gray-500">
						Create and configure a new customer banking account.
					</p>
				</div>
			</div>

			<form onSubmit={handleSubmit}>
				<div className="space-y-6">
					{/* Personal Information */}

					<section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
						<div className="border-b border-gray-100 px-6 py-5">
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
									<FaUser size={16} />
								</div>

								<div>
									<h2 className="font-bold text-gray-900">
										Personal Information
									</h2>

									<p className="mt-1 text-xs text-gray-500">
										Enter the customer's legal information.
									</p>
								</div>
							</div>
						</div>

						<div className="grid gap-5 p-6 md:grid-cols-3">
							<InputField
								label="Legal First Name"
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
								placeholder="John"
								icon={FaUser}
							/>

							<InputField
								label="Middle Name"
								name="middleName"
								value={formData.middleName}
								onChange={handleChange}
								placeholder="Michael"
								icon={FaUser}
							/>

							<InputField
								label="Legal Last Name"
								name="lastName"
								value={formData.lastName}
								onChange={handleChange}
								placeholder="Smith"
								icon={FaUser}
							/>

							<InputField
								label="Username"
								name="username"
								value={formData.username}
								onChange={handleChange}
								placeholder="johnsmith"
								icon={FaUser}
							/>

							<InputField
								label="Email Address"
								name="email"
								type="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="john@example.com"
								icon={FaEnvelope}
							/>

							<InputField
								label="Phone Number"
								name="phone"
								type="tel"
								value={formData.phone}
								onChange={handleChange}
								placeholder="+1 202 555 0123"
								icon={FaPhone}
							/>

							<SelectField
								label="Country"
								name="country"
								value={formData.country}
								onChange={handleChange}
								options={countries}
								icon={FaGlobe}
							/>
						</div>
					</section>

					{/* Account Information */}

					<section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
						<div className="border-b border-gray-100 px-6 py-5">
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
									<FaWallet size={16} />
								</div>

								<div>
									<h2 className="font-bold text-gray-900">
										Account Information
									</h2>

									<p className="mt-1 text-xs text-gray-500">
										Configure the customer's banking account.
									</p>
								</div>
							</div>
						</div>

						<div className="grid gap-5 p-6 md:grid-cols-2">
							<SelectField
								label="Account Type"
								name="accountType"
								value={formData.accountType}
								onChange={handleChange}
								options={accountTypes}
								icon={FaWallet}
							/>

							<SelectField
								label="Currency"
								name="currency"
								value={formData.currency}
								onChange={handleChange}
								options={currencies}
								icon={FaWallet}
							/>

							<InputField
								label="Initial Balance"
								name="initialBalance"
								type="number"
								value={formData.initialBalance}
								onChange={handleChange}
								placeholder="0.00"
								icon={FaWallet}
							/>
						</div>
					</section>

					{/* Security */}

					<section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
						<div className="border-b border-gray-100 px-6 py-5">
							<div className="flex items-center gap-3">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
									<FaLock size={16} />
								</div>

								<div>
									<h2 className="font-bold text-gray-900">
										Security Credentials
									</h2>

									<p className="mt-1 text-xs text-gray-500">
										Set the login and transaction credentials.
									</p>
								</div>
							</div>
						</div>

						<div className="grid gap-5 p-6 md:grid-cols-2">
							{/* Transaction PIN */}

							<div>
								<label
									htmlFor="transactionPin"
									className="mb-2 block text-sm font-semibold text-gray-700">
									4-Digit Transaction PIN
									<span className="ml-1 text-red-500">*</span>
								</label>

								<div className="relative">
									<FaLock
										size={14}
										className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
									/>

									<input
										id="transactionPin"
										name="transactionPin"
										type={showPin ? "text" : "password"}
										maxLength={4}
										inputMode="numeric"
										pattern="[0-9]{4}"
										value={formData.transactionPin}
										onChange={(event) =>
											setFormData((previous) => ({
												...previous,
												transactionPin: event.target.value.replace(/\D/g, ""),
											}))
										}
										placeholder="••••"
										required
										className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-12 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
									/>

									<button
										type="button"
										onClick={() => setShowPin(!showPin)}
										className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
										{showPin ?
											<FaEyeSlash />
										:	<FaEye />}
									</button>
								</div>

								<p className="mt-2 text-xs text-gray-400">
									Used to authorize transactions.
								</p>
							</div>

							{/* Password */}

							<div>
								<label
									htmlFor="password"
									className="mb-2 block text-sm font-semibold text-gray-700">
									Password
									<span className="ml-1 text-red-500">*</span>
								</label>

								<div className="relative">
									<FaLock
										size={14}
										className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
									/>

									<input
										id="password"
										name="password"
										type={showPassword ? "text" : "password"}
										value={formData.password}
										onChange={handleChange}
										placeholder="Enter password"
										required
										minLength={8}
										className="h-12 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-12 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
									/>

									<button
										type="button"
										onClick={() => setShowPassword(!showPassword)}
										className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
										{showPassword ?
											<FaEyeSlash />
										:	<FaEye />}
									</button>
								</div>

								<p className="mt-2 text-xs text-gray-400">
									Minimum 8 characters.
								</p>
							</div>

							{/* Confirm Password */}

							<InputField
								label="Confirm Password"
								name="confirmPassword"
								type={showPassword ? "text" : "password"}
								value={formData.confirmPassword}
								onChange={handleChange}
								placeholder="Confirm password"
								icon={FaLock}
							/>
						</div>
					</section>

					{/* Actions */}

					<div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
						<Link
							to="/admin/users"
							className="inline-flex h-12 items-center justify-center rounded-xl border border-gray-200 bg-white px-6 text-sm font-semibold text-gray-600 transition hover:bg-gray-50">
							Cancel
						</Link>

						<button
							type="submit"
							disabled={isSubmitting}
							className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60">
							<FaSave size={14} />

							{isSubmitting ? "Creating User..." : "Create User"}
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
