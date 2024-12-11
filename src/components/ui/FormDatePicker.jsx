import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function FormDatePicker({ value, handleOnChange }) {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DatePicker
				value={value}
				onChange={(newValue) => handleOnChange({ target: { name: "date", value: newValue.format("YYYY/MM/DD") } })}
				format="YYYY/MM/DD"
				label="Transaction Date"
				slotProps={{
					textField: {
						fullWidth: true,
						margin: "dense",
					},
				}}
			/>
		</LocalizationProvider>
	);
}

export default FormDatePicker;
