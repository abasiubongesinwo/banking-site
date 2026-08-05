import LeftPanel from "../components/register/LeftPanel";
import RegisterForm from "../components/register/RegisterForm";

export default function Register() {
	return (
		<div className="h-screen overflow-hidden bg-[#f8faf9]">
			<div className="grid h-full lg:grid-cols-2">
				{/* LEFT - fixed, no scroll */}
				<div className="hidden h-screen overflow-hidden lg:block">
					<LeftPanel />
				</div>

				{/* RIGHT - scrollable, hidden scrollbar */}
				<div className="register-scroll h-screen overflow-y-auto scrollbar-hide">
					<div className="min-h-full flex items-center justify-center px-8 py-12">
						<RegisterForm />
					</div>
				</div>
			</div>
		</div>
	);
}
