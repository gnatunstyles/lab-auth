import React, { SyntheticEvent, useState}  from 'react'
import {Navigate} from "react-router-dom";

export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = React.useState("");

    let authenticated;
    const submit = async (e) => {
        e.preventDefault();
     const resp =  await fetch("http://localhost:5005/login", {
            method: "POST",
            body: {
                "email": email,
                "password":password,
            },
        });
    };

    return (
        <div className={Login}>
            <main className="form-signin w-100 m-auto">
                <form className="login-form" onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Authentication</h1>
                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingInput"
                            placeholder="name@example.com"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating mb-2">
                        <input
                            type="password"
                            className="form-control"
                            id="floatingPassword"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button
                        className="link-btn"
                        onClick={() => props.onFormSwitch('register')}>
                        Do not have an account? Register here.</button>
                    <button
                        disabled={password.length === 0 || email.length === 0}
                        className="w-100 btn btn-lg mt-2 btn-primary"
                        type="submit">Log in</button>
                </form>
            </main>
        </div>
    )
}