import styled from "styled-components";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";
import { Avatar, Box, Container } from "@mui/material";
import { pxToRem } from "@/utils";

const StyleHeader = styled.header`
    background-color: url(/${(props) => props.theme.appBackground});
    border-bottom: ${pxToRem(1)} solid ${(props) => props.theme.appDefautStroke};
    margin-bottom: ${pxToRem(37)};
    width: 100%;
`
function Header() {
    return (
        <StyleHeader>
            <Container maxWidth='lg'>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'space-between',
                        height: pxToRem(64)
                    }}
                >
                    <Link to="/home">
                        <Logo height={30} width={73} />
                    </Link>
                    <Link to="/perfil">
                        <Avatar alt="DNC Avatar" src="/dnc-avatar.svg" sx={{width: pxToRem(40), height:(40)}} />
                    </Link>
                </Box>
            </Container>
        </StyleHeader>
    )
}
export default Header