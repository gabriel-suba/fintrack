import Menu from '@mui/material/Menu';
import MenuItem from "@mui/material/MenuItem";
import Typography from '@mui/material/Typography';

function Actions({ anchorEl, openAnchor, handleCloseActions }) {
	return (
		<Menu
			id="basic-menu"
			anchorEl={anchorEl}
			open={openAnchor}
			onClose={handleCloseActions}
			MenuListProps={{
				"aria-labelledby": "basic-button",
			}}
		>
			<MenuItem onClick={handleCloseActions}>
				<Typography fontSize="14px">Edit</Typography>
			</MenuItem>
			<MenuItem onClick={handleCloseActions} >
				<Typography fontSize="14px" color="error">
					Delete
				</Typography>
			</MenuItem>
		</Menu>
	);
}

export default Actions;
