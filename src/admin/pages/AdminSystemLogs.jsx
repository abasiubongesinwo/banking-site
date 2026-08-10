import { useState } from "react";
import {
	FaSearch,
	FaFilter,
	FaDownload,
	FaServer,
	FaCheckCircle,
	FaExclamationTriangle,
	FaTimesCircle,
} from "react-icons/fa";

const initialLogs = [
	{
		id: 1,
		level: "INFO",
		service: "Authentication",
		message: "Administrator login completed successfully.",
		timestamp: "2026-07-29 10:42:18",
		requestId: "REQ-829104",
	},
	{
		id: 2,
		level: "INFO",
		service: "Transactions",
		message: "Transaction TRX-104829 was successfully processed.",
		timestamp: "2026-07-29 10:38:51",
		requestId: "REQ-829087",
	},
	{
		id: 3,
		level: "WARNING",
		service: "Security",
		message: "Multiple failed login attempts detected from an IP address.",
		timestamp: "2026-07-29 10:21:07",
		requestId: "REQ-828941",
	},
	{
		id: 4,
		level: "INFO",
		service: "KYC",
		message: "KYC application KYC-20391 submitted for review.",
		timestamp: "2026-07-29 09:54:33",
		requestId: "REQ-828802",
	},
	{
		id: 5,
		level: "ERROR",
		service: "Payments",
		message: "Payment provider returned an unexpected response.",
		timestamp: "2026-07-29 09:41:12",
		requestId: "REQ-828761",
	},
	{
		id: 6,
		level: "INFO",
		service: "Users",
		message: "New customer account was successfully created.",
		timestamp: "2026-07-29 09:30:45",
		requestId: "REQ-828701",
	},
	{
		id: 7,
		level: "WARNING",
		service: "System",
		message: "Database connection pool reached 80% utilization.",
		timestamp: "2026-07-29 09:15:26",
		requestId: "REQ-828640",
	},
	{
		id: 8,
		level: "INFO",
		service: "Notifications",
		message: "Notification queue processed successfully.",
		timestamp: "2026-07-29 08:58:09",
		requestId: "REQ-828512",
	},
];

export default function AdminSystemLogs() {
	const [logs] = useState(initialLogs);
	const [search, setSearch] = useState("");
	const [level, setLevel] = useState("All");

	const filteredLogs = logs.filter((log) => {
		const query = search.toLowerCase();

		const matchesSearch =
			log.service.toLowerCase().includes(query) ||
			log.message.toLowerCase().includes(query) ||
			log.requestId.toLowerCase().includes(query);

		const matchesLevel = level === "All" || log.level === level;

		return matchesSearch && matchesLevel;
	});

	const getLevelStyle = (logLevel) => {
		if (logLevel === "ERROR") {
			return "bg-red-50 text-red-600";
		}

		if (logLevel === "WARNING") {
			return "bg-amber-50 text-amber-600";
		}

		return "bg-emerald-50 text-emerald-600";
	};

	const getLevelIcon = (logLevel) => {
		if (logLevel === "ERROR") {
			return FaTimesCircle;
		}

		if (logLevel === "WARNING") {
			return FaExclamationTriangle;
		}

		return FaCheckCircle;
	};

	const handleExport = () => {
		console.log("Exporting system logs...");
	};

	return (
		<div className="space-y-6">
			{/* Header */}

			<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<p className="text-sm font-medium text-emerald-600">
						System Monitoring
					</p>

					<h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
						System Logs
					</h1>

					<p className="mt-2 text-sm text-gray-500">
						Monitor application events, warnings, and system errors.
					</p>
				</div>

				<button
					type="button"
					onClick={handleExport}
					className="inline-flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-semibold text-gray-600 shadow-sm transition hover:bg-gray-50">
					<FaDownload size={12} />
					Export Logs
				</button>
			</div>

			{/* Statistics */}

			<div className="grid gap-4 sm:grid-cols-3">
				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Total Events</p>

							<p className="mt-2 text-2xl font-bold text-gray-900">24,891</p>

							<p className="mt-1 text-xs text-gray-400">Today</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
							<FaServer />
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Warnings</p>

							<p className="mt-2 text-2xl font-bold text-amber-600">47</p>

							<p className="mt-1 text-xs text-gray-400">Requires monitoring</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
							<FaExclamationTriangle />
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Errors</p>

							<p className="mt-2 text-2xl font-bold text-red-600">8</p>

							<p className="mt-1 text-xs text-gray-400">Needs investigation</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-600">
							<FaTimesCircle />
						</div>
					</div>
				</div>
			</div>

			{/* Logs */}

			<div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
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
							placeholder="Search logs..."
							className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
						/>
					</div>

					<div className="flex items-center gap-2">
						<FaFilter size={12} className="text-gray-400" />

						<select
							value={level}
							onChange={(event) => setLevel(event.target.value)}
							className="h-11 rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-600 outline-none focus:border-emerald-500">
							<option value="All">All Levels</option>
							<option value="INFO">Info</option>
							<option value="WARNING">Warning</option>
							<option value="ERROR">Error</option>
						</select>
					</div>
				</div>

				{/* Desktop */}

				<div className="hidden overflow-x-auto md:block">
					<table className="w-full min-w-[900px]">
						<thead>
							<tr className="border-b border-gray-100 bg-gray-50/70">
								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Level
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Service
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Message
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Timestamp
								</th>

								<th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-400">
									Request ID
								</th>
							</tr>
						</thead>

						<tbody className="divide-y divide-gray-100">
							{filteredLogs.map((log) => {
								const Icon = getLevelIcon(log.level);

								return (
									<tr key={log.id} className="transition hover:bg-gray-50/60">
										<td className="px-6 py-4">
											<span
												className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${getLevelStyle(
													log.level,
												)}`}>
												<Icon size={11} />

												{log.level}
											</span>
										</td>

										<td className="px-6 py-4 text-sm font-semibold text-gray-700">
											{log.service}
										</td>

										<td className="max-w-md px-6 py-4 text-sm text-gray-500">
											{log.message}
										</td>

										<td className="whitespace-nowrap px-6 py-4 font-mono text-xs text-gray-500">
											{log.timestamp}
										</td>

										<td className="px-6 py-4 font-mono text-xs text-gray-400">
											{log.requestId}
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>

				{/* Mobile */}

				<div className="divide-y divide-gray-100 md:hidden">
					{filteredLogs.map((log) => {
						const Icon = getLevelIcon(log.level);

						return (
							<div key={log.id} className="p-5">
								<div className="flex gap-3">
									<div
										className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${getLevelStyle(
											log.level,
										)}`}>
										<Icon size={14} />
									</div>

									<div className="min-w-0 flex-1">
										<div className="flex items-start justify-between gap-3">
											<div>
												<p className="text-sm font-semibold text-gray-800">
													{log.service}
												</p>

												<p className="mt-1 text-sm leading-5 text-gray-500">
													{log.message}
												</p>
											</div>

											<span
												className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-semibold ${getLevelStyle(
													log.level,
												)}`}>
												{log.level}
											</span>
										</div>

										<div className="mt-3 space-y-1 text-xs text-gray-400">
											<p>{log.timestamp}</p>

											<p className="font-mono">{log.requestId}</p>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>

				{/* Empty */}

				{filteredLogs.length === 0 && (
					<div className="px-6 py-16 text-center">
						<FaServer className="mx-auto text-3xl text-gray-300" />

						<p className="mt-4 text-sm font-semibold text-gray-800">
							No logs found
						</p>

						<p className="mt-1 text-xs text-gray-400">
							Try changing your search or filter.
						</p>
					</div>
				)}

				{/* Footer */}

				<div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
					<p className="text-xs text-gray-400">
						Showing{" "}
						<span className="font-semibold text-gray-600">
							{filteredLogs.length}
						</span>{" "}
						logs
					</p>

					<div className="flex items-center gap-2">
						<button
							type="button"
							disabled
							className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-300">
							Previous
						</button>

						<span className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-semibold text-white">
							1
						</span>

						<button
							type="button"
							className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600 transition hover:bg-gray-50">
							2
						</button>

						<button
							type="button"
							className="rounded-lg border border-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-600 transition hover:bg-gray-50">
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
