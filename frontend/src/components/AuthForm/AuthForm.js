import React from "react";
import css from "./AuthForm.module.css"

const AuthForm = props => (
    <div className={css.AuthForm}>
        <form onSubmit={props.handlers.submit}>
            <div>
                <label htmlFor="login">Login</label>
                <input
                    id="login"
                    name="login"
                    type="text"
                    onChange={props.handlers.login}
                    value={props.payload.login} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={props.handlers.password}
                    value={props.payload.password} />
            </div>
            <div>
                <input type="submit" value="Continue" />
            </div>
        </form>
    </div>
);

export default AuthForm;
