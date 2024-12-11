import Modal from "@mui/material/Modal";
import StyledModalForm from "../StyledComponents/StyledModalForm";
import IconButton from "@mui/material/IconButton";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Typography from "@mui/material/Typography";

function FormModal({ children, ariaLabel, open, handleFormClose, title }) {
    return (
        <Modal
			open={open}
			aria-labelledby={`modal-${ariaLabel}`}
		>
            <StyledModalForm>
                <IconButton onClick={handleFormClose} sx={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
					<CloseOutlinedIcon />
				</IconButton>
                <Typography component="h1" marginBottom="1rem" fontSize="1.5rem" fontWeight="bold">{title}</Typography>
                {children}
            </StyledModalForm>
        </Modal>
    )
}

export default FormModal;