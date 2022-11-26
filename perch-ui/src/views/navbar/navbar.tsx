import React from "react";
import {useNavigate} from "react-router-dom";

import BenchLogo from "../../assets/benchLogo.svg";

import {ROUTE_AUTH_LOGIN, ROUTE_HOME_ABOUT, ROUTE_HOME_DEFAULT} from "../../constants/router.constants";
import {
    Header,
    Image,
    LeftOptions,
    RightOptions
} from "./navbar.styles";
import {ButtonStyledDefault, ButtonStyledPrimary, LinkStyledLarge} from "../../components/button/button.styles";


const NavBar = () => {
    const navigate = useNavigate();

    const navigateTo = (route: string) => {
        navigate(route);
    }

    return (
        <Header>
            <LeftOptions>
                <LinkStyledLarge to={ROUTE_HOME_DEFAULT}>
                    <Image src={BenchLogo} alt="Bench Logo"/>
                </LinkStyledLarge>
            </LeftOptions>
            <RightOptions>
                <ButtonStyledDefault type="text" size="large" onClick={() => navigateTo(ROUTE_HOME_ABOUT)}>
                    About
                </ButtonStyledDefault>
                <ButtonStyledPrimary type="primary" size="large" onClick={() => navigateTo(ROUTE_AUTH_LOGIN)}>
                    Login
                </ButtonStyledPrimary>
            </RightOptions>
        </Header>
    )
}

export default NavBar;
