import { useState } from "react";
import {
	FaCog,
	FaUserShield,
	FaBell,
	FaLock,
	FaSave,
	FaGlobe,
} from "react-icons/fa";

export default function Settings() {
	const [activeTab, setActiveTab] = useState("general");

	const [settings, setSettings] = useState({
		bankName: "First Bank of Delaware",
		supportEmail: "support@example.com",
		supportPhone: "+1 800 000 0000",
		timezone: "America/New_York",
		currency: "USD",
		emailNotifications: true,
		transactionNotifications: true,
		securityNotifications: true,
		twoFactor: true,
	});

	const updateSetting = (field, value) => {
		setSettings((previous) => ({
			...previous,
			[field]: value,
		}));
	};

	const tabs = [
		{
			id: "general",
			label: "General",
			icon: FaCog,
		},
		{
			id: "security",
			label: "Security",
			icon: FaLock,
		},
		{
			id: "notifications",
			label: "Notifications",
			icon: FaBell,
		},
		{
			id: "administration",
			label: "Administration",
			icon: FaUserShield,
		},
	];

	const handleSave = (event) => {
		event.preventDefault();

		console.log("Settings to save:", settings);
	};

	return (
		<div className="space-y-6">
			{/* Header */}

			<div>
				<p className="text-sm font-medium text-emerald-600">
					System Configuration
				</p>

				<h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
					Settings
				</h1>

				<p className="mt-2 text-sm text-gray-500">
					Manage your banking platform configuration and administrative
					preferences.
				</p>
			</div>

			<div className="grid gap-6 lg:grid-cols-[240px_1fr]">
				{/* Settings Navigation */}

				<div className="h-fit rounded-2xl border border-gray-200 bg-white p-3 shadow-sm">
					<div className="space-y-1">
						{tabs.map((tab) => {
							const Icon = tab.icon;

							const isActive = activeTab === tab.id;

							return (
								<button
									key={tab.id}
									type="button"
									onClick={() => setActiveTab(tab.id)}
									className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
										isActive ?
											"bg-emerald-50 text-emerald-700"
										:	"text-gray-600 hover:bg-gray-50 hover:text-gray-900"
									}`}>
									<Icon size={15} />

									{tab.label}
								</button>
							);
						})}
					</div>
				</div>

				{/* Content */}

				<div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
					<form onSubmit={handleSave}>
						{/* General */}

						{activeTab === "general" && (
							<>
								<div className="border-b border-gray-100 p-6">
									<h2 className="text-lg font-bold text-gray-900">
										General Settings
									</h2>

									<p className="mt-1 text-sm text-gray-500">
										Configure the basic information for your banking platform.
									</p>
								</div>

								<div className="grid gap-5 p-6 md:grid-cols-2">
									<div className="md:col-span-2">
										<label className="mb-2 block text-sm font-semibold text-gray-700">
											Bank Name
										</label>

										<input
											type="text"
											value={settings.bankName}
											onChange={(event) =>
												updateSetting("bankName", event.target.value)
											}
											className="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
										/>
									</div>

									<div>
										<label className="mb-2 block text-sm font-semibold text-gray-700">
											Support Email
										</label>

										<input
											type="email"
											value={settings.supportEmail}
											onChange={(event) =>
												updateSetting("supportEmail", event.target.value)
											}
											className="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
										/>
									</div>

									<div>
										<label className="mb-2 block text-sm font-semibold text-gray-700">
											Support Phone
										</label>

										<input
											type="tel"
											value={settings.supportPhone}
											onChange={(event) =>
												updateSetting("supportPhone", event.target.value)
											}
											className="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
										/>
									</div>

									<div>
										<label className="mb-2 block text-sm font-semibold text-gray-700">
											Timezone
										</label>

										<div className="relative">
											<FaGlobe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

											<select
												value={settings.timezone}
												onChange={(event) =>
													updateSetting("timezone", event.target.value)
												}
												className="h-11 w-full appearance-none rounded-xl border border-gray-200 bg-white pl-11 pr-4 text-sm outline-none focus:border-emerald-500">
												<option value="America/New_York">Eastern Time</option>

												<option value="America/Chicago">Central Time</option>

												<option value="America/Denver">Mountain Time</option>

												<option value="America/Los_Angeles">
													Pacific Time
												</option>

												<option value="Africa/Lagos">West Africa Time</option>

												<option value="Europe/London">
													Greenwich Mean Time
												</option>
											</select>
										</div>
									</div>

									<div>
										<label className="mb-2 block text-sm font-semibold text-gray-700">
											Default Currency
										</label>

										<select
											value={settings.currency}
											onChange={(event) =>
												updateSetting("currency", event.target.value)
											}
											className="h-11 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm outline-none focus:border-emerald-500">
											<option value="USD">United States Dollar (USD)</option>

											<option value="EUR">Euro (EUR)</option>

											<option value="GBP">British Pound (GBP)</option>

											<option value="NGN">Nigerian Naira (NGN)</option>

											<option value="CAD">Canadian Dollar (CAD)</option>
										</select>
									</div>
								</div>
							</>
						)}

						{/* Security */}

						{activeTab === "security" && (
							<>
								<div className="border-b border-gray-100 p-6">
									<h2 className="text-lg font-bold text-gray-900">
										Security Settings
									</h2>

									<p className="mt-1 text-sm text-gray-500">
										Manage authentication and security preferences.
									</p>
								</div>

								<div className="divide-y divide-gray-100">
									<div className="flex items-center justify-between gap-6 p-6">
										<div>
											<h3 className="text-sm font-semibold text-gray-800">
												Two-Factor Authentication
											</h3>

											<p className="mt-1 max-w-xl text-sm text-gray-500">
												Require administrators to use an additional
												authentication factor when signing in.
											</p>
										</div>

										<button
											type="button"
											onClick={() =>
												updateSetting("twoFactor", !settings.twoFactor)
											}
											className={`relative h-6 w-11 shrink-0 rounded-full transition ${
												settings.twoFactor ? "bg-emerald-600" : "bg-gray-300"
											}`}>
											<span
												className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition ${
													settings.twoFactor ? "left-6" : "left-1"
												}`}
											/>
										</button>
									</div>

									<div className="p-6">
										<h3 className="text-sm font-semibold text-gray-800">
											Administrator Access
										</h3>

										<p className="mt-1 text-sm text-gray-500">
											Administrative access should only be granted to authorized
											staff members.
										</p>

										<div className="mt-4 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-800">
											Security-sensitive changes should be connected to your
											backend authorization system before production deployment.
										</div>
									</div>
								</div>
							</>
						)}

						{/* Notifications */}

						{activeTab === "notifications" && (
							<>
								<div className="border-b border-gray-100 p-6">
									<h2 className="text-lg font-bold text-gray-900">
										Notification Settings
									</h2>

									<p className="mt-1 text-sm text-gray-500">
										Choose which events should generate administrative
										notifications.
									</p>
								</div>

								<div className="divide-y divide-gray-100">
									{[
										[
											"emailNotifications",
											"Email Notifications",
											"Receive important platform notifications through email.",
										],
										[
											"transactionNotifications",
											"Transaction Alerts",
											"Receive alerts when important financial transactions require attention.",
										],
										[
											"securityNotifications",
											"Security Alerts",
											"Receive alerts about suspicious activity and security events.",
										],
									].map(([field, title, description]) => (
										<div
											key={field}
											className="flex items-center justify-between gap-6 p-6">
											<div>
												<h3 className="text-sm font-semibold text-gray-800">
													{title}
												</h3>

												<p className="mt-1 text-sm text-gray-500">
													{description}
												</p>
											</div>

											<button
												type="button"
												onClick={() => updateSetting(field, !settings[field])}
												className={`relative h-6 w-11 shrink-0 rounded-full transition ${
													settings[field] ? "bg-emerald-600" : "bg-gray-300"
												}`}>
												<span
													className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition ${
														settings[field] ? "left-6" : "left-1"
													}`}
												/>
											</button>
										</div>
									))}
								</div>
							</>
						)}

						{/* Administration */}

						{activeTab === "administration" && (
							<>
								<div className="border-b border-gray-100 p-6">
									<h2 className="text-lg font-bold text-gray-900">
										Administration
									</h2>

									<p className="mt-1 text-sm text-gray-500">
										Manage administrative roles and platform access.
									</p>
								</div>

								<div className="space-y-4 p-6">
									<div className="rounded-2xl border border-gray-200 p-5">
										<div className="flex items-center gap-4">
											<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
												<FaUserShield />
											</div>

											<div>
												<h3 className="font-semibold text-gray-900">
													Super Administrator
												</h3>

												<p className="mt-1 text-sm text-gray-500">
													Full access to system configuration, customers,
													transactions, and administrative tools.
												</p>
											</div>
										</div>
									</div>

									<div className="rounded-2xl border border-gray-200 p-5">
										<div className="flex items-center gap-4">
											<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
												<FaUserShield />
											</div>

											<div>
												<h3 className="font-semibold text-gray-900">
													Administrator
												</h3>

												<p className="mt-1 text-sm text-gray-500">
													Standard administrative access based on assigned
													permissions.
												</p>
											</div>
										</div>
									</div>

									<div className="rounded-xl bg-blue-50 p-4 text-sm leading-6 text-blue-800">
										Role permissions should be enforced by the backend. The
										frontend should never be treated as the security boundary.
									</div>
								</div>
							</>
						)}

						{/* Save */}

						<div className="flex justify-end border-t border-gray-100 px-6 py-5">
							<button
								type="submit"
								className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700">
								<FaSave size={13} />
								Save Changes
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
