import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import styled from "styled-components";

export const ModalStyle = styled.div`
`

export const ModalHeader = styled.div`
    height: 36px;
    font-size: 20px;
    text-align: center;
    background-color: #1976d2;
    color:#fff;
    border-bottom: 1px solid #ccc;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

export const ModalBody = styled.div`
    min-height: 100px;
`

export const ModalFooter = styled.div`
    font-size: 20px;
    text-align: center;
    color:#fff;
    border-top: 1px solid #ccc;
`

export const styleBox: SxProps<Theme> = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    bgcolor: 'background.paper',
    border: '1px solid #ccc',
    boxShadow: 24,
    "&::focus-visible": {
        outline: "none"
    },
    borderRadius: "5px"
};

export const styleButton: SxProps<Theme> = {
    height: 32
};