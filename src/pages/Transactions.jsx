import ButtonCreate from "../components/ui/ButtonCreate";
import Title from "../components/StyledComponents/Title";
import TransactionCard from "../components/ui/TransactionCard";
import CardContainer from "../components/ui/CardContainer";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { TransactionContext } from "../services/context/TransactionContext";
import MainContainer from "../components/ui/MainContainer";

function Transactions({ handleOpenModal }) {
	const { transactions } = useContext(TransactionContext);

	return (
		<>
			<Title>
				<Typography alignSelf="center" fontSize="1.125rem">
					Transactions
				</Typography>
			</Title>

			<MainContainer>
				<ButtonCreate handleOpenModal={handleOpenModal} />

				{/* 
					TransactionCardContainer = row
					TransactionCard          = cell
				*/}
				{transactions.map((tx) => (
					<CardContainer key={tx.id}>
						<TransactionCard tx={tx} />
					</CardContainer>
				))}
			</MainContainer>
		</>
	);
}

export default Transactions;
