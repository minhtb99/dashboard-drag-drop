import { SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import styled from "styled-components";

export const DashboardContainer = styled.div`
`

export const DashboardBody = styled.div`
    padding-top: 74px;
`

export const AddButton = styled.div`
    position: fixed;
    right: 60px;
    bottom: 60px;
    color: white;
    background-color: #1976d2;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const addButtonStyle: SxProps<Theme> = {
    width: 50,
    height: 50,
}