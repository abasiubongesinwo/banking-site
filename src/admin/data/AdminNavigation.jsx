import {
	FaHome,
	FaUsers,
	FaUserPlus,
	FaUserCheck,
	FaExchangeAlt,
	FaMoneyBillWave,
	FaCreditCard,
	FaHandHoldingUsd,
	FaChartLine,
	FaFileInvoiceDollar,
	FaUserCog,
	FaCog,
} from "react-icons/fa";

export const adminNavigation = [
	{
		title: "Dashboard",
		path: "/admin/dashboard",
		icon: FaHome,
	},

	{
		title: "Manage Users",
		path: "/admin/manage-users",
		icon: FaUsers,
	},

	{
		title: "Create New User",
		path: "/admin/create-user",
		icon: FaUserPlus,
	},

	{
		title: "New User Application(s)",
		path: "/admin/kyc-applications",
		icon: FaUserCheck,
	},

	{
		title: "Transfer Transactions",
		path: "/admin/transfers",
		icon: FaExchangeAlt,
	},

	{
		title: "Users Deposits",
		path: "/admin/deposits",
		icon: FaMoneyBillWave,
	},

	{
		title: "Virtual Cards",
		icon: FaCreditCard,
		expandable: true,
		children: [
			{
				title: "All Cards",
				path: "/admin/cards",
			},
			{
				title: "Pending Applications",
				path: "/admin/cards/pending",
			},
			{
				title: "Card Settings",
				path: "/admin/cards/settings",
			},
		],
	},

	{
		title: "Grant Applications",
		icon: FaHandHoldingUsd,
		expandable: true,
		children: [
			{
				title: "All Applications",
				path: "/admin/grants",
			},
			{
				title: "Pending",
				path: "/admin/grants/pending",
			},
			{
				title: "Approved",
				path: "/admin/grants/approved",
			},
			{
				title: "Disbursed",
				path: "/admin/grants/disbursed",
			},
			{
				title: "Rejected",
				path: "/admin/grants/rejected",
			},
		],
	},

	{
		title: "Investment Management",
		icon: FaChartLine,
		expandable: true,
		children: [
			{
				title: "Dashboard",
				path: "/admin/investments",
			},
			{
				title: "Investment Plans",
				path: "/admin/investments/plans",
			},
			{
				title: "Create Plan",
				path: "/admin/investments/create-plan",
			},
			{
				title: "User Investments",
				path: "/admin/investments/users",
			},
			{
				title: "Add Manual Investment",
				path: "/admin/investments/manual",
			},
		],
	},

	{
		title: "Loan Management",
		icon: FaFileInvoiceDollar,
		expandable: true,
		children: [
			{
				title: "All Loans",
				path: "/admin/loans",
			},
			{
				title: "Pending",
				path: "/admin/loans/pending",
			},
			{
				title: "Approved",
				path: "/admin/loans/approved",
			},
			{
				title: "Active",
				path: "/admin/loans/active",
			},
			{
				title: "Rejected",
				path: "/admin/loans/rejected",
			},
		],
	},

	{
		title: "Administrator(s)",
		icon: FaUserCog,
		expandable: true,
		children: [
			{
				title: "Add Manager",
				path: "/admin/administrators/add",
			},
			{
				title: "Manage Admin(s)",
				path: "/admin/administrators",
			},
		],
	},

	{
		title: "Settings",
		icon: FaCog,
		expandable: true,
		children: [
			{
				title: "App Settings",
				path: "/admin/settings",
			},
			{
				title: "Payment Settings",
				path: "/admin/settings/payment",
			},
			{
				title: "SMS Settings",
				path: "/admin/settings/sms",
			},
			{
				title: "IP Address",
				path: "/admin/settings/ip-address",
			},
		],
	},
];
