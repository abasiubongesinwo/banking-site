import { useState } from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import AdminSidebar from "../components/AdminSidebar";
import AdminNavbar from "../components/AdminNavbar";

export default function AdminLayout() {
	const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

	return (
		<div className="min-h-screen bg-[#f5f7f6]">
			{/* Desktop Sidebar */}

			<div className="hidden lg:block">
				<AdminSidebar />
			</div>

			{/* Mobile Sidebar */}

			<AnimatePresence>
				{mobileSidebarOpen && (
					<>
						{/* Overlay */}

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setMobileSidebarOpen(false)}
							className="fixed inset-0 z-50 bg-black/50 lg:hidden"
						/>

						{/* Sidebar */}

						<motion.div
							initial={{ x: -300 }}
							animate={{ x: 0 }}
							exit={{ x: -300 }}
							transition={{
								type: "spring",
								stiffness: 300,
								damping: 30,
							}}
							className="fixed left-0 top-0 z-[60] h-screen lg:hidden">
							<AdminSidebar />

							{/* Close Button */}

							<button
								type="button"
								onClick={() => setMobileSidebarOpen(false)}
								className="absolute right-3 top-5 rounded-lg bg-white/10 p-2 text-white transition hover:bg-white/20">
								<FaTimes size={18} />
							</button>
						</motion.div>
					</>
				)}
			</AnimatePresence>

			{/* Main Area */}

			<div className="min-h-screen lg:ml-72">
				{/* Navbar */}

				<AdminNavbar onMenuClick={() => setMobileSidebarOpen(true)} />

				{/* Page Content */}

				<main className="min-h-[calc(100vh-5rem)] p-4 sm:p-6 lg:p-8">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
