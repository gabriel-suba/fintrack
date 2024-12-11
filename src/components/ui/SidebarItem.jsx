import Box from "@mui/material/Box";
import grey from "@mui/material/colors/grey";
import Typography from "@mui/material/Typography";
import RowItemBase from "../StyledComponents/RowItemBase";

function SidebarItem({ Icon, text, open, handleOnClick, isActive }) {
    return (
		<RowItemBase
			bgcolor={isActive ? grey[100] : grey[0]}
			onClick={handleOnClick}
			data-tab={text}
		>
			<Box padding="0.5rem" display="flex" alignItems="center">
				{Icon && <Icon sx={{ width: "1.5rem", height: "1.5rem" }} />}
			</Box>
			<Typography
				component="p"
				fontSize="16px"
				paddingBlock="0.5rem"
				sx={{ width: `${open ? "12.5rem" : "0"}`, transition: "width 250ms ease", overflow: "hidden" }}
			>
				{text}
			</Typography>
		</RowItemBase>
	);
}

export default SidebarItem;