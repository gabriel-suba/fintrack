import { useState } from "react";
import Box from "@mui/material/Box";
import Title from "../components/StyledComponents/Title";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardContainer from "../components/ui/CardContainer";
import MainContainer from "../components/ui/MainContainer";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Actions from "../components/ui/Actions";
import ButtonCreate from "../components/ui/ButtonCreate";
import { grey } from "@mui/material/colors";

const accounts = [
    { name: "BDO", total: 24_000, transactions: 18 },
    { name: "Seabank", total: 5_000, transactions: 3 },
    { name: "Cash", total: 34_000, transactions: 27 },
]

const accountActions = [
    { action: "Edit", color: "" },
	{ action: "Delete", color: "error" },
]

function Accounts({ handleOpenModal }) {
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
				console.log(`Updating`);
				break;
			case "Delete":
				console.log(`Failed to delete... Account has existing transactions.`);
				break;

			default:
				break;
		}
	};

	return (
		<>
			<Title>
				<Typography fontSize="1.125rem">Accounts</Typography>
			</Title>

            <MainContainer>
                <ButtonCreate handleOpenModal={handleOpenModal}/>

                {accounts.map(account => (
                    <CardContainer key={account.name}>
                        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
                            <Typography sx={{ alignSelf: "center", fontSize: "1rem", fontWeight: "bold" }} component="h2">{account.name}</Typography>
                            <Box sx={{ flex: 1 }}>
                                <Typography component="p" fontSize="1rem">&#x20B1; {account.total}</Typography>
                                <Typography component="p" fontSize="0.75rem" color={grey[500]}>{account.transactions} transactions</Typography>
                            </Box>
                            <IconButton onClick={handleClickActions} sx={{ justifySelf: "end" }}>
                                <MoreHorizOutlinedIcon />
                            </IconButton>
                            <Actions 
                                anchorEl={anchorEl}
                                handleCloseActions={handleCloseActions}
                                openAnchor={openAnchor}
                                list={accountActions}
                            />
                        </Box>
                    </CardContainer>
                ))}
            </MainContainer>
		</>
	);
}

export default Accounts;