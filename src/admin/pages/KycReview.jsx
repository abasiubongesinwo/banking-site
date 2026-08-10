import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
	FaArrowLeft,
	FaUser,
	FaEnvelope,
	FaPhone,
	FaGlobe,
	FaWallet,
	FaIdCard,
	FaCheckCircle,
	FaTimesCircle,
	FaClock,
	FaFileAlt,
	FaDownload,
	FaShieldAlt,
} from "react-icons/fa";

const mockApplication = {
	id: "KYC-1001",
	firstName: "Daniel",
	middleName: "Michael",
	lastName: "Williams",
	username: "danielwilliams",
	email: "daniel.williams@email.com",
	phone: "+1 202 555 0147",
	country: "United States",
	accountType: "Savings Account",
	currency: "USD",
	submitted: "Jul 28, 2026",
	status: "Pending",
	dateOfBirth: "January 15, 1998",
	address: "245 Market Street, New York, NY",
	postalCode: "10001",
	documentType: "International Passport",
	documentNumber: "P123456789",
};

function InfoItem({ icon: Icon, label, value }) {
	return (
		<div className="rounded-xl bg-gray-50 p-4">
			<div className="flex items-center gap-2 text-xs font-medium text-gray-400">
				<Icon size={12} />
				<span>{label}</span>
			</div>

			<p className="mt-2 text-sm font-semibold text-gray-800">
				{value || "Not provided"}
			</p>
		</div>
	);
}

function StatusBadge({ status }) {
	if (status === "Approved") {
		return (
			<span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-xs font-semibold text-emerald-700">
				<FaCheckCircle size={12} />
				Approved
			</span>
		);
	}

	if (status === "Rejected") {
		return (
			<span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-xs font-semibold text-red-700">
				<FaTimesCircle size={12} />
				Rejected
			</span>
		);
	}

	return (
		<span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-700">
			<FaClock size={12} />
			Pending Review
		</span>
	);
}

export default function KycReview() {
	const { id } = useParams();
	const navigate = useNavigate();

	const [application, setApplication] = useState(mockApplication);

	const [showRejectForm, setShowRejectForm] = useState(false);
	const [rejectionReason, setRejectionReason] = useState("");
	const [isProcessing, setIsProcessing] = useState(false);

	const handleApprove = async () => {
		try {
			setIsProcessing(true);

			// Backend API will be connected here later.
			await new Promise((resolve) => setTimeout(resolve, 700));

			setApplication((previous) => ({
				...previous,
				status: "Approved",
			}));
		} finally {
			setIsProcessing(false);
		}
	};

	const handleReject = async (event) => {
		event.preventDefault();

		if (!rejectionReason.trim()) {
			return;
		}

		try {
			setIsProcessing(true);

			// Backend API will be connected here later.
			await new Promise((resolve) => setTimeout(resolve, 700));

			console.log("Rejection reason:", rejectionReason);

			setApplication((previous) => ({
				...previous,
				status: "Rejected",
			}));

			setShowRejectForm(false);
		} finally {
			setIsProcessing(false);
		}
	};

	return (
		<div className="mx-auto max-w-6xl space-y-6">
			{/* Header */}

			<div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
				<div>
					<Link
						to="/admin/kyc-applications"
						className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-emerald-600">
						<FaArrowLeft size={12} />
						Back to Applications
					</Link>

					<div className="flex flex-wrap items-center gap-3">
						<h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
							KYC Application
						</h1>

						<span className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-600">
							{application.id || id}
						</span>
					</div>

					<p className="mt-2 text-sm text-gray-500">
						Review applicant information and verify the account application.
					</p>
				</div>

				<StatusBadge status={application.status} />
			</div>

			{/* Applicant Overview */}

			<section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
				<div className="flex flex-col gap-5 sm:flex-row sm:items-center">
					<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-xl font-bold text-emerald-700">
						{application.firstName[0]}
						{application.lastName[0]}
					</div>

					<div className="flex-1">
						<h2 className="text-xl font-bold text-gray-900">
							{application.firstName} {application.middleName}{" "}
							{application.lastName}
						</h2>

						<p className="mt-1 text-sm text-gray-500">
							@{application.username}
						</p>

						<p className="mt-2 text-xs text-gray-400">
							Application submitted {application.submitted}
						</p>
					</div>
				</div>
			</section>

			{/* Personal Information */}

			<section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
				<div className="border-b border-gray-100 px-6 py-5">
					<div className="flex items-center gap-3">
						<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
							<FaUser size={15} />
						</div>

						<div>
							<h2 className="font-bold text-gray-900">Personal Information</h2>

							<p className="mt-1 text-xs text-gray-500">
								Applicant's personal and contact information.
							</p>
						</div>
					</div>
				</div>

				<div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
					<InfoItem
						icon={FaUser}
						label="LEGAL FIRST NAME"
						value={application.firstName}
					/>

					<InfoItem
						icon={FaUser}
						label="MIDDLE NAME"
						value={application.middleName}
					/>

					<InfoItem
						icon={FaUser}
						label="LEGAL LAST NAME"
						value={application.lastName}
					/>

					<InfoItem
						icon={FaUser}
						label="USERNAME"
						value={application.username}
					/>

					<InfoItem
						icon={FaEnvelope}
						label="EMAIL ADDRESS"
						value={application.email}
					/>

					<InfoItem
						icon={FaPhone}
						label="PHONE NUMBER"
						value={application.phone}
					/>

					<InfoItem
						icon={FaGlobe}
						label="COUNTRY"
						value={application.country}
					/>

					<InfoItem
						icon={FaUser}
						label="DATE OF BIRTH"
						value={application.dateOfBirth}
					/>

					<InfoItem
						icon={FaGlobe}
						label="POSTAL CODE"
						value={application.postalCode}
					/>

					<div className="sm:col-span-2 lg:col-span-3">
						<InfoItem
							icon={FaGlobe}
							label="RESIDENTIAL ADDRESS"
							value={application.address}
						/>
					</div>
				</div>
			</section>

			{/* Account Information */}

			<section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
				<div className="border-b border-gray-100 px-6 py-5">
					<div className="flex items-center gap-3">
						<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
							<FaWallet size={15} />
						</div>

						<div>
							<h2 className="font-bold text-gray-900">Account Information</h2>

							<p className="mt-1 text-xs text-gray-500">
								Account configuration requested by the applicant.
							</p>
						</div>
					</div>
				</div>

				<div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
					<InfoItem
						icon={FaWallet}
						label="ACCOUNT TYPE"
						value={application.accountType}
					/>

					<InfoItem
						icon={FaWallet}
						label="CURRENCY"
						value={application.currency}
					/>

					<InfoItem
						icon={FaClock}
						label="SUBMITTED"
						value={application.submitted}
					/>
				</div>
			</section>

			{/* Identity Document */}

			<section className="rounded-2xl border border-gray-200 bg-white shadow-sm">
				<div className="border-b border-gray-100 px-6 py-5">
					<div className="flex items-center gap-3">
						<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
							<FaIdCard size={15} />
						</div>

						<div>
							<h2 className="font-bold text-gray-900">Identity Verification</h2>

							<p className="mt-1 text-xs text-gray-500">
								Review the applicant's identity document.
							</p>
						</div>
					</div>
				</div>

				<div className="p-6">
					<div className="grid gap-4 sm:grid-cols-2">
						<InfoItem
							icon={FaIdCard}
							label="DOCUMENT TYPE"
							value={application.documentType}
						/>

						<InfoItem
							icon={FaIdCard}
							label="DOCUMENT NUMBER"
							value={application.documentNumber}
						/>
					</div>

					<div className="mt-5 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
						<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-white text-gray-400 shadow-sm">
							<FaFileAlt size={22} />
						</div>

						<h3 className="mt-4 text-sm font-semibold text-gray-800">
							Identity Document
						</h3>

						<p className="mt-1 text-xs text-gray-500">
							Submitted identity document preview
						</p>

						<button
							type="button"
							className="mt-4 inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-gray-600 transition hover:bg-gray-50">
							<FaDownload size={11} />
							View Document
						</button>
					</div>
				</div>
			</section>

			{/* Security Notice */}

			<div className="flex gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-5">
				<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600">
					<FaShieldAlt size={16} />
				</div>

				<div>
					<h3 className="text-sm font-bold text-blue-900">
						Verification Reminder
					</h3>

					<p className="mt-1 text-xs leading-5 text-blue-700">
						Review all submitted information and identity documents carefully
						before approving this application.
					</p>
				</div>
			</div>

			{/* Rejection Form */}

			{showRejectForm && (
				<section className="rounded-2xl border border-red-200 bg-white p-6 shadow-sm">
					<h2 className="text-lg font-bold text-gray-900">
						Reject Application
					</h2>

					<p className="mt-1 text-sm text-gray-500">
						Provide a reason for rejecting this application.
					</p>

					<form onSubmit={handleReject} className="mt-5">
						<textarea
							value={rejectionReason}
							onChange={(event) => setRejectionReason(event.target.value)}
							placeholder="Enter rejection reason..."
							rows={4}
							required
							className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm outline-none transition focus:border-red-400 focus:bg-white focus:ring-4 focus:ring-red-500/10"
						/>

						<div className="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
							<button
								type="button"
								onClick={() => setShowRejectForm(false)}
								className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50">
								Cancel
							</button>

							<button
								type="submit"
								disabled={isProcessing}
								className="rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:opacity-50">
								{isProcessing ? "Rejecting..." : "Confirm Rejection"}
							</button>
						</div>
					</form>
				</section>
			)}

			{/* Actions */}

			{application.status === "Pending" && !showRejectForm && (
				<div className="flex flex-col-reverse gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:justify-end">
					<button
						type="button"
						onClick={() => setShowRejectForm(true)}
						disabled={isProcessing}
						className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-6 text-sm font-semibold text-red-600 transition hover:bg-red-50 disabled:opacity-50">
						<FaTimesCircle size={14} />
						Reject Application
					</button>

					<button
						type="button"
						onClick={handleApprove}
						disabled={isProcessing}
						className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-7 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:opacity-50">
						<FaCheckCircle size={14} />
						{isProcessing ? "Processing..." : "Approve Application"}
					</button>
				</div>
			)}

			{/* Completed State */}

			{application.status !== "Pending" && (
				<div
					className={`rounded-2xl border p-5 ${
						application.status === "Approved" ?
							"border-emerald-200 bg-emerald-50"
						:	"border-red-200 bg-red-50"
					}`}>
					<div className="flex items-center gap-3">
						{application.status === "Approved" ?
							<FaCheckCircle className="text-emerald-600" size={20} />
						:	<FaTimesCircle className="text-red-600" size={20} />}

						<p
							className={`text-sm font-semibold ${
								application.status === "Approved" ?
									"text-emerald-700"
								:	"text-red-700"
							}`}>
							This application has been {application.status.toLowerCase()}.
						</p>
					</div>

					<button
						type="button"
						onClick={() => navigate("/admin/kyc-applications")}
						className="mt-4 text-sm font-semibold text-gray-600 underline underline-offset-4">
						Return to applications
					</button>
				</div>
			)}
		</div>
	);
}
