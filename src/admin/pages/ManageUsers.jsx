import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";
import usersData from "../data/UsersData";

function Avatar({ name, image }) {
	const initials = name
		.split(" ")
		.map((word) => word[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();

	if (image) {
		return (
			<img
				src={image}
				alt={name}
				className="h-9 w-9 shrink-0 rounded-full object-cover"
			/>
		);
	}

	return (
		<div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xs font-semibold text-gray-500">
			{initials}
		</div>
	);
}

export default function ManageUsers() {
	const navigate = useNavigate();

	const [search, setSearch] = useState("");
	const [selectedUsers, setSelectedUsers] = useState([]);

	const filteredUsers = useMemo(() => {
		const value = search.toLowerCase().trim();

		if (!value) {
			return usersData;
		}

		return usersData.filter((user) =>
			[user.name, user.username, user.email, user.phone].some((field) =>
				field.toLowerCase().includes(value),
			),
		);
	}, [search]);

	const toggleUser = (id) => {
		setSelectedUsers((current) =>
			current.includes(id) ?
				current.filter((userId) => userId !== id)
			:	[...current, id],
		);
	};

	const toggleAll = () => {
		if (selectedUsers.length === filteredUsers.length) {
			setSelectedUsers([]);
			return;
		}

		setSelectedUsers(filteredUsers.map((user) => user.id));
	};

	return (
		<div className="min-h-full bg-[#f5f8fb] px-4 py-5 sm:px-6 lg:px-7">
			{/* Page Title */}
			<h1 className="mb-6 text-[28px] font-normal text-[#243b55]">
				First Bank of Delaware users list
			</h1>

			{/* Main Card */}
			<div className="rounded-[5px] bg-white px-4 py-5 shadow-[0_8px_25px_rgba(0,0,0,0.10)] sm:px-6">
				{/* Top Controls */}
				<div className="flex flex-col gap-4 border-b border-gray-200 pb-4 md:flex-row md:items-center md:justify-between">
					<input
						type="text"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder="name, username or email"
						className="h-7 w-full max-w-[175px] rounded-[3px] border border-gray-200 bg-white px-2 text-[12px] text-gray-600 outline-none transition focus:border-blue-400"
					/>

					<button
						type="button"
						onClick={() => navigate("/admin/send-email")}
						className="flex h-7 w-fit items-center gap-1 rounded-[3px] bg-[#42a5f5] px-4 text-[11px] font-medium text-white transition hover:bg-[#3195e7]">
						<FaEnvelope size={9} />
						Send Message
					</button>
				</div>

				{/* Table */}
				<div className="mt-4 overflow-x-auto">
					<table className="w-full min-w-[900px] border-collapse text-left">
						<thead>
							<tr className="border-b border-gray-200 text-[13px] text-[#1f2937]">
								<th className="w-[45px] px-2 py-3 font-normal">
									<input
										type="checkbox"
										checked={
											filteredUsers.length > 0 &&
											selectedUsers.length === filteredUsers.length
										}
										onChange={toggleAll}
										className="h-3 w-3 cursor-pointer"
									/>
								</th>

								<th className="px-3 py-3 font-semibold">
									Client
									<br />
									Name
								</th>

								<th className="px-3 py-3 font-semibold">Username</th>

								<th className="px-3 py-3 font-semibold">Email</th>

								<th className="px-3 py-3 font-semibold">Phone</th>

								<th className="px-3 py-3 font-semibold">Status</th>

								<th className="px-3 py-3 font-semibold">
									Date
									<br />
									registered
								</th>

								<th className="px-3 py-3 font-semibold">Action</th>
							</tr>
						</thead>

						<tbody>
							{filteredUsers.length > 0 ?
								filteredUsers.map((user) => (
									<tr
										key={user.id}
										className="border-b border-gray-200 text-[13px] text-[#111827] hover:bg-gray-50">
										{/* Checkbox */}
										<td className="px-2 py-3 align-middle">
											<input
												type="checkbox"
												checked={selectedUsers.includes(user.id)}
												onChange={() => toggleUser(user.id)}
												className="h-3 w-3 cursor-pointer"
											/>
										</td>

										{/* Client Name */}
										<td className="px-3 py-2">
											<div className="flex items-center gap-2">
												<Avatar name={user.name} image={user.image} />

												<span className="max-w-[100px] leading-[18px]">
													{user.name}
												</span>
											</div>
										</td>

										{/* Username */}
										<td className="whitespace-nowrap px-3 py-2">
											{user.username}
										</td>

										{/* Email */}
										<td className="whitespace-nowrap px-3 py-2">
											{user.email}
										</td>

										{/* Phone */}
										<td className="whitespace-nowrap px-3 py-2">
											{user.phone}
										</td>

										{/* Status */}
										<td className="px-3 py-2">
											<span className="inline-flex rounded-full bg-[#25c53b] px-3 py-[4px] text-[10px] font-medium text-white">
												{user.status}
											</span>
										</td>

										{/* Date */}
										<td className="whitespace-nowrap px-3 py-2">{user.date}</td>

										{/* Action */}
										<td className="px-3 py-2">
											<button
												type="button"
												onClick={() =>
													navigate(`/admin/manage-users/${user.id}`)
												}
												className="bg-[#6258ce] px-4 py-2 text-xs text-white transition hover:bg-[#5148b8]">
												Manage
											</button>
										</td>
									</tr>
								))
							:	<tr>
									<td
										colSpan="8"
										className="py-10 text-center text-sm text-gray-500">
										No users found.
									</td>
								</tr>
							}
						</tbody>
					</table>
				</div>

				{/* Bottom Controls */}
				<div className="mt-4 flex flex-col gap-4 border-t border-gray-200 pt-4 sm:flex-row sm:items-center">
					<select
						defaultValue="10"
						className="h-9 w-[72px] rounded-[3px] border border-gray-200 bg-white px-2 text-[12px] text-gray-700 outline-none">
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
						<option value="100">100</option>
					</select>

					<select
						defaultValue="id"
						className="h-9 w-[120px] rounded-[3px] border border-gray-200 bg-white px-2 text-[12px] text-gray-700 outline-none">
						<option value="id">id</option>
						<option value="name">name</option>
						<option value="username">username</option>
						<option value="email">email</option>
					</select>

					<select
						defaultValue="descending"
						className="h-9 w-[120px] rounded-[3px] border border-gray-200 bg-white px-2 text-[12px] text-gray-700 outline-none">
						<option value="descending">Descending</option>
						<option value="ascending">Ascending</option>
					</select>
				</div>
			</div>
		</div>
	);
}
