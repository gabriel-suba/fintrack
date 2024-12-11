import FormModal from "./ui/FormModal";

function AccountsForm({ openModal, handleCloseModal }) {
    const handleFormClose = () => {
        handleCloseModal();
    }

    return (
        <FormModal
            open={openModal}
            ariaLabel="accounts-form"
            handleFormClose={handleFormClose}
            title="New Transaction"
        >
            Hello!
        </FormModal>
    )
}

export default AccountsForm;