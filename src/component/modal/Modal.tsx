import { Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import { ReactNode } from 'react';
import { ModalBody, ModalFooter, ModalHeader, ModalStyle, styleBox, styleButton } from "./ModalStyle";

interface Props {
    headerTitle?: string,
    open: boolean,
    body: ReactNode | string,
    justOk?: boolean,
    justClose?: boolean,
    handleClose?: () => void,
    handleOke?: () => void,

}

const ModalComponent = ({ headerTitle, open, body, justOk, justClose, handleClose, handleOke }: Props) => {
    const footerRender = () => {
        if (justOk) {
            return (
                <Button sx={styleButton} variant="contained" onClick={handleOke}>OK</Button>
            )
        } else if (justClose) {
            return (
                <Button sx={styleButton} variant="outlined" onClick={handleClose}>Cancle</Button>
            )
        } else {
            return (
                <Stack
                    spacing={2}
                    direction="row"
                    justifyContent="center"
                    marginTop="6px"
                    marginBottom="6px"
                >
                    <Button sx={styleButton} variant="contained" onClick={handleOke}>OK</Button>
                    <Button sx={styleButton} variant="outlined" onClick={handleClose}>Cancle</Button>
                </Stack>
            )
        }

    }

    return (
        <ModalStyle>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
            >
                <Fade in={open}>
                    <Box sx={styleBox}>
                        {headerTitle && <ModalHeader>{headerTitle}</ModalHeader>}
                        {body && <ModalBody>{body}</ModalBody>}
                        {<ModalFooter>
                            {footerRender()}
                        </ModalFooter>}
                    </Box>
                </Fade>
            </Modal>
        </ModalStyle>
    )
}

export default ModalComponent