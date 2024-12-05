import styled from "@mui/system/styled";
import grey from "@mui/material/colors/grey";
import Box from "@mui/material/Box";

const Title = styled(Box)(() => ({
	position: "fixed",
	zIndex: "1",
	width: "100%",
	height: "3.55rem",
	padding: "1rem 0.5rem",
	background: "white",
	borderBottom: `1px solid ${grey[300]}`,
}));

export default Title;