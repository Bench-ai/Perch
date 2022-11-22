import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import BenchLogo from "../../assets/benchLogo.svg";

import {ROUTE_AUTH_LOGIN, ROUTE_HOME_ABOUT, ROUTE_HOME_DEFAULT} from "../../constants/router.constants";
import {ButtonStyled, Header, Image, LeftOptions, LinkStyled, RightOptions} from "./navbar.styles";


const NavBar = () => {
    const navigate = useNavigate();

    const navigateTo = (route: string) => {
        navigate(route);
    }

    useEffect(() => {

    }, [])

    return (
        <Header>
            <LeftOptions>
                <LinkStyled to={ROUTE_HOME_DEFAULT}>
                    <Image src={BenchLogo} alt="Bench Logo"/>
                </LinkStyled>
            </LeftOptions>
            <RightOptions>
                <ButtonStyled type="text" size="large" onClick={() => navigateTo(ROUTE_HOME_ABOUT)}>
                    About
                </ButtonStyled>
                <ButtonStyled type="primary" size="large" onClick={() => navigateTo(ROUTE_AUTH_LOGIN)}>
                    Login
                </ButtonStyled>
            </RightOptions>
        </Header>
    )
}

export default NavBar;
