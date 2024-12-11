import { useState } from "react";
import Accounts from "./pages/Accounts";
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Dashboard from "./pages/Dashboard";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import Sidebar from "./components/Sidebar";
import SidebarItem from "./components/ui/SidebarItem";
import Transactions from "./pages/Transactions";
import TransactionForm from "./components/TransactionForm";
import AccountsForm from "./components/AccountsForm";

// TODO
// 1. Create POST logic for submitting the form.
//    1.1. Logic is still a placeholder.
//    1.2. Need to create backend.
//    1.3. Study ways on fetching data.
// 2. Add tabs for Accounts - IN PROGRESS
//    2.1. Accounts form
// 3. React/Tanstack router for tabs.
// 4. Form validation - make fields required
// 5. Integrate React Hook Form to Transaction Form
//    5.1. Apply Schema
//    5.2. Give default values
// 6. Pagination

function App() {
	const [activeTab, setActiveTab] = useState("Transactions");
	const [open, setOpen] = useState(false);
	const [openTransactionForm, setOpenTransactionForm] = useState(false);
	const [openAccountsForm, setOpenAccountsForm] = useState(false);
	const handleOpenAccountsForm = () => setOpenAccountsForm(true);
	const handleCloseAccountsForm = () => setOpenAccountsForm(false);
	const handleOpenTransactionForm = () => setOpenTransactionForm(true);
	const handleCloseTransactionForm = () => setOpenTransactionForm(false);
	const handleSidebarClick = (event) => setActiveTab(event.currentTarget.dataset.tab);

	return (
		<Box overflow="hidden">
			<CssBaseline />

			<Sidebar open={open} setOpen={setOpen}>
				<SidebarItem
					open={open}
					Icon={SpaceDashboardOutlinedIcon}
					text="Dashboard"
					handleOnClick={(handleSidebarClick)}
					isActive={activeTab === "Dashboard"}
				/>
				<SidebarItem
					open={open}
					Icon={ReceiptLongOutlinedIcon}
					text="Transactions"
					handleOnClick={handleSidebarClick}
					isActive={activeTab === "Transactions"}
				/>
				<SidebarItem
					open={open}
					Icon={AccountBalanceOutlinedIcon}
					text="Accounts"
					handleOnClick={handleSidebarClick}
					isActive={activeTab === "Accounts"}
				/>
			</Sidebar>

			<Box sx={{ marginLeft: `${open ? "15.5rem" : "3.5rem"}`, transition: "margin 250ms ease" }}>
				{activeTab === "Transactions" && <Transactions handleOpenModal={handleOpenTransactionForm} />}
				{activeTab === "Dashboard" && <Dashboard />}
				{activeTab === "Accounts" && <Accounts handleOpenModal={handleOpenAccountsForm} />}
			</Box>

			<TransactionForm handleCloseModal={handleCloseTransactionForm} openModal={openTransactionForm} />
			<AccountsForm handleCloseModal={handleCloseAccountsForm} openModal={openAccountsForm} />
		</Box>
	);
}

export default App;
