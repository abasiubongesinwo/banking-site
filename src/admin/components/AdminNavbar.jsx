import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	FaBars,
	FaBell,
	FaSearch,
	FaUserCircle,
	FaChevronDown,
	FaSignOutAlt,
	FaCog,
} from "react-icons/fa";

export default function AdminNavbar({ onMenuClick }) {
	const [profileOpen, setProfileOpen] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);

	return (
		<header className="sticky top-0 z-40 h-20 border-b border-gray-200 bg-white shadow-sm">
			<div className="flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* Left Side */}

				<div className="flex items-center gap-4">
					{/* Mobile Menu */}

					<button
						type="button"
						onClick={onMenuClick}
						className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 lg:hidden"
						aria-label="Open navigation">
						<FaBars size={20} />
					</button>

					{/* Page Search */}

					<div className="relative hidden md:block">
						<FaSearch
							size={15}
							className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
						/>

						<input
							type="search"
							placeholder="Search..."
							className="h-11 w-72 rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm text-gray-700 outline-none transition focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100"
						/>
					</div>

					{/* Mobile Search */}

					<button
						type="button"
						onClick={() => setSearchOpen(!searchOpen)}
						className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 md:hidden"
						aria-label="Search">
						<FaSearch size={18} />
					</button>
				</div>

				{/* Right Side */}

				<div className="flex items-center gap-3">
					{/* Notification */}

					<button
						type="button"
						className="relative rounded-xl p-3 text-gray-600 transition hover:bg-gray-100">
						<FaBell size={18} />

						<span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500" />
					</button>

					<div className="hidden h-8 w-px bg-gray-200 sm:block" />

					{/* Profile */}

					<div className="relative">
						<button
							type="button"
							onClick={() => setProfileOpen(!profileOpen)}
							className="flex items-center gap-3 rounded-xl px-2 py-2 transition hover:bg-gray-50">
							<div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
								<FaUserCircle size={25} />
							</div>

							<div className="hidden text-left sm:block">
								<p className="text-sm font-semibold text-gray-800">
									Admin Manager
								</p>

								<p className="text-xs text-gray-500">Administrator</p>
							</div>

							<FaChevronDown
								size={11}
								className={`hidden text-gray-400 transition sm:block ${
									profileOpen ? "rotate-180" : ""
								}`}
							/>
						</button>

						{/* Profile Dropdown */}

						<AnimatePresence>
							{profileOpen && (
								<motion.div
									initial={{
										opacity: 0,
										y: -8,
									}}
									animate={{
										opacity: 1,
										y: 0,
									}}
									exit={{
										opacity: 0,
										y: -8,
									}}
									className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-gray-200 bg-white py-2 shadow-xl">
									<div className="border-b border-gray-100 px-4 py-3">
										<p className="text-sm font-semibold text-gray-800">
											Admin Manager
										</p>

										<p className="mt-1 truncate text-xs text-gray-500">
											admin@firbod.com
										</p>
									</div>

									<button
										type="button"
										className="flex w-full items-center gap-3 px-4 py-3 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-emerald-600">
										<FaUserCircle size={16} />
										My Profile
									</button>

									<button
										type="button"
										className="flex w-full items-center gap-3 px-4 py-3 text-sm text-gray-600 transition hover:bg-gray-50 hover:text-emerald-600">
										<FaCog size={16} />
										Account Settings
									</button>

									<div className="my-1 border-t border-gray-100" />

									<button
										type="button"
										className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-600 transition hover:bg-red-50">
										<FaSignOutAlt size={16} />
										Sign Out
									</button>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>
			</div>

			{/* Mobile Search Dropdown */}

			<AnimatePresence>
				{searchOpen && (
					<motion.div
						initial={{
							opacity: 0,
							height: 0,
						}}
						animate={{
							opacity: 1,
							height: "auto",
						}}
						exit={{
							opacity: 0,
							height: 0,
						}}
						className="border-b border-gray-200 bg-white px-4 pb-4 md:hidden">
						<div className="relative">
							<FaSearch
								size={15}
								className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
							/>

							<input
								type="search"
								autoFocus
								placeholder="Search..."
								className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-100"
							/>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
