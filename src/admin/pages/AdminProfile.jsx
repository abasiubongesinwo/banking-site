import { useState } from "react";
import {
	FaUser,
	FaEnvelope,
	FaPhone,
	FaShieldAlt,
	FaLock,
	FaSignOutAlt,
	FaEdit,
	FaSave,
} from "react-icons/fa";

export default function AdminProfile() {
	const [editing, setEditing] = useState(false);

	const [profile, setProfile] = useState({
		firstName: "Admin",
		lastName: "User",
		username: "admin",
		email: "admin@example.com",
		phone: "+1 800 000 0000",
		role: "Super Administrator",
	});

	const updateProfile = (field, value) => {
		setProfile((previous) => ({
			...previous,
			[field]: value,
		}));
	};

	const handleSave = () => {
		setEditing(false);

		console.log("Updated profile:", profile);
	};

	return (
		<div className="space-y-6">
			{/* Header */}

			<div>
				<p className="text-sm font-medium text-emerald-600">
					Account Management
				</p>

				<h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
					Admin Profile
				</h1>

				<p className="mt-2 text-sm text-gray-500">
					View and manage your administrator account information.
				</p>
			</div>

			<div className="grid gap-6 lg:grid-cols-[320px_1fr]">
				{/* Profile Card */}

				<div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
					<div className="flex flex-col items-center text-center">
						<div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-2xl font-bold text-emerald-700">
							{profile.firstName.charAt(0)}
							{profile.lastName.charAt(0)}
						</div>

						<h2 className="mt-4 text-lg font-bold text-gray-900">
							{profile.firstName} {profile.lastName}
						</h2>

						<p className="mt-1 text-sm text-gray-500">@{profile.username}</p>

						<span className="mt-4 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
							{profile.role}
						</span>
					</div>

					<div className="mt-6 border-t border-gray-100 pt-6">
						<div className="flex items-center gap-3">
							<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-gray-500">
								<FaShieldAlt size={14} />
							</div>

							<div>
								<p className="text-xs text-gray-400">Account Status</p>

								<p className="mt-0.5 text-sm font-semibold text-emerald-600">
									Active
								</p>
							</div>
						</div>
					</div>

					<div className="mt-4 flex items-center gap-3">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50 text-gray-500">
							<FaLock size={14} />
						</div>

						<div>
							<p className="text-xs text-gray-400">Two-Factor Authentication</p>

							<p className="mt-0.5 text-sm font-semibold text-emerald-600">
								Enabled
							</p>
						</div>
					</div>
				</div>

				{/* Profile Details */}

				<div className="space-y-6">
					<div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
						<div className="flex items-center justify-between border-b border-gray-100 p-6">
							<div>
								<h2 className="text-lg font-bold text-gray-900">
									Personal Information
								</h2>

								<p className="mt-1 text-sm text-gray-500">
									Update your administrator profile information.
								</p>
							</div>

							{!editing && (
								<button
									type="button"
									onClick={() => setEditing(true)}
									className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600">
									<FaEdit size={13} />
									Edit
								</button>
							)}
						</div>

						<div className="grid gap-5 p-6 md:grid-cols-2">
							<div>
								<label className="mb-2 block text-sm font-semibold text-gray-700">
									First Name
								</label>

								<div className="relative">
									<FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

									<input
										type="text"
										value={profile.firstName}
										disabled={!editing}
										onChange={(event) =>
											updateProfile("firstName", event.target.value)
										}
										className="h-11 w-full rounded-xl border border-gray-200 pl-11 pr-4 text-sm outline-none transition disabled:bg-gray-50 disabled:text-gray-500 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
									/>
								</div>
							</div>

							<div>
								<label className="mb-2 block text-sm font-semibold text-gray-700">
									Last Name
								</label>

								<div className="relative">
									<FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

									<input
										type="text"
										value={profile.lastName}
										disabled={!editing}
										onChange={(event) =>
											updateProfile("lastName", event.target.value)
										}
										className="h-11 w-full rounded-xl border border-gray-200 pl-11 pr-4 text-sm outline-none transition disabled:bg-gray-50 disabled:text-gray-500 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
									/>
								</div>
							</div>

							<div>
								<label className="mb-2 block text-sm font-semibold text-gray-700">
									Username
								</label>

								<input
									type="text"
									value={profile.username}
									disabled={!editing}
									onChange={(event) =>
										updateProfile("username", event.target.value)
									}
									className="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none transition disabled:bg-gray-50 disabled:text-gray-500 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
								/>
							</div>

							<div>
								<label className="mb-2 block text-sm font-semibold text-gray-700">
									Email Address
								</label>

								<div className="relative">
									<FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

									<input
										type="email"
										value={profile.email}
										disabled={!editing}
										onChange={(event) =>
											updateProfile("email", event.target.value)
										}
										className="h-11 w-full rounded-xl border border-gray-200 pl-11 pr-4 text-sm outline-none transition disabled:bg-gray-50 disabled:text-gray-500 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
									/>
								</div>
							</div>

							<div>
								<label className="mb-2 block text-sm font-semibold text-gray-700">
									Phone Number
								</label>

								<div className="relative">
									<FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

									<input
										type="tel"
										value={profile.phone}
										disabled={!editing}
										onChange={(event) =>
											updateProfile("phone", event.target.value)
										}
										className="h-11 w-full rounded-xl border border-gray-200 pl-11 pr-4 text-sm outline-none transition disabled:bg-gray-50 disabled:text-gray-500 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
									/>
								</div>
							</div>

							<div>
								<label className="mb-2 block text-sm font-semibold text-gray-700">
									Role
								</label>

								<input
									type="text"
									value={profile.role}
									disabled
									className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-500 outline-none"
								/>
							</div>
						</div>

						{editing && (
							<div className="flex justify-end gap-3 border-t border-gray-100 px-6 py-5">
								<button
									type="button"
									onClick={() => setEditing(false)}
									className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50">
									Cancel
								</button>

								<button
									type="button"
									onClick={handleSave}
									className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700">
									<FaSave size={13} />
									Save Changes
								</button>
							</div>
						)}
					</div>

					{/* Security Card */}

					<div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
						<div className="border-b border-gray-100 p-6">
							<h2 className="text-lg font-bold text-gray-900">
								Account Security
							</h2>

							<p className="mt-1 text-sm text-gray-500">
								Manage your password and authentication settings.
							</p>
						</div>

						<div className="divide-y divide-gray-100">
							<div className="flex items-center justify-between gap-4 p-6">
								<div className="flex items-center gap-4">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
										<FaLock />
									</div>

									<div>
										<h3 className="text-sm font-semibold text-gray-800">
											Password
										</h3>

										<p className="mt-1 text-xs text-gray-500">
											Last changed recently
										</p>
									</div>
								</div>

								<button
									type="button"
									className="rounded-xl border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 transition hover:bg-gray-50">
									Change
								</button>
							</div>

							<div className="flex items-center justify-between gap-4 p-6">
								<div className="flex items-center gap-4">
									<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
										<FaShieldAlt />
									</div>

									<div>
										<h3 className="text-sm font-semibold text-gray-800">
											Two-Factor Authentication
										</h3>

										<p className="mt-1 text-xs text-emerald-600">Enabled</p>
									</div>
								</div>

								<button
									type="button"
									className="rounded-xl border border-gray-200 px-4 py-2 text-xs font-semibold text-gray-600 transition hover:bg-gray-50">
									Manage
								</button>
							</div>
						</div>
					</div>

					{/* Session Card */}

					<div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
						<div className="border-b border-gray-100 p-6">
							<h2 className="text-lg font-bold text-gray-900">
								Current Session
							</h2>

							<p className="mt-1 text-sm text-gray-500">
								Information about your current administrator session.
							</p>
						</div>

						<div className="p-6">
							<div className="grid gap-4 sm:grid-cols-3">
								<div>
									<p className="text-xs text-gray-400">Device</p>

									<p className="mt-1 text-sm font-semibold text-gray-800">
										Desktop Browser
									</p>
								</div>

								<div>
									<p className="text-xs text-gray-400">Status</p>

									<p className="mt-1 text-sm font-semibold text-emerald-600">
										Active
									</p>
								</div>

								<div>
									<p className="text-xs text-gray-400">Last Activity</p>

									<p className="mt-1 text-sm font-semibold text-gray-800">
										Just now
									</p>
								</div>
							</div>

							<button
								type="button"
								className="mt-6 inline-flex items-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50">
								<FaSignOutAlt size={13} />
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
