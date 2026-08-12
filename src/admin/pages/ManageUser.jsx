import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	FaArrowLeft,
	FaEdit,
	FaShieldAlt,
	FaCog,
	FaExchangeAlt,
} from "react-icons/fa";
import ManageTransferCodes from "../components/ManageTransferCodes";

const demoUsers = {
	1: {
		id: 1,
		fullName: "Akio Tanaka Sato Tanaka",
		email: "alwaysbeready2704@gmail.com",
		phone: "+19065238547",
		accountNumber: "54318996277",
		transactionPin: "1970",
		imf: "2743596",
		swift: "3062479",
		cot: "4971492",
		dateOfBirth: "",
		nationality: "United States of America",
		registered: "Sun, Jul 26, 2026 11:37 PM",
		accountStatus: "Active",
		accountLimit: 500000000,
		balances: {
			account: 0,
			bitcoin: 0,
			ethereum: 0,
			usdt: 0,
		},
		transferLimits: "No Limits Set",
		loan: "No Loan",
		kyc: "Not Verified Yet",
	},
	2: {
		id: 2,
		fullName: "Marcus Bennett",
		email: "stillcountingmyblessings@yahoo.com",
		phone: "+13177921707",
		accountNumber: "67735880946",
		transactionPin: "4261",
		imf: "4856729",
		swift: "9076759",
		cot: "6440236",
		dateOfBirth: "",
		nationality: "United States of America",
		registered: "2026",
		accountStatus: "Active",
		accountLimit: 500000000,
		balances: {
			account: 0,
			bitcoin: 0,
			ethereum: 0,
			usdt: 0,
		},
		transferLimits: "No Limits Set",
		loan: "No Loan",
		kyc: "Not Verified Yet",
	},
};

const money = (value) =>
	Number(value || 0).toLocaleString("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});

export default function ManageUser() {
	const navigate = useNavigate();
	const { id } = useParams();

	const user = demoUsers[id] || demoUsers[1];

	const [balances, setBalances] = useState(user.balances);

	const [showBalanceEditor, setShowBalanceEditor] = useState(false);

	const [showTransferCodes, setShowTransferCodes] = useState(false);

	const [editForm, setEditForm] = useState({
		account: user.balances.account,
		bitcoin: user.balances.bitcoin,
		ethereum: user.balances.ethereum,
		usdt: user.balances.usdt,
	});

	const handleBalanceChange = (field, value) => {
		setEditForm((previous) => ({
			...previous,
			[field]: value,
		}));
	};

	const saveBalances = () => {
		setBalances({
			account: Number(editForm.account) || 0,
			bitcoin: Number(editForm.bitcoin) || 0,
			ethereum: Number(editForm.ethereum) || 0,
			usdt: Number(editForm.usdt) || 0,
		});

		setShowBalanceEditor(false);
	};

	const openTransferCodes = (user) => {
		setSelectedUser(user);
		setShowTransferCodes(true);
	};

	return (
		<div className="min-h-screen bg-[#f5f7fa] px-4 py-6">
			<div className="mx-auto max-w-[1200px] rounded-md bg-white p-5 shadow-sm">
				{/* HEADER */}
				<div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-center">
					<div className="flex items-center gap-4">
						<div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-gray-200">
							<img
								src="/default-avatar.png"
								alt={user.fullName}
								className="h-full w-full object-cover"
								onError={(e) => {
									e.currentTarget.style.display = "none";
								}}
							/>
						</div>

						<h1 className="text-[25px] font-normal text-[#101f3d]">
							{user.fullName}
						</h1>
					</div>

					<div className="flex gap-2">
						<button
							onClick={() => navigate("/admin/manage-users")}
							className="flex items-center gap-2 bg-[#172039] px-4 py-2 text-xs text-white">
							<FaArrowLeft />
							Back
						</button>

						<button className="flex items-center gap-2 bg-[#6258ce] px-4 py-2 text-xs text-white">
							Actions
							<span>⌄</span>
						</button>
					</div>
				</div>

				{/* ACCOUNT BALANCES */}
				<div className="mb-2 rounded border border-[#d8dee7]">
					<div className="flex items-center justify-between border-b border-[#d8dee7] px-7 py-4">
						<div className="flex items-center gap-2 text-sm text-[#34445f]">
							<span>▣</span>
							Account Balances
						</div>

						<button
							onClick={() => setShowBalanceEditor(!showBalanceEditor)}
							className="flex items-center gap-2 border border-[#1683ff] px-4 py-2 text-xs text-[#1683ff]">
							<FaEdit />
							Edit Balances
						</button>
					</div>

					<div className="grid grid-cols-1 gap-6 px-7 py-5 md:grid-cols-4">
						<BalanceItem
							title="Account Balance"
							value={`$${money(balances.account)}`}
						/>

						<BalanceItem
							title="Bitcoin (BTC)"
							value={`${Number(balances.bitcoin).toFixed(8)} BTC`}
						/>

						<BalanceItem
							title="Ethereum (ETH)"
							value={`${Number(balances.ethereum).toFixed(8)} ETH`}
						/>

						<BalanceItem
							title="USDT"
							value={`${Number(balances.usdt).toFixed(2)} USDT`}
						/>
					</div>
				</div>

				{/* BALANCE EDITOR */}
				{showBalanceEditor && (
					<div className="mb-4 rounded border border-[#d8dee7] bg-[#fafbfc] p-6">
						<h2 className="mb-5 text-lg font-medium text-[#172039]">
							Edit Account Balances
						</h2>

						<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
							<BalanceInput
								label="Account Balance"
								value={editForm.account}
								onChange={(value) => handleBalanceChange("account", value)}
							/>

							<BalanceInput
								label="Bitcoin (BTC)"
								value={editForm.bitcoin}
								onChange={(value) => handleBalanceChange("bitcoin", value)}
							/>

							<BalanceInput
								label="Ethereum (ETH)"
								value={editForm.ethereum}
								onChange={(value) => handleBalanceChange("ethereum", value)}
							/>

							<BalanceInput
								label="USDT"
								value={editForm.usdt}
								onChange={(value) => handleBalanceChange("usdt", value)}
							/>
						</div>

						<div className="mt-5 flex gap-2">
							<button
								onClick={saveBalances}
								className="bg-[#172039] px-5 py-2 text-sm text-white">
								Save Balances
							</button>

							<button
								onClick={() => setShowBalanceEditor(false)}
								className="border border-gray-300 px-5 py-2 text-sm text-gray-600">
								Cancel
							</button>
						</div>
					</div>
				)}

				{/* ACCOUNT INFORMATION */}
				<div className="mb-4 rounded border border-[#d8dee7]">
					<div className="grid grid-cols-1 md:grid-cols-3">
						<InfoItem
							title="Account Limit"
							value={`$${money(user.accountLimit)}`}
						/>

						<InfoItem
							title="Account Status"
							value={
								<span className="rounded-full bg-green-500 px-3 py-1 text-xs text-white">
									{user.accountStatus}
								</span>
							}
						/>

						<InfoItem title="Transfer Limits" value={user.transferLimits} />
					</div>
				</div>

				{/* TRANSFER CODE SETTINGS */}
				<div className="mb-4 rounded border border-[#d8dee7]">
					<div className="flex items-center justify-between border-b border-[#d8dee7] px-7 py-4">
						<div className="flex items-center gap-2 text-sm text-[#34445f]">
							<FaShieldAlt />
							Transfer Code Settings
						</div>

						<td className="px-3 py-2">
							<div className="flex gap-2">
								<button
									type="button"
									onClick={() => navigate(`/admin/manage-users/${user.id}`)}
									className="bg-[#6258ce] px-4 py-2 text-xs text-white transition hover:bg-[#5148b8]">
									Manage
								</button>

								<button
									type="button"
									onClick={() => openTransferCodes(user)}
									className="bg-[#42a5f5] px-3 py-2 text-xs text-white transition hover:bg-[#3195e7]">
									Codes
								</button>
							</div>
						</td>
					</div>

					<div className="grid grid-cols-2 gap-6 px-7 py-5 md:grid-cols-4">
						<CodeStatus title="IMF" />
						<CodeStatus title="SWIFT" />
						<CodeStatus title="COT" />
						<CodeStatus title="OTP Verification" />
					</div>
				</div>

				{/* LOAN / KYC */}
				<div className="mb-4 rounded border border-[#d8dee7]">
					<div className="grid grid-cols-1 md:grid-cols-2">
						<InfoItem title="Loans" value={user.loan} />

						<InfoItem
							title="KYC"
							value={
								<span className="rounded-full bg-[#f45b66] px-3 py-1 text-xs text-white">
									{user.kyc}
								</span>
							}
						/>
					</div>
				</div>

				{/* USER INFORMATION */}
				<div className="mb-6">
					<h2 className="mb-2 text-sm font-medium text-[#34445f]">
						USER INFORMATION
					</h2>

					<div className="rounded border border-[#d8dee7]">
						<UserInfoRow label="Fullname" value={user.fullName} />

						<UserInfoRow label="Email Address" value={user.email} />

						<UserInfoRow label="Mobile Number" value={user.phone} />

						<UserInfoRow label="Account Number" value={user.accountNumber} />

						<UserInfoRow
							label="4 Digit Transaction Pin"
							value={user.transactionPin}
						/>

						<UserInfoRow label="IMF Code" value={user.imf} />

						<UserInfoRow label="SWIFT Code" value={user.swift} />

						<UserInfoRow label="COT Code" value={user.cot} />

						<UserInfoRow label="Date of birth" value={user.dateOfBirth} />

						<UserInfoRow label="Nationality" value={user.nationality} />

						<UserInfoRow label="Registered" value={user.registered} />
					</div>
				</div>

				{/* TRANSACTION HISTORY */}
				<div className="border-t border-gray-200 pt-5">
					<div className="flex items-center gap-3 text-[#34445f]">
						<FaExchangeAlt />
						<span className="font-medium">Transaction History</span>

						<span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#172039] text-xs text-white">
							0
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

function BalanceItem({ title, value }) {
	return (
		<div>
			<p className="mb-2 text-sm text-[#34445f]">{title}</p>
			<p className="text-sm text-[#34445f]">{value}</p>
		</div>
	);
}

function BalanceInput({ label, value, onChange }) {
	return (
		<div>
			<label className="mb-2 block text-sm text-[#34445f]">{label}</label>

			<input
				type="number"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-[#6258ce]"
			/>
		</div>
	);
}

function InfoItem({ title, value }) {
	return (
		<div className="px-7 py-4">
			<p className="mb-3 text-sm text-[#34445f]">{title}</p>
			<div className="text-sm text-[#34445f]">{value}</div>
		</div>
	);
}

function CodeStatus({ title }) {
	return (
		<div>
			<p className="mb-3 text-sm text-[#34445f]">{title}</p>

			<span className="rounded-full bg-[#e8a943] px-3 py-1 text-xs text-white">
				● Global (Off)
			</span>
		</div>
	);
}

function UserInfoRow({ label, value }) {
	return (
		<div className="grid min-h-[55px] grid-cols-1 border-b border-[#d8dee7] last:border-b-0 md:grid-cols-[32%_68%]">
			<div className="border-b border-[#d8dee7] px-7 py-4 md:border-b-0 md:border-r">
				<span className="text-sm text-[#34445f]">{label}</span>
			</div>

			<div className="px-7 py-4">
				<span className="text-sm text-[#34445f]">{value}</span>
			</div>
		</div>
	);
}
