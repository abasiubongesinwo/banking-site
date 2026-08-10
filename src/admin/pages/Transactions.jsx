import { useMemo, useState } from "react";
import {
	FaSearch,
	FaExchangeAlt,
	FaArrowUp,
	FaArrowDown,
	FaCheckCircle,
	FaClock,
	FaTimesCircle,
	FaEye,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";

const transactionsData = [
	{
		id: "TXN-10001",
		user: "John Smith",
		username: "johnsmith",
		type: "Transfer",
		direction: "Credit",
		amount: "$2,500.00",
		currency: "USD",
		method: "Bank Transfer",
		status: "Completed",
		date: "Jul 29, 2026",
		time: "09:42 AM",
	},
	{
		id: "TXN-10002",
		user: "Sarah Williams",
		username: "sarahw",
		type: "Withdrawal",
		direction: "Debit",
		amount: "£850.00",
		currency: "GBP",
		method: "Bank Withdrawal",
		status: "Pending",
		date: "Jul 29, 2026",
		time: "09:18 AM",
	},
	{
		id: "TXN-10003",
		user: "Michael Brown",
		username: "michaelb",
		type: "Deposit",
		direction: "Credit",
		amount: "$5,000.00",
		currency: "USD",
		method: "Card Deposit",
		status: "Completed",
		date: "Jul 28, 2026",
		time: "04:35 PM",
	},
	{
		id: "TXN-10004",
		user: "David Johnson",
		username: "davidj",
		type: "Payment",
		direction: "Debit",
		amount: "$420.50",
		currency: "USD",
		method: "Online Payment",
		status: "Failed",
		date: "Jul 28, 2026",
		time: "02:12 PM",
	},
	{
		id: "TXN-10005",
		user: "Emily Davis",
		username: "emilyd",
		type: "Transfer",
		direction: "Debit",
		amount: "A$1,200.00",
		currency: "AUD",
		method: "International Transfer",
		status: "Completed",
		date: "Jul 27, 2026",
		time: "11:05 AM",
	},
	{
		id: "TXN-10006",
		user: "Robert Wilson",
		username: "robertw",
		type: "Deposit",
		direction: "Credit",
		amount: "$1,750.00",
		currency: "USD",
		method: "Bank Deposit",
		status: "Pending",
		date: "Jul 27, 2026",
		time: "08:47 AM",
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

function TransactionType({ type, direction }) {
	const isCredit = direction === "Credit";

	return (
		<div className="flex items-center gap-3">
			<div
				className={`flex h-10 w-10 items-center justify-center rounded-xl ${
					isCredit ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500"
				}`}>
				{isCredit ?
					<FaArrowDown size={14} />
				:	<FaArrowUp size={14} />}
			</div>

			<div>
				<p className="text-sm font-semibold text-gray-800">{type}</p>

				<p
					className={`mt-0.5 text-xs ${
						isCredit ? "text-emerald-600" : "text-red-500"
					}`}>
					{direction}
				</p>
			</div>
		</div>
	);
}

export default function Transactions() {
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState("All");
	const [typeFilter, setTypeFilter] = useState("All");
	const [directionFilter, setDirectionFilter] = useState("All");
	const [page, setPage] = useState(1);

	const perPage = 5;

	const filteredTransactions = useMemo(() => {
		return transactionsData.filter((transaction) => {
			const query = search.toLowerCase();

			const matchesSearch =
				transaction.id.toLowerCase().includes(query) ||
				transaction.user.toLowerCase().includes(query) ||
				transaction.username.toLowerCase().includes(query) ||
				transaction.method.toLowerCase().includes(query);

			const matchesStatus =
				statusFilter === "All" || transaction.status === statusFilter;

			const matchesType =
				typeFilter === "All" || transaction.type === typeFilter;

			const matchesDirection =
				directionFilter === "All" || transaction.direction === directionFilter;

			return matchesSearch && matchesStatus && matchesType && matchesDirection;
		});
	}, [search, statusFilter, typeFilter, directionFilter]);

	const totalPages = Math.max(
		1,
		Math.ceil(filteredTransactions.length / perPage),
	);

	const currentPage = Math.min(page, totalPages);

	const visibleTransactions = filteredTransactions.slice(
		(currentPage - 1) * perPage,
		currentPage * perPage,
	);

	const completedCount = transactionsData.filter(
		(item) => item.status === "Completed",
	).length;

	const pendingCount = transactionsData.filter(
		(item) => item.status === "Pending",
	).length;

	const failedCount = transactionsData.filter(
		(item) => item.status === "Failed",
	).length;

	return (
		<div className="space-y-6">
			{/* Header */}

			<div>
				<p className="text-sm font-medium text-emerald-600">
					Financial Activity
				</p>

				<h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
					Transactions
				</h1>

				<p className="mt-2 text-sm text-gray-500">
					Monitor and manage all customer transactions.
				</p>
			</div>

			{/* Summary Cards */}

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Total Transactions</p>

							<p className="mt-2 text-2xl font-bold text-gray-900">
								{transactionsData.length}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
							<FaExchangeAlt />
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
							<p className="text-sm text-gray-500">Pending</p>

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

			{/* Transactions Table */}

			<div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
				{/* Filters */}

				<div className="border-b border-gray-100 p-5">
					<div className="grid gap-3 lg:grid-cols-4">
						<div className="relative lg:col-span-1">
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
								placeholder="Search transaction..."
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
							value={typeFilter}
							onChange={(event) => {
								setTypeFilter(event.target.value);
								setPage(1);
							}}
							className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-emerald-500">
							<option value="All">All Types</option>
							<option value="Transfer">Transfer</option>
							<option value="Withdrawal">Withdrawal</option>
							<option value="Deposit">Deposit</option>
							<option value="Payment">Payment</option>
						</select>

						<select
							value={directionFilter}
							onChange={(event) => {
								setDirectionFilter(event.target.value);
								setPage(1);
							}}
							className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-emerald-500">
							<option value="All">All Directions</option>
							<option value="Credit">Credit</option>
							<option value="Debit">Debit</option>
						</select>
					</div>
				</div>

				{/* Table */}

				<div className="overflow-x-auto">
					<table className="w-full min-w-[1150px]">
						<thead>
							<tr className="border-b border-gray-100 bg-gray-50/70">
								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Transaction
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									User
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Type
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
							{visibleTransactions.map((transaction) => (
								<tr
									key={transaction.id}
									className="border-b border-gray-50 transition hover:bg-gray-50/70">
									<td className="px-6 py-5">
										<p className="text-sm font-semibold text-gray-800">
											{transaction.id}
										</p>
									</td>

									<td className="px-6 py-5">
										<div className="flex items-center gap-3">
											<div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
												{transaction.user
													.split(" ")
													.map((word) => word[0])
													.join("")
													.slice(0, 2)}
											</div>

											<div>
												<p className="text-sm font-semibold text-gray-800">
													{transaction.user}
												</p>

												<p className="mt-0.5 text-xs text-gray-400">
													@{transaction.username}
												</p>
											</div>
										</div>
									</td>

									<td className="px-6 py-5">
										<TransactionType
											type={transaction.type}
											direction={transaction.direction}
										/>
									</td>

									<td className="px-6 py-5">
										<p
											className={`text-sm font-bold ${
												transaction.direction === "Credit" ?
													"text-emerald-600"
												:	"text-gray-800"
											}`}>
											{transaction.direction === "Credit" ? "+" : "-"}
											{transaction.amount}
										</p>

										<p className="mt-1 text-xs text-gray-400">
											{transaction.currency}
										</p>
									</td>

									<td className="px-6 py-5 text-sm text-gray-600">
										{transaction.method}
									</td>

									<td className="px-6 py-5">
										<StatusBadge status={transaction.status} />
									</td>

									<td className="px-6 py-5">
										<p className="text-sm text-gray-600">{transaction.date}</p>

										<p className="mt-1 text-xs text-gray-400">
											{transaction.time}
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

							{visibleTransactions.length === 0 && (
								<tr>
									<td colSpan="8" className="px-6 py-16 text-center">
										<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
											<FaExchangeAlt />
										</div>

										<p className="mt-4 text-sm font-semibold text-gray-800">
											No transactions found
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
							{filteredTransactions.length === 0 ?
								0
							:	(currentPage - 1) * perPage + 1}
						</span>{" "}
						to{" "}
						<span className="font-semibold text-gray-700">
							{Math.min(currentPage * perPage, filteredTransactions.length)}
						</span>{" "}
						of{" "}
						<span className="font-semibold text-gray-700">
							{filteredTransactions.length}
						</span>{" "}
						transactions
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
