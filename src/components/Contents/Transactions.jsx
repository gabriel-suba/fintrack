import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Title from "../StyledComponents/Title";
import TransactionCard, { Row } from "../TransactionCard";
import Typography from "@mui/material/Typography";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";

const getRandomDate = (start, end) => {
	const startDate = new Date(start).getTime(); // Convert start date to timestamp
	const endDate = new Date(end).getTime(); // Convert end date to timestamp
	const randomTimestamp = Math.random() * (endDate - startDate) + startDate; // Random timestamp
	return new Date(randomTimestamp).toLocaleDateString("en-us"); // Format as a readable date
};

const transactions = Array.from({ length: 10 }, (_, index) => ({
	delete: false,
	id: index,
	documentNumber: `TX${String(index + 1).padStart(7, "0")}`,
	type: "transfer",
	date: getRandomDate("2024-01-01", "2024-12-31"),
	memo: `Memo for transaction ${index + 1}`,
	from: "BDO",
	account: "Seabank",
	amount: `${12_000 + index * 10000}`,
}));

function Transactions({ handleOpenModal }) {
	return (
		<>
			<Title>
				<Typography fontSize="1.125rem">Transactions</Typography>
			</Title>

			<Box sx={{ padding: "3.55rem 0.5rem 0.5rem" }}>
				<Box sx={{ width: "min-content", marginLeft: "auto", padding: "0.5rem 0 0", fontSize: "0.75rem" }}>
					<Button
						size="small"
						variant="outlined"
						startIcon={<PostAddOutlinedIcon />}
						color="inherit"
						onClick={handleOpenModal}
					>
						<Typography fontSize="0.rem">new</Typography>
					</Button>
				</Box>

				{transactions.map((tx, index) => (
					<Row key={index}>
						<TransactionCard tx={tx} />
					</Row>
				))}
			</Box>
		</>
	);
}

export default Transactions;
