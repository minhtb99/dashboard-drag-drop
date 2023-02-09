import { SxProps, Theme } from "@mui/material";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    background-color: #d9e6f1;
    padding: 10px 20%;
    justify-content: space-between;
`

export const LogoContainer = styled.div`
    width: 50px;
    height: 50px;
    text-align: center;  
    background-color: #1976d2;;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
`

export const IconContainer = styled.div`
    cursor: pointer;
`

export const iconStyle: SxProps<Theme> = {
    width: 50,
    height: 50
}