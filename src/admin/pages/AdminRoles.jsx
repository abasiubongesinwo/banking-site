import { useState } from "react";
import {
	FaUserShield,
	FaPlus,
	FaEdit,
	FaTrash,
	FaSearch,
	FaCheck,
	FaTimes,
} from "react-icons/fa";

const initialRoles = [
	{
		id: 1,
		name: "Super Administrator",
		description: "Full access to all banking platform features and settings.",
		users: 1,
		status: "Active",
		permissions: [
			"Dashboard",
			"Users",
			"KYC",
			"Transactions",
			"Deposits",
			"Withdrawals",
			"Transfers",
			"Cards",
			"Loans",
			"Support",
			"Settings",
			"Audit Logs",
		],
	},
	{
		id: 2,
		name: "Administrator",
		description: "Standard administrative access for daily banking operations.",
		users: 3,
		status: "Active",
		permissions: [
			"Dashboard",
			"Users",
			"KYC",
			"Transactions",
			"Deposits",
			"Withdrawals",
			"Transfers",
			"Support",
		],
	},
	{
		id: 3,
		name: "Support Manager",
		description: "Access focused on customer support and account assistance.",
		users: 2,
		status: "Active",
		permissions: ["Dashboard", "Users", "Support"],
	},
];

const availablePermissions = [
	"Dashboard",
	"Users",
	"KYC",
	"Transactions",
	"Deposits",
	"Withdrawals",
	"Transfers",
	"Cards",
	"Loans",
	"Support",
	"Settings",
	"Audit Logs",
];

export default function AdminRoles() {
	const [roles, setRoles] = useState(initialRoles);
	const [search, setSearch] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [editingRole, setEditingRole] = useState(null);

	const [form, setForm] = useState({
		name: "",
		description: "",
		permissions: [],
	});

	const filteredRoles = roles.filter((role) => {
		const query = search.toLowerCase();

		return (
			role.name.toLowerCase().includes(query) ||
			role.description.toLowerCase().includes(query)
		);
	});

	const openCreateModal = () => {
		setEditingRole(null);

		setForm({
			name: "",
			description: "",
			permissions: [],
		});

		setShowModal(true);
	};

	const openEditModal = (role) => {
		setEditingRole(role);

		setForm({
			name: role.name,
			description: role.description,
			permissions: [...role.permissions],
		});

		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
		setEditingRole(null);
	};

	const togglePermission = (permission) => {
		setForm((previous) => ({
			...previous,
			permissions:
				previous.permissions.includes(permission) ?
					previous.permissions.filter((item) => item !== permission)
				:	[...previous.permissions, permission],
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!form.name.trim()) return;

		if (editingRole) {
			setRoles((previous) =>
				previous.map((role) =>
					role.id === editingRole.id ?
						{
							...role,
							name: form.name,
							description: form.description,
							permissions: form.permissions,
						}
					:	role,
				),
			);
		} else {
			setRoles((previous) => [
				...previous,
				{
					id: Date.now(),
					name: form.name,
					description: form.description,
					users: 0,
					status: "Active",
					permissions: form.permissions,
				},
			]);
		}

		closeModal();
	};

	const deleteRole = (roleId) => {
		const role = roles.find((item) => item.id === roleId);

		if (!role) return;

		if (role.users > 0) {
			alert(
				"This role cannot be deleted while administrators are assigned to it.",
			);
			return;
		}

		setRoles((previous) => previous.filter((item) => item.id !== roleId));
	};

	return (
		<div className="space-y-6">
			{/* Header */}

			<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
				<div>
					<p className="text-sm font-medium text-emerald-600">Access Control</p>

					<h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
						Admin Roles
					</h1>

					<p className="mt-2 text-sm text-gray-500">
						Create and manage administrator roles and permissions.
					</p>
				</div>

				<button
					type="button"
					onClick={openCreateModal}
					className="inline-flex w-fit items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700">
					<FaPlus size={12} />
					Create Role
				</button>
			</div>

			{/* Summary */}

			<div className="grid gap-4 sm:grid-cols-3">
				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Total Roles</p>

							<p className="mt-2 text-2xl font-bold text-gray-900">
								{roles.length}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
							<FaUserShield />
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Active Roles</p>

							<p className="mt-2 text-2xl font-bold text-emerald-600">
								{roles.filter((role) => role.status === "Active").length}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
							<FaCheck />
						</div>
					</div>
				</div>

				<div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
					<div className="flex items-center justify-between">
						<div>
							<p className="text-sm text-gray-500">Assigned Administrators</p>

							<p className="mt-2 text-2xl font-bold text-blue-600">
								{roles.reduce((total, role) => total + role.users, 0)}
							</p>
						</div>

						<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
							<FaUserShield />
						</div>
					</div>
				</div>
			</div>

			{/* Roles */}

			<div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
				<div className="border-b border-gray-100 p-5">
					<div className="relative max-w-md">
						<FaSearch
							size={14}
							className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
						/>

						<input
							type="search"
							value={search}
							onChange={(event) => setSearch(event.target.value)}
							placeholder="Search roles..."
							className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10"
						/>
					</div>
				</div>

				<div className="divide-y divide-gray-100">
					{filteredRoles.map((role) => (
						<div key={role.id} className="p-6 transition hover:bg-gray-50/60">
							<div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
								<div className="flex gap-4">
									<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
										<FaUserShield size={18} />
									</div>

									<div>
										<div className="flex flex-wrap items-center gap-2">
											<h2 className="text-base font-bold text-gray-900">
												{role.name}
											</h2>

											<span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
												{role.status}
											</span>
										</div>

										<p className="mt-1 max-w-2xl text-sm text-gray-500">
											{role.description}
										</p>

										<p className="mt-2 text-xs text-gray-400">
											{role.users} administrator
											{role.users !== 1 ? "s" : ""} assigned
										</p>
									</div>
								</div>

								<div className="flex items-center gap-2">
									<button
										type="button"
										onClick={() => openEditModal(role)}
										className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-600 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600">
										<FaEdit size={11} />
										Edit
									</button>

									<button
										type="button"
										onClick={() => deleteRole(role.id)}
										className="inline-flex items-center gap-2 rounded-lg border border-red-100 px-3 py-2 text-xs font-semibold text-red-500 transition hover:bg-red-50">
										<FaTrash size={11} />
										Delete
									</button>
								</div>
							</div>

							<div className="mt-5">
								<p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
									Permissions
								</p>

								<div className="flex flex-wrap gap-2">
									{role.permissions.map((permission) => (
										<span
											key={permission}
											className="rounded-lg bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
											{permission}
										</span>
									))}
								</div>
							</div>
						</div>
					))}

					{filteredRoles.length === 0 && (
						<div className="px-6 py-16 text-center">
							<FaUserShield className="mx-auto text-3xl text-gray-300" />

							<p className="mt-4 text-sm font-semibold text-gray-800">
								No roles found
							</p>
						</div>
					)}
				</div>
			</div>

			{/* Modal */}

			{showModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
					<div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
						<div className="flex items-center justify-between border-b border-gray-100 p-6">
							<div>
								<h2 className="text-lg font-bold text-gray-900">
									{editingRole ? "Edit Role" : "Create Role"}
								</h2>

								<p className="mt-1 text-sm text-gray-500">
									Configure role information and permissions.
								</p>
							</div>

							<button
								type="button"
								onClick={closeModal}
								className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition hover:bg-gray-100 hover:text-gray-700">
								<FaTimes />
							</button>
						</div>

						<form onSubmit={handleSubmit}>
							<div className="space-y-5 p-6">
								<div>
									<label className="mb-2 block text-sm font-semibold text-gray-700">
										Role Name
									</label>

									<input
										type="text"
										required
										value={form.name}
										onChange={(event) =>
											setForm({
												...form,
												name: event.target.value,
											})
										}
										placeholder="e.g. Transaction Manager"
										className="h-11 w-full rounded-xl border border-gray-200 px-4 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
									/>
								</div>

								<div>
									<label className="mb-2 block text-sm font-semibold text-gray-700">
										Description
									</label>

									<textarea
										rows="3"
										value={form.description}
										onChange={(event) =>
											setForm({
												...form,
												description: event.target.value,
											})
										}
										placeholder="Describe what this role is responsible for..."
										className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
									/>
								</div>

								<div>
									<div className="mb-3 flex items-center justify-between">
										<label className="text-sm font-semibold text-gray-700">
											Permissions
										</label>

										<span className="text-xs text-gray-400">
											{form.permissions.length} selected
										</span>
									</div>

									<div className="grid gap-2 sm:grid-cols-2">
										{availablePermissions.map((permission) => {
											const selected = form.permissions.includes(permission);

											return (
												<button
													key={permission}
													type="button"
													onClick={() => togglePermission(permission)}
													className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition ${
														selected ?
															"border-emerald-200 bg-emerald-50 text-emerald-700"
														:	"border-gray-200 text-gray-600 hover:bg-gray-50"
													}`}>
													<span
														className={`flex h-5 w-5 items-center justify-center rounded-md border ${
															selected ?
																"border-emerald-600 bg-emerald-600 text-white"
															:	"border-gray-300"
														}`}>
														{selected && <FaCheck size={10} />}
													</span>

													{permission}
												</button>
											);
										})}
									</div>
								</div>
							</div>

							<div className="flex justify-end gap-3 border-t border-gray-100 p-6">
								<button
									type="button"
									onClick={closeModal}
									className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-600 transition hover:bg-gray-50">
									Cancel
								</button>

								<button
									type="submit"
									className="rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700">
									{editingRole ? "Save Changes" : "Create Role"}
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
