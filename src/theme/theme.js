import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: "#0d47a1",
		},
		secondary: {
			main: "#80cbc4",
			contrastText: "#004d40",
		},
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				root: {
					// padding: "16px",
					// borderRadius: "12px",
				},
			},
		},
		MuiButton: {
			defaultProps: {
				disableRipple: true,
				disableElevation: true,
			},
			styleOverrides: {
				root: {
					textTransform: "lowercase",
					fontSize: "1.125rem",
					// borderRadius: "1rem",
				},
			},
			variants: {},
		},
	},
});

export default theme;