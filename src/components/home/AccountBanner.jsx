// import React from 'react';

export default function AccountBanner() {
	return (
		<section
			className="w-full py-16 text-center text-white my-5 shadow-lg relative overflow-hidden mx-auto"
			style={{
				backgroundColor: "#2b7a4b",
				backgroundImage: `repeating-linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.05),
          rgba(255, 255, 255, 0.05) 15px,
          transparent 15px,
          transparent 30px
        )`,
			}}>
			{/* Main Heading */}
			<h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-wide mb-4">
				Apply for an Account in Minutes
			</h1>

			{/* Subtitle */}
			<p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-sans font-normal opacity-95 mb-8">
				Get your First Bank of Delaware account today and experience banking
				excellence!
			</p>

			{/* Call to Action Button */}
			<button
				type="button"
				onClick={() => {}}
				className="bg-[#e8b359] hover:bg-[#d8a248] text-gray-900 font-sans font-bold py-3.5 px-8 rounded-lg shadow-md transition-colors duration-200 text-sm sm:text-base cursor-pointer">
				Get Your First Bank of Delaware Account
			</button>
		</section>
	);
}
