import React from "react";
import {
	FaDownload,
	FaUndo,
	FaShareSquare,
	FaSignInAlt,
	FaUsers,
	FaUserTimes,
	FaUserCheck,
	FaSitemap,
} from "react-icons/fa";

const stats = [
	{
		title: "Total Deposit",
		value: "$50,000",
		icon: FaDownload,
		iconColor: "text-orange-400",
	},

	{
		title: "Pending Deposit(s)",
		value: "$96,000",
		icon: FaUndo,
		iconColor: "text-blue-400",
	},

	{
		title: "Total Transfers",
		value: "$598",
		icon: FaShareSquare,
		iconColor: "text-red-400",
	},

	{
		title: "Pending Transfers",
		value: "$2,671",
		icon: FaSignInAlt,
		iconColor: "text-indigo-400",
	},

	{
		title: "Total Users",
		value: "8",
		icon: FaUsers,
		iconColor: "text-green-400",
	},

	{
		title: "Block Users",
		value: "0",
		icon: FaUserTimes,
		iconColor: "text-red-400",
	},

	{
		title: "Active Users",
		value: "8",
		icon: FaUserCheck,
		iconColor: "text-green-400",
	},

	{
		title: "",
		value: "",
		icon: FaSitemap,
		iconColor: "text-orange-400",
	},
];

export default function Dashboard() {
	return (
		<div className="min-h-screen bg-[#f5f8fb]">
			{/* Header */}
			<div className="bg-[#171d35] px-7 pb-14 pt-7">
				<div className="flex items-start justify-between">
					<div>
						<h1 className="text-[20px] font-bold text-white">Dashboard</h1>

						<p className="mt-4 text-[13px] font-medium text-gray-300">
							Welcome, Admin manager!
						</p>
					</div>

					<div className="flex gap-3">
						<button
							type="button"
							className="h-10 bg-[#20c83a] px-6 text-[12px] font-medium text-white transition hover:bg-[#19b531]">
							Deposits
						</button>

						<button
							type="button"
							className="h-10 bg-[#42a5f5] px-6 text-[12px] font-medium text-white transition hover:bg-[#3195e7]">
							Transfers
						</button>

						<button
							type="button"
							className="h-10 bg-[#6258ce] px-6 text-[12px] font-medium text-white transition hover:bg-[#5148b8]">
							Users
						</button>
					</div>
				</div>
			</div>

			{/* Statistics Card */}
			<div className="-mt-7 px-7">
				<div className="rounded-[4px] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
						{stats.map((stat, index) => {
							const Icon = stat.icon;

							return (
								<div
									key={index}
									className={`flex min-h-[100px] items-center gap-8 px-10 py-6 ${
										index % 4 !== 3 ? "border-r border-gray-200" : ""
									} ${index >= 4 ? "border-t border-gray-200" : ""}`}>
									<Icon
										className={`shrink-0 ${stat.iconColor}`}
										size={34}
										strokeWidth={1}
									/>

									<div>
										<p className="text-[13px] text-[#7b8794]">{stat.title}</p>

										<p className="mt-2 text-[14px] text-[#243b55]">
											{stat.value}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
