import React from 'react';
import { Container, Image } from './home.styles';
import BenchLogoBig from "../../assets/bench.svg";
import { ButtonStyledDefault, ButtonStyledPrimary } from "../../components/button/button.styles";
import { ROUTE_AUTH_SIGNUP, ROUTE_HOME_ABOUT } from "../../constants";
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Image src={BenchLogoBig} alt="Bench Logo" />
            <h3> Your Personal ML Test Bench.</h3>
            <ButtonStyledDefault type="text" size="large" onClick={() => navigate(ROUTE_HOME_ABOUT)}>Learn More</ButtonStyledDefault>
            <ButtonStyledPrimary type="primary" size="large" onClick={() => navigate(ROUTE_AUTH_SIGNUP)}>Get Started</ButtonStyledPrimary>
        </Container>
    )
}

export default Home;
