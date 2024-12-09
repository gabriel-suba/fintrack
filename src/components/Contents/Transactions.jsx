import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Title from "../StyledComponents/Title";
import TransactionCard, { Row } from "../TransactionCard";
import Typography from "@mui/material/Typography";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import { useContext } from "react";
import { TransactionContext } from "../../context/TransactionContext";

function Transactions({ handleOpenModal }) {
	const { transactions } = useContext(TransactionContext);

	return (
		<>
			<Title>
				<Typography alignSelf="center" fontSize="1.125rem">Transactions</Typography>
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
