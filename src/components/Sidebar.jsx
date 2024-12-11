import { useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import logo from "../assets/logo.svg";
import Actions from "./ui/Actions";
import RowItemBase from "./StyledComponents/RowItemBase";
import SidebarFooter from "./StyledComponents/SidebarFooter";
import SidebarLogo from "./StyledComponents/SidebarLogo";
import SidebarToggle from "./StyledComponents/SidebarToggle";

const sidebarProfileActions = [
	{ action: "View Profile", color: "" },
	{ action: "Logout", color: "error" },
];

function Sidebar({ open, setOpen, children }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const openAnchor = Boolean(anchorEl);
	const handleClickActions = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleCloseActions = (event) => {
		setAnchorEl(null);

		const { target: { textContent } } = event;

		switch (textContent) {
			case "View Profile":
				console.log(`profile`);
				break;
			case "Logout":
				console.log(`logout`);
				break;

			default:
				break;
		}
	};

	return (
		<Drawer
			variant="permanent"
			anchor="left"
			open={open}
			elevation={20}
			PaperProps={{
				sx: {
					width: `${!open ? "3.5rem" : "15.5rem"}`,
					marginBottom: "0.5rem",
					transition: "width 250ms ease",
				},
			}}
		>
			<Box>
				<RowItemBase
					sx={{
						marginTop: "0rem",
						flexDirection: "row-reverse",
						borderBottom: `1px solid ${grey[300]}`,
					}}
				>
					<SidebarToggle onClick={() => setOpen((prev) => !prev)} disableRipple={true}>
						{open ? <ChevronLeft /> : <ChevronRight />}
					</SidebarToggle>
					<SidebarLogo component="img" src={logo} open={open} />
				</RowItemBase>
			</Box>

			{/* body */}
			<Box sx={{ flex: 1 }}>
				{children}
			</Box>

			{/* footer */}
			<SidebarFooter>
				<Box
					component="img"
					src="https://eu.ui-avatars.com/api/?name=John+Doe&size=250"
					alt="Initials of a man called JD"
					sx={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.5rem" }}
				/>
				<Box>
					<Typography lineHeight="1" component="p">
						John Doe
					</Typography>
					<Typography component="p" fontSize="0.75rem">
						johndoe@gmail.com
					</Typography>
				</Box>
				<IconButton onClick={handleClickActions} sx={{ marginLeft: "auto" }}>
					<MoreVertIcon />
				</IconButton>
				<Actions 
					anchorEl={anchorEl}
					handleCloseActions={handleCloseActions}
					openAnchor={openAnchor}
					list={sidebarProfileActions}
				/>
			</SidebarFooter>
		</Drawer>
	);
}

export default Sidebar;
