import React, { useState, useEffect } from "react";
import Axios from "axios";

function LogIn(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [logInData, setLogInData] = useState([]);
    const [authenticationStatus, setAuthenticationStatus] = useState(true);

    useEffect(() => {
        const login = async () => {
            try {
                const response = await Axios.get("http://localhost:3001/login");
                setLogInData(response.data);
            } catch (error) {
                console.error("Error fetching customer data:", error);
            }
        };
        login();
    }, [logInData]);

    const checkLogin = () => {
        const checkData = logInData.find(content => content.username === userName.trim() && content.password === password.trim());
        if (checkData) {
            props.logIn();
        } else {
            setAuthenticationStatus(false);
            setTimeout(() => {
                setAuthenticationStatus(true);
            }, 3000);
        }
        resetState();
    }

    const resetState = () => {
        setUserName("");
        setPassword("");
    }

    return (
        <div className="mt-1 d-flex justify-content-center align-items-center h-100 loginBackground">
            <div className="row styleLogin d-flex justify-content-center align-items-center border rounded-3 shadow bg-body-tertiary">
                <h2 className="my-4 text-center">Anmelden</h2>
                {!authenticationStatus && <div className="alert alert-danger text-center w-75 mb-2">Falsche Anmeldedaten. Bitte versuchen Sie es erneut.</div>}
                <div className="form-floating px-1 py-3 w-75">
                    <input
                        onChange={e => setUserName(e.target.value)}
                        value={userName}
                        type="text"
                        id="userName"
                        className="form-control"
                        placeholder="User name"
                        autoComplete="off"
                    />
                    <label htmlFor="userName">Benutzername</label>
                </div>
                <div className="form-floating px-2 py-3 w-75">
                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="password"
                        autoComplete="off"
                    />
                    <label htmlFor="userName">Passwort</label>
                </div>
                <button onClick={checkLogin} className="btn btn-primary w-50 my-4">Anmelden</button>
            </div>
        </div>
    )
}

export default LogIn;