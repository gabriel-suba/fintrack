import FormModal from "./ui/FormModal";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
	name: yup.string().required().label("Name"),
	shortName: yup.string().max(5).label("Short Name"),
});

function AccountsForm({ openModal, handleCloseModal }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: yupResolver(schema) });

	const handleFormClose = () => {
		reset();
		handleCloseModal();
	};

	const handleOnSubmit = (data) => {
		if (Object.keys(errors).length > 0) return;

		console.log(data);
	};

	return (
		<FormModal open={openModal} ariaLabel="accounts-form" handleFormClose={handleFormClose} title="New Account">
			<Box component="form" onSubmit={handleSubmit(handleOnSubmit)}>
				<Input name="name" id="account-name" label="Account Name" validationError={errors.name} register={register} />
				<Input
					name="shortName"
					id="short-name"
					label="Short Name"
					validationError={errors.shortName}
					register={register}
				/>
				<Button type="submit" variant="contained" sx={{ marginTop: "1rem" }}>
					Submit
				</Button>
			</Box>
		</FormModal>
	);
}

const Input = ({ name, id, label, validationError, register }) => {
	return (
		<FormControl fullWidth margin="dense" error={Boolean(validationError)}>
			<InputLabel htmlFor={id}>{label}</InputLabel>
			<OutlinedInput
				type="text"
				id={id}
				label={label}
				name={name}
				{...register(name)}
			/>
			{Boolean(validationError) && <FormHelperText>{validationError.message}</FormHelperText>}
		</FormControl>
	);
};

export default AccountsForm;
