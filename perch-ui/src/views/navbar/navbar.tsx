import React from "react";
import {useNavigate} from "react-router-dom";

import BenchLogo from "../../assets/benchLogo.svg";

import {
    Header,
    Image,
    LeftOptions,
    RightOptions
} from "./navbar.styles";
import {ButtonStyledDefault, ButtonStyledPrimary, LinkStyledLarge} from "../../components/button/button.styles";
import {
    ROUTE_AUTH_LOGIN,
    ROUTE_AUTH_SIGNUP,
    ROUTE_HOME_DEFAULT,
    ROUTE_SERVICE_DASHBOARDS,
    ROUTE_SERVICE_PROFILE
} from "../../constants";


const NavBar = () => {
    const token = localStorage.getItem('token');
    const navigate = useNavigate();


    return (
        <Header>
            <LeftOptions>
                <LinkStyledLarge to={ROUTE_HOME_DEFAULT}>
                    <Image src={BenchLogo} alt="Bench Logo"/>
                </LinkStyledLarge>
            </LeftOptions>
            <RightOptions>
                {
                    token ?
                        <>
                            <ButtonStyledDefault type="text" size="large" onClick={() => navigate(ROUTE_SERVICE_DASHBOARDS)}>
                                Dashboards
                            </ButtonStyledDefault>
                            <ButtonStyledPrimary type="primary" size="large" onClick={() => navigate(ROUTE_SERVICE_PROFILE)}>
                                Profile
                            </ButtonStyledPrimary>
                        </>
                        :
                        <>
                            <ButtonStyledDefault type="text" size="large" onClick={() => navigate(ROUTE_AUTH_LOGIN)}>
                                Sign In
                            </ButtonStyledDefault>
                            <ButtonStyledPrimary type="primary" size="large" onClick={() => navigate(ROUTE_AUTH_SIGNUP)}>
                                Sign Up
                            </ButtonStyledPrimary>
                        </>
                }
            </RightOptions>
        </Header>
    )
}

export default NavBar;
