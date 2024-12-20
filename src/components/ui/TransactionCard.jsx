import { useState } from "react";
import dayjs from "dayjs";
import { Chip, IconButton, Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Actions from "./Actions";
import FlexAlignCenter from "../StyledComponents/FlexAlignCenter";

const txCardActions = [
	{ action: "Edit", color: "" },
	{ action: "Delete", color: "error" },
];

function TransactionCard({ tx }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const openAnchor = Boolean(anchorEl);

	const handleClickActions = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseActions = (event) => {
		setAnchorEl(null);

		const { target: { textContent } } = event;

		switch (textContent) {
			case "Edit":
				console.log(`Updating ${tx.documentNumber}`);
				break;
			case "Delete":
				console.log(`Deleting ${tx.documentNumber}`);
				break;

			default:
				break;
		}
	};

	return (
		<>
			<FlexAlignCenter justifyContent="space-between">
				<FlexAlignCenter gap="0.75rem">
					<Typography component="p" fontSize="1rem" fontWeight="bold">
						{tx.documentNumber}
					</Typography>
					<Chip label={tx.type} size="small" />
					<Typography component="p" fontSize="0.75rem" color={grey[700]}>
						{dayjs(tx.date).format("YYYY/MM/DD")}
					</Typography>
				</FlexAlignCenter>
				<IconButton onClick={handleClickActions}>
					<MoreVertIcon />
				</IconButton>
				<Actions 
					anchorEl={anchorEl}
					handleCloseActions={handleCloseActions}
					openAnchor={openAnchor}
					list={txCardActions}
				/>
			</FlexAlignCenter>
			<Typography component="p" fontSize={"0.875rem"} marginBlock={"0.5rem"}>
				{tx.memo}
			</Typography>
			<FlexAlignCenter justifyContent="space-between" marginTop="1rem">
				<FlexAlignCenter gap="0.25rem">
					{tx.type === "transfer" && (
						<>
							<Typography component="p" fontSize="0.875rem" fontWeight="bold">
								{tx.from}
							</Typography>
							<ArrowRightAltIcon />
						</>
					)}
					<Typography component="p" fontSize="0.875rem" fontWeight="bold">
						{tx.account}
					</Typography>
				</FlexAlignCenter>
				<Typography component="p" fontSize="0.875rem">
					{
						tx.type === "expense" ?
						(`PHP -${new Intl.NumberFormat().format(Number(tx.amount))}`) :
						(`PHP ${new Intl.NumberFormat().format(Number(tx.amount))}`)
					}
				</Typography>
			</FlexAlignCenter>
		</>
	);
}

export function TransactionCardContainer({ children }) {
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

export default TransactionCard;