// React hooks
import { useState, useContext } from "react";

// External libraries
import dayjs from "dayjs";

// MUI components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// Custom components
import FormDatePicker from "./ui/FormDatePicker";
import Select from "./ui/Select";
import StyledTransactionForm from "./StyledComponents/StyledTransactionForm";

// Context
import { TransactionContext } from "../services/context/TransactionContext";

// Data
import { accounts, types } from "../data/mockData";
const defaultData = {
	type: "income",
	date: new Date(),
	memo: "",
	from: "",
	account: "cash",
	amount: "",
}

function TransactionForm({ openModal, handleCloseModal }) {
	const [formValues, setFormValues] = useState(defaultData);
	const { transactions, setTransactions } = useContext(TransactionContext);

	const handleValuesChange = (e) => {
		let { target: { name, value } } = e;
		setFormValues(prev => ({ ...prev, [name]: value }));
	}

	const handleFormClose = () => {
		setFormValues(defaultData);
		handleCloseModal();
	}

	const handleOnSubmit = (e) => {
		e.preventDefault();

		const id = transactions.length + 1;
		const idWithLeadingZeros = id.toString().padStart(6, "0");
		const documentNumber = `TX${idWithLeadingZeros}`;

		setTransactions(prev => [...prev, { ...formValues, id: id, documentNumber: documentNumber }]);
		handleFormClose();
	}

	return (
		<Modal
			open={openModal}
			aria-labelledby="modal-modal-transaction-form"
			aria-describedby="modal-modal-description"
		>
			<StyledTransactionForm>
				<IconButton onClick={handleFormClose} sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
					<CloseOutlinedIcon />
				</IconButton>
				<Typography component="h1" marginBottom="1rem" fontSize="1.5rem" fontWeight="bold">New Transaction</Typography>
				<Box component="form" onSubmit={handleOnSubmit}>
					<Select name="type" value={formValues.type} options={types} handleOnChange={handleValuesChange} />
					<Select name="account" value={formValues.account} options={accounts} handleOnChange={handleValuesChange} />
					{
						formValues.type === "transfer" && 
						<Select name="from" value={formValues.from} options={accounts} handleOnChange={handleValuesChange} />
					}
					<FormDatePicker value={dayjs(formValues.date)} handleOnChange={handleValuesChange} />

					<FormControl fullWidth margin="dense">
						<InputLabel htmlFor="amount">Amount</InputLabel>
						<OutlinedInput
							inputMode="numeric"
							type="number"
							id="amount"
							name="amount"
							label="Amount"
							startAdornment={<InputAdornment position="start">&#8369;</InputAdornment>}
							value={formValues.amount}
							onChange={handleValuesChange}
						/>
					</FormControl>
					<TextField
						multiline
						id="textarea-memo"
						name="memo"
						label="Memo"
						value={formValues.memo}
						onChange={handleValuesChange}
						fullWidth
						margin="dense"
						minRows={2}
					/>
					<Button type="submit" variant="contained" sx={{ marginTop: "1rem" }}>Submit</Button>
				</Box>
			</StyledTransactionForm>
		</Modal>
	);
}

export default TransactionForm;
