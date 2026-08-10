import { motion } from "framer-motion";
import {
	FaMoneyBillWave,
	FaClock,
	FaExchangeAlt,
	FaUsers,
	FaUserSlash,
	FaUserCheck,
	FaArrowUp,
	FaArrowDown,
} from "react-icons/fa";

const statistics = [
	{
		title: "Total Deposits",
		value: "$50,000",
		icon: FaMoneyBillWave,
		description: "Total deposits received",
		trend: "+12.5%",
		trendUp: true,
		iconStyle: "bg-emerald-100 text-emerald-600",
	},
	{
		title: "Pending Deposits",
		value: "$96,000",
		icon: FaClock,
		description: "Awaiting processing",
		trend: "+4.2%",
		trendUp: true,
		iconStyle: "bg-amber-100 text-amber-600",
	},
	{
		title: "Total Transfers",
		value: "$598",
		icon: FaExchangeAlt,
		description: "Total transfer transactions",
		trend: "+8.4%",
		trendUp: true,
		iconStyle: "bg-blue-100 text-blue-600",
	},
	{
		title: "Pending Transfers",
		value: "$0",
		icon: FaClock,
		description: "Transfers awaiting processing",
		trend: "0%",
		trendUp: true,
		iconStyle: "bg-purple-100 text-purple-600",
	},
	{
		title: "Total Users",
		value: "8",
		icon: FaUsers,
		description: "Registered customers",
		trend: "+2.1%",
		trendUp: true,
		iconStyle: "bg-indigo-100 text-indigo-600",
	},
	{
		title: "Blocked Users",
		value: "0",
		icon: FaUserSlash,
		description: "Currently blocked accounts",
		trend: "0%",
		trendUp: true,
		iconStyle: "bg-red-100 text-red-600",
	},
	{
		title: "Active Users",
		value: "8",
		icon: FaUserCheck,
		description: "Currently active accounts",
		trend: "+3.4%",
		trendUp: true,
		iconStyle: "bg-green-100 text-green-600",
	},
];

const recentTransactions = [
	{
		id: "#TRX-1001",
		user: "John Smith",
		type: "Deposit",
		amount: "$5,000",
		status: "Processed",
		date: "Today",
	},
	{
		id: "#TRX-1002",
		user: "Michael Brown",
		type: "Transfer",
		amount: "$1,250",
		status: "Pending",
		date: "Today",
	},
	{
		id: "#TRX-1003",
		user: "Sarah Wilson",
		type: "Deposit",
		amount: "$3,500",
		status: "Processed",
		date: "Yesterday",
	},
	{
		id: "#TRX-1004",
		user: "David Johnson",
		type: "Transfer",
		amount: "$850",
		status: "Processed",
		date: "Yesterday",
	},
];

function StatusBadge({ status }) {
	const styles = {
		Processed: "bg-emerald-100 text-emerald-700",
		Pending: "bg-amber-100 text-amber-700",
		Rejected: "bg-red-100 text-red-700",
	};

	return (
		<span
			className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
				styles[status] || "bg-gray-100 text-gray-600"
			}`}>
			{status}
		</span>
	);
}

export default function Dashboard() {
	return (
		<div className="space-y-8">
			{/* Header */}

			<motion.div
				initial={{ opacity: 0, y: 15 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.4 }}
				className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
				<div>
					<p className="text-sm font-medium text-emerald-600">Administration</p>

					<h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
						Dashboard
					</h1>

					<p className="mt-2 text-sm text-gray-500">
						Welcome back, Admin Manager. Here's what's happening with your
						banking platform.
					</p>
				</div>

				<div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
					<p className="text-xs text-gray-500">Last updated</p>

					<p className="mt-1 text-sm font-semibold text-gray-800">Just now</p>
				</div>
			</motion.div>

			{/* Statistics */}

			<div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
				{statistics.map((stat, index) => {
					const Icon = stat.icon;

					return (
						<motion.div
							key={stat.title}
							initial={{
								opacity: 0,
								y: 20,
							}}
							animate={{
								opacity: 1,
								y: 0,
							}}
							transition={{
								delay: index * 0.06,
								duration: 0.4,
							}}
							className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
							<div className="flex items-start justify-between">
								<div
									className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconStyle}`}>
									<Icon size={20} />
								</div>

								<div
									className={`flex items-center gap-1 text-xs font-semibold ${
										stat.trendUp ? "text-emerald-600" : "text-red-600"
									}`}>
									{stat.trendUp ?
										<FaArrowUp size={9} />
									:	<FaArrowDown size={9} />}
									{stat.trend}
								</div>
							</div>

							<div className="mt-5">
								<p className="text-sm font-medium text-gray-500">
									{stat.title}
								</p>

								<h2 className="mt-1 text-2xl font-bold text-gray-900">
									{stat.value}
								</h2>

								<p className="mt-2 text-xs text-gray-400">{stat.description}</p>
							</div>
						</motion.div>
					);
				})}
			</div>

			{/* Overview */}

			<div className="grid gap-6 xl:grid-cols-3">
				{/* Transaction Overview */}

				<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm xl:col-span-2">
					<div className="flex items-center justify-between">
						<div>
							<h2 className="text-lg font-bold text-gray-900">
								Transaction Overview
							</h2>

							<p className="mt-1 text-sm text-gray-500">
								Recent deposits and transfers
							</p>
						</div>

						<button className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">
							View All
						</button>
					</div>

					<div className="mt-6 overflow-x-auto">
						<table className="w-full min-w-[700px]">
							<thead>
								<tr className="border-b border-gray-100 text-left">
									<th className="pb-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
										Transaction
									</th>

									<th className="pb-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
										User
									</th>

									<th className="pb-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
										Type
									</th>

									<th className="pb-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
										Amount
									</th>

									<th className="pb-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
										Status
									</th>

									<th className="pb-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
										Date
									</th>
								</tr>
							</thead>

							<tbody>
								{recentTransactions.map((transaction) => (
									<tr
										key={transaction.id}
										className="border-b border-gray-50 last:border-0">
										<td className="py-4 text-sm font-semibold text-gray-800">
											{transaction.id}
										</td>

										<td className="py-4 text-sm text-gray-600">
											{transaction.user}
										</td>

										<td className="py-4 text-sm text-gray-600">
											{transaction.type}
										</td>

										<td className="py-4 text-sm font-semibold text-gray-800">
											{transaction.amount}
										</td>

										<td className="py-4">
											<StatusBadge status={transaction.status} />
										</td>

										<td className="py-4 text-sm text-gray-500">
											{transaction.date}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				{/* Platform Summary */}

				<div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
					<h2 className="text-lg font-bold text-gray-900">Platform Summary</h2>

					<p className="mt-1 text-sm text-gray-500">
						Account activity overview
					</p>

					<div className="mt-8 space-y-6">
						<div>
							<div className="flex justify-between text-sm">
								<span className="text-gray-500">Active Users</span>

								<span className="font-semibold text-gray-800">8 / 8</span>
							</div>

							<div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
								<div className="h-full w-full rounded-full bg-emerald-500" />
							</div>
						</div>

						<div>
							<div className="flex justify-between text-sm">
								<span className="text-gray-500">Processed Deposits</span>

								<span className="font-semibold text-gray-800">78%</span>
							</div>

							<div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
								<div className="h-full w-[78%] rounded-full bg-blue-500" />
							</div>
						</div>

						<div>
							<div className="flex justify-between text-sm">
								<span className="text-gray-500">Processed Transfers</span>

								<span className="font-semibold text-gray-800">92%</span>
							</div>

							<div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
								<div className="h-full w-[92%] rounded-full bg-purple-500" />
							</div>
						</div>

						<div>
							<div className="flex justify-between text-sm">
								<span className="text-gray-500">Blocked Accounts</span>

								<span className="font-semibold text-gray-800">0%</span>
							</div>

							<div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
								<div className="h-full w-0 rounded-full bg-red-500" />
							</div>
						</div>
					</div>

					<div className="mt-8 rounded-xl bg-emerald-50 p-4">
						<p className="text-sm font-semibold text-emerald-700">
							System Status
						</p>

						<div className="mt-2 flex items-center gap-2">
							<span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

							<span className="text-sm text-gray-600">
								All systems operational
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
