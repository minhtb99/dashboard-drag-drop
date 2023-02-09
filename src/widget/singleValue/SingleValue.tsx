import { Typography } from "@mui/material"
import styled from "styled-components"


interface Props {
    name: string
    value: number | string
}

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const CurrentValueContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`


const SingleValue = ({ value, name }: Props) => {

    return (
        <Container>
            <Typography sx={{ textAlign: "center" }}>
                {name}
            </Typography>
            <Typography sx={{ fontSize: "36px" ,height:"calc(100% - 24px)"}}>
                <CurrentValueContainer>
                    {value}
                </CurrentValueContainer>
            </Typography>
        </Container>
    )
}

export default SingleValue