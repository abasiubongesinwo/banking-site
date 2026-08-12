import React, { useState } from "react";
import {
	FaArrowLeft,
	FaTimes,
	FaCheck,
	FaExclamationTriangle,
} from "react-icons/fa";

const kycApplications = [
	{
		id: 1,
		firstName: "Test",
		middleName: "Test",
		lastName: "User",
		email: "user@mail.com",
		phone: "+11234567890",
		dateOfBirth: "2026-03-17",
		ssn: "12323444",
		accountType: "Non Resident Account",
		incomeRange: "$5,000.00 - $10,000.00",
		employer: "Business/Sales",

		address: "XXXXXXXXXXXXXXXXXX",
		city: "XXXXXX",
		state: "XXXXXXXX",
		nationality: "United Arab Emirates",

		documentType: "Int'l Passport",

		frontDocument: "https://via.placeholder.com/300x180?text=Front+Document",

		backDocument: "https://via.placeholder.com/300x180?text=Back+Document",

		status: "Verified",
	},

	{
		id: 2,
		firstName: "Marcus",
		middleName: "James",
		lastName: "Bennett",
		email: "stillcountingmyblessings@yahoo.com",
		phone: "+13177921707",
		dateOfBirth: "1998-05-12",
		ssn: "12345678",
		accountType: "Checking Account",
		incomeRange: "$10,000.00 - $25,000.00",
		employer: "Technology",

		address: "XXXXXXXXXXXXXXXXXX",
		city: "XXXXXX",
		state: "XXXXXXXX",
		nationality: "United States",

		documentType: "Passport",

		frontDocument: "https://via.placeholder.com/300x180?text=Front+Document",

		backDocument: "https://via.placeholder.com/300x180?text=Back+Document",

		status: "Under review",
	},
];

const verificationMessage =
	"This is to inform you that following the documents you submited, your account have been verified. You can now enjoy all our services without restrictions. Cheers!!";

export default function KYCApplications() {
	const [applications, setApplications] = useState(kycApplications);

	const [selectedApplication, setSelectedApplication] = useState(null);

	const [showProcessModal, setShowProcessModal] = useState(false);

	const [processType, setProcessType] = useState("accept");

	const [emailSubject, setEmailSubject] = useState(
		"Account is verified successfully",
	);

	const [emailMessage, setEmailMessage] = useState(verificationMessage);

	const openApplication = (application) => {
		setSelectedApplication(application);
	};

	const closeApplication = () => {
		setSelectedApplication(null);
	};

	const openProcessModal = (application) => {
		setSelectedApplication(application);
		setProcessType("accept");
		setEmailSubject("Account is verified successfully");
		setEmailMessage(verificationMessage);
		setShowProcessModal(true);
	};

	const closeProcessModal = () => {
		setShowProcessModal(false);
	};

	const handleProcessChange = (value) => {
		setProcessType(value);

		if (value === "accept") {
			setEmailSubject("Account is verified successfully");
			setEmailMessage(verificationMessage);
		} else {
			setEmailSubject("KYC Application Rejected");
			setEmailMessage(
				"Your KYC application has been reviewed and could not be verified at this time. Please review your submitted information and documents and try again.",
			);
		}
	};

	const handleConfirm = () => {
		if (!selectedApplication) return;

		const newStatus = processType === "accept" ? "Verified" : "Rejected";

		setApplications((current) =>
			current.map((application) =>
				application.id === selectedApplication.id ?
					{
						...application,
						status: newStatus,
					}
				:	application,
			),
		);

		setSelectedApplication((current) =>
			current ?
				{
					...current,
					status: newStatus,
				}
			:	current,
		);

		setShowProcessModal(false);
	};

	const getStatusClass = (status) => {
		if (status === "Verified") {
			return "bg-[#25c53b]";
		}

		if (status === "Rejected") {
			return "bg-[#f0525f]";
		}

		return "bg-[#f0525f]";
	};

	/*
	|--------------------------------------------------------------------------
	| APPLICATION DETAILS
	|--------------------------------------------------------------------------
	*/

	if (selectedApplication) {
		const user = selectedApplication;

		return (
			<div className="min-h-full bg-[#f5f8fb] px-4 py-5 sm:px-6 lg:px-7">
				{/* Back button */}
				<button
					type="button"
					onClick={closeApplication}
					className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-[#172038] text-white transition hover:bg-[#25304c]">
					<FaArrowLeft size={15} />
				</button>

				{/* Header */}
				<div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
					<div>
						<h1 className="text-[27px] font-normal text-[#182238]">
							{user.firstName} {user.middleName} {user.lastName} KYC Application
						</h1>

						<span
							className={`mt-3 inline-flex rounded-full px-3 py-1 text-[11px] font-medium text-white ${getStatusClass(
								user.status,
							)}`}>
							{user.status}
						</span>
					</div>

					<button
						type="button"
						onClick={() => openProcessModal(user)}
						className="h-9 w-fit bg-[#182038] px-6 text-xs font-medium text-white transition hover:bg-[#293452]">
						Action
					</button>
				</div>

				{/* Main Details Card */}
				<div className="rounded-[5px] bg-white px-6 py-8 shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
					{/* Personal Information */}
					<section>
						<h2 className="border-b border-gray-300 pb-2 text-[13px] font-normal text-[#17355b]">
							Personal Information
						</h2>

						<div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
							<Info
								value={`${user.firstName} ${user.middleName}`}
								label="First name"
							/>

							<Info value={user.lastName} label="Last name" />

							<Info value={user.lastName} label="Last name" />

							<Info value={user.email} label="Email" />

							<Info value={user.phone} label="Phone Number" />

							<Info value={user.dateOfBirth} label="Date of Birth" />

							<Info value={user.ssn} label="SSN" />

							<Info value={user.accountType} label="Account Type" />

							<Info value={user.incomeRange} label="Income Range" />

							<Info value={user.employer} label="Employer" />
						</div>
					</section>

					{/* Address Information */}
					<section className="mt-7">
						<h2 className="border-b border-gray-300 pb-2 text-[13px] font-normal text-[#17355b]">
							Address Information
						</h2>

						<div className="grid grid-cols-1 gap-x-16 md:grid-cols-2">
							<Info value={user.address} label="Address Line" />

							<Info value={user.city} label="City" />

							<Info value={user.state} label="State" />

							<Info value={user.nationality} label="Nationality" />
						</div>
					</section>

					{/* Document Information */}
					<section className="mt-7">
						<h2 className="border-b border-gray-300 pb-2 text-[13px] font-normal text-[#17355b]">
							Document Information
						</h2>

						<div className="mt-4">
							<p className="text-[18px] text-[#172038]">{user.documentType}</p>

							<p className="mt-1 text-xs text-gray-500">Document type</p>
						</div>

						<div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
							<DocumentPreview
								image={user.frontDocument}
								title="Front View of Document"
							/>

							<DocumentPreview
								image={user.backDocument}
								title="Back View of Document"
							/>
						</div>
					</section>
				</div>

				{/* Process modal */}
				{showProcessModal && (
					<ProcessKYCModal
						application={selectedApplication}
						processType={processType}
						emailSubject={emailSubject}
						emailMessage={emailMessage}
						onClose={closeProcessModal}
						onProcessChange={handleProcessChange}
						onSubjectChange={setEmailSubject}
						onMessageChange={setEmailMessage}
						onConfirm={handleConfirm}
					/>
				)}
			</div>
		);
	}

	/*
	|--------------------------------------------------------------------------
	| APPLICATION LIST
	|--------------------------------------------------------------------------
	*/

	return (
		<div className="min-h-full bg-[#f5f8fb] px-4 py-5 sm:px-6 lg:px-7">
			<h1 className="mb-6 text-[28px] font-normal text-[#243b55]">
				First Bank of Delaware KYC Application list
			</h1>

			<div className="border-t border-gray-200 pt-5">
				{/* Table controls */}
				<div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
					<div className="flex">
						<button className="bg-[#7568d8] px-5 py-3 text-xs text-white">
							Copy
						</button>

						<button className="border-l border-white bg-[#6258ce] px-5 py-3 text-xs text-white">
							CSV
						</button>

						<button className="border-l border-white bg-[#6258ce] px-5 py-3 text-xs text-white">
							Print
						</button>
					</div>

					<div className="flex items-center gap-2 text-xs text-[#172038]">
						<span>Search:</span>

						<input
							type="text"
							className="h-8 w-[170px] border border-gray-200 bg-white px-2 outline-none focus:border-blue-400"
						/>
					</div>
				</div>

				{/* Table */}
				<div className="overflow-x-auto">
					<table className="w-full min-w-[700px] border-collapse">
						<thead>
							<tr className="border-b border-gray-200 text-left text-xs text-[#172038]">
								<th className="px-5 py-4 font-semibold">User</th>

								<th className="px-5 py-4 font-semibold">KYC Status</th>

								<th className="px-5 py-4"></th>
							</tr>
						</thead>

						<tbody>
							{applications.map((application) => (
								<tr
									key={application.id}
									className="border-b border-gray-200 text-xs hover:bg-white">
									<td className="px-5 py-4">
										{application.firstName} {application.middleName}{" "}
										{application.lastName}
									</td>

									<td className="px-5 py-4">
										<span
											className={`inline-flex rounded-full px-3 py-1 text-[10px] font-medium text-white ${getStatusClass(
												application.status,
											)}`}>
											{application.status}
										</span>
									</td>

									<td className="px-5 py-3 text-right">
										<button
											type="button"
											onClick={() => openApplication(application)}
											className="bg-[#182038] px-4 py-2 text-[10px] font-medium text-white transition hover:bg-[#293452]">
											View application
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Footer */}
				<div className="mt-4 flex flex-col gap-4 text-xs text-[#17355b] sm:flex-row sm:items-center sm:justify-between">
					<span>
						Showing 1 to {applications.length} of {applications.length} entries
					</span>

					<div className="flex items-center gap-2">
						<button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-gray-500">
							Previous
						</button>

						<button className="flex h-8 w-8 items-center justify-center rounded-full bg-[#087df5] text-white">
							1
						</button>

						<button className="rounded-full border border-gray-200 bg-white px-4 py-2 text-gray-600">
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* INFO                                                                        */
/* -------------------------------------------------------------------------- */

function Info({ value, label }) {
	return (
		<div className="py-4">
			<div className="text-[19px] text-[#172038]">{value}</div>

			<div className="mt-2 text-xs text-[#46617e]">{label}</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* DOCUMENT                                                                    */
/* -------------------------------------------------------------------------- */

function DocumentPreview({ image, title }) {
	return (
		<div>
			<div className="mb-3 text-xs font-semibold text-[#172038]">
				Cash Payment
			</div>

			<img
				src={image}
				alt={title}
				className="h-[105px] w-[220px] object-contain object-left"
			/>

			<div className="mt-1 text-xs text-[#46617e]">{title}</div>
		</div>
	);
}

/* -------------------------------------------------------------------------- */
/* PROCESS KYC MODAL                                                           */
/* -------------------------------------------------------------------------- */

function ProcessKYCModal({
	application,
	processType,
	emailSubject,
	emailMessage,
	onClose,
	onProcessChange,
	onSubjectChange,
	onMessageChange,
	onConfirm,
}) {
	return (
		<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 px-4">
			<div className="w-full max-w-[520px] overflow-hidden rounded-[6px] bg-white shadow-2xl">
				{/* Modal header */}
				<div className="flex items-center justify-between border-b border-gray-200 px-4 py-4">
					<h2 className="text-[17px] font-normal text-[#172038]">
						Process KYC
					</h2>

					<button
						type="button"
						onClick={onClose}
						className="text-gray-400 transition hover:text-gray-700">
						<FaTimes />
					</button>
				</div>

				<div className="p-6">
					{/* Action */}
					<label className="mb-2 block text-xs text-[#172038]">Action</label>

					<select
						value={processType}
						onChange={(e) => onProcessChange(e.target.value)}
						className="mb-5 h-9 w-full border border-gray-300 bg-white px-3 text-xs outline-none focus:border-blue-500">
						<option value="accept">Accept and verify user</option>

						<option value="reject">Reject and remain unverified</option>
					</select>

					{/* Message */}
					<label className="mb-2 block text-xs text-[#172038]">
						Email message
					</label>

					<textarea
						value={emailMessage}
						onChange={(e) => onMessageChange(e.target.value)}
						className="h-[115px] w-full resize-none border border-gray-300 px-3 py-3 text-xs leading-5 outline-none focus:border-blue-500"
					/>

					{/* Email subject */}
					<label className="mb-2 mt-5 block text-xs text-[#172038]">
						Email subject
					</label>

					<input
						type="text"
						value={emailSubject}
						onChange={(e) => onSubjectChange(e.target.value)}
						className="h-10 w-full border border-gray-300 px-3 text-xs outline-none focus:border-blue-500"
					/>

					{/* Recipient preview */}
					<div className="mt-4 rounded border border-gray-200 bg-gray-50 px-3 py-2 text-xs text-gray-600">
						<strong>Recipient:</strong> {application.email}
					</div>

					{/* Confirm */}
					<button
						type="button"
						onClick={onConfirm}
						className="mt-5 flex h-10 items-center gap-2 bg-[#172038] px-6 text-xs font-medium text-white transition hover:bg-[#293452]">
						<FaCheck size={11} />
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
}
