import React, { SyntheticEvent, useState}  from 'react'
import PasswordStrengthBar from "react-password-strength-bar";
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'


export const Register = (props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await fetch("http://localhost:5005/register", {
            method: "POST",
            body: {
                "username":name,
                "email":email,
                "password":password,
            },
        });
    };

    return (
        <div className={Register}>
            <main className="form-signin w-200 m-auto">
                <form className="register-form" onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 fw-normal">Registration</h1>
                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingInput"
                            placeholder="John Doe"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Username</label>
                    </div>
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
                        <PasswordStrengthBar password={password} />
                    </div>
                    <button
                        className="link-btn"
                        onClick={() => props.onFormSwitch('login')}>
                        Already have an account? Login here.</button>
                    <button
                        disabled={password.length<7 || email.length===0 || name.length===0}
                        className="w-100 btn mt-2 btn-lg btn-primary"
                        type="submit">Register</button>
                </form>
            </main>
        </div>
    )
}