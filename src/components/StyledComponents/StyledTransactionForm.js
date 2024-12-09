import styled from "@mui/system/styled";
import Box from "@mui/material/Box";

const StyledTransactionForm = styled(Box)(({ theme }) => ({
    position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: "min(90%, 765px)",
	backgroundColor: theme.palette.background.paper,
	boxShadow: theme.shadows[24],
	padding: theme.spacing(4),
	borderRadius: "0.5rem"
}));

export default StyledTransactionForm;