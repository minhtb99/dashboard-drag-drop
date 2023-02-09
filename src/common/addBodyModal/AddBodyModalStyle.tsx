import { SxProps, Theme } from "@mui/material";
import styled from "styled-components";

export const styleBox: SxProps<Theme> = {
    padding: "12px",
}

export const styleBoxWidgetType: SxProps<Theme> = {
    "& .MuiFormGroup-root": {
        justifyContent: "left",
        marginLeft: "4px"
    },
    marginTop: "10px"

}

export const styleInputField: SxProps<Theme> = {
    width: "100%",
    marginLeft: "4px"
}

export const FormContainer = styled.div`
    
`