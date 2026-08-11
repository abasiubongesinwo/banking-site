import React, { useState } from "react";
import { FaChevronDown, FaPaperPlane } from "react-icons/fa";
import usersData from "../data/UsersData";

export default function SendEmail() {
	const [category, setCategory] = useState("All Users");
	const [greeting, setGreeting] = useState("Hello");
	const [title, setTitle] = useState("Investor");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const [showUsers, setShowUsers] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);

	const handleSelectUser = (user) => {
		setSelectedUser(user);
		setShowUsers(false);
	};

	const handleSend = (e) => {
		e.preventDefault();

		console.log({
			category,
			selectedUser,
			greeting,
			title,
			subject,
			message,
		});

		alert("Email prepared successfully.");
	};

	return (
		<div className="min-h-full bg-[#f5f8fb] px-4 py-5 sm:px-6 lg:px-7">
			{/* Page Title */}
			<h1 className="mb-6 text-[28px] font-normal text-[#243b55]">
				Send Email to users
			</h1>

			{/* Main Card */}
			<div className="rounded-[5px] bg-white px-5 py-8 shadow-[0_8px_25px_rgba(0,0,0,0.10)] sm:px-8">
				<form onSubmit={handleSend}>
					{/* Category */}
					<div className="mb-5">
						<label className="mb-2 block text-[12px] font-medium text-[#111827]">
							Category
						</label>

						<select
							value={category}
							onChange={(e) => {
								setCategory(e.target.value);

								if (e.target.value !== "Choose Users") {
									setSelectedUser(null);
									setShowUsers(false);
								}
							}}
							className="h-[34px] w-full rounded-[3px] border border-[#dfe5eb] bg-white px-3 text-[13px] text-[#374151] outline-none focus:border-[#42a5f5]">
							<option value="Choose Users">Choose Users</option>

							<option value="All Users">All Users</option>

							<option value="No Investment">
								Users without active investment plan
							</option>

							<option value="No Deposit">
								Users without any Deposit (likely to be new users)
							</option>
						</select>
					</div>

					{/* Choose Individual User */}
					{category === "Choose Users" && (
						<div className="relative mb-5">
							<label className="mb-2 block text-[12px] font-medium text-[#111827]">
								Choose User
							</label>

							{/* User Input */}
							<button
								type="button"
								onClick={() => setShowUsers((current) => !current)}
								className="flex h-[38px] w-full items-center justify-between rounded-[3px] border border-[#dfe5eb] bg-white px-3 text-left outline-none focus:border-[#42a5f5]">
								{selectedUser ?
									<div className="flex flex-col">
										<span className="text-[13px] text-[#243b55]">
											{selectedUser.name}
										</span>

										<span className="text-[11px] text-gray-500">
											{selectedUser.email}
										</span>
									</div>
								:	<span className="text-[13px] text-gray-400">
										Choose a user
									</span>
								}

								<FaChevronDown size={10} className="text-gray-500" />
							</button>

							{/* Users Dropdown */}
							{showUsers && (
								<div className="absolute left-0 right-0 top-[62px] z-50 max-h-[260px] overflow-y-auto rounded-[3px] border border-[#dfe5eb] bg-white shadow-lg">
									{usersData.map((user) => (
										<button
											key={user.id}
											type="button"
											onClick={() => handleSelectUser(user)}
											className="flex w-full flex-col border-b border-gray-100 px-3 py-3 text-left last:border-b-0 hover:bg-[#f5f8fb]">
											<span className="text-[13px] font-medium text-[#243b55]">
												{user.name}
											</span>

											<span className="mt-1 text-[11px] text-gray-500">
												{user.email}
											</span>
										</button>
									))}
								</div>
							)}
						</div>
					)}

					{/* Greeting / Title */}
					<div className="mb-5">
						<label className="mb-2 block text-[12px] font-medium text-[#111827]">
							Greeting/Title
						</label>

						<div className="flex flex-col sm:flex-row">
							<input
								type="text"
								value={greeting}
								onChange={(e) => setGreeting(e.target.value)}
								placeholder="Hello"
								className="h-[38px] w-full rounded-t-[3px] border border-[#dfe5eb] px-3 text-[13px] outline-none focus:border-[#42a5f5] sm:rounded-l-[3px] sm:rounded-r-none"
							/>

							<input
								type="text"
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								placeholder="Investor"
								className="h-[38px] w-full rounded-b-[3px] border border-t-0 border-[#dfe5eb] px-3 text-[13px] outline-none focus:border-[#42a5f5] sm:rounded-r-[3px] sm:rounded-l-none sm:border-t"
							/>
						</div>
					</div>

					{/* Subject */}
					<div className="mb-5">
						<label className="mb-2 block text-[12px] font-medium text-[#111827]">
							Subject
						</label>

						<input
							type="text"
							value={subject}
							onChange={(e) => setSubject(e.target.value)}
							placeholder="Subject"
							className="h-[38px] w-full rounded-[3px] border border-[#dfe5eb] px-3 text-[13px] outline-none focus:border-[#42a5f5]"
						/>
					</div>

					{/* Message */}
					<div className="mb-5">
						<label className="mb-2 block text-[12px] font-medium text-[#111827]">
							Message
						</label>

						<textarea
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder="Write your message here..."
							className="min-h-[270px] w-full resize-y rounded-[3px] border border-[#dfe5eb] px-3 py-3 text-[13px] leading-6 outline-none focus:border-[#42a5f5]"
						/>
					</div>

					{/* Send */}
					<button
						type="submit"
						className="flex h-[38px] items-center gap-2 rounded-[3px] bg-[#6258ce] px-5 text-[12px] font-medium text-white transition hover:bg-[#5147bd]">
						<FaPaperPlane size={11} />
						Send
					</button>
				</form>
			</div>
		</div>
	);
}
