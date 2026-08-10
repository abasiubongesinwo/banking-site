import { useState } from "react";
import {
	FaBell,
	FaCheck,
	FaTrash,
	FaSearch,
	FaCheckDouble,
	FaExclamationTriangle,
	FaUser,
	FaMoneyBillWave,
	FaShieldAlt,
} from "react-icons/fa";

const initialNotifications = [
	{
		id: 1,
		title: "New KYC Application",
		message: "A new customer has submitted documents for verification.",
		type: "KYC",
		time: "5 minutes ago",
		read: false,
		icon: FaUser,
	},
	{
		id: 2,
		title: "Large Transaction Detected",
		message:
			"A transaction exceeding the configured monitoring threshold was detected.",
		type: "Transaction",
		time: "18 minutes ago",
		read: false,
		icon: FaMoneyBillWave,
	},
	{
		id: 3,
		title: "Security Alert",
		message: "Multiple failed administrator login attempts were detected.",
		type: "Security",
		time: "1 hour ago",
		read: false,
		icon: FaShieldAlt,
	},
	{
		id: 4,
		title: "Withdrawal Pending",
		message: "A customer withdrawal requires administrator review.",
		type: "Withdrawal",
		time: "2 hours ago",
		read: true,
		icon: FaMoneyBillWave,
	},
	{
		id: 5,
		title: "New User Registered",
		message: "A new customer account has been successfully created.",
		type: "User",
		time: "4 hours ago",
		read: true,
		icon: FaUser,
	},
	{
		id: 6,
		title: "System Maintenance",
		message: "Scheduled system maintenance will begin tonight at 12:00 AM.",
		type: "System",
		time: "Yesterday",
		read: true,
		icon: FaExclamationTriangle,
	},
];

export default function AdminNotifications() {
	const [notifications, setNotifications] = useState(initialNotifications);

	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("All");

	const unreadCount = notifications.filter(
		(notification) => !notification.read,
	).length;

	const filteredNotifications = notifications.filter((notification) => {
		const query = search.toLowerCase();

		const matchesSearch =
			notification.title.toLowerCase().includes(query) ||
			notification.message.toLowerCase().includes(query);

		const matchesFilter =
			filter === "All" ||
			(filter === "Unread" && !notification.read) ||
			(filter === "Read" && notification.read);

		return matchesSearch && matchesFilter;
	});

	const markAsRead = (id) => {
		setNotifications((previous) =>
			previous.map((notification) =>
				notification.id === id ? { ...notification, read: true } : notification,
			),
		);
	};

	const markAllAsRead = () => {
		setNotifications((previous) =>
			previous.map((notification) => ({
				...notification,
				read: true,
			})),
		);
	};

	const deleteNotification = (id) => {
		setNotifications((previous) =>
			previous.filter((notification) => notification.id !== id),
		);
	};

	const clearAll = () => {
		setNotifications([]);
	};

	return (
		<div className="space-y-6">
			{/* Header */}

			<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<p className="text-sm font-medium text-emerald-600">
						Alerts & Updates
					</p>

					<h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
						Notifications
					</h1>

					<p className="mt-2 text-sm text-gray-500">
						Stay updated with important platform events and administrator
						alerts.
					</p>
				</div>

				{unreadCount > 0 && (
					<button
						type="button"
						onClick={markAllAsRead}
						className="inline-flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-600 shadow-sm transition hover:bg-gray-50">
						<FaCheckDouble size={13} />
						Mark All as Read
					</button>
				)}
			</div>

			{/* Stats */}

			<div className="grid gap-4 sm:grid-cols-3">
				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Total Notifications</p>

							<p className="mt-2 text-2xl font-bold text-gray-900">
								{notifications.length}
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
							<p className="text-sm text-gray-500">Read</p>

							<p className="mt-2 text-2xl font-bold text-gray-700">
								{
									notifications.filter((notification) => notification.read)
										.length
								}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 text-gray-500">
							<FaCheck />
						</div>
					</div>
				</div>
			</div>

			{/* Notifications */}

			<div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
				{/* Toolbar */}

				<div className="flex flex-col gap-4 border-b border-gray-100 p-5 lg:flex-row lg:items-center lg:justify-between">
					<div className="relative w-full lg:max-w-md">
						<FaSearch
							size={14}
							className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
						/>

						<input
							type="search"
							value={search}
							onChange={(event) => setSearch(event.target.value)}
							placeholder="Search notifications..."
							className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
						/>
					</div>

					<div className="flex items-center gap-2">
						{["All", "Unread", "Read"].map((item) => (
							<button
								key={item}
								type="button"
								onClick={() => setFilter(item)}
								className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
									filter === item ?
										"bg-emerald-600 text-white"
									:	"bg-gray-100 text-gray-500 hover:bg-gray-200"
								}`}>
								{item}
							</button>
						))}
					</div>
				</div>

				{/* Notification List */}

				<div className="divide-y divide-gray-100">
					{filteredNotifications.map((notification) => {
						const Icon = notification.icon;

						return (
							<div
								key={notification.id}
								className={`p-5 transition hover:bg-gray-50/60 sm:p-6 ${
									!notification.read ? "bg-emerald-50/20" : ""
								}`}>
								<div className="flex gap-4">
									<div
										className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
											!notification.read ?
												"bg-emerald-100 text-emerald-600"
											:	"bg-gray-100 text-gray-500"
										}`}>
										<Icon size={16} />

										{!notification.read && (
											<span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
										)}
									</div>

									<div className="min-w-0 flex-1">
										<div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
											<div>
												<div className="flex flex-wrap items-center gap-2">
													<h3
														className={`text-sm ${
															!notification.read ?
																"font-bold text-gray-900"
															:	"font-semibold text-gray-700"
														}`}>
														{notification.title}
													</h3>

													<span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-semibold text-gray-500">
														{notification.type}
													</span>
												</div>

												<p className="mt-1 text-sm leading-6 text-gray-500">
													{notification.message}
												</p>

												<p className="mt-2 text-xs text-gray-400">
													{notification.time}
												</p>
											</div>

											<div className="flex items-center gap-2">
												{!notification.read && (
													<button
														type="button"
														onClick={() => markAsRead(notification.id)}
														title="Mark as read"
														className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition hover:bg-emerald-50 hover:text-emerald-600">
														<FaCheck size={12} />
													</button>
												)}

												<button
													type="button"
													onClick={() => deleteNotification(notification.id)}
													title="Delete"
													className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500">
													<FaTrash size={12} />
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* Empty State */}

				{filteredNotifications.length === 0 && (
					<div className="px-6 py-16 text-center">
						<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400">
							<FaBell size={20} />
						</div>

						<h3 className="mt-4 text-sm font-bold text-gray-800">
							No notifications found
						</h3>

						<p className="mt-1 text-xs text-gray-400">
							You are all caught up or no notifications match your search.
						</p>
					</div>
				)}

				{/* Footer */}

				{notifications.length > 0 && (
					<div className="flex items-center justify-between border-t border-gray-100 px-5 py-4">
						<p className="text-xs text-gray-400">
							{filteredNotifications.length} notification
							{filteredNotifications.length !== 1 ? "s" : ""}
						</p>

						<button
							type="button"
							onClick={clearAll}
							className="text-xs font-semibold text-red-500 transition hover:text-red-600">
							Clear All
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
