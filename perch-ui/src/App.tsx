import {useState} from 'react';
import {Routes, Route} from "react-router";

import {AppContainer} from "./App.styles";
import {signup} from "./api/auth/auth.api";

const App = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({userId: "", accessToken: "", refreshToken: ""});

    const onUsernameChange = (e: any) => {
        setUsername(e.target.value);
    }

    const onEmailChange = (e: any) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e: any) => {
        setPassword(e.target.value);
    }

    const onSubmit = async () => {
        const registeredUser = await signup(username, email, password);
        console.log(registeredUser);
        setUser(registeredUser);
    }

    const {userId, accessToken, refreshToken} = user;

    return (
        <AppContainer>
            <code> Hello World! </code>
            <div>
                <input
                    name="username"
                    type="text"
                    value={username}
                    onChange={onUsernameChange}
                />
                <input
                    name="email"
                    type="text"
                    value={email}
                    onChange={onEmailChange}
                />
                <input
                    name="password"
                    type="password"
                    value={password}
                    onChange={onPasswordChange}
                />
                <button onClick={onSubmit}>Sign Up</button>
            </div>
            <div>
                {`${userId} with at ${accessToken} with rt ${refreshToken}`}
            </div>
            {/*<Routes>*/}
            {/*</Routes>*/}
        </AppContainer>
    );
}

export default App;
