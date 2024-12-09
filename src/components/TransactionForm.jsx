// React hooks
import { useState } from "react";

// External libraries
import dayjs from "dayjs";

// MUI components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Modal from "@mui/material/Modal";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

// Custom components
import FormDatePicker from "./FormDatePicker";
import Select from "./Select";
import StyledTransactionForm from "./StyledComponents/StyledTransactionForm";

// Data
import { types, accounts } from "../data/mockData";

function TransactionForm({ openModal, handleCloseModal }) {
	const [formValues, setFormValues] = useState({
		type: "income",
		date: new Date(),
		memo: "",
		from: "",
		account: "cash",
		amount: "",
	});

	const handleValuesChange = (e) => {
		let { target: { name, value } } = e;
		setFormValues(prev => ({ ...prev, [name]: value }));
	}

	const handleOnSubmit = (e) => {
		e.preventDefault();
		console.log(formValues)
	}

	return (
		<Modal
			open={openModal}
			onClose={handleCloseModal}
			aria-labelledby="modal-modal-transaction-form"
			aria-describedby="modal-modal-description"
		>
			<StyledTransactionForm>
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
