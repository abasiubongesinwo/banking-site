import { useMemo, useState } from "react";
import {
	FaSearch,
	FaHandHoldingUsd,
	FaCheckCircle,
	FaClock,
	FaTimesCircle,
	FaEye,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";

const loansData = [
	{
		id: "LON-10001",
		user: "John Smith",
		username: "johnsmith",
		type: "Personal Loan",
		amount: "$15,000.00",
		term: "24 Months",
		status: "Approved",
		rate: "8.50%",
		date: "Jul 29, 2026",
	},
	{
		id: "LON-10002",
		user: "Sarah Williams",
		username: "sarahw",
		type: "Business Loan",
		amount: "$50,000.00",
		term: "48 Months",
		status: "Pending",
		rate: "7.25%",
		date: "Jul 28, 2026",
	},
	{
		id: "LON-10003",
		user: "Michael Brown",
		username: "michaelb",
		type: "Personal Loan",
		amount: "$8,500.00",
		term: "18 Months",
		status: "Approved",
		rate: "9.10%",
		date: "Jul 27, 2026",
	},
	{
		id: "LON-10004",
		user: "David Johnson",
		username: "davidj",
		type: "Auto Loan",
		amount: "$32,000.00",
		term: "60 Months",
		status: "Rejected",
		rate: "6.90%",
		date: "Jul 26, 2026",
	},
	{
		id: "LON-10005",
		user: "Emily Davis",
		username: "emilyd",
		type: "Home Loan",
		amount: "$120,000.00",
		term: "120 Months",
		status: "Approved",
		rate: "5.75%",
		date: "Jul 25, 2026",
	},
	{
		id: "LON-10006",
		user: "Robert Wilson",
		username: "robertw",
		type: "Personal Loan",
		amount: "$12,000.00",
		term: "24 Months",
		status: "Pending",
		rate: "8.90%",
		date: "Jul 24, 2026",
	},
];

function StatusBadge({ status }) {
	const config = {
		Approved: {
			className: "bg-emerald-50 text-emerald-700",
			icon: FaCheckCircle,
		},
		Pending: {
			className: "bg-amber-50 text-amber-700",
			icon: FaClock,
		},
		Rejected: {
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

export default function Loans() {
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState("All");
	const [typeFilter, setTypeFilter] = useState("All");
	const [page, setPage] = useState(1);

	const perPage = 5;

	const filteredLoans = useMemo(() => {
		return loansData.filter((loan) => {
			const query = search.toLowerCase();

			const matchesSearch =
				loan.id.toLowerCase().includes(query) ||
				loan.user.toLowerCase().includes(query) ||
				loan.username.toLowerCase().includes(query) ||
				loan.type.toLowerCase().includes(query);

			const matchesStatus =
				statusFilter === "All" || loan.status === statusFilter;

			const matchesType = typeFilter === "All" || loan.type === typeFilter;

			return matchesSearch && matchesStatus && matchesType;
		});
	}, [search, statusFilter, typeFilter]);

	const totalPages = Math.max(1, Math.ceil(filteredLoans.length / perPage));

	const currentPage = Math.min(page, totalPages);

	const visibleLoans = filteredLoans.slice(
		(currentPage - 1) * perPage,
		currentPage * perPage,
	);

	const approvedCount = loansData.filter(
		(loan) => loan.status === "Approved",
	).length;

	const pendingCount = loansData.filter(
		(loan) => loan.status === "Pending",
	).length;

	const rejectedCount = loansData.filter(
		(loan) => loan.status === "Rejected",
	).length;

	return (
		<div className="space-y-6">
			{/* Header */}

			<div>
				<p className="text-sm font-medium text-emerald-600">
					Lending Management
				</p>

				<h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
					Loans
				</h1>

				<p className="mt-2 text-sm text-gray-500">
					Review customer loan applications and manage lending activities.
				</p>
			</div>

			{/* Summary */}

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Total Applications</p>

							<p className="mt-2 text-2xl font-bold text-gray-900">
								{loansData.length}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
							<FaHandHoldingUsd />
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Approved</p>

							<p className="mt-2 text-2xl font-bold text-emerald-600">
								{approvedCount}
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
							<p className="text-sm text-gray-500">Rejected</p>

							<p className="mt-2 text-2xl font-bold text-red-600">
								{rejectedCount}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
							<FaTimesCircle />
						</div>
					</div>
				</div>
			</div>

			{/* Loans Table */}

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
								placeholder="Search loan applications..."
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
							<option value="Approved">Approved</option>
							<option value="Pending">Pending</option>
							<option value="Rejected">Rejected</option>
						</select>

						<select
							value={typeFilter}
							onChange={(event) => {
								setTypeFilter(event.target.value);
								setPage(1);
							}}
							className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-emerald-500">
							<option value="All">All Loan Types</option>
							<option value="Personal Loan">Personal Loan</option>
							<option value="Business Loan">Business Loan</option>
							<option value="Auto Loan">Auto Loan</option>
							<option value="Home Loan">Home Loan</option>
						</select>
					</div>
				</div>

				{/* Table */}

				<div className="overflow-x-auto">
					<table className="w-full min-w-[1100px]">
						<thead>
							<tr className="border-b border-gray-100 bg-gray-50/70">
								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Application
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Customer
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Loan Type
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Amount
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Term
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Status
								</th>

								<th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-400">
									Action
								</th>
							</tr>
						</thead>

						<tbody>
							{visibleLoans.map((loan) => (
								<tr
									key={loan.id}
									className="border-b border-gray-50 transition hover:bg-gray-50/70">
									<td className="px-6 py-5">
										<p className="text-sm font-semibold text-gray-800">
											{loan.id}
										</p>

										<p className="mt-1 text-xs text-gray-400">{loan.date}</p>
									</td>

									<td className="px-6 py-5">
										<div className="flex items-center gap-3">
											<div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
												{loan.user
													.split(" ")
													.map((word) => word[0])
													.join("")
													.slice(0, 2)}
											</div>

											<div>
												<p className="text-sm font-semibold text-gray-800">
													{loan.user}
												</p>

												<p className="mt-0.5 text-xs text-gray-400">
													@{loan.username}
												</p>
											</div>
										</div>
									</td>

									<td className="px-6 py-5">
										<p className="text-sm font-medium text-gray-700">
											{loan.type}
										</p>

										<p className="mt-1 text-xs text-gray-400">
											Rate: {loan.rate}
										</p>
									</td>

									<td className="px-6 py-5">
										<p className="text-sm font-bold text-gray-800">
											{loan.amount}
										</p>
									</td>

									<td className="px-6 py-5 text-sm text-gray-600">
										{loan.term}
									</td>

									<td className="px-6 py-5">
										<StatusBadge status={loan.status} />
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

							{visibleLoans.length === 0 && (
								<tr>
									<td colSpan="7" className="px-6 py-16 text-center">
										<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
											<FaHandHoldingUsd />
										</div>

										<p className="mt-4 text-sm font-semibold text-gray-800">
											No loan applications found
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
							{filteredLoans.length === 0 ? 0 : (currentPage - 1) * perPage + 1}
						</span>{" "}
						to{" "}
						<span className="font-semibold text-gray-700">
							{Math.min(currentPage * perPage, filteredLoans.length)}
						</span>{" "}
						of{" "}
						<span className="font-semibold text-gray-700">
							{filteredLoans.length}
						</span>{" "}
						applications
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
