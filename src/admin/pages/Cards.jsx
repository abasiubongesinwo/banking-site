import { useMemo, useState } from "react";
import {
	FaSearch,
	FaCreditCard,
	FaCheckCircle,
	FaLock,
	FaTimesCircle,
	FaEye,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";

const cardsData = [
	{
		id: "CRD-10001",
		user: "John Smith",
		username: "johnsmith",
		lastFour: "2847",
		type: "Debit Card",
		network: "Visa",
		status: "Active",
		limit: "$5,000.00",
		expiry: "08/29",
		issued: "Jul 10, 2026",
	},
	{
		id: "CRD-10002",
		user: "Sarah Williams",
		username: "sarahw",
		lastFour: "6132",
		type: "Credit Card",
		network: "Mastercard",
		status: "Active",
		limit: "$10,000.00",
		expiry: "11/28",
		issued: "Jun 24, 2026",
	},
	{
		id: "CRD-10003",
		user: "Michael Brown",
		username: "michaelb",
		lastFour: "9041",
		type: "Debit Card",
		network: "Visa",
		status: "Blocked",
		limit: "$3,000.00",
		expiry: "04/30",
		issued: "May 18, 2026",
	},
	{
		id: "CRD-10004",
		user: "David Johnson",
		username: "davidj",
		lastFour: "4478",
		type: "Debit Card",
		network: "Mastercard",
		status: "Active",
		limit: "$4,000.00",
		expiry: "09/29",
		issued: "Apr 12, 2026",
	},
	{
		id: "CRD-10005",
		user: "Emily Davis",
		username: "emilyd",
		lastFour: "7519",
		type: "Credit Card",
		network: "Visa",
		status: "Expired",
		limit: "$7,500.00",
		expiry: "06/26",
		issued: "Jun 08, 2024",
	},
	{
		id: "CRD-10006",
		user: "Robert Wilson",
		username: "robertw",
		lastFour: "3826",
		type: "Debit Card",
		network: "Visa",
		status: "Active",
		limit: "$5,000.00",
		expiry: "02/30",
		issued: "Jul 02, 2026",
	},
];

function StatusBadge({ status }) {
	const config = {
		Active: {
			className: "bg-emerald-50 text-emerald-700",
			icon: FaCheckCircle,
		},
		Blocked: {
			className: "bg-amber-50 text-amber-700",
			icon: FaLock,
		},
		Expired: {
			className: "bg-red-50 text-red-700",
			icon: FaTimesCircle,
		},
	};

	const current = config[status] || config.Active;
	const Icon = current.icon;

	return (
		<span
			className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${current.className}`}>
			<Icon size={10} />
			{status}
		</span>
	);
}

export default function Cards() {
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState("All");
	const [typeFilter, setTypeFilter] = useState("All");
	const [page, setPage] = useState(1);

	const perPage = 5;

	const filteredCards = useMemo(() => {
		return cardsData.filter((card) => {
			const query = search.toLowerCase();

			const matchesSearch =
				card.id.toLowerCase().includes(query) ||
				card.user.toLowerCase().includes(query) ||
				card.username.toLowerCase().includes(query) ||
				card.lastFour.includes(query) ||
				card.network.toLowerCase().includes(query);

			const matchesStatus =
				statusFilter === "All" || card.status === statusFilter;

			const matchesType = typeFilter === "All" || card.type === typeFilter;

			return matchesSearch && matchesStatus && matchesType;
		});
	}, [search, statusFilter, typeFilter]);

	const totalPages = Math.max(1, Math.ceil(filteredCards.length / perPage));

	const currentPage = Math.min(page, totalPages);

	const visibleCards = filteredCards.slice(
		(currentPage - 1) * perPage,
		currentPage * perPage,
	);

	const activeCount = cardsData.filter(
		(card) => card.status === "Active",
	).length;

	const blockedCount = cardsData.filter(
		(card) => card.status === "Blocked",
	).length;

	const expiredCount = cardsData.filter(
		(card) => card.status === "Expired",
	).length;

	const creditCount = cardsData.filter(
		(card) => card.type === "Credit Card",
	).length;

	return (
		<div className="space-y-6">
			{/* Header */}

			<div>
				<p className="text-sm font-medium text-emerald-600">Card Management</p>

				<h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
					Cards
				</h1>

				<p className="mt-2 text-sm text-gray-500">
					Manage customer debit and credit cards.
				</p>
			</div>

			{/* Summary Cards */}

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Total Cards</p>

							<p className="mt-2 text-2xl font-bold text-gray-900">
								{cardsData.length}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
							<FaCreditCard />
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Active Cards</p>

							<p className="mt-2 text-2xl font-bold text-emerald-600">
								{activeCount}
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
							<p className="text-sm text-gray-500">Blocked</p>

							<p className="mt-2 text-2xl font-bold text-amber-600">
								{blockedCount}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
							<FaLock />
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Credit Cards</p>

							<p className="mt-2 text-2xl font-bold text-indigo-600">
								{creditCount}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
							<FaCreditCard />
						</div>
					</div>
				</div>
			</div>

			{/* Cards Table */}

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
								placeholder="Search cards..."
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
							<option value="Active">Active</option>
							<option value="Blocked">Blocked</option>
							<option value="Expired">Expired</option>
						</select>

						<select
							value={typeFilter}
							onChange={(event) => {
								setTypeFilter(event.target.value);
								setPage(1);
							}}
							className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-emerald-500">
							<option value="All">All Card Types</option>
							<option value="Debit Card">Debit Card</option>
							<option value="Credit Card">Credit Card</option>
						</select>
					</div>
				</div>

				{/* Table */}

				<div className="overflow-x-auto">
					<table className="w-full min-w-[1100px]">
						<thead>
							<tr className="border-b border-gray-100 bg-gray-50/70">
								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Card
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Customer
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Type
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Limit
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Expiry
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
							{visibleCards.map((card) => (
								<tr
									key={card.id}
									className="border-b border-gray-50 transition hover:bg-gray-50/70">
									<td className="px-6 py-5">
										<div className="flex items-center gap-3">
											<div className="flex h-10 w-14 items-center justify-center rounded-lg bg-gray-900 text-[10px] font-bold text-white shadow-sm">
												{card.network}
											</div>

											<div>
												<p className="text-sm font-semibold text-gray-800">
													•••• {card.lastFour}
												</p>

												<p className="mt-1 text-xs text-gray-400">{card.id}</p>
											</div>
										</div>
									</td>

									<td className="px-6 py-5">
										<div className="flex items-center gap-3">
											<div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
												{card.user
													.split(" ")
													.map((word) => word[0])
													.join("")
													.slice(0, 2)}
											</div>

											<div>
												<p className="text-sm font-semibold text-gray-800">
													{card.user}
												</p>

												<p className="mt-0.5 text-xs text-gray-400">
													@{card.username}
												</p>
											</div>
										</div>
									</td>

									<td className="px-6 py-5">
										<p className="text-sm font-medium text-gray-700">
											{card.type}
										</p>

										<p className="mt-1 text-xs text-gray-400">{card.network}</p>
									</td>

									<td className="px-6 py-5">
										<p className="text-sm font-semibold text-gray-800">
											{card.limit}
										</p>

										<p className="mt-1 text-xs text-gray-400">Daily limit</p>
									</td>

									<td className="px-6 py-5">
										<p className="text-sm text-gray-700">{card.expiry}</p>

										<p className="mt-1 text-xs text-gray-400">Expires</p>
									</td>

									<td className="px-6 py-5">
										<StatusBadge status={card.status} />
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

							{visibleCards.length === 0 && (
								<tr>
									<td colSpan="7" className="px-6 py-16 text-center">
										<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
											<FaCreditCard />
										</div>

										<p className="mt-4 text-sm font-semibold text-gray-800">
											No cards found
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
							{filteredCards.length === 0 ? 0 : (currentPage - 1) * perPage + 1}
						</span>{" "}
						to{" "}
						<span className="font-semibold text-gray-700">
							{Math.min(currentPage * perPage, filteredCards.length)}
						</span>{" "}
						of{" "}
						<span className="font-semibold text-gray-700">
							{filteredCards.length}
						</span>{" "}
						cards
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
