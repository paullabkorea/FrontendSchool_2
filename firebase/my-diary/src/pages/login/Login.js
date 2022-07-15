import styles from './Login.module.css'
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, isPending, login } = useLogin();

    const handleData = (event) => {
        if (event.target.type === "email") {
            setEmail(event.target.value);
        } else if (event.target.type === "password") {
            setPassword(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password);
        login(email, password);
    }

    return (
        <form className={styles.login_form} onSubmit={handleSubmit}>
            <fieldset>
                <legend>로그인</legend>
                <label htmlFor="myEmail">email : </label>
                <input type="email" id="myEmail" required value={email} onChange={handleData}></input>

                <label htmlFor="myPassWord">password : </label>
                <input type="password" id="myPassWord" required value={password} onChange={handleData}></input>

                {!isPending && <button type='submit' className={styles.btn}>로그인</button>}
                {isPending && <strong>로그인이 진행중입니다...</strong>}
                {error && <strong>{error}</strong>}
            </fieldset>
        </form>
    )
}