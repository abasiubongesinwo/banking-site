import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
	FaSearch,
	FaEye,
	FaCheck,
	FaTimes,
	FaClock,
	FaUserCheck,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";

const applicationsData = [
	{
		id: "KYC-1001",
		name: "Daniel Williams",
		email: "daniel.williams@email.com",
		country: "United States",
		accountType: "Savings Account",
		submitted: "Jul 28, 2026",
		status: "Pending",
	},
	{
		id: "KYC-1002",
		name: "Sophia Anderson",
		email: "sophia.anderson@email.com",
		country: "United Kingdom",
		accountType: "Current Account",
		submitted: "Jul 27, 2026",
		status: "Approved",
	},
	{
		id: "KYC-1003",
		name: "Ahmed Hassan",
		email: "ahmed.hassan@email.com",
		country: "United Arab Emirates",
		accountType: "Business Account",
		submitted: "Jul 26, 2026",
		status: "Pending",
	},
	{
		id: "KYC-1004",
		name: "Olivia Johnson",
		email: "olivia.johnson@email.com",
		country: "Canada",
		accountType: "Investment Account",
		submitted: "Jul 25, 2026",
		status: "Rejected",
	},
	{
		id: "KYC-1005",
		name: "James Brown",
		email: "james.brown@email.com",
		country: "Australia",
		accountType: "Checking Account",
		submitted: "Jul 24, 2026",
		status: "Approved",
	},
];

function StatusBadge({ status }) {
	const config = {
		Pending: {
			className: "bg-amber-50 text-amber-700",
			icon: FaClock,
		},
		Approved: {
			className: "bg-emerald-50 text-emerald-700",
			icon: FaCheck,
		},
		Rejected: {
			className: "bg-red-50 text-red-700",
			icon: FaTimes,
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

export default function KycApplications() {
	const [search, setSearch] = useState("");
	const [status, setStatus] = useState("All");
	const [page, setPage] = useState(1);

	const perPage = 5;

	const filteredApplications = useMemo(() => {
		return applicationsData.filter((application) => {
			const searchTerm = search.toLowerCase();

			const matchesSearch =
				application.id.toLowerCase().includes(searchTerm) ||
				application.name.toLowerCase().includes(searchTerm) ||
				application.email.toLowerCase().includes(searchTerm) ||
				application.country.toLowerCase().includes(searchTerm);

			const matchesStatus = status === "All" || application.status === status;

			return matchesSearch && matchesStatus;
		});
	}, [search, status]);

	const totalPages = Math.max(
		1,
		Math.ceil(filteredApplications.length / perPage),
	);

	const currentPage = Math.min(page, totalPages);

	const visibleApplications = filteredApplications.slice(
		(currentPage - 1) * perPage,
		currentPage * perPage,
	);

	const pendingCount = applicationsData.filter(
		(item) => item.status === "Pending",
	).length;

	const approvedCount = applicationsData.filter(
		(item) => item.status === "Approved",
	).length;

	const rejectedCount = applicationsData.filter(
		(item) => item.status === "Rejected",
	).length;

	return (
		<div className="space-y-6">
			{/* Header */}

			<div>
				<p className="text-sm font-medium text-emerald-600">User Management</p>

				<h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
					New User Applications
				</h1>

				<p className="mt-2 text-sm text-gray-500">
					Review and manage customer account applications.
				</p>
			</div>

			{/* Summary */}

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Total Applications</p>

							<p className="mt-2 text-2xl font-bold text-gray-900">
								{applicationsData.length}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
							<FaUserCheck />
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
							<p className="text-sm text-gray-500">Approved</p>

							<p className="mt-2 text-2xl font-bold text-emerald-600">
								{approvedCount}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
							<FaCheck />
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
							<FaTimes />
						</div>
					</div>
				</div>
			</div>

			{/* Applications */}

			<div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
				{/* Filters */}

				<div className="border-b border-gray-100 p-5">
					<div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
						<div className="relative w-full md:max-w-md">
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
								placeholder="Search applications..."
								className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
							/>
						</div>

						<select
							value={status}
							onChange={(event) => {
								setStatus(event.target.value);
								setPage(1);
							}}
							className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-emerald-500">
							<option value="All">All Applications</option>
							<option value="Pending">Pending</option>
							<option value="Approved">Approved</option>
							<option value="Rejected">Rejected</option>
						</select>
					</div>
				</div>

				{/* Table */}

				<div className="overflow-x-auto">
					<table className="w-full min-w-[1050px]">
						<thead>
							<tr className="border-b border-gray-100 bg-gray-50/70">
								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Application
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Applicant
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Country
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Account Type
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Submitted
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
							{visibleApplications.map((application) => (
								<tr
									key={application.id}
									className="border-b border-gray-50 transition hover:bg-gray-50/70">
									<td className="px-6 py-5">
										<p className="text-sm font-semibold text-gray-800">
											{application.id}
										</p>
									</td>

									<td className="px-6 py-5">
										<div className="flex items-center gap-3">
											<div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
												{application.name
													.split(" ")
													.map((word) => word[0])
													.join("")
													.slice(0, 2)}
											</div>

											<div>
												<p className="text-sm font-semibold text-gray-800">
													{application.name}
												</p>

												<p className="mt-1 text-xs text-gray-400">
													{application.email}
												</p>
											</div>
										</div>
									</td>

									<td className="px-6 py-5 text-sm text-gray-600">
										{application.country}
									</td>

									<td className="px-6 py-5 text-sm text-gray-600">
										{application.accountType}
									</td>

									<td className="px-6 py-5 text-sm text-gray-500">
										{application.submitted}
									</td>

									<td className="px-6 py-5">
										<StatusBadge status={application.status} />
									</td>

									<td className="px-6 py-5 text-right">
										<Link
											to={`/admin/dashboard/kyc-applications/${application.id}`}
											className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600">
											<FaEye size={12} />
											Review
										</Link>
									</td>
								</tr>
							))}

							{visibleApplications.length === 0 && (
								<tr>
									<td colSpan="7" className="px-6 py-16 text-center">
										<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
											<FaSearch />
										</div>

										<p className="mt-4 text-sm font-semibold text-gray-800">
											No applications found
										</p>

										<p className="mt-1 text-sm text-gray-500">
											Try adjusting your search or status filter.
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
							{filteredApplications.length === 0 ?
								0
							:	(currentPage - 1) * perPage + 1}
						</span>{" "}
						to{" "}
						<span className="font-semibold text-gray-700">
							{Math.min(currentPage * perPage, filteredApplications.length)}
						</span>{" "}
						of{" "}
						<span className="font-semibold text-gray-700">
							{filteredApplications.length}
						</span>
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
