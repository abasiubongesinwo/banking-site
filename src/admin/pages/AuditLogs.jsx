import { useMemo, useState } from "react";
import {
	FaSearch,
	FaHistory,
	FaShieldAlt,
	FaUser,
	FaExchangeAlt,
	FaCog,
	FaEye,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";

const auditLogsData = [
	{
		id: "LOG-10001",
		admin: "Super Admin",
		action: "Approved KYC application",
		target: "John Smith",
		category: "KYC",
		ip: "192.168.1.24",
		date: "Jul 29, 2026",
		time: "10:21 AM",
	},
	{
		id: "LOG-10002",
		admin: "Admin User",
		action: "Approved withdrawal",
		target: "Sarah Williams",
		category: "Transaction",
		ip: "192.168.1.31",
		date: "Jul 29, 2026",
		time: "09:54 AM",
	},
	{
		id: "LOG-10003",
		admin: "Super Admin",
		action: "Updated customer profile",
		target: "Michael Brown",
		category: "User",
		ip: "192.168.1.24",
		date: "Jul 29, 2026",
		time: "09:32 AM",
	},
	{
		id: "LOG-10004",
		admin: "Admin User",
		action: "Changed system settings",
		target: "Bank Settings",
		category: "System",
		ip: "192.168.1.31",
		date: "Jul 28, 2026",
		time: "05:42 PM",
	},
	{
		id: "LOG-10005",
		admin: "Super Admin",
		action: "Blocked customer card",
		target: "David Johnson",
		category: "Security",
		ip: "192.168.1.24",
		date: "Jul 28, 2026",
		time: "03:18 PM",
	},
	{
		id: "LOG-10006",
		admin: "Admin User",
		action: "Reviewed transaction",
		target: "Emily Davis",
		category: "Transaction",
		ip: "192.168.1.31",
		date: "Jul 28, 2026",
		time: "01:46 PM",
	},
];

function CategoryIcon({ category }) {
	const icons = {
		KYC: FaShieldAlt,
		Transaction: FaExchangeAlt,
		User: FaUser,
		System: FaCog,
		Security: FaShieldAlt,
	};

	const Icon = icons[category] || FaHistory;

	return (
		<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
			<Icon size={15} />
		</div>
	);
}

function CategoryBadge({ category }) {
	const styles = {
		KYC: "bg-blue-50 text-blue-700",
		Transaction: "bg-emerald-50 text-emerald-700",
		User: "bg-purple-50 text-purple-700",
		System: "bg-gray-100 text-gray-700",
		Security: "bg-red-50 text-red-700",
	};

	return (
		<span
			className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
				styles[category] || "bg-gray-100 text-gray-600"
			}`}>
			{category}
		</span>
	);
}

export default function AuditLogs() {
	const [search, setSearch] = useState("");
	const [categoryFilter, setCategoryFilter] = useState("All");
	const [adminFilter, setAdminFilter] = useState("All");
	const [page, setPage] = useState(1);

	const perPage = 5;

	const filteredLogs = useMemo(() => {
		return auditLogsData.filter((log) => {
			const query = search.toLowerCase();

			const matchesSearch =
				log.id.toLowerCase().includes(query) ||
				log.admin.toLowerCase().includes(query) ||
				log.action.toLowerCase().includes(query) ||
				log.target.toLowerCase().includes(query) ||
				log.ip.toLowerCase().includes(query);

			const matchesCategory =
				categoryFilter === "All" || log.category === categoryFilter;

			const matchesAdmin = adminFilter === "All" || log.admin === adminFilter;

			return matchesSearch && matchesCategory && matchesAdmin;
		});
	}, [search, categoryFilter, adminFilter]);

	const totalPages = Math.max(1, Math.ceil(filteredLogs.length / perPage));

	const currentPage = Math.min(page, totalPages);

	const visibleLogs = filteredLogs.slice(
		(currentPage - 1) * perPage,
		currentPage * perPage,
	);

	const securityCount = auditLogsData.filter(
		(log) => log.category === "Security",
	).length;

	const transactionCount = auditLogsData.filter(
		(log) => log.category === "Transaction",
	).length;

	const kycCount = auditLogsData.filter((log) => log.category === "KYC").length;

	return (
		<div className="space-y-6">
			{/* Header */}

			<div>
				<p className="text-sm font-medium text-emerald-600">
					Security & Compliance
				</p>

				<h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
					Audit Logs
				</h1>

				<p className="mt-2 text-sm text-gray-500">
					Monitor administrative actions and important system activity.
				</p>
			</div>

			{/* Summary */}

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Total Logs</p>

							<p className="mt-2 text-2xl font-bold text-gray-900">
								{auditLogsData.length}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
							<FaHistory />
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Security Events</p>

							<p className="mt-2 text-2xl font-bold text-red-600">
								{securityCount}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
							<FaShieldAlt />
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Transactions</p>

							<p className="mt-2 text-2xl font-bold text-emerald-600">
								{transactionCount}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
							<FaExchangeAlt />
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">KYC Events</p>

							<p className="mt-2 text-2xl font-bold text-indigo-600">
								{kycCount}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
							<FaShieldAlt />
						</div>
					</div>
				</div>
			</div>

			{/* Logs Table */}

			<div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
				{/* Filters */}

				<div className="border-b border-gray-100 p-5">
					<div className="grid gap-3 lg:grid-cols-3">
						<div className="relative">
							<FaSearch
								size={14}
								className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
							/>

							<input
								type="search"
								value={search}
								onChange={(event) => {
									setSearch(event.target.value);
									setPage(1);
								}}
								placeholder="Search audit logs..."
								className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
							/>
						</div>

						<select
							value={categoryFilter}
							onChange={(event) => {
								setCategoryFilter(event.target.value);
								setPage(1);
							}}
							className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-emerald-500">
							<option value="All">All Categories</option>
							<option value="KYC">KYC</option>
							<option value="Transaction">Transaction</option>
							<option value="User">User</option>
							<option value="System">System</option>
							<option value="Security">Security</option>
						</select>

						<select
							value={adminFilter}
							onChange={(event) => {
								setAdminFilter(event.target.value);
								setPage(1);
							}}
							className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-emerald-500">
							<option value="All">All Administrators</option>
							<option value="Super Admin">Super Admin</option>
							<option value="Admin User">Admin User</option>
						</select>
					</div>
				</div>

				{/* Table */}

				<div className="overflow-x-auto">
					<table className="w-full min-w-[1100px]">
						<thead>
							<tr className="border-b border-gray-100 bg-gray-50/70">
								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Log
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Administrator
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Action
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Category
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									IP Address
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Date
								</th>

								<th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-400">
									Action
								</th>
							</tr>
						</thead>

						<tbody>
							{visibleLogs.map((log) => (
								<tr
									key={log.id}
									className="border-b border-gray-50 transition hover:bg-gray-50/70">
									<td className="px-6 py-5">
										<div className="flex items-center gap-3">
											<CategoryIcon category={log.category} />

											<div>
												<p className="text-sm font-semibold text-gray-800">
													{log.id}
												</p>

												<p className="mt-1 text-xs text-gray-400">{log.time}</p>
											</div>
										</div>
									</td>

									<td className="px-6 py-5">
										<p className="text-sm font-semibold text-gray-800">
											{log.admin}
										</p>

										<p className="mt-1 text-xs text-gray-400">Administrator</p>
									</td>

									<td className="px-6 py-5">
										<p className="text-sm font-medium text-gray-700">
											{log.action}
										</p>

										<p className="mt-1 text-xs text-gray-400">
											Target: {log.target}
										</p>
									</td>

									<td className="px-6 py-5">
										<CategoryBadge category={log.category} />
									</td>

									<td className="px-6 py-5">
										<code className="rounded-lg bg-gray-100 px-2.5 py-1.5 text-xs text-gray-600">
											{log.ip}
										</code>
									</td>

									<td className="px-6 py-5">
										<p className="text-sm text-gray-700">{log.date}</p>

										<p className="mt-1 text-xs text-gray-400">{log.time}</p>
									</td>

									<td className="px-6 py-5 text-right">
										<button
											type="button"
											className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600">
											<FaEye size={11} />
											View
										</button>
									</td>
								</tr>
							))}

							{visibleLogs.length === 0 && (
								<tr>
									<td colSpan="7" className="px-6 py-16 text-center">
										<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
											<FaHistory />
										</div>

										<p className="mt-4 text-sm font-semibold text-gray-800">
											No audit logs found
										</p>

										<p className="mt-1 text-sm text-gray-500">
											Try changing your search or filters.
										</p>
									</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>

				{/* Pagination */}

				<div className="flex flex-col gap-4 border-t border-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-sm text-gray-500">
						Showing{" "}
						<span className="font-semibold text-gray-700">
							{filteredLogs.length === 0 ? 0 : (currentPage - 1) * perPage + 1}
						</span>{" "}
						to{" "}
						<span className="font-semibold text-gray-700">
							{Math.min(currentPage * perPage, filteredLogs.length)}
						</span>{" "}
						of{" "}
						<span className="font-semibold text-gray-700">
							{filteredLogs.length}
						</span>{" "}
						logs
					</p>

					<div className="flex items-center gap-2">
						<button
							type="button"
							disabled={currentPage === 1}
							onClick={() => setPage((previous) => previous - 1)}
							className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40">
							<FaChevronLeft size={11} />
						</button>

						<span className="px-2 text-sm text-gray-500">
							Page {currentPage} of {totalPages}
						</span>

						<button
							type="button"
							disabled={currentPage === totalPages}
							onClick={() => setPage((previous) => previous + 1)}
							className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40">
							<FaChevronRight size={11} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
