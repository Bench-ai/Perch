import React from "react";
import { Result } from "antd";
import { ButtonStyledPrimary } from "../../components/button/button.styles";
import { useNavigate } from "react-router-dom";
import {ROUTE_AUTH_LOGIN, ROUTE_HOME_DEFAULT} from "../../constants";

export const Error404 = () => {
    const navigate = useNavigate();

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<ButtonStyledPrimary
                type="primary"
                size="large"
                onClick={() => navigate(ROUTE_HOME_DEFAULT)}
            >
                Back Home
            </ButtonStyledPrimary>}
        />
    )
}

export const Error401 = () => {
    const navigate = useNavigate();

    return (
        <Result
            status="403"
            title="401"
            subTitle="Please sign into your account to access this page."
            extra={<ButtonStyledPrimary
                type="primary"
                size="large"
                onClick={() => navigate(ROUTE_AUTH_LOGIN)}
            >
                Sign In
            </ButtonStyledPrimary>}
        />
    )
}

export const Error403 = () => {
    const navigate = useNavigate();

    return (
        <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<ButtonStyledPrimary
                type="primary"
                size="large"
                onClick={() => navigate(ROUTE_HOME_DEFAULT)}
            >
                Back Home
            </ButtonStyledPrimary>}
        />
    )
}
