import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { grey } from "@mui/material/colors";
import logo from "../assets/logo.svg";

const RowItemBase = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: "0.5rem",
	margin: "0.5rem 0", // Combines margin-top and margin-bottom
	transition: "background 250ms ease",
	cursor: "pointer",
	":hover": {
		background: theme.palette.grey[100],
	},
}));

const SidebarToggle = styled(IconButton)(() => ({
	width: "2.5rem",
	height: "2.5rem",
	marginLeft: "auto",
	":hover": { background: "none" },
}));

const SidebarLogo = styled(Box)(({ open }) => ({
	width: `${open ? "12.5rem" : "0"}`,
	height: "auto",
	transition: "visibility 250ms ease",
	overflow: "hidden",
}));

const SidebarFooter = styled(Box)(() => ({
	display: "flex",
	alignItems: "center",
	gap: "0.5rem",
	padding: "0.5rem",
	borderTopWidth: "1px",
	borderTopStyle: "solid",
	borderTopColor: grey[300],
	overflow: "hidden",
}));

function Sidebar({ open, setOpen, children }) {
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
						flexDirection: "row-reverse",
						borderBottomWidth: "1px",
						borderBottomStyle: "solid",
						borderBottomColor: grey[300],
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
				<IconButton sx={{ marginLeft: "auto" }}>
					<MoreVertIcon />
				</IconButton>
			</SidebarFooter>
		</Drawer>
	);
}

export function SidebarItem({ icon, text, open, handleOnClick, isActive }) {
	return (
		<RowItemBase
			bgcolor={isActive ? grey[100] : grey[0]}
			onClick={handleOnClick}
			data-tab={text}
		>
			<Box padding="0.5rem" display="flex" alignItems="center">
				{icon}
			</Box>
			<Typography
				component="p"
				fontSize="16px"
				paddingBlock="0.5rem"
				sx={{ width: `${open ? "12.5rem" : "0"}`, transition: "width 250ms ease", overflow: "hidden" }}
			>
				{text}
			</Typography>
		</RowItemBase>
	);
}

export default Sidebar;
