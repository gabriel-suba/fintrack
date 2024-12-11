import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/system";

const SidebarToggle = styled(IconButton)(() => ({
	width: "2.5rem",
	height: "2.5rem",
	marginLeft: "auto",
	":hover": { background: "none" },
}));

export default SidebarToggle;