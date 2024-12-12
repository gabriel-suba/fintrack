import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import dayjs from "dayjs";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import FormDatePicker from "./ui/FormDatePicker";
import FormModal from "./ui/FormModal";
import CustomInput from "./ui/CustomInput";
import CustomSelect from "./ui/CustomSelect";
import { accounts, types } from "../data/mockData";

const schema = yup.object({
	type: yup.string().required().label("Type"),
	account: yup.string().required().label("Account"),
	amount: yup.number().typeError("Amount must be a number").required().label("Amount"),
	memo: yup.string().max(50).label("Memo"),
	from: yup
		.string()
		.nullable()
		.when("type", {
			is: (value) => value?.toLowerCase() === "transfer",
			then: () => yup.string().required().label("Transfer"),
			otherwise: () => yup.string().default(""),
		}),
	date: yup.date().label("Date"),
});

function TransactionForm({ openModal, handleCloseModal }) {
	const [type, setType] = useState("");
	const {
		reset,
		setValue,
		register,
		control,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			type: "",
			account: "",
			from: "",
			date: new Date(),
		},
	});

	const handleFormClose = () => {
		reset();
		handleCloseModal();
	};
	const handleOnSubmit = (data) => {
		const rawDate = data.date;
		const payload = {
			...data,
			date: dayjs(rawDate).format("YYYY/MM/DD")
		}
		console.log(payload);
		handleFormClose();
	};
	const typeField = watch("type");

	useEffect(() => {
		if (typeField !== "transfer") {
			setValue("from", "");
		}
		
		setType(typeField);
	}, [typeField, setValue]);

	return (
		<FormModal open={openModal} ariaLabel="transaction-form" handleFormClose={handleFormClose} title="New Transaction">
			<Box component="form" onSubmit={handleSubmit(handleOnSubmit)}>
				<Controller
					name="type"
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<CustomSelect
							onBlur={onBlur}
							onChange={onChange}
							value={value}
							options={types}
							name="type"
							validationError={errors.type}
						/>
					)}
				/>
				<Controller
					name="account"
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<CustomSelect
							onBlur={onBlur}
							onChange={onChange}
							value={value}
							options={accounts}
							name="account"
							validationError={errors.account}
						/>
					)}
				/>
				{type === "transfer" && (
					<Controller
						name="from"
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<CustomSelect
								onBlur={onBlur}
								onChange={onChange}
								value={value}
								options={accounts}
								name="from"
								validationError={errors.from}
							/>
						)}
					/>
				)}
				<Controller
					name="date"
					control={control}
					render={({ field: { onChange, onBlur, value } }) => (
						<FormDatePicker onBlur={onBlur} onChange={onChange} value={dayjs(value)} />
					)}
				/>
				<CustomInput
					name="amount"
					validationError={errors.amount}
					register={register}
					type="number"
					id="amount"
					label="amount"
					startAdornment={<InputAdornment position="start">&#8369;</InputAdornment>}
				/>
				<CustomInput
					name="memo"
					validationError={errors.memo}
					register={register}
					type="text"
					id="memo"
					label="memo"
					multiline={true}
					minRows={2}
				/>
				<Button type="submit" variant="contained" sx={{ marginTop: "1rem" }}>
					Submit
				</Button>
			</Box>
		</FormModal>
	);
}

export default TransactionForm;
