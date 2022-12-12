import { Button, Modal, Paper } from "@mui/material";
import { Box } from "@mui/system"
import { useState } from "react";

const PokemonModal = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box>
            <Button onClick={handleOpen}
            variant="outlined"
            >{props.textButton}</Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Paper sx={{m:5, p:5,borderRadius: 4,overflow: "scroll",height: "80vh", }} >
                   {props.children}
                </Paper>
            </Modal>
        </Box>
    )
}

export default PokemonModal;