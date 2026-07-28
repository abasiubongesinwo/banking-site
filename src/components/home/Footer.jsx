import React from "react";

export default function Footer() {
	return (
		<footer className="bg-[#181818] text-gray-300 font-sans py-12 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-gray-800 relative">
			<div className="max-w-7xl mx-auto">
				{/* Main Footer Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
					{/* Column 1: Brand Info */}
					<div className="space-y-4">
						{/* Logo */}
						<div className="flex items-center space-x-2">
							<img
								src="/logo.png"
								alt="First Bank of Delaware Logo"
								className="h-12 w-auto invert"
							/>
						</div>
						<p className="text-xs text-gray-400 leading-relaxed max-w-sm">
							First Bank of Delaware is a bank for premier business, offering
							financial services and competitive products to Large Corporates
							and SMEs, International Clients, Institutional Investors,
							Provident and Pension Funds, Equity Funds as well as High Net
							Worth Individuals.
						</p>
					</div>

					{/* Column 2: Company */}
					<div>
						<h3 className="text-white text-lg font-serif font-semibold mb-2 relative inline-block">
							Company
							<span className="block h-[2px] w-8 bg-[#e8b359] mt-1"></span>
						</h3>
						<ul className="mt-4 space-y-2.5 text-xs text-gray-400">
							<li>
								<a href="#about" className="hover:text-white transition-colors">
									About Us
								</a>
							</li>
							<li>
								<a
									href="#services"
									className="hover:text-white transition-colors">
									Services
								</a>
							</li>
							<li>
								<a
									href="#contact"
									className="hover:text-white transition-colors">
									Contact Us
								</a>
							</li>
						</ul>
					</div>

					{/* Column 3: Financial Services */}
					<div>
						<h3 className="text-white text-lg font-serif font-semibold mb-2 relative inline-block">
							Financial Services
							<span className="block h-[2px] w-8 bg-[#e8b359] mt-1"></span>
						</h3>
						<ul className="mt-4 space-y-2.5 text-xs text-gray-400">
							<li>
								<a
									href="#corporate"
									className="hover:text-white transition-colors">
									Corporate Banking
								</a>
							</li>
							<li>
								<a
									href="#personal"
									className="hover:text-white transition-colors">
									Personal Banking
								</a>
							</li>
							<li>
								<a
									href="#international"
									className="hover:text-white transition-colors">
									International Banking
								</a>
							</li>
							<li>
								<a
									href="#contact-services"
									className="hover:text-white transition-colors">
									Contact Us
								</a>
							</li>
						</ul>
					</div>

					{/* Column 4: Contact Info */}
					<div>
						<h3 className="text-white text-lg font-serif font-semibold mb-2 relative inline-block">
							Contact Info
							<span className="block h-[2px] w-8 bg-[#e8b359] mt-1"></span>
						</h3>
						<div className="mt-4 space-y-3 text-xs text-gray-400">
							<p className="leading-relaxed">
								301 East Water Street,
								<br />
								Charlottesville, VA 22904 Virginia
							</p>
							<p>
								<a
									href="mailto:support@firbod.com"
									className="hover:text-white transition-colors">
									support@firbod.com
								</a>
							</p>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="border-t border-gray-800 pt-8 mt-8 flex flex-col sm:flex-row items-center justify-center text-xs text-gray-500">
					<p className="text-center">
						Copyright © 2026 First Bank of Delaware. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
