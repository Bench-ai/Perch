import React, {useCallback, useEffect, useState} from "react";
import { CardMainFocus } from "../../components/card/card.styles";
import { Container } from "./profile.styles";
import {currentUserStart} from "../../redux/user/user.action";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUser} from "../../redux/user/user.selector";
import {selectAuthLoading, selectCurrentToken} from "../../redux/auth/auth.selector";
import {useNavigate} from "react-router-dom";
import {ROUTE_HOME_DEFAULT} from "../../constants";
import {signOutStart} from "../../redux/auth/auth.action";
import { ButtonStyledPrimary } from "../../components/button/button.styles";

const Profile = () => {
    const [logoutRequest, setLogoutRequest] = useState(false);

    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector(selectCurrentToken);
    const loading = useSelector(selectAuthLoading);

    useEffect(  () => {
        dispatch(currentUserStart());
    }, [dispatch]);

    const onSignOutComplete = useCallback(() => {
        if (token === null && logoutRequest) navigate(ROUTE_HOME_DEFAULT);
    }, [token, logoutRequest, navigate]);

    useEffect(() => {
        onSignOutComplete();
    }, [loading, onSignOutComplete]);

    const onRequest = () => {
        dispatch(signOutStart());
        setLogoutRequest(true);
    }

    return (
        <Container>
            <CardMainFocus>
                {
                    user ?
                        <h1>Hello {user?.username}, we have {user?.email} as your email.</h1>
                        : <h1>No user found</h1>
                }
                <ButtonStyledPrimary type="primary" size="large" onClick={onRequest} loading={loading}>
                    Sign Out
                </ButtonStyledPrimary>
            </CardMainFocus>
        </Container>
    )
}

export default Profile;
