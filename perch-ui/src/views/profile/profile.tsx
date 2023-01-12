import React, { useCallback, useEffect, useState } from "react";
import { Container, ProfileInfo, ProfileText, ProfileCard } from "./profile.styles";
import { currentUserStart } from "../../redux/user/user.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectAuthLoading, selectCurrentToken } from "../../redux/auth/auth.selector";
import { useNavigate } from "react-router-dom";
import { ROUTE_HOME_DEFAULT } from "../../constants";
import { signOutStart } from "../../redux/auth/auth.action";
import { ButtonStyledPrimary } from "../../components/button/button.styles";
import { MailOutlined } from "@ant-design/icons";
import Avatar from "boring-avatars";
import { PROFILE_COLOR_1, PROFILE_COLOR_2, PROFILE_COLOR_3, PROFILE_COLOR_4, PROFILE_COLOR_5 } from "../../constants/colors/profile.constants";

const Profile = () => {
    const [logoutRequest, setLogoutRequest] = useState(false);

    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const token = useSelector(selectCurrentToken);
    const loading = useSelector(selectAuthLoading);

    useEffect(() => {
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
            <ProfileCard>
                <Avatar
                    size={120}
                    name={user?.username}
                    variant="beam"
                    colors={[PROFILE_COLOR_1, PROFILE_COLOR_2, PROFILE_COLOR_3, PROFILE_COLOR_4, PROFILE_COLOR_5]}
                />
                <h1> {user?.username} </h1>
                <ProfileInfo>
                    {
                        user ?
                            <ProfileText> <MailOutlined style={{ padding: '.25em' }} /> {user?.email} </ProfileText>
                            : <ProfileText>No user found</ProfileText>
                    }
                </ProfileInfo>
            </ProfileCard>
            <ButtonStyledPrimary type="primary" size="large" onClick={onRequest} loading={loading}>
                Sign Out
            </ButtonStyledPrimary>
        </Container>
    )
}

export default Profile;
