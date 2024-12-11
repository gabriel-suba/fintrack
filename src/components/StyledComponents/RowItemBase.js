import Box from "@mui/material/Box";
import { styled } from "@mui/system";

const RowItemBase = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: "0.5rem",
	margin: "0.5rem 0",
	transition: "background 250ms ease",
	cursor: "pointer",
	":hover": {
		background: theme.palette.grey[100],
	},
}));

export default RowItemBase;