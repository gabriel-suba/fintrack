import Menu from '@mui/material/Menu';
import MenuItem from "@mui/material/MenuItem";
import Typography from '@mui/material/Typography';

function Actions({ anchorEl, openAnchor, handleCloseActions, list }) {
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
			{list.map(item => (
				<MenuItem key={item.action} onClick={handleCloseActions}>
					<Typography fontSize="14px" color={item.color}>{item.action}</Typography>
				</MenuItem>
			))}
		</Menu>
	);
}

export default Actions;
