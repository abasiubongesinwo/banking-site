import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "./layouts/AdminLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import ManageUsers from "./pages/ManageUsers";
import CreateUser from "./pages/CreateUser";
import KYCApplications from "./pages/KYCApplications";
import KycReview from "./pages/KycReview";
import Transactions from "./pages/Transactions";
import Deposits from "./pages/Deposits";
import Withdrawals from "./pages/Withdrawals";
import Transfers from "./pages/Transfers";
import Cards from "./pages/Cards";
import Loans from "./pages/Loans";
import Support from "./pages/Support";
import Notifications from "./pages/Notifications";
import AuditLogs from "./pages/AuditLogs";
import Settings from "./pages/Settings";
import AdminProfile from "./pages/AdminProfile";
import AdminRoles from "./pages/AdminRoles";
import AdminActivity from "./pages/AdminActivity";
import AdminSystemLogs from "./pages/AdminSystemLogs";
import ManageUser from "./pages/ManageUser";
import SendEmail from "./pages/SendEmail";

export default function AdminRoutes() {
	return (
		<Routes>
			{/* Admin Root */}
			<Route path="/admin" element={<AdminLayout />}>
				{/* /admin → /admin/dashboard */}
				<Route index element={<Navigate to="/admin/dashboard" replace />} />

				{/* Dashboard */}
				<Route path="dashboard" element={<Dashboard />} />

				{/* Users */}
				<Route path="manage-users" element={<ManageUsers />} />
				<Route path="manage-users/:id" element={<ManageUser />} />

				<Route path="create-user" element={<CreateUser />} />

				{/* KYC */}
				<Route path="kyc-applications" element={<KYCApplications />} />

				<Route path="kyc-applications/:id" element={<KycReview />} />

				{/* Transactions */}
				<Route path="transactions" element={<Transactions />} />

				<Route path="transfers" element={<Transfers />} />

				<Route path="deposits" element={<Deposits />} />

				<Route path="withdrawals" element={<Withdrawals />} />

				{/*Send Email*/}
				<Route path="send-email" element={<SendEmail />} />

				{/* Virtual Cards */}
				<Route path="cards" element={<Cards />} />

				<Route path="cards/pending" element={<Cards />} />

				<Route path="cards/settings" element={<Cards />} />

				{/* Grants */}
				<Route path="grants" element={<Dashboard />} />

				<Route path="grants/pending" element={<Dashboard />} />

				<Route path="grants/approved" element={<Dashboard />} />

				<Route path="grants/disbursed" element={<Dashboard />} />

				<Route path="grants/rejected" element={<Dashboard />} />

				{/* Investments */}
				<Route path="investments" element={<Dashboard />} />

				<Route path="investments/plans" element={<Dashboard />} />

				<Route path="investments/create-plan" element={<Dashboard />} />

				<Route path="investments/users" element={<ManageUsers />} />

				<Route path="investments/manual" element={<Dashboard />} />

				{/* Loans */}
				<Route path="loans" element={<Loans />} />

				<Route path="loans/pending" element={<Loans />} />

				<Route path="loans/approved" element={<Loans />} />

				<Route path="loans/active" element={<Loans />} />

				<Route path="loans/rejected" element={<Loans />} />

				{/* Administrators */}
				<Route path="administrators" element={<AdminRoles />} />

				<Route path="administrators/add" element={<AdminRoles />} />

				{/* Settings */}
				<Route path="settings" element={<Settings />} />

				<Route path="settings/payment" element={<Settings />} />

				<Route path="settings/sms" element={<Settings />} />

				<Route path="settings/ip-address" element={<Settings />} />

				{/* Other Admin Pages */}
				<Route path="support" element={<Support />} />

				<Route path="notifications" element={<Notifications />} />

				<Route path="audit-logs" element={<AuditLogs />} />

				<Route path="profile" element={<AdminProfile />} />

				<Route path="roles" element={<AdminRoles />} />

				<Route path="activity" element={<AdminActivity />} />

				<Route path="system-logs" element={<AdminSystemLogs />} />
			</Route>
		</Routes>
	);
}
