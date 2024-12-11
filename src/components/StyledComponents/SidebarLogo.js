import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const SidebarLogo = styled(Box)(({ open }) => ({
	width: `${open ? "12.5rem" : "0"}`,
	height: "auto",
	transition: "visibility 250ms ease",
	overflow: "hidden",
}));

export default SidebarLogo;