import { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Dashboard from "./pages/Dashboard";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import Sidebar from "./components/Sidebar";
import SidebarItem from "./components/ui/SidebarItem";
import Transactions from "./pages/Transactions";
import TransactionForm from "./components/TransactionForm";

// TODO
// 1. Create POST logic for submitting the form.
//    1.1. Logic is still a placeholder.
//    1.2. Need to create backend.
//    1.3. Study ways on fetching data.
// 2. Add tabs for Accounts
// 3. React/Tanstack router for tabs.
// 4. Actions UI - need  to be reusable

function App() {
	const [activeTab, setActiveTab] = useState("Transactions");
	const [open, setOpen] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const handleOpenModal = () => setOpenModal(true);
	const handleCloseModal = () => setOpenModal(false);
	const handleSidebarClick = (event) => setActiveTab(event.currentTarget.dataset.tab);

	return (
		<Box overflow="hidden">
			<CssBaseline />

			<Sidebar open={open} setOpen={setOpen}>
				<SidebarItem
					open={open}
					icon={<SpaceDashboardOutlinedIcon sx={{ width: "1.5rem", height: "1.5rem" }} />}
					text="Dashboard"
					handleOnClick={(handleSidebarClick)}
					isActive={activeTab === "Dashboard"}
				/>
				<SidebarItem
					open={open}
					icon={<ReceiptLongOutlinedIcon sx={{ width: "1.5rem", height: "1.5rem" }} />}
					text="Transactions"
					handleOnClick={handleSidebarClick}
					isActive={activeTab === "Transactions"}
				/>
			</Sidebar>

			<Box sx={{ marginLeft: `${open ? "15.5rem" : "3.5rem"}`, transition: "margin 250ms ease" }}>
				{activeTab === "Transactions" && <Transactions handleOpenModal={handleOpenModal} />}
				{activeTab === "Dashboard" && <Dashboard />}
			</Box>

			<TransactionForm handleCloseModal={handleCloseModal} openModal={openModal} />
		</Box>
	);
}

export default App;
