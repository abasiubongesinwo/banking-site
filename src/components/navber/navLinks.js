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
				path: "/investment-management",
			},
			{
				name: "Business Loan",
				path: "/business-loan",
			},
		],
	},
	{
		name: "Contact",
		path: "/contact",
	},
];
