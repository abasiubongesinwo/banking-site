import React, { useMemo, useState } from "react";

const accountTypes = [
	"Checking Account",
	"Saving Account",
	"Fixed Deposit Account",
	"Current Account",
	"Crypto Currency Account",
	"Business Account",
	"Non Resident Account",
	"Cooperate Business Account",
	"Investment Account",
];

const countryCodes = [
	"AF",
	"AL",
	"DZ",
	"AD",
	"AO",
	"AG",
	"AR",
	"AM",
	"AU",
	"AT",
	"AZ",
	"BS",
	"BH",
	"BD",
	"BB",
	"BY",
	"BE",
	"BZ",
	"BJ",
	"BT",
	"BO",
	"BA",
	"BW",
	"BR",
	"BN",
	"BG",
	"BF",
	"BI",
	"CV",
	"KH",
	"CM",
	"CA",
	"CF",
	"TD",
	"CL",
	"CN",
	"CO",
	"KM",
	"CG",
	"CD",
	"CR",
	"CI",
	"HR",
	"CU",
	"CY",
	"CZ",
	"DK",
	"DJ",
	"DM",
	"DO",
	"EC",
	"EG",
	"SV",
	"GQ",
	"ER",
	"EE",
	"SZ",
	"ET",
	"FJ",
	"FI",
	"FR",
	"GA",
	"GM",
	"GE",
	"DE",
	"GH",
	"GR",
	"GD",
	"GT",
	"GN",
	"GW",
	"GY",
	"HT",
	"HN",
	"HU",
	"IS",
	"IN",
	"ID",
	"IR",
	"IQ",
	"IE",
	"IL",
	"IT",
	"JM",
	"JP",
	"JO",
	"KZ",
	"KE",
	"KI",
	"KP",
	"KR",
	"KW",
	"KG",
	"LA",
	"LV",
	"LB",
	"LS",
	"LR",
	"LY",
	"LI",
	"LT",
	"LU",
	"MG",
	"MW",
	"MY",
	"MV",
	"ML",
	"MT",
	"MH",
	"MR",
	"MU",
	"MX",
	"FM",
	"MD",
	"MC",
	"MN",
	"ME",
	"MA",
	"MZ",
	"MM",
	"NA",
	"NR",
	"NP",
	"NL",
	"NZ",
	"NI",
	"NE",
	"NG",
	"MK",
	"NO",
	"OM",
	"PK",
	"PW",
	"PA",
	"PG",
	"PY",
	"PE",
	"PH",
	"PL",
	"PT",
	"QA",
	"RO",
	"RU",
	"RW",
	"KN",
	"LC",
	"VC",
	"WS",
	"SM",
	"ST",
	"SA",
	"SN",
	"RS",
	"SC",
	"SL",
	"SG",
	"SK",
	"SI",
	"SB",
	"SO",
	"ZA",
	"SS",
	"ES",
	"LK",
	"SD",
	"SR",
	"SE",
	"CH",
	"SY",
	"TW",
	"TJ",
	"TZ",
	"TH",
	"TL",
	"TG",
	"TO",
	"TT",
	"TN",
	"TR",
	"TM",
	"TV",
	"UG",
	"UA",
	"AE",
	"GB",
	"US",
	"UY",
	"UZ",
	"VU",
	"VA",
	"VE",
	"VN",
	"YE",
	"ZM",
	"ZW",
];

const countryNames = new Intl.DisplayNames(["en"], {
	type: "region",
});

const countries = countryCodes
	.map((code) => ({
		code,
		name: countryNames.of(code),
	}))
	.filter((country) => country.name)
	.sort((a, b) => a.name.localeCompare(b.name));

const initialForm = {
	firstName: "",
	middleName: "",
	lastName: "",
	username: "",
	email: "",
	phoneNumber: "",
	dateOfBirth: "",
	address: "",
	nationality: "Nigeria",
	accountType: "",
	accountNumber: "",
	imf: "",
	swift: "",
	cot: "",
	transactionPin: "",
	profilePhoto: null,
	password: "",
	confirmPassword: "",
};

function generateNumber(length = 10) {
	let result = "";

	for (let i = 0; i < length; i++) {
		result += Math.floor(Math.random() * 10);
	}

	return result;
}

function generateCode() {
	return generateNumber(7);
}

export default function CreateUser() {
	const [form, setForm] = useState(initialForm);
	const [message, setMessage] = useState("");
	const [preview, setPreview] = useState("");

	const fullName = useMemo(() => {
		return [form.firstName, form.middleName, form.lastName]
			.filter(Boolean)
			.join(" ");
	}, [form.firstName, form.middleName, form.lastName]);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setForm((current) => ({
			...current,
			[name]: value,
		}));

		setMessage("");
	};

	const handleGenerateAccountNumber = () => {
		setForm((current) => ({
			...current,
			accountNumber: generateNumber(10),
		}));
	};

	const handleGenerateCodes = () => {
		setForm((current) => ({
			...current,
			imf: generateCode(),
			swift: generateCode(),
			cot: generateCode(),
			transactionPin: generateNumber(4),
		}));
	};

	const handlePhotoChange = (e) => {
		const file = e.target.files?.[0];

		if (!file) {
			return;
		}

		setForm((current) => ({
			...current,
			profilePhoto: file,
		}));

		setPreview(URL.createObjectURL(file));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (form.password !== form.confirmPassword) {
			setMessage("Passwords do not match.");
			return;
		}

		if (!form.accountType) {
			setMessage("Please select an account type.");
			return;
		}

		/*
		 * Backend will be connected here later.
		 *
		 * For now, this only demonstrates the admin UI.
		 */

		console.log("New user:", {
			...form,
			fullName,
		});

		setMessage("User information is ready to be submitted.");

		// Do not reset yet so the admin can review the information.
	};

	const inputClass =
		"mt-2 h-10 w-full rounded-[3px] border border-[#dfe5ec] bg-[#f9fafb] px-3 text-[13px] text-[#243b55] outline-none transition focus:border-[#42a5f5] focus:bg-white";

	const labelClass = "text-[13px] text-[#111827]";

	return (
		<div className="min-h-full bg-[#f5f8fb] px-4 py-5 sm:px-6 lg:px-7">
			<h1 className="mb-6 text-[28px] font-normal text-[#243b55]">
				Create New User
			</h1>

			<div className="rounded-[5px] bg-white px-4 py-6 shadow-[0_8px_25px_rgba(0,0,0,0.10)] sm:px-6 lg:px-8">
				<form onSubmit={handleSubmit}>
					{/* PERSONAL INFORMATION */}
					<div className="mb-8">
						<h2 className="mb-5 border-b border-gray-200 pb-3 text-[17px] font-medium text-[#243b55]">
							Personal Information
						</h2>

						<div className="grid grid-cols-1 gap-5">
							<div>
								<label className={labelClass}>Firstname</label>
								<input
									name="firstName"
									value={form.firstName}
									onChange={handleChange}
									className={inputClass}
								/>
							</div>

							<div>
								<label className={labelClass}>Middle Name</label>
								<input
									name="middleName"
									value={form.middleName}
									onChange={handleChange}
									className={inputClass}
								/>
							</div>

							<div>
								<label className={labelClass}>Last Name</label>
								<input
									name="lastName"
									value={form.lastName}
									onChange={handleChange}
									className={inputClass}
								/>
							</div>

							<div>
								<label className={labelClass}>Username</label>
								<input
									name="username"
									value={form.username}
									onChange={handleChange}
									className={inputClass}
								/>
							</div>

							<div>
								<label className={labelClass}>Email</label>
								<input
									type="email"
									name="email"
									value={form.email}
									onChange={handleChange}
									className={inputClass}
								/>
							</div>

							<div>
								<label className={labelClass}>Phone Number</label>
								<input
									type="tel"
									name="phoneNumber"
									value={form.phoneNumber}
									onChange={handleChange}
									className={inputClass}
								/>
							</div>

							<div>
								<label className={labelClass}>Date of birth</label>
								<input
									type="date"
									name="dateOfBirth"
									value={form.dateOfBirth}
									onChange={handleChange}
									className={inputClass}
								/>
							</div>

							<div>
								<label className={labelClass}>Address</label>
								<input
									name="address"
									value={form.address}
									onChange={handleChange}
									className={inputClass}
								/>
							</div>
						</div>
					</div>

					{/* ACCOUNT INFORMATION */}
					<div className="mb-8">
						<h2 className="mb-5 border-b border-gray-200 pb-3 text-[17px] font-medium text-[#243b55]">
							Account Information
						</h2>

						<div className="grid grid-cols-1 gap-5">
							<div>
								<label className={labelClass}>Nationality</label>

								<select
									name="nationality"
									value={form.nationality}
									onChange={handleChange}
									className={inputClass}>
									<option value="">Select Nationality</option>

									{countries.map((country) => (
										<option key={country.code} value={country.name}>
											{country.name}
										</option>
									))}
								</select>
							</div>

							<div>
								<label className={labelClass}>Account Type</label>

								<select
									name="accountType"
									value={form.accountType}
									onChange={handleChange}
									className={inputClass}>
									<option value="">Please select Account Type</option>

									{accountTypes.map((type) => (
										<option key={type} value={type}>
											{type}
										</option>
									))}
								</select>
							</div>

							<div>
								<label className={labelClass}>Account Number</label>

								<div className="flex gap-2">
									<input
										name="accountNumber"
										value={form.accountNumber}
										onChange={handleChange}
										className={inputClass}
									/>

									<button
										type="button"
										onClick={handleGenerateAccountNumber}
										className="mt-2 h-10 shrink-0 rounded-[3px] bg-[#42a5f5] px-4 text-[12px] text-white hover:bg-[#3195e7]">
										Generate
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* TRANSFER CODES */}
					<div className="mb-8">
						<div className="mb-5 flex flex-col justify-between gap-3 border-b border-gray-200 pb-3 sm:flex-row sm:items-center">
							<h2 className="text-[17px] font-medium text-[#243b55]">
								Transfer Codes
							</h2>

							<button
								type="button"
								onClick={handleGenerateCodes}
								className="w-fit rounded-[3px] bg-[#6258ce] px-4 py-2 text-[12px] text-white hover:bg-[#5148b8]">
								Generate Codes
							</button>
						</div>

						<div className="grid grid-cols-1 gap-5">
							<div>
								<label className={labelClass}>IMF</label>
								<input
									name="imf"
									value={form.imf}
									onChange={handleChange}
									className={inputClass}
								/>
							</div>

							<div>
								<label className={labelClass}>SWIFT</label>
								<input
									name="swift"
									value={form.swift}
									onChange={handleChange}
									className={inputClass}
								/>
							</div>

							<div>
								<label className={labelClass}>COT</label>
								<input
									name="cot"
									value={form.cot}
									onChange={handleChange}
									className={inputClass}
								/>
							</div>

							<div>
								<label className={labelClass}>4 Digit Transaction Pin</label>

								<input
									name="transactionPin"
									value={form.transactionPin}
									onChange={handleChange}
									maxLength={4}
									inputMode="numeric"
									className={inputClass}
								/>
							</div>
						</div>
					</div>

					{/* PROFILE PHOTO */}
					<div className="mb-8">
						<h2 className="mb-5 border-b border-gray-200 pb-3 text-[17px] font-medium text-[#243b55]">
							Profile Photo
						</h2>

						<div>
							<label className={labelClass}>Upload Profile photo</label>

							<input
								type="file"
								accept="image/*"
								onChange={handlePhotoChange}
								className="mt-2 block h-10 w-full rounded-[3px] border border-[#dfe5ec] bg-[#f9fafb] text-[12px] text-gray-600 file:mr-3 file:h-full file:border-0 file:bg-gray-100 file:px-3"
							/>

							{preview && (
								<img
									src={preview}
									alt="Profile preview"
									className="mt-4 h-20 w-20 rounded-full object-cover"
								/>
							)}
						</div>
					</div>

					{/* LOGIN INFORMATION */}
					<div className="mb-8">
						<div className="grid grid-cols-1 gap-5">
							<div>
								<label className={labelClass}>Password</label>

								<input
									type="password"
									name="password"
									value={form.password}
									onChange={handleChange}
									className={inputClass}
								/>
							</div>

							<div>
								<label className={labelClass}>Confirm Password</label>

								<input
									type="password"
									name="confirmPassword"
									value={form.confirmPassword}
									onChange={handleChange}
									className={inputClass}
								/>
							</div>
						</div>
					</div>

					{/* MESSAGE */}
					{message && (
						<div className="mb-5 rounded-[3px] border border-yellow-200 bg-yellow-50 px-4 py-3 text-[13px] text-yellow-800">
							{message}
						</div>
					)}

					{/* SUBMIT */}
					<button
						type="submit"
						className="rounded-[3px] bg-[#192139] px-5 py-3 text-[13px] font-medium text-white transition hover:bg-[#11182d]">
						Add User
					</button>
				</form>
			</div>
		</div>
	);
}
