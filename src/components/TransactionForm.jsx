import { useState, useContext } from "react";
import dayjs from "dayjs";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import FormDatePicker from "./ui/FormDatePicker";
import Select from "./ui/Select";
import FormModal from "./ui/FormModal";
import { TransactionContext } from "../services/context/TransactionContext";
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
		<FormModal
			open={openModal}
			ariaLabel="transaction-form"
			handleFormClose={handleFormClose}
			title="New Transaction"
		>
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
		</FormModal>
	);
}

export default TransactionForm;
