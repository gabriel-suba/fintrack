import Box from "@mui/material/Box";
import Title from "../StyledComponents/Title";
import Typography from "@mui/material/Typography";


function Dashboard() {
	return (
		<>
			<Title>
				<Typography fontSize="1.125rem">Dashboard</Typography>
			</Title>

			<Box sx={{ padding: "3.55rem 0.5rem 0.5rem" }}>
				<Typography>let&lsquo;s go!!!!!!</Typography>
			</Box>
		</>
	);
}

export default Dashboard;