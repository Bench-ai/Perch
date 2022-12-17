import React, {useEffect, useState} from "react";
import { CardMainFocus } from "../../components/card/card.styles";
import { Container } from "./profile.styles";
import {currentUser} from "../../api/user/user.api";
import {isUser, User} from "../../interfaces";

const Profile = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(  () => {
        getCurrentUser();
    }, [])

    const getCurrentUser = async () => {
        const response = await currentUser();
        if(isUser(response)) setUser(response);
    }

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
