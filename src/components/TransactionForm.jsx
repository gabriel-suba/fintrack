import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

function TransactionForm({ openModal, handleCloseModal }) {
	return (
		<Modal
			open={openModal}
			onClose={handleCloseModal}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Typography id="modal-modal-title" variant="h6" component="h2">
					Transaction Form
				</Typography>
				<Typography id="modal-modal-description" sx={{ mt: 2 }}>
					Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
				</Typography>
			</Box>
		</Modal>
	);
}

export default TransactionForm;