import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

function Select({ name, value, handleOnChange, options }) {
	return (
		<TextField
			select
			id={name}
			name={name}
			label={name}
			value={value}
			onChange={handleOnChange}
			sx={{ "& > label": { textTransform: "capitalize" } }}
			fullWidth
			margin="dense"
		>
			{options.map((option) => (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			))}
		</TextField>
	);
}

export default Select;
