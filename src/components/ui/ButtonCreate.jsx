import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";

function ButtonCreate({ handleOpenModal }) {
	return (
		<Box sx={{ width: "min-content", marginLeft: "auto", padding: "0.5rem 0 0", fontSize: "0.75rem" }}>
			<Button
				size="small"
				variant="outlined"
				startIcon={<PostAddOutlinedIcon />}
				color="inherit"
				onClick={handleOpenModal}
			>
				<Typography fontSize="0.rem">new</Typography>
			</Button>
		</Box>
	);
}

export default ButtonCreate;
