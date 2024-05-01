import React from "react";
import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import { userAuthentication } from "../../hooks/userAuthentication";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [error, setError] = useState("");

    const { login, error: authError, loading } = userAuthentication();
    const navigate = useNavigate();

    const handlerSubmit = async (e) => {
        e.preventDefault()
        const user = {
            email,
            password
        }
        const res = await login(user);

        console.table(res)
        navigate("/")
    }

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError]);
    return (
        <div className={styles.login}>
            <h1>Entrar no Blogdev</h1>
            <p>Entre e comece a compartilhar</p>
            <form onSubmit={handlerSubmit}>
                <label>
                    <span>Email</span>
                    <input
                        type="email"
                        name="email"
                        required value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Digite seu e-mail"
                    />
                </label>
                <label>
                    <span>Senha</span>
                    <input
                    type="password"
                    name="password"
                    required value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                    />
                </label>
                {!loading && <button className="btn">Login</button>}
                {loading && <button className="btn" disabled>Aguarde</button>}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )   
}

export default Login