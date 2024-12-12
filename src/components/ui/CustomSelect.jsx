import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";

function CustomSelect({ name, value, options, onBlur, onChange, validationError }) {
	return (
		<FormControl fullWidth margin="dense" error={Boolean(validationError)}>
			<InputLabel id={name} sx={{ textTransform: "capitalize" }}>{name}</InputLabel>
			<Select
				labelId={name}
				id={name}
				value={value}
				label={name}
				onChange={onChange}
        		onBlur={onBlur}
			>
				{options && options.map((option) => (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			))}
			</Select>
			{Boolean(validationError) && <FormHelperText>{validationError.message}</FormHelperText>}
		</FormControl>
	);
}

export default CustomSelect;
