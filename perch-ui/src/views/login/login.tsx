import React from 'react';

import {Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {login, LoginRequest} from "../../api/auth/auth.api";

import {ROUTE_AUTH_SIGNUP} from "../../constants/router.constants";
import {ButtonStyledPrimary, LinkStyledLarge} from '../../components/button/button.styles';
import {CardMainFocus} from "../../components/card/card.styles";
import {Container} from "./login.styles";


const Login = () => {
    const onFinish = async (loginRequest: LoginRequest) => {
        const response = await login(loginRequest);
        console.log(response);
    }
    return (
        <Container>
            <CardMainFocus>
                <h1>Login</h1>
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
                        <ButtonStyledPrimary type="primary" htmlType="submit" size="large">
                            Log in
                        </ButtonStyledPrimary>
                    </Form.Item>
                </Form>
            </CardMainFocus>
            <LinkStyledLarge to={ROUTE_AUTH_SIGNUP}>Don't have an account? Signup</LinkStyledLarge>
        </Container>
    )
}

export default Login;
