import { useMemo, useState } from "react";
import {
	FaSearch,
	FaBell,
	FaCheckCircle,
	FaExclamationTriangle,
	FaInfoCircle,
	FaUserShield,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";

const notificationsData = [
	{
		id: "NOT-10001",
		title: "New KYC application",
		message:
			"John Smith has submitted a new identity verification application.",
		type: "KYC",
		priority: "High",
		status: "Unread",
		date: "Jul 29, 2026",
		time: "10:15 AM",
	},
	{
		id: "NOT-10002",
		title: "Large withdrawal request",
		message: "A withdrawal request of $25,000 requires administrative review.",
		type: "Transaction",
		priority: "High",
		status: "Unread",
		date: "Jul 29, 2026",
		time: "09:48 AM",
	},
	{
		id: "NOT-10003",
		title: "New customer registration",
		message: "A new customer account has been successfully created.",
		type: "User",
		priority: "Normal",
		status: "Read",
		date: "Jul 29, 2026",
		time: "09:12 AM",
	},
	{
		id: "NOT-10004",
		title: "System maintenance scheduled",
		message: "Scheduled system maintenance is planned for tonight at 11:00 PM.",
		type: "System",
		priority: "Normal",
		status: "Read",
		date: "Jul 28, 2026",
		time: "06:30 PM",
	},
	{
		id: "NOT-10005",
		title: "Failed transfer detected",
		message: "A customer transfer failed and may require investigation.",
		type: "Transaction",
		priority: "High",
		status: "Unread",
		date: "Jul 28, 2026",
		time: "04:25 PM",
	},
	{
		id: "NOT-10006",
		title: "Security alert",
		message:
			"Multiple unsuccessful login attempts were detected on an account.",
		type: "Security",
		priority: "High",
		status: "Read",
		date: "Jul 28, 2026",
		time: "02:10 PM",
	},
];

function TypeIcon({ type }) {
	const icons = {
		KYC: FaUserShield,
		Transaction: FaExclamationTriangle,
		User: FaInfoCircle,
		System: FaBell,
		Security: FaUserShield,
	};

	const Icon = icons[type] || FaBell;

	return (
		<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
			<Icon size={17} />
		</div>
	);
}

function PriorityBadge({ priority }) {
	return (
		<span
			className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
				priority === "High" ?
					"bg-red-50 text-red-700"
				:	"bg-gray-100 text-gray-600"
			}`}>
			{priority}
		</span>
	);
}

export default function Notifications() {
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState("All");
	const [typeFilter, setTypeFilter] = useState("All");
	const [page, setPage] = useState(1);

	const perPage = 5;

	const filteredNotifications = useMemo(() => {
		return notificationsData.filter((notification) => {
			const query = search.toLowerCase();

			const matchesSearch =
				notification.id.toLowerCase().includes(query) ||
				notification.title.toLowerCase().includes(query) ||
				notification.message.toLowerCase().includes(query) ||
				notification.type.toLowerCase().includes(query);

			const matchesStatus =
				statusFilter === "All" || notification.status === statusFilter;

			const matchesType =
				typeFilter === "All" || notification.type === typeFilter;

			return matchesSearch && matchesStatus && matchesType;
		});
	}, [search, statusFilter, typeFilter]);

	const totalPages = Math.max(
		1,
		Math.ceil(filteredNotifications.length / perPage),
	);

	const currentPage = Math.min(page, totalPages);

	const visibleNotifications = filteredNotifications.slice(
		(currentPage - 1) * perPage,
		currentPage * perPage,
	);

	const unreadCount = notificationsData.filter(
		(notification) => notification.status === "Unread",
	).length;

	const highPriorityCount = notificationsData.filter(
		(notification) => notification.priority === "High",
	).length;

	const systemCount = notificationsData.filter(
		(notification) => notification.type === "System",
	).length;

	return (
		<div className="space-y-6">
			{/* Header */}

			<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<p className="text-sm font-medium text-emerald-600">System Center</p>

					<h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
						Notifications
					</h1>

					<p className="mt-2 text-sm text-gray-500">
						View important system alerts, customer events, and administrative
						notifications.
					</p>
				</div>

				<button
					type="button"
					className="inline-flex w-fit items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700">
					<FaCheckCircle size={13} />
					Mark All as Read
				</button>
			</div>

			{/* Summary */}

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Total Notifications</p>

							<p className="mt-2 text-2xl font-bold text-gray-900">
								{notificationsData.length}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
							<FaBell />
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Unread</p>

							<p className="mt-2 text-2xl font-bold text-emerald-600">
								{unreadCount}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
							<FaBell />
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">High Priority</p>

							<p className="mt-2 text-2xl font-bold text-red-600">
								{highPriorityCount}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
							<FaExclamationTriangle />
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">System Alerts</p>

							<p className="mt-2 text-2xl font-bold text-indigo-600">
								{systemCount}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
							<FaInfoCircle />
						</div>
					</div>
				</div>
			</div>

			{/* Notifications */}

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
								placeholder="Search notifications..."
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
							<option value="All">All Notifications</option>
							<option value="Unread">Unread</option>
							<option value="Read">Read</option>
						</select>

						<select
							value={typeFilter}
							onChange={(event) => {
								setTypeFilter(event.target.value);
								setPage(1);
							}}
							className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-emerald-500">
							<option value="All">All Types</option>
							<option value="KYC">KYC</option>
							<option value="Transaction">Transaction</option>
							<option value="User">User</option>
							<option value="System">System</option>
							<option value="Security">Security</option>
						</select>
					</div>
				</div>

				{/* Notification List */}

				<div>
					{visibleNotifications.map((notification) => (
						<div
							key={notification.id}
							className={`flex gap-4 border-b border-gray-100 px-5 py-5 transition hover:bg-gray-50 sm:px-6 ${
								notification.status === "Unread" ? "bg-emerald-50/20" : ""
							}`}>
							<TypeIcon type={notification.type} />

							<div className="min-w-0 flex-1">
								<div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
									<div>
										<div className="flex flex-wrap items-center gap-2">
											<h3 className="text-sm font-semibold text-gray-900">
												{notification.title}
											</h3>

											{notification.status === "Unread" && (
												<span className="h-2 w-2 rounded-full bg-emerald-500" />
											)}
										</div>

										<p className="mt-1 text-xs text-gray-400">
											{notification.id}
										</p>
									</div>

									<PriorityBadge priority={notification.priority} />
								</div>

								<p className="mt-3 max-w-3xl text-sm leading-6 text-gray-600">
									{notification.message}
								</p>

								<div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-400">
									<span>{notification.type}</span>

									<span>•</span>

									<span>{notification.date}</span>

									<span>•</span>

									<span>{notification.time}</span>
								</div>
							</div>
						</div>
					))}

					{visibleNotifications.length === 0 && (
						<div className="px-6 py-16 text-center">
							<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
								<FaBell />
							</div>

							<p className="mt-4 text-sm font-semibold text-gray-800">
								No notifications found
							</p>

							<p className="mt-1 text-sm text-gray-500">
								Try changing your search or filters.
							</p>
						</div>
					)}
				</div>

				{/* Pagination */}

				<div className="flex flex-col gap-4 border-t border-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-sm text-gray-500">
						Showing{" "}
						<span className="font-semibold text-gray-700">
							{filteredNotifications.length === 0 ?
								0
							:	(currentPage - 1) * perPage + 1}
						</span>{" "}
						to{" "}
						<span className="font-semibold text-gray-700">
							{Math.min(currentPage * perPage, filteredNotifications.length)}
						</span>{" "}
						of{" "}
						<span className="font-semibold text-gray-700">
							{filteredNotifications.length}
						</span>{" "}
						notifications
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
