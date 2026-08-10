import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaUniversity } from "react-icons/fa";

import { adminNavigation } from "../data/AdminNavigation";

export default function AdminSidebar() {
	const location = useLocation();

	const [openMenus, setOpenMenus] = useState({});

	const toggleMenu = (title) => {
		setOpenMenus((prev) => ({
			...prev,
			[title]: !prev[title],
		}));
	};

	const isChildActive = (item) => {
		if (!item.children) return false;

		return item.children.some((child) =>
			location.pathname.startsWith(child.path),
		);
	};

	return (
		<aside className="fixed left-0 top-0 z-50 flex h-screen w-72 flex-col bg-[#062d20] text-white shadow-2xl">
			{/* Logo */}

			<div className="flex h-20 shrink-0 items-center border-b border-white/10 px-6">
				<div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400 text-[#062d20]">
					<FaUniversity size={22} />
				</div>

				<div className="ml-3 min-w-0">
					<h1 className="truncate text-sm font-bold">First Bank of Delaware</h1>

					<p className="mt-1 text-xs text-emerald-200">Administration Portal</p>
				</div>
			</div>

			{/* Navigation */}

			<nav className="flex-1 overflow-y-auto px-3 py-5">
				<div className="space-y-1">
					{adminNavigation.map((item) => {
						const Icon = item.icon;

						const hasChildren = item.expandable && item.children?.length > 0;

						const active =
							location.pathname === item.path || isChildActive(item);

						if (hasChildren) {
							const isOpen = openMenus[item.title] || active;

							return (
								<div key={item.title}>
									<button
										type="button"
										onClick={() => toggleMenu(item.title)}
										className={`group flex w-full items-center rounded-xl px-4 py-3 text-sm font-medium transition ${
											active ?
												"bg-white/10 text-amber-400"
											:	"text-emerald-50 hover:bg-white/5 hover:text-white"
										}`}>
										<Icon
											className={`mr-3 shrink-0 ${
												active ? "text-amber-400" : "text-emerald-200"
											}`}
											size={18}
										/>

										<span className="flex-1 text-left">{item.title}</span>

										<motion.span
											animate={{
												rotate: isOpen ? 180 : 0,
											}}
											transition={{
												duration: 0.2,
											}}>
											<FaChevronDown size={12} />
										</motion.span>
									</button>

									<AnimatePresence initial={false}>
										{isOpen && (
											<motion.div
												initial={{
													height: 0,
													opacity: 0,
												}}
												animate={{
													height: "auto",
													opacity: 1,
												}}
												exit={{
													height: 0,
													opacity: 0,
												}}
												transition={{
													duration: 0.2,
												}}
												className="overflow-hidden">
												<div className="ml-5 mt-1 space-y-1 border-l border-white/10 pl-4">
													{item.children.map((child) => (
														<NavLink
															key={child.path}
															to={child.path}
															className={({ isActive }) =>
																`block rounded-lg px-3 py-2.5 text-sm transition ${
																	isActive ?
																		"bg-amber-400/10 font-semibold text-amber-400"
																	:	"text-emerald-100 hover:bg-white/5 hover:text-white"
																}`
															}>
															{child.title}
														</NavLink>
													))}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							);
						}

						return (
							<NavLink
								key={item.path}
								to={item.path}
								className={({ isActive }) =>
									`group flex items-center rounded-xl px-4 py-3 text-sm font-medium transition ${
										isActive ?
											"bg-amber-400 text-[#062d20] shadow-lg shadow-amber-400/10"
										:	"text-emerald-50 hover:bg-white/5 hover:text-white"
									}`
								}>
								<Icon className="mr-3 shrink-0" size={18} />

								<span>{item.title}</span>
							</NavLink>
						);
					})}
				</div>
			</nav>

			{/* Bottom */}

			<div className="shrink-0 border-t border-white/10 p-4">
				<div className="rounded-xl bg-white/5 p-4">
					<p className="text-xs font-semibold text-emerald-200">
						Administrator Portal
					</p>

					<p className="mt-1 text-xs leading-5 text-emerald-100/60">
						Manage your banking platform securely.
					</p>
				</div>
			</div>
		</aside>
	);
}
