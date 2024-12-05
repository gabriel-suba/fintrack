import { useState } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Dashboard from "./components/Contents/Dashboard";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import Transactions from "./components/Contents/Transactions";
import TransactionForm from "./components/TransactionForm";

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
				/>
				<SidebarItem
					open={open}
					icon={<ReceiptLongOutlinedIcon sx={{ width: "1.5rem", height: "1.5rem" }} />}
					text="Transactions"
					handleOnClick={handleSidebarClick}
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
