import React, { useState, useEffect } from "react";
import Axios from "axios";

function LogIn({ shop }) {
    // State-Hooks für Benutzername, Passwort, Login-Daten und Authentifizierungsstatus
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [logInData, setLogInData] = useState([]);
    const [authenticationStatus, setAuthenticationStatus] = useState(true);

    // Effekt-Hook zum Abrufen der Login-Daten beim Komponenten-Mount
    useEffect(() => {
        const fetchLogInData = async () => {
            try {
                const response = await Axios.get("http://localhost:3001/login");
                setLogInData(response.data);
            } catch (error) {
                console.error("Error fetching login data:", error);
            }
        };
        fetchLogInData();
    }, []);

    // Funktion zum Überprüfen der Anmeldedaten
    const checkLogin = () => {
        const checkData = logInData.find(content => content.username === userName.trim() && content.password === password.trim());

        if (checkData) shop();
        else {
            setAuthenticationStatus(false);
            setTimeout(() => setAuthenticationStatus(true), 3000);
        }

        resetState();
    };

    // Funktion zum Zurücksetzen von Benutzername und Passwort
    const resetState = () => {
        setUserName("");
        setPassword("");
    };

    return (
        <div className="mt-1 d-flex justify-content-center align-items-center h-100 loginBackground">
            <div className="row styleLogin d-flex justify-content-center align-items-center border rounded-3 shadow bg-body-tertiary">
                <h2 className="my-4 text-center">Anmelden</h2>
                {!authenticationStatus && (
                    <div className="alert alert-danger text-center w-75 mb-2">
                        Falsche Anmeldedaten. Bitte versuchen Sie es erneut.
                    </div>
                )}
                {/* Benutzername-Eingabefeld */}
                <div className="form-floating px-1 py-3 w-75">
                    <input
                        onChange={e => setUserName(e.target.value)}
                        value={userName}
                        type="text"
                        id="userName"
                        className="form-control"
                        placeholder="Benutzername"
                        autoComplete="off"
                    />
                    <label htmlFor="userName">Benutzername</label>
                </div>
                {/* Passwort-Eingabefeld */}
                <div className="form-floating px-2 py-3 w-75">
                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Passwort"
                        autoComplete="off"
                    />
                    <label htmlFor="password">Passwort</label>
                </div>
                {/* Anmelde-Button */}
                <button onClick={checkLogin} className="btn btn-primary w-50 my-4">
                    Anmelden
                </button>
            </div>
        </div>
    );
}

export default LogIn;
