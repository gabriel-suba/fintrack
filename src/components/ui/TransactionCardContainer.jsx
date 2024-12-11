import Paper from "@mui/material/Paper";

function TransactionCardContainer({ children }) {
	return (
		<Paper
			sx={{
				minWidth: "max-content",
				padding: "1rem",
				marginBottom: "0.5rem",
				marginTop: "0.5rem",
				overflow: "hidden",
			}}

			variant="outlined"
		>
			{children}
		</Paper>
	);
}

export default TransactionCardContainer;