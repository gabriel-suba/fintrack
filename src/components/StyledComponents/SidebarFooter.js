import Box from "@mui/material/Box";
import grey from "@mui/material/colors/grey";
import { styled } from "@mui/system";

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

export default SidebarFooter;