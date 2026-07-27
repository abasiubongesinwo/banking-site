import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { navLinks } from "./navLinks";

export default function MobileNav({ open, onClose }) {
	const [openServices, setOpenServices] = useState(false);

	return (
		<AnimatePresence>
			{open && (
				<>
					{/* Backdrop */}
					<motion.div
						onClick={onClose}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-40 bg-black/50 lg:hidden"
					/>

					{/* Mobile Menu */}
					<motion.div
						initial={{ x: "100%" }}
						animate={{ x: 0 }}
						exit={{ x: "100%" }}
						transition={{ duration: 0.3 }}
						className="fixed right-0 top-0 z-50 h-screen w-80 bg-white shadow-2xl lg:hidden">
						<div className="flex h-full flex-col">
							{/* Header */}
							<div className="flex items-center justify-between border-b p-6">
								<h2 className="text-xl font-bold">Menu</h2>

								<button onClick={onClose} className="text-2xl">
									✕
								</button>
							</div>

							{/* Navigation */}
							<div className="flex-1 overflow-y-auto p-6">
								{navLinks.map((link) => {
									if (link.children) {
										return (
											<div key={link.name} className="mb-2">
												<button
													onClick={() => setOpenServices(!openServices)}
													className="flex w-full items-center justify-between rounded-lg py-3 font-medium">
													{link.name}

													<ChevronDown
														className={`transition ${
															openServices ? "rotate-180" : ""
														}`}
													/>
												</button>

												<AnimatePresence>
													{openServices && (
														<motion.div
															initial={{ height: 0, opacity: 0 }}
															animate={{
																height: "auto",
																opacity: 1,
															}}
															exit={{
																height: 0,
																opacity: 0,
															}}
															className="overflow-hidden pl-4">
															{link.children.map((item) => (
																<Link
																	key={item.name}
																	to={item.path}
																	onClick={onClose}
																	className="block rounded-lg py-2 text-gray-600 hover:text-emerald-600">
																	{item.name}
																</Link>
															))}
														</motion.div>
													)}
												</AnimatePresence>
											</div>
										);
									}

									return (
										<Link
											key={link.name}
											to={link.path}
											onClick={onClose}
											className="block rounded-lg py-3 font-medium hover:text-emerald-600">
											{link.name}
										</Link>
									);
								})}
							</div>

							{/* Bottom Button */}
							<div className="border-t p-6">
								<Link
									to="/login"
									onClick={onClose}
									className="block rounded-xl bg-emerald-600 py-3 text-center font-semibold text-white hover:bg-emerald-700">
									E-Banking
								</Link>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
