import { useMemo, useState } from "react";
import {
	FaSearch,
	FaExchangeAlt,
	FaCheckCircle,
	FaClock,
	FaTimesCircle,
	FaEye,
	FaChevronLeft,
	FaChevronRight,
	FaGlobe,
} from "react-icons/fa";

const transfersData = [
	{
		id: "TRF-10001",
		sender: "John Smith",
		recipient: "Michael Brown",
		amount: "$2,500.00",
		currency: "USD",
		type: "Domestic",
		method: "Bank Transfer",
		status: "Completed",
		date: "Jul 29, 2026",
		time: "09:42 AM",
	},
	{
		id: "TRF-10002",
		sender: "Sarah Williams",
		recipient: "James Anderson",
		amount: "£1,200.00",
		currency: "GBP",
		type: "International",
		method: "Wire Transfer",
		status: "Pending",
		date: "Jul 29, 2026",
		time: "09:15 AM",
	},
	{
		id: "TRF-10003",
		sender: "Michael Brown",
		recipient: "David Johnson",
		amount: "$4,750.00",
		currency: "USD",
		type: "Domestic",
		method: "Internal Transfer",
		status: "Completed",
		date: "Jul 28, 2026",
		time: "04:20 PM",
	},
	{
		id: "TRF-10004",
		sender: "David Johnson",
		recipient: "Robert Wilson",
		amount: "$850.00",
		currency: "USD",
		type: "Domestic",
		method: "Bank Transfer",
		status: "Failed",
		date: "Jul 28, 2026",
		time: "02:10 PM",
	},
	{
		id: "TRF-10005",
		sender: "Emily Davis",
		recipient: "Olivia Taylor",
		amount: "A$3,200.00",
		currency: "AUD",
		type: "International",
		method: "International Transfer",
		status: "Completed",
		date: "Jul 27, 2026",
		time: "11:05 AM",
	},
	{
		id: "TRF-10006",
		sender: "Robert Wilson",
		recipient: "Daniel Thomas",
		amount: "$1,500.00",
		currency: "USD",
		type: "Domestic",
		method: "Internal Transfer",
		status: "Pending",
		date: "Jul 27, 2026",
		time: "08:35 AM",
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

export default function Transfers() {
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState("All");
	const [typeFilter, setTypeFilter] = useState("All");
	const [methodFilter, setMethodFilter] = useState("All");
	const [page, setPage] = useState(1);

	const perPage = 5;

	const filteredTransfers = useMemo(() => {
		return transfersData.filter((transfer) => {
			const query = search.toLowerCase();

			const matchesSearch =
				transfer.id.toLowerCase().includes(query) ||
				transfer.sender.toLowerCase().includes(query) ||
				transfer.recipient.toLowerCase().includes(query) ||
				transfer.method.toLowerCase().includes(query);

			const matchesStatus =
				statusFilter === "All" || transfer.status === statusFilter;

			const matchesType = typeFilter === "All" || transfer.type === typeFilter;

			const matchesMethod =
				methodFilter === "All" || transfer.method === methodFilter;

			return matchesSearch && matchesStatus && matchesType && matchesMethod;
		});
	}, [search, statusFilter, typeFilter, methodFilter]);

	const totalPages = Math.max(1, Math.ceil(filteredTransfers.length / perPage));

	const currentPage = Math.min(page, totalPages);

	const visibleTransfers = filteredTransfers.slice(
		(currentPage - 1) * perPage,
		currentPage * perPage,
	);

	const completedCount = transfersData.filter(
		(item) => item.status === "Completed",
	).length;

	const pendingCount = transfersData.filter(
		(item) => item.status === "Pending",
	).length;

	const failedCount = transfersData.filter(
		(item) => item.status === "Failed",
	).length;

	const internationalCount = transfersData.filter(
		(item) => item.type === "International",
	).length;

	return (
		<div className="space-y-6">
			{/* Header */}

			<div>
				<p className="text-sm font-medium text-emerald-600">
					Financial Management
				</p>

				<h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
					Transfers
				</h1>

				<p className="mt-2 text-sm text-gray-500">
					Monitor domestic and international money transfers.
				</p>
			</div>

			{/* Summary Cards */}

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Total Transfers</p>

							<p className="mt-2 text-2xl font-bold text-gray-900">
								{transfersData.length}
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
							<p className="text-sm text-gray-500">International</p>

							<p className="mt-2 text-2xl font-bold text-indigo-600">
								{internationalCount}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
							<FaGlobe />
						</div>
					</div>
				</div>
			</div>

			{/* Transfers Table */}

			<div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
				{/* Filters */}

				<div className="border-b border-gray-100 p-5">
					<div className="grid gap-3 lg:grid-cols-4">
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
								placeholder="Search transfers..."
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
							<option value="All">All Transfer Types</option>
							<option value="Domestic">Domestic</option>
							<option value="International">International</option>
						</select>

						<select
							value={methodFilter}
							onChange={(event) => {
								setMethodFilter(event.target.value);
								setPage(1);
							}}
							className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-emerald-500">
							<option value="All">All Methods</option>
							<option value="Bank Transfer">Bank Transfer</option>
							<option value="Wire Transfer">Wire Transfer</option>
							<option value="Internal Transfer">Internal Transfer</option>
							<option value="International Transfer">
								International Transfer
							</option>
						</select>
					</div>
				</div>

				{/* Table */}

				<div className="overflow-x-auto">
					<table className="w-full min-w-[1200px]">
						<thead>
							<tr className="border-b border-gray-100 bg-gray-50/70">
								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Transfer
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Sender
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Recipient
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Amount
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Type
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
							{visibleTransfers.map((transfer) => (
								<tr
									key={transfer.id}
									className="border-b border-gray-50 transition hover:bg-gray-50/70">
									<td className="px-6 py-5">
										<p className="text-sm font-semibold text-gray-800">
											{transfer.id}
										</p>

										<p className="mt-1 text-xs text-gray-400">
											{transfer.method}
										</p>
									</td>

									<td className="px-6 py-5">
										<p className="text-sm font-semibold text-gray-800">
											{transfer.sender}
										</p>
									</td>

									<td className="px-6 py-5">
										<div className="flex items-center gap-2">
											<FaExchangeAlt size={11} className="text-gray-400" />

											<p className="text-sm font-semibold text-gray-800">
												{transfer.recipient}
											</p>
										</div>
									</td>

									<td className="px-6 py-5">
										<p className="text-sm font-bold text-gray-800">
											{transfer.amount}
										</p>

										<p className="mt-1 text-xs text-gray-400">
											{transfer.currency}
										</p>
									</td>

									<td className="px-6 py-5">
										<span
											className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
												transfer.type === "International" ?
													"bg-indigo-50 text-indigo-700"
												:	"bg-gray-100 text-gray-600"
											}`}>
											{transfer.type}
										</span>
									</td>

									<td className="px-6 py-5">
										<StatusBadge status={transfer.status} />
									</td>

									<td className="px-6 py-5">
										<p className="text-sm text-gray-600">{transfer.date}</p>

										<p className="mt-1 text-xs text-gray-400">
											{transfer.time}
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

							{visibleTransfers.length === 0 && (
								<tr>
									<td colSpan="8" className="px-6 py-16 text-center">
										<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
											<FaExchangeAlt />
										</div>

										<p className="mt-4 text-sm font-semibold text-gray-800">
											No transfers found
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
							{filteredTransfers.length === 0 ?
								0
							:	(currentPage - 1) * perPage + 1}
						</span>{" "}
						to{" "}
						<span className="font-semibold text-gray-700">
							{Math.min(currentPage * perPage, filteredTransfers.length)}
						</span>{" "}
						of{" "}
						<span className="font-semibold text-gray-700">
							{filteredTransfers.length}
						</span>{" "}
						transfers
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
