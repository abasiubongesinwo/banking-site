import { useMemo, useState } from "react";
import {
	FaSearch,
	FaMoneyBillWave,
	FaCheckCircle,
	FaClock,
	FaTimesCircle,
	FaEye,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";

const withdrawalsData = [
	{
		id: "WTH-10001",
		user: "John Smith",
		username: "johnsmith",
		amount: "$1,500.00",
		currency: "USD",
		method: "Bank Transfer",
		status: "Completed",
		date: "Jul 29, 2026",
		time: "09:10 AM",
	},
	{
		id: "WTH-10002",
		user: "Sarah Williams",
		username: "sarahw",
		amount: "£750.00",
		currency: "GBP",
		method: "Bank Transfer",
		status: "Pending",
		date: "Jul 29, 2026",
		time: "08:42 AM",
	},
	{
		id: "WTH-10003",
		user: "Michael Brown",
		username: "michaelb",
		amount: "$3,200.00",
		currency: "USD",
		method: "Wire Transfer",
		status: "Completed",
		date: "Jul 28, 2026",
		time: "04:18 PM",
	},
	{
		id: "WTH-10004",
		user: "David Johnson",
		username: "davidj",
		amount: "$950.00",
		currency: "USD",
		method: "Bank Transfer",
		status: "Failed",
		date: "Jul 28, 2026",
		time: "02:30 PM",
	},
	{
		id: "WTH-10005",
		user: "Emily Davis",
		username: "emilyd",
		amount: "A$2,100.00",
		currency: "AUD",
		method: "International Transfer",
		status: "Completed",
		date: "Jul 27, 2026",
		time: "11:20 AM",
	},
	{
		id: "WTH-10006",
		user: "Robert Wilson",
		username: "robertw",
		amount: "$1,800.00",
		currency: "USD",
		method: "Bank Transfer",
		status: "Pending",
		date: "Jul 27, 2026",
		time: "08:05 AM",
	},
];

function StatusBadge({ status }) {
	const config = {
		Completed: {
			className: "bg-emerald-50 text-emerald-700",
			icon: FaCheckCircle,
		},
		Pending: {
			className: "bg-amber-50 text-amber-700",
			icon: FaClock,
		},
		Failed: {
			className: "bg-red-50 text-red-700",
			icon: FaTimesCircle,
		},
	};

	const current = config[status] || config.Pending;
	const Icon = current.icon;

	return (
		<span
			className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${current.className}`}>
			<Icon size={10} />
			{status}
		</span>
	);
}

export default function Withdrawals() {
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState("All");
	const [methodFilter, setMethodFilter] = useState("All");
	const [page, setPage] = useState(1);

	const perPage = 5;

	const filteredWithdrawals = useMemo(() => {
		return withdrawalsData.filter((withdrawal) => {
			const query = search.toLowerCase();

			const matchesSearch =
				withdrawal.id.toLowerCase().includes(query) ||
				withdrawal.user.toLowerCase().includes(query) ||
				withdrawal.username.toLowerCase().includes(query) ||
				withdrawal.method.toLowerCase().includes(query);

			const matchesStatus =
				statusFilter === "All" || withdrawal.status === statusFilter;

			const matchesMethod =
				methodFilter === "All" || withdrawal.method === methodFilter;

			return matchesSearch && matchesStatus && matchesMethod;
		});
	}, [search, statusFilter, methodFilter]);

	const totalPages = Math.max(
		1,
		Math.ceil(filteredWithdrawals.length / perPage),
	);

	const currentPage = Math.min(page, totalPages);

	const visibleWithdrawals = filteredWithdrawals.slice(
		(currentPage - 1) * perPage,
		currentPage * perPage,
	);

	const completedCount = withdrawalsData.filter(
		(item) => item.status === "Completed",
	).length;

	const pendingCount = withdrawalsData.filter(
		(item) => item.status === "Pending",
	).length;

	const failedCount = withdrawalsData.filter(
		(item) => item.status === "Failed",
	).length;

	return (
		<div className="space-y-6">
			{/* Header */}

			<div>
				<p className="text-sm font-medium text-emerald-600">
					Financial Management
				</p>

				<h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
					Withdrawals
				</h1>

				<p className="mt-2 text-sm text-gray-500">
					Review and manage customer withdrawal requests.
				</p>
			</div>

			{/* Summary */}

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Total Withdrawals</p>

							<p className="mt-2 text-2xl font-bold text-gray-900">
								{withdrawalsData.length}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
							<FaMoneyBillWave />
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Completed</p>

							<p className="mt-2 text-2xl font-bold text-emerald-600">
								{completedCount}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
							<FaCheckCircle />
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Pending Review</p>

							<p className="mt-2 text-2xl font-bold text-amber-600">
								{pendingCount}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
							<FaClock />
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Failed</p>

							<p className="mt-2 text-2xl font-bold text-red-600">
								{failedCount}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
							<FaTimesCircle />
						</div>
					</div>
				</div>
			</div>

			{/* Table */}

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
								placeholder="Search withdrawals..."
								className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
							/>
						</div>

						<select
							value={statusFilter}
							onChange={(event) => {
								setStatusFilter(event.target.value);
								setPage(1);
							}}
							className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-emerald-500">
							<option value="All">All Status</option>
							<option value="Completed">Completed</option>
							<option value="Pending">Pending</option>
							<option value="Failed">Failed</option>
						</select>

						<select
							value={methodFilter}
							onChange={(event) => {
								setMethodFilter(event.target.value);
								setPage(1);
							}}
							className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-emerald-500">
							<option value="All">All Withdrawal Methods</option>
							<option value="Bank Transfer">Bank Transfer</option>
							<option value="Wire Transfer">Wire Transfer</option>
							<option value="International Transfer">
								International Transfer
							</option>
						</select>
					</div>
				</div>

				{/* Table */}

				<div className="overflow-x-auto">
					<table className="w-full min-w-[1000px]">
						<thead>
							<tr className="border-b border-gray-100 bg-gray-50/70">
								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Withdrawal
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Customer
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Amount
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Method
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Status
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
							{visibleWithdrawals.map((withdrawal) => (
								<tr
									key={withdrawal.id}
									className="border-b border-gray-50 transition hover:bg-gray-50/70">
									<td className="px-6 py-5">
										<p className="text-sm font-semibold text-gray-800">
											{withdrawal.id}
										</p>
									</td>

									<td className="px-6 py-5">
										<div className="flex items-center gap-3">
											<div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
												{withdrawal.user
													.split(" ")
													.map((word) => word[0])
													.join("")
													.slice(0, 2)}
											</div>

											<div>
												<p className="text-sm font-semibold text-gray-800">
													{withdrawal.user}
												</p>

												<p className="mt-0.5 text-xs text-gray-400">
													@{withdrawal.username}
												</p>
											</div>
										</div>
									</td>

									<td className="px-6 py-5">
										<p className="text-sm font-bold text-red-600">
											-{withdrawal.amount}
										</p>

										<p className="mt-1 text-xs text-gray-400">
											{withdrawal.currency}
										</p>
									</td>

									<td className="px-6 py-5 text-sm text-gray-600">
										{withdrawal.method}
									</td>

									<td className="px-6 py-5">
										<StatusBadge status={withdrawal.status} />
									</td>

									<td className="px-6 py-5">
										<p className="text-sm text-gray-600">{withdrawal.date}</p>

										<p className="mt-1 text-xs text-gray-400">
											{withdrawal.time}
										</p>
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

							{visibleWithdrawals.length === 0 && (
								<tr>
									<td colSpan="7" className="px-6 py-16 text-center">
										<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
											<FaMoneyBillWave />
										</div>

										<p className="mt-4 text-sm font-semibold text-gray-800">
											No withdrawals found
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
							{filteredWithdrawals.length === 0 ?
								0
							:	(currentPage - 1) * perPage + 1}
						</span>{" "}
						to{" "}
						<span className="font-semibold text-gray-700">
							{Math.min(currentPage * perPage, filteredWithdrawals.length)}
						</span>{" "}
						of{" "}
						<span className="font-semibold text-gray-700">
							{filteredWithdrawals.length}
						</span>{" "}
						withdrawals
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
