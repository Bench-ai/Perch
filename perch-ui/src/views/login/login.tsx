import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

import {Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

import {ButtonStyledPrimary, LinkStyledLarge} from '../../components/button/button.styles';
import {CardMainFocus} from "../../components/card/card.styles";
import { AlertSmall } from '../../components/alert/alert.styles';

import {login} from "../../api/auth/auth.api";

import {isApiError, isTokenResponse, LoginRequest} from '../../interfaces/api.interface';
import {ROUTE_AUTH_SIGNUP, ROUTE_SERVICE_DASHBOARDS} from "../../constants/router.constants";
import {Container} from "./login.styles";

const Login = () => {
    const [loginError, setLoginError] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const onFinish = async (loginRequest: LoginRequest) => {
        setLoading(true);
        const response = await login(loginRequest);
        if (isTokenResponse(response)) {
            navigate(ROUTE_SERVICE_DASHBOARDS);
            setLoginError(false);
        } else if (isApiError(response)) {
            setMessage(response.message);
            setLoginError(true);
        }
        setLoading(false);
        return response;
    }

    return (
        <Container>
            {
                loginError &&
                <AlertSmall
                    message={message}
                    type="error"
                    showIcon
                    closable={true}
                    afterClose={() => setLoginError(false)}
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
