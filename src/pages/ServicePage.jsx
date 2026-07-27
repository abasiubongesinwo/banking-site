import { useParams, Link } from "react-router-dom";

const serviceTitles = {
	"investment-management": "Investment Management",
	"business-loan": "Business Loan",
	"personal-loan": "Personal Loan",
	"savings-account": "Savings Account",
	"current-account": "Current Account",
	"corporate-banking": "Corporate Banking",
	"internet-banking": "Internet Banking",
	cards: "Cards",
	loans: "Loans",
	investment: "Investment",
	corporate: "Corporate Banking",
	security: "Secure Banking",
};

export default function ServicePage() {
	const { serviceSlug } = useParams();
	const title = serviceTitles[serviceSlug] || "Service";

	return (
		<main className="mx-auto max-w-7xl px-6 py-16">
			<Link
				to="/"
				className="mb-6 inline-block text-sm text-emerald-600 hover:underline">
				&larr; Back to Home
			</Link>
			<h1 className="text-4xl font-bold text-gray-900">{title}</h1>
			<p className="mt-4 text-lg text-gray-600">
				Explore our {title.toLowerCase()} solutions designed to meet your
				financial goals.
			</p>
		</main>
	);
}
