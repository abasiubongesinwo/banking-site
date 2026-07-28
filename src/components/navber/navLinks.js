export const navLinks = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "About Us",
		path: "/about",
	},
	{
		name: "Services",
		children: [
			{
				name: "Investment Management",
				path: "/services/investment-management",
			},
			{
				name: "Business Loan",
				path: "/services/business-loan",
			},
			// {
			// 	name: "Personal Loan",
			// 	path: "/services/personal-loan",
			// },
			// {
			// 	name: "Savings Account",
			// 	path: "/services/savings-account",
			// },
			// {
			// 	name: "Current Account",
			// 	path: "/services/current-account",
			// },
			// {
			// 	name: "Corporate Banking",
			// 	path: "/services/corporate-banking",
			// },
			// {
			// 	name: "Internet Banking",
			// 	path: "/services/internet-banking",
			// },
		],
	},
	{
		name: "Contact",
		path: "/contact",
	},
];
