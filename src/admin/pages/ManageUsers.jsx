import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
	FaSearch,
	FaFilter,
	FaEye,
	FaEdit,
	FaBan,
	FaCheckCircle,
	FaUserPlus,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const usersData = [
	{
		id: 1,
		name: "John Smith",
		username: "johnsmith",
		email: "johnsmith@email.com",
		phone: "+1 202 555 0147",
		accountType: "Checking Account",
		currency: "USD",
		balance: "$12,500.00",
		status: "Active",
		joined: "Jul 20, 2026",
	},
	{
		id: 2,
		name: "Sarah Williams",
		username: "sarahw",
		email: "sarah@email.com",
		phone: "+44 7700 900123",
		accountType: "Savings Account",
		currency: "GBP",
		balance: "£8,420.50",
		status: "Active",
		joined: "Jul 18, 2026",
	},
	{
		id: 3,
		name: "Michael Brown",
		username: "michaelb",
		email: "michael@email.com",
		phone: "+1 305 555 0182",
		accountType: "Business Account",
		currency: "USD",
		balance: "$25,800.00",
		status: "Active",
		joined: "Jul 15, 2026",
	},
	{
		id: 4,
		name: "David Johnson",
		username: "davidj",
		email: "david@email.com",
		phone: "+1 415 555 0198",
		accountType: "Current Account",
		currency: "USD",
		balance: "$4,250.00",
		status: "Blocked",
		joined: "Jul 12, 2026",
	},
	{
		id: 5,
		name: "Emily Davis",
		username: "emilyd",
		email: "emily@email.com",
		phone: "+61 412 345 678",
		accountType: "Investment Account",
		currency: "AUD",
		balance: "A$18,750.00",
		status: "Active",
		joined: "Jul 10, 2026",
	},
	{
		id: 6,
		name: "Robert Wilson",
		username: "robertw",
		email: "robert@email.com",
		phone: "+1 212 555 0104",
		accountType: "Savings Account",
		currency: "USD",
		balance: "$7,340.00",
		status: "Pending",
		joined: "Jul 08, 2026",
	},
];

function StatusBadge({ status }) {
	const styles = {
		Active: "bg-emerald-50 text-emerald-700 ring-emerald-600/10",
		Blocked: "bg-red-50 text-red-700 ring-red-600/10",
		Pending: "bg-amber-50 text-amber-700 ring-amber-600/10",
	};

	const Icon = {
		Active: FaCheckCircle,
		Blocked: FaBan,
		Pending: FaFilter,
	}[status];

	return (
		<span
			className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ring-inset ${
				styles[status] || "bg-gray-50 text-gray-600 ring-gray-600/10"
			}`}>
			<Icon size={10} />
			{status}
		</span>
	);
}

export default function ManageUsers() {
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState("All");
	const [accountFilter, setAccountFilter] = useState("All");
	const [currentPage, setCurrentPage] = useState(1);

	const usersPerPage = 5;

	const filteredUsers = useMemo(() => {
		return usersData.filter((user) => {
			const searchValue = search.toLowerCase();

			const matchesSearch =
				user.name.toLowerCase().includes(searchValue) ||
				user.username.toLowerCase().includes(searchValue) ||
				user.email.toLowerCase().includes(searchValue) ||
				user.phone.toLowerCase().includes(searchValue);

			const matchesStatus =
				statusFilter === "All" || user.status === statusFilter;

			const matchesAccount =
				accountFilter === "All" || user.accountType === accountFilter;

			return matchesSearch && matchesStatus && matchesAccount;
		});
	}, [search, statusFilter, accountFilter]);

	const totalPages = Math.max(
		1,
		Math.ceil(filteredUsers.length / usersPerPage),
	);

	const safePage = Math.min(currentPage, totalPages);

	const displayedUsers = filteredUsers.slice(
		(safePage - 1) * usersPerPage,
		safePage * usersPerPage,
	);

	const handleSearch = (value) => {
		setSearch(value);
		setCurrentPage(1);
	};

	const handleStatusChange = (value) => {
		setStatusFilter(value);
		setCurrentPage(1);
	};

	const handleAccountChange = (value) => {
		setAccountFilter(value);
		setCurrentPage(1);
	};

	return (
		<div className="space-y-6">
			{/* Page Header */}

			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
				<div>
					<p className="text-sm font-medium text-emerald-600">
						User Management
					</p>

					<h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
						Manage Users
					</h1>

					<p className="mt-2 text-sm text-gray-500">
						View, manage and monitor all registered customers.
					</p>
				</div>

				<Link
					to="/admin/dashboard/create-user"
					className="inline-flex w-fit items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700">
					<FaUserPlus size={14} />
					Create New User
				</Link>
			</motion.div>

			{/* Summary Cards */}

			<div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-gray-500">Total Users</p>

					<p className="mt-2 text-2xl font-bold text-gray-900">
						{usersData.length}
					</p>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-gray-500">Active Users</p>

					<p className="mt-2 text-2xl font-bold text-emerald-600">
						{usersData.filter((user) => user.status === "Active").length}
					</p>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-gray-500">Pending Users</p>

					<p className="mt-2 text-2xl font-bold text-amber-600">
						{usersData.filter((user) => user.status === "Pending").length}
					</p>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<p className="text-sm text-gray-500">Blocked Users</p>

					<p className="mt-2 text-2xl font-bold text-red-600">
						{usersData.filter((user) => user.status === "Blocked").length}
					</p>
				</div>
			</div>

			{/* Main Table */}

			<div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
				{/* Filters */}

				<div className="border-b border-gray-200 p-5">
					<div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
						{/* Search */}

						<div className="relative w-full xl:max-w-md">
							<FaSearch
								className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
								size={14}
							/>

							<input
								type="search"
								value={search}
								onChange={(e) => handleSearch(e.target.value)}
								placeholder="Search by name, username, email..."
								className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm text-gray-700 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100"
							/>
						</div>

						{/* Filters */}

						<div className="flex flex-col gap-3 sm:flex-row">
							<select
								value={statusFilter}
								onChange={(e) => handleStatusChange(e.target.value)}
								className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-emerald-500">
								<option value="All">All Status</option>

								<option value="Active">Active</option>

								<option value="Pending">Pending</option>

								<option value="Blocked">Blocked</option>
							</select>

							<select
								value={accountFilter}
								onChange={(e) => handleAccountChange(e.target.value)}
								className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-emerald-500">
								<option value="All">All Account Types</option>

								<option value="Checking Account">Checking Account</option>

								<option value="Savings Account">Savings Account</option>

								<option value="Business Account">Business Account</option>

								<option value="Current Account">Current Account</option>

								<option value="Investment Account">Investment Account</option>
							</select>
						</div>
					</div>
				</div>

				{/* Table */}

				<div className="overflow-x-auto">
					<table className="w-full min-w-[1100px]">
						<thead>
							<tr className="border-b border-gray-100 bg-gray-50/70">
								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									User
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Contact
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Account Type
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Balance
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Status
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Joined
								</th>

								<th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-400">
									Actions
								</th>
							</tr>
						</thead>

						<tbody>
							{displayedUsers.map((user) => (
								<tr
									key={user.id}
									className="border-b border-gray-50 transition hover:bg-gray-50/70">
									{/* User */}

									<td className="px-6 py-5">
										<div className="flex items-center gap-3">
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
												{user.name
													.split(" ")
													.map((word) => word[0])
													.join("")
													.slice(0, 2)}
											</div>

											<div>
												<p className="text-sm font-semibold text-gray-800">
													{user.name}
												</p>

												<p className="mt-0.5 text-xs text-gray-400">
													@{user.username}
												</p>
											</div>
										</div>
									</td>

									{/* Contact */}

									<td className="px-6 py-5">
										<p className="text-sm text-gray-700">{user.email}</p>

										<p className="mt-1 text-xs text-gray-400">{user.phone}</p>
									</td>

									{/* Account */}

									<td className="px-6 py-5">
										<p className="text-sm text-gray-700">{user.accountType}</p>

										<p className="mt-1 text-xs text-gray-400">
											{user.currency}
										</p>
									</td>

									{/* Balance */}

									<td className="px-6 py-5 text-sm font-semibold text-gray-800">
										{user.balance}
									</td>

									{/* Status */}

									<td className="px-6 py-5">
										<StatusBadge status={user.status} />
									</td>

									{/* Joined */}

									<td className="px-6 py-5 text-sm text-gray-500">
										{user.joined}
									</td>

									{/* Actions */}

									<td className="px-6 py-5">
										<div className="flex justify-end gap-2">
											<button
												type="button"
												title="View User"
												className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600">
												<FaEye size={14} />
											</button>

											<button
												type="button"
												title="Edit User"
												className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600">
												<FaEdit size={14} />
											</button>

											<button
												type="button"
												title={
													user.status === "Blocked" ?
														"Unblock User"
													:	"Block User"
												}
												className={`rounded-lg border p-2 transition ${
													user.status === "Blocked" ?
														"border-emerald-200 text-emerald-600 hover:bg-emerald-50"
													:	"border-red-200 text-red-500 hover:bg-red-50"
												}`}>
												{user.status === "Blocked" ?
													<FaCheckCircle size={14} />
												:	<FaBan size={14} />}
											</button>
										</div>
									</td>
								</tr>
							))}

							{displayedUsers.length === 0 && (
								<tr>
									<td colSpan="7" className="px-6 py-16 text-center">
										<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
											<FaUsers size={22} />
										</div>

										<h3 className="mt-4 text-sm font-semibold text-gray-800">
											No users found
										</h3>

										<p className="mt-1 text-sm text-gray-500">
											Try changing your search or filter.
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
							{filteredUsers.length === 0 ?
								0
							:	(safePage - 1) * usersPerPage + 1}
						</span>{" "}
						to{" "}
						<span className="font-semibold text-gray-700">
							{Math.min(safePage * usersPerPage, filteredUsers.length)}
						</span>{" "}
						of{" "}
						<span className="font-semibold text-gray-700">
							{filteredUsers.length}
						</span>{" "}
						users
					</p>

					<div className="flex items-center gap-2">
						<button
							type="button"
							disabled={safePage === 1}
							onClick={() => setCurrentPage((prev) => prev - 1)}
							className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40">
							<FaChevronLeft size={12} />
						</button>

						{Array.from({ length: totalPages }, (_, index) => index + 1).map(
							(page) => (
								<button
									key={page}
									type="button"
									onClick={() => setCurrentPage(page)}
									className={`h-9 min-w-9 rounded-lg px-2 text-sm font-medium transition ${
										safePage === page ?
											"bg-emerald-600 text-white"
										:	"border border-gray-200 text-gray-600 hover:bg-gray-50"
									}`}>
									{page}
								</button>
							),
						)}

						<button
							type="button"
							disabled={safePage === totalPages}
							onClick={() => setCurrentPage((prev) => prev + 1)}
							className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40">
							<FaChevronRight size={12} />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
