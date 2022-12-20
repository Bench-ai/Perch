import React, {useEffect, useState} from 'react';
import { Container } from './signup.styles';
import {Form, Input} from "antd";
import {LockOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
import {ButtonStyledPrimary, LinkStyledLarge} from "../../components/button/button.styles";
import {useNavigate} from "react-router-dom";
import {AlertSmall} from "../../components/alert/alert.styles";
import { CardMainFocus } from '../../components/card/card.styles';
import {ROUTE_AUTH_LOGIN, ROUTE_SERVICE_DASHBOARDS} from "../../constants";
import {SignupForm, SignupRequest} from "../../interfaces";
import {useDispatch, useSelector} from "react-redux";
import {signUpStart} from "../../redux/auth/auth.action";
import {selectAuthError, selectAuthLoading, selectCurrentToken} from "../../redux/auth/auth.selector";

const Signup = () => {
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector(selectCurrentToken);
    const loading = useSelector(selectAuthLoading);
    const signupError = useSelector(selectAuthError);

    useEffect(() => {
        if (token) navigate(ROUTE_SERVICE_DASHBOARDS);
        if (signupError) {
            setMessage("Username or email is already taken");
            setError(true);
        }
    }, [loading, token, signupError, navigate]);

    const checkForm = (signupForm: SignupForm): boolean => {
        const {username, password, confirmPassword} = signupForm;
        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
            setError(true);
            return false;
        }
        if (username.length < 3) {
            setMessage("Username must be more than 3 characters");
            setError(true);
            return false;
        }
        if (username.length > 30) {
            setMessage("Username must be less than 30 characters");
            setError(true);
            return false;
        }
        if (password.length < 6) {
            setMessage("Password must be more than 6 characters");
            setError(true);
            return false;
        }
        if (password.length > 60) {
            setMessage("Password must be less than 60 characters");
            setError(true);
            return false;
        }
        return true;
    }

    const onFinish = async (signupForm: SignupForm) => {
        const {username, email, password} = signupForm;
        if (checkForm(signupForm)) {
            const signupRequest: SignupRequest = {
                username: username,
                email: email,
                password: password
            }
            dispatch(signUpStart(signupRequest));
        }
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
                <h1>Welcome to Bench!</h1>
                <Form
                    name="signup_form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Username field is required' }]}
                    >
                        <Input prefix={<UserOutlined/>} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Email field is required' }]}
                    >
                        <Input prefix={<MailOutlined/>} placeholder="Email" type="email"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Password field is required' }]}
                    >
                        <Input.Password prefix={<LockOutlined/>} placeholder="Password"/>
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        rules={[{ required: true, message: 'Confirming password is required' }]}
                    >
                        <Input.Password prefix={<LockOutlined/>} placeholder="Confirm Password" />
                    </Form.Item>
                    <Form.Item>
                        <ButtonStyledPrimary type="primary" htmlType="submit" size="large" loading={loading}>
                            Sign Up
                        </ButtonStyledPrimary>
                    </Form.Item>
                </Form>
            </CardMainFocus>
            <LinkStyledLarge to={ROUTE_AUTH_LOGIN}>Already have an account? Sign in.</LinkStyledLarge>
        </Container>
    )
}

export default Signup;