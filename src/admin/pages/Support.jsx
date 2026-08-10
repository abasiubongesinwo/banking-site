import { useMemo, useState } from "react";
import {
	FaSearch,
	FaHeadset,
	FaCheckCircle,
	FaClock,
	FaExclamationCircle,
	FaEye,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";

const ticketsData = [
	{
		id: "TKT-10001",
		user: "John Smith",
		username: "johnsmith",
		subject: "Unable to complete transfer",
		category: "Transfers",
		priority: "High",
		status: "Open",
		date: "Jul 29, 2026",
	},
	{
		id: "TKT-10002",
		user: "Sarah Williams",
		username: "sarahw",
		subject: "Card payment declined",
		category: "Cards",
		priority: "Medium",
		status: "In Progress",
		date: "Jul 29, 2026",
	},
	{
		id: "TKT-10003",
		user: "Michael Brown",
		username: "michaelb",
		subject: "Account verification issue",
		category: "KYC",
		priority: "High",
		status: "Open",
		date: "Jul 28, 2026",
	},
	{
		id: "TKT-10004",
		user: "David Johnson",
		username: "davidj",
		subject: "Forgot transaction PIN",
		category: "Security",
		priority: "Medium",
		status: "Resolved",
		date: "Jul 28, 2026",
	},
	{
		id: "TKT-10005",
		user: "Emily Davis",
		username: "emilyd",
		subject: "Incorrect account balance",
		category: "Account",
		priority: "High",
		status: "In Progress",
		date: "Jul 27, 2026",
	},
	{
		id: "TKT-10006",
		user: "Robert Wilson",
		username: "robertw",
		subject: "Unable to withdraw funds",
		category: "Withdrawals",
		priority: "Low",
		status: "Resolved",
		date: "Jul 26, 2026",
	},
];

function StatusBadge({ status }) {
	const config = {
		Open: "bg-red-50 text-red-700",
		"In Progress": "bg-amber-50 text-amber-700",
		Resolved: "bg-emerald-50 text-emerald-700",
	};

	return (
		<span
			className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
				config[status] || "bg-gray-100 text-gray-600"
			}`}>
			{status}
		</span>
	);
}

function PriorityBadge({ priority }) {
	const config = {
		High: "bg-red-50 text-red-700",
		Medium: "bg-amber-50 text-amber-700",
		Low: "bg-blue-50 text-blue-700",
	};

	return (
		<span
			className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
				config[priority] || "bg-gray-100 text-gray-600"
			}`}>
			{priority}
		</span>
	);
}

export default function Support() {
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState("All");
	const [priorityFilter, setPriorityFilter] = useState("All");
	const [page, setPage] = useState(1);

	const perPage = 5;

	const filteredTickets = useMemo(() => {
		return ticketsData.filter((ticket) => {
			const query = search.toLowerCase();

			const matchesSearch =
				ticket.id.toLowerCase().includes(query) ||
				ticket.user.toLowerCase().includes(query) ||
				ticket.username.toLowerCase().includes(query) ||
				ticket.subject.toLowerCase().includes(query) ||
				ticket.category.toLowerCase().includes(query);

			const matchesStatus =
				statusFilter === "All" || ticket.status === statusFilter;

			const matchesPriority =
				priorityFilter === "All" || ticket.priority === priorityFilter;

			return matchesSearch && matchesStatus && matchesPriority;
		});
	}, [search, statusFilter, priorityFilter]);

	const totalPages = Math.max(1, Math.ceil(filteredTickets.length / perPage));

	const currentPage = Math.min(page, totalPages);

	const visibleTickets = filteredTickets.slice(
		(currentPage - 1) * perPage,
		currentPage * perPage,
	);

	const openCount = ticketsData.filter(
		(ticket) => ticket.status === "Open",
	).length;

	const progressCount = ticketsData.filter(
		(ticket) => ticket.status === "In Progress",
	).length;

	const resolvedCount = ticketsData.filter(
		(ticket) => ticket.status === "Resolved",
	).length;

	const highPriorityCount = ticketsData.filter(
		(ticket) => ticket.priority === "High",
	).length;

	return (
		<div className="space-y-6">
			{/* Header */}

			<div>
				<p className="text-sm font-medium text-emerald-600">Customer Service</p>

				<h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
					Support
				</h1>

				<p className="mt-2 text-sm text-gray-500">
					Manage customer support requests and service tickets.
				</p>
			</div>

			{/* Summary Cards */}

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Total Tickets</p>

							<p className="mt-2 text-2xl font-bold text-gray-900">
								{ticketsData.length}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
							<FaHeadset />
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Open</p>

							<p className="mt-2 text-2xl font-bold text-red-600">
								{openCount}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
							<FaExclamationCircle />
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">In Progress</p>

							<p className="mt-2 text-2xl font-bold text-amber-600">
								{progressCount}
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
							<p className="text-sm text-gray-500">High Priority</p>

							<p className="mt-2 text-2xl font-bold text-indigo-600">
								{highPriorityCount}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
							<FaExclamationCircle />
						</div>
					</div>
				</div>
			</div>

			{/* Tickets */}

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
								placeholder="Search support tickets..."
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
							<option value="Open">Open</option>
							<option value="In Progress">In Progress</option>
							<option value="Resolved">Resolved</option>
						</select>

						<select
							value={priorityFilter}
							onChange={(event) => {
								setPriorityFilter(event.target.value);
								setPage(1);
							}}
							className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-emerald-500">
							<option value="All">All Priorities</option>
							<option value="High">High</option>
							<option value="Medium">Medium</option>
							<option value="Low">Low</option>
						</select>
					</div>
				</div>

				{/* Table */}

				<div className="overflow-x-auto">
					<table className="w-full min-w-[1100px]">
						<thead>
							<tr className="border-b border-gray-100 bg-gray-50/70">
								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Ticket
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Customer
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Subject
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Category
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Priority
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
							{visibleTickets.map((ticket) => (
								<tr
									key={ticket.id}
									className="border-b border-gray-50 transition hover:bg-gray-50/70">
									<td className="px-6 py-5">
										<p className="text-sm font-semibold text-gray-800">
											{ticket.id}
										</p>

										<p className="mt-1 text-xs text-gray-400">{ticket.date}</p>
									</td>

									<td className="px-6 py-5">
										<div className="flex items-center gap-3">
											<div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
												{ticket.user
													.split(" ")
													.map((word) => word[0])
													.join("")
													.slice(0, 2)}
											</div>

											<div>
												<p className="text-sm font-semibold text-gray-800">
													{ticket.user}
												</p>

												<p className="mt-0.5 text-xs text-gray-400">
													@{ticket.username}
												</p>
											</div>
										</div>
									</td>

									<td className="max-w-[280px] px-6 py-5">
										<p className="truncate text-sm font-semibold text-gray-800">
											{ticket.subject}
										</p>
									</td>

									<td className="px-6 py-5">
										<span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
											{ticket.category}
										</span>
									</td>

									<td className="px-6 py-5">
										<PriorityBadge priority={ticket.priority} />
									</td>

									<td className="px-6 py-5">
										<StatusBadge status={ticket.status} />
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

							{visibleTickets.length === 0 && (
								<tr>
									<td colSpan="7" className="px-6 py-16 text-center">
										<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
											<FaHeadset />
										</div>

										<p className="mt-4 text-sm font-semibold text-gray-800">
											No support tickets found
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
							{filteredTickets.length === 0 ?
								0
							:	(currentPage - 1) * perPage + 1}
						</span>{" "}
						to{" "}
						<span className="font-semibold text-gray-700">
							{Math.min(currentPage * perPage, filteredTickets.length)}
						</span>{" "}
						of{" "}
						<span className="font-semibold text-gray-700">
							{filteredTickets.length}
						</span>{" "}
						tickets
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
