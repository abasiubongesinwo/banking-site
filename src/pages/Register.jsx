import LeftPanel from "../components/register/LeftPanel";
import RegisterForm from "../components/register/RegisterForm";

export default function Register() {
	return (
		<div className="bg-[#f8faf9] h-screen">
			<div className="grid grid-cols-1 h-full lg:grid-cols-2">
				{/*LEFT - fix, no scroll */}
				<div className="hidden lg:block">
					<LeftPanel />
				</div>

				{/*RIGHT - scrollable */}
				<div className="register-scroll h-full overflow-y-auto scrollbar-hide">
					<div className="flex items-start justify-center min-h-full">
						<RegisterForm />
					</div>
				</div>
			</div>
		</div>
	);
}
