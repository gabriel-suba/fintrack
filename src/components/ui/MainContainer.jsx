import Box from "@mui/material/Box";

function MainContainer({ children }) {
    return (
        <Box sx={{ padding: "3.55rem 0.5rem 0.5rem" }}>
            {children}
        </Box>
    )
}

export default MainContainer;