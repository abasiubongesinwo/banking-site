import React, { useState } from "react";
import {
	FaShieldAlt,
	FaInfoCircle,
	FaKey,
	FaToggleOn,
	FaCopy,
	FaUndo,
	FaSave,
	FaTimes,
} from "react-icons/fa";

export default function ManageTransferCodes({ user, onClose }) {
	const [codes, setCodes] = useState({
		imf: "2926640",
		swift: "9872507",
		cot: "3099978",
	});

	const [settings, setSettings] = useState({
		imf: "disabled",
		swift: "disabled",
		cot: "disabled",
		otp: "enabled",
	});

	const globalSettings = {
		imf: "disabled",
		swift: "disabled",
		cot: "disabled",
		otp: "enabled",
	};

	const updateCode = (type, value) => {
		setCodes((current) => ({
			...current,
			[type]: value,
		}));
	};

	const updateSetting = (type, value) => {
		setSettings((current) => ({
			...current,
			[type]: value,
		}));
	};

	const copyGlobalSettings = () => {
		setSettings(globalSettings);
	};

	const resetToGlobal = () => {
		setSettings(globalSettings);
	};

	const handleSave = () => {
		console.log("Transfer code settings saved:", {
			user,
			codes,
			settings,
		});

		alert("Transfer code settings saved successfully.");
	};

	const SettingButton = ({ type, value, children }) => {
		const active = settings[type] === value;

		return (
			<button
				type="button"
				onClick={() => updateSetting(type, value)}
				className={`flex-1 border px-3 py-2 text-[13px] transition ${
					active ?
						"border-[#1b243b] bg-[#dbe8f8] text-[#1b243b]"
					:	"border-gray-200 bg-white text-gray-400 hover:bg-gray-50"
				}`}>
				{children}
			</button>
		);
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3">
			<div className="max-h-[95vh] w-full max-w-[720px] overflow-y-auto bg-[#f7f8fa] shadow-2xl">
				{/* Header */}
				<div className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-3">
					<h2 className="flex items-center gap-2 text-[16px] font-normal text-[#1f2937]">
						<FaShieldAlt className="text-[#1b243b]" size={14} />
						Manage Transfer Codes for {user?.name || "User"}
					</h2>

					<button
						type="button"
						onClick={onClose}
						className="text-gray-400 transition hover:text-gray-700">
						<FaTimes size={18} />
					</button>
				</div>

				<div className="space-y-4 p-3">
					{/* Information */}
					<div className="border-l-[3px] border-[#42a5f5] bg-white px-4 py-3 shadow-[0_4px_15px_rgba(0,0,0,0.08)]">
						<div className="mb-2 flex items-center gap-1 text-[13px] font-semibold text-gray-600">
							<FaInfoCircle />
							Per-User Transfer Code Settings
						</div>

						<p className="text-[12px] leading-6 text-gray-600">
							Configure which transfer verification codes are required for this
							specific user. When set to "Global Default", the system-wide
							settings will be used.
						</p>
					</div>

					{/* Code Values */}
					<div className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)]">
						<div className="flex items-center gap-1 bg-[#1b243b] px-5 py-4 text-[13px] font-semibold text-white">
							<FaKey size={12} />
							Code Values
						</div>

						<div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-3">
							<div>
								<label className="mb-2 block text-[13px] font-semibold text-gray-700">
									IMF Value
								</label>

								<input
									type="text"
									value={codes.imf}
									onChange={(e) => updateCode("imf", e.target.value)}
									className="h-10 w-full rounded-[3px] border border-gray-200 bg-[#f8fafc] px-3 text-[13px] text-gray-700 outline-none focus:border-blue-400"
								/>
							</div>

							<div>
								<label className="mb-2 block text-[13px] font-semibold text-gray-700">
									SWIFT Value
								</label>

								<input
									type="text"
									value={codes.swift}
									onChange={(e) => updateCode("swift", e.target.value)}
									className="h-10 w-full rounded-[3px] border border-gray-200 bg-[#f8fafc] px-3 text-[13px] text-gray-700 outline-none focus:border-blue-400"
								/>
							</div>

							<div>
								<label className="mb-2 block text-[13px] font-semibold text-gray-700">
									COT Value
								</label>

								<input
									type="text"
									value={codes.cot}
									onChange={(e) => updateCode("cot", e.target.value)}
									className="h-10 w-full rounded-[3px] border border-gray-200 bg-[#f8fafc] px-3 text-[13px] text-gray-700 outline-none focus:border-blue-400"
								/>
							</div>
						</div>
					</div>

					{/* Enable / Disable */}
					<div className="bg-white shadow-[0_4px_15px_rgba(0,0,0,0.08)]">
						<div className="flex items-center gap-1 bg-[#1b243b] px-5 py-4 text-[13px] font-semibold text-white">
							<FaToggleOn size={15} />
							Enable/Disable Codes
						</div>

						<div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2">
							{/* IMF */}
							<div>
								<p className="mb-2 text-[12px] text-gray-600">
									IMF <span className="text-gray-400">(Global: Off)</span>
								</p>

								<div className="flex">
									<SettingButton type="imf" value="enabled">
										User:
										<br />
										Enabled
									</SettingButton>

									<SettingButton type="imf" value="disabled">
										User:
										<br />
										Disabled
									</SettingButton>

									<SettingButton type="imf" value="global">
										Global
										<br />
										Default
									</SettingButton>
								</div>
							</div>

							{/* SWIFT */}
							<div>
								<p className="mb-2 text-[12px] text-gray-600">
									SWIFT <span className="text-gray-400">(Global: Off)</span>
								</p>

								<div className="flex">
									<SettingButton type="swift" value="enabled">
										User:
										<br />
										Enabled
									</SettingButton>

									<SettingButton type="swift" value="disabled">
										User:
										<br />
										Disabled
									</SettingButton>

									<SettingButton type="swift" value="global">
										Global
										<br />
										Default
									</SettingButton>
								</div>
							</div>

							{/* COT */}
							<div>
								<p className="mb-2 text-[12px] text-gray-600">
									COT <span className="text-gray-400">(Global: Off)</span>
								</p>

								<div className="flex">
									<SettingButton type="cot" value="enabled">
										User:
										<br />
										Enabled
									</SettingButton>

									<SettingButton type="cot" value="disabled">
										User:
										<br />
										Disabled
									</SettingButton>

									<SettingButton type="cot" value="global">
										Global
										<br />
										Default
									</SettingButton>
								</div>
							</div>

							{/* OTP */}
							<div>
								<p className="mb-2 text-[12px] text-gray-600">
									OTP Verification{" "}
									<span className="text-gray-400">(Global: On)</span>
								</p>

								<div className="flex">
									<SettingButton type="otp" value="enabled">
										User:
										<br />
										Enabled
									</SettingButton>

									<SettingButton type="otp" value="disabled">
										User:
										<br />
										Disabled
									</SettingButton>

									<SettingButton type="otp" value="global">
										Global
										<br />
										Default
									</SettingButton>
								</div>
							</div>
						</div>

						{/* Actions */}
						<div className="flex flex-wrap gap-2 px-5 pb-5">
							<button
								type="button"
								onClick={copyGlobalSettings}
								className="flex items-center gap-1 rounded-[3px] bg-[#6258ce] px-3 py-2 text-[11px] font-medium text-white transition hover:bg-[#5148b8]">
								<FaCopy />
								Copy Global Settings to User
							</button>

							<button
								type="button"
								onClick={resetToGlobal}
								className="flex items-center gap-1 rounded-[3px] bg-[#f5a23a] px-3 py-2 text-[11px] font-medium text-white transition hover:bg-[#e89425]">
								<FaUndo />
								Reset All to Global Default
							</button>
						</div>
					</div>

					{/* Save */}
					<button
						type="button"
						onClick={handleSave}
						className="flex w-full items-center justify-center gap-2 bg-[#1b243b] py-3 text-[13px] font-semibold text-white transition hover:bg-[#11182b]">
						<FaSave />
						Save Transfer Code Settings
					</button>
				</div>
			</div>
		</div>
	);
}
