import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

function CustomInput({ name, validationError, register, ...props }) {
	return (
		<FormControl fullWidth margin="dense" error={Boolean(validationError)}>
			<InputLabel htmlFor={name} sx={{ textTransform: "capitalize" }}>
				{name}
			</InputLabel>
			<OutlinedInput name={name} {...props} {...register(name)} />
			{Boolean(validationError) && <FormHelperText>{validationError.message}</FormHelperText>}
		</FormControl>
	);
}

export default CustomInput;