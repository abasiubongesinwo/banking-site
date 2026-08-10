import { useState } from "react";
import {
	FaSearch,
	FaFilter,
	FaUserShield,
	FaSignInAlt,
	FaEdit,
	FaTrash,
	FaDownload,
	FaEye,
} from "react-icons/fa";

const activities = [
	{
		id: 1,
		action: "User Account Updated",
		description: "Updated customer account information",
		admin: "Admin User",
		type: "User Management",
		ip: "192.168.1.20",
		date: "Today, 10:42 AM",
		status: "Success",
		icon: FaEdit,
	},
	{
		id: 2,
		action: "Administrator Login",
		description: "Administrator successfully logged into the dashboard",
		admin: "Admin User",
		type: "Authentication",
		ip: "192.168.1.20",
		date: "Today, 09:31 AM",
		status: "Success",
		icon: FaSignInAlt,
	},
	{
		id: 3,
		action: "Transaction Reviewed",
		description: "Reviewed transaction #TRX-104829",
		admin: "John Admin",
		type: "Transactions",
		ip: "10.0.0.14",
		date: "Yesterday, 04:18 PM",
		status: "Success",
		icon: FaEye,
	},
	{
		id: 4,
		action: "Settings Updated",
		description: "Updated platform notification settings",
		admin: "Admin User",
		type: "Settings",
		ip: "192.168.1.20",
		date: "Yesterday, 02:45 PM",
		status: "Success",
		icon: FaEdit,
	},
	{
		id: 5,
		action: "User Suspended",
		description: "Suspended customer account #USR-839201",
		admin: "John Admin",
		type: "User Management",
		ip: "10.0.0.14",
		date: "Jul 28, 2026 11:22 AM",
		status: "Success",
		icon: FaUserShield,
	},
	{
		id: 6,
		action: "Failed Login Attempt",
		description: "Failed administrator authentication attempt",
		admin: "Unknown",
		type: "Authentication",
		ip: "172.16.0.44",
		date: "Jul 28, 2026 08:17 AM",
		status: "Failed",
		icon: FaSignInAlt,
	},
	{
		id: 7,
		action: "Admin Role Updated",
		description: "Updated permissions for Administrator role",
		admin: "Admin User",
		type: "Administration",
		ip: "192.168.1.20",
		date: "Jul 27, 2026 03:40 PM",
		status: "Success",
		icon: FaUserShield,
	},
	{
		id: 8,
		action: "Record Deleted",
		description: "Deleted an obsolete support record",
		admin: "John Admin",
		type: "System",
		ip: "10.0.0.14",
		date: "Jul 27, 2026 01:10 PM",
		status: "Success",
		icon: FaTrash,
	},
];

export default function AdminActivity() {
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("All");

	const categories = [
		"All",
		"Authentication",
		"User Management",
		"Transactions",
		"Settings",
		"Administration",
		"System",
	];

	const filteredActivities = activities.filter((activity) => {
		const query = search.toLowerCase();

		const matchesSearch =
			activity.action.toLowerCase().includes(query) ||
			activity.description.toLowerCase().includes(query) ||
			activity.admin.toLowerCase().includes(query) ||
			activity.ip.toLowerCase().includes(query);

		const matchesFilter = filter === "All" || activity.type === filter;

		return matchesSearch && matchesFilter;
	});

	const handleExport = () => {
		console.log("Exporting activity logs...");
	};

	return (
		<div className="space-y-6">
			{/* Header */}

			<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<p className="text-sm font-medium text-emerald-600">
						Security & Monitoring
					</p>

					<h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
						Admin Activity
					</h1>

					<p className="mt-2 text-sm text-gray-500">
						Monitor administrator actions and security events across the
						platform.
					</p>
				</div>

				<button
					type="button"
					onClick={handleExport}
					className="inline-flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-600 shadow-sm transition hover:bg-gray-50">
					<FaDownload size={12} />
					Export Logs
				</button>
			</div>

			{/* Summary */}

			<div className="grid gap-4 sm:grid-cols-3">
				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-gray-500">Total Activities</p>

					<p className="mt-2 text-2xl font-bold text-gray-900">1,284</p>

					<p className="mt-1 text-xs text-gray-400">Recorded this month</p>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-gray-500">Successful Actions</p>

					<p className="mt-2 text-2xl font-bold text-emerald-600">1,271</p>

					<p className="mt-1 text-xs text-gray-400">98.9% of all activities</p>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-gray-500">Failed Events</p>

					<p className="mt-2 text-2xl font-bold text-red-600">13</p>

					<p className="mt-1 text-xs text-gray-400">Requires monitoring</p>
				</div>
			</div>

			{/* Activity Table */}

			<div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
				<div className="border-b border-gray-100 p-5">
					<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
						<div className="relative w-full lg:max-w-md">
							<FaSearch
								size={14}
								className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
							/>

							<input
								type="search"
								value={search}
								onChange={(event) => setSearch(event.target.value)}
								placeholder="Search activity..."
								className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
							/>
						</div>

						<div className="flex items-center gap-2">
							<FaFilter size={13} className="text-gray-400" />

							<select
								value={filter}
								onChange={(event) => setFilter(event.target.value)}
								className="h-11 rounded-xl border border-gray-200 bg-white px-3 text-sm text-gray-600 outline-none focus:border-emerald-500">
								{categories.map((category) => (
									<option key={category} value={category}>
										{category}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>

				{/* Desktop Table */}

				<div className="hidden overflow-x-auto md:block">
					<table className="w-full min-w-[900px]">
						<thead>
							<tr className="border-b border-gray-100 bg-gray-50/70">
								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Activity
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Administrator
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									IP Address
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Date
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Status
								</th>
							</tr>
						</thead>

						<tbody className="divide-y divide-gray-100">
							{filteredActivities.map((activity) => {
								const Icon = activity.icon;

								return (
									<tr
										key={activity.id}
										className="transition hover:bg-gray-50/60">
										<td className="px-6 py-4">
											<div className="flex items-center gap-3">
												<div
													className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
														activity.status === "Failed" ?
															"bg-red-50 text-red-500"
														:	"bg-emerald-50 text-emerald-600"
													}`}>
													<Icon size={14} />
												</div>

												<div>
													<p className="text-sm font-semibold text-gray-800">
														{activity.action}
													</p>

													<p className="mt-0.5 max-w-sm text-xs text-gray-400">
														{activity.description}
													</p>
												</div>
											</div>
										</td>

										<td className="px-6 py-4 text-sm text-gray-600">
											{activity.admin}
										</td>

										<td className="px-6 py-4 font-mono text-xs text-gray-500">
											{activity.ip}
										</td>

										<td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
											{activity.date}
										</td>

										<td className="px-6 py-4">
											<span
												className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
													activity.status === "Success" ?
														"bg-emerald-50 text-emerald-700"
													:	"bg-red-50 text-red-600"
												}`}>
												{activity.status}
											</span>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>

				{/* Mobile Cards */}

				<div className="divide-y divide-gray-100 md:hidden">
					{filteredActivities.map((activity) => {
						const Icon = activity.icon;

						return (
							<div key={activity.id} className="p-5">
								<div className="flex gap-3">
									<div
										className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
											activity.status === "Failed" ?
												"bg-red-50 text-red-500"
											:	"bg-emerald-50 text-emerald-600"
										}`}>
										<Icon size={14} />
									</div>

									<div className="min-w-0 flex-1">
										<div className="flex items-start justify-between gap-3">
											<div>
												<p className="text-sm font-semibold text-gray-800">
													{activity.action}
												</p>

												<p className="mt-1 text-xs text-gray-400">
													{activity.description}
												</p>
											</div>

											<span
												className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold ${
													activity.status === "Success" ?
														"bg-emerald-50 text-emerald-700"
													:	"bg-red-50 text-red-600"
												}`}>
												{activity.status}
											</span>
										</div>

										<div className="mt-3 grid grid-cols-2 gap-3 text-xs">
											<div>
												<p className="text-gray-400">Administrator</p>

												<p className="mt-1 font-medium text-gray-600">
													{activity.admin}
												</p>
											</div>

											<div>
												<p className="text-gray-400">IP Address</p>

												<p className="mt-1 font-mono text-gray-600">
													{activity.ip}
												</p>
											</div>

											<div className="col-span-2">
												<p className="text-gray-400">Date</p>

												<p className="mt-1 text-gray-600">{activity.date}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{filteredActivities.length === 0 && (
					<div className="px-6 py-16 text-center">
						<FaSearch className="mx-auto text-3xl text-gray-300" />

						<p className="mt-4 text-sm font-semibold text-gray-800">
							No activity found
						</p>

						<p className="mt-1 text-xs text-gray-400">
							Try changing your search or filter.
						</p>
					</div>
				)}

				{/* Footer */}

				<div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-xs text-gray-400">
						Showing{" "}
						<span className="font-semibold text-gray-600">
							{filteredActivities.length}
						</span>{" "}
						of <span className="font-semibold text-gray-600">1,284</span>{" "}
						activities
					</p>

					<div className="flex items-center gap-2">
						<button
							type="button"
							disabled
							className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-300">
							Previous
						</button>

						<span className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white">
							1
						</span>

						<button
							type="button"
							className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600 transition hover:bg-gray-50">
							2
						</button>

						<button
							type="button"
							className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600 transition hover:bg-gray-50">
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
