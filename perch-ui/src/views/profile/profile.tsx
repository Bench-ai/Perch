import React, {useEffect} from "react";
import { CardMainFocus } from "../../components/card/card.styles";
import { Container } from "./profile.styles";
import {currentUserStart} from "../../redux/user/user.action";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUser} from "../../redux/user/user.selector";

const Profile = () => {
    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    useEffect(  () => {
        dispatch(currentUserStart());
    }, [dispatch])

    return (
        <Container>
            <CardMainFocus>
                {
                    user ?
                        <h1>Hello {user?.username}, we have {user?.email} as your email.</h1>
                        : <h1>No user found</h1>
                }
            </CardMainFocus>
        </Container>
    )
}

export default Profile;
