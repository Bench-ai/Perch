import React, {useCallback, useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import { signInWithEmailStart } from '../../redux/auth/auth.action';
import {selectAuthError, selectAuthLoading, selectCurrentToken} from "../../redux/auth/auth.selector";

import {Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

import {ButtonStyledPrimary, LinkStyledLarge} from '../../components/button/button.styles';
import {CardMainFocus} from "../../components/card/card.styles";
import { AlertSmall } from '../../components/alert/alert.styles';

import {ROUTE_AUTH_SIGNUP, ROUTE_SERVICE_DASHBOARDS} from "../../constants";
import {Container} from "./login.styles";
import {LoginRequest} from "../../interfaces";

const Login = () => {
    const message = "Username or password is incorrect";
    const [error, setError] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const token = useSelector(selectCurrentToken);
    const loginError = useSelector(selectAuthError);
    const loading = useSelector(selectAuthLoading);

    const from = location.state?.from?.pathname || ROUTE_SERVICE_DASHBOARDS;

    const onSignInComplete = useCallback(() => {
        if (token) navigate(from, { replace: true });
        if (loginError) setError(true);
    }, [token, loginError, from, navigate]);

    useEffect(() => {
        onSignInComplete();
    }, [loading, onSignInComplete]);

    const onFinish = (loginRequest: LoginRequest) => {
        dispatch(signInWithEmailStart(loginRequest));
    }

    return (
        <Container>
            {
                error &&
                <AlertSmall
                    message={message}
                    type="error"
                    showIcon
                    closable={true}
                    afterClose={() => setError(false)}
                />
            }
            <CardMainFocus>
                <h1>Sign In to Bench</h1>
                <Form
                    name="login_form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Username field is required' }]}
                    >
                        <Input prefix={<UserOutlined/>} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Password field is required' }]}
                    >
                        <Input.Password prefix={<LockOutlined/>} placeholder="Password" />
                    </Form.Item>
                    <Form.Item>
                        <ButtonStyledPrimary type="primary" htmlType="submit" size="large" loading={loading}>
                            Login
                        </ButtonStyledPrimary>
                    </Form.Item>
                </Form>
            </CardMainFocus>
            <LinkStyledLarge to={ROUTE_AUTH_SIGNUP}>New to Bench? Create an account.</LinkStyledLarge>
        </Container>
    )
}

export default Login;
