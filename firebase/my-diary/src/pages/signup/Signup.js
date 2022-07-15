import styles from './Signup.module.css';
import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const { error, isPending, signup } = useSignup();


    const handleData = (event) => {
        if (event.target.type === "email") {
            setEmail(event.target.value);
        } else if (event.target.type === "password") {
            setPassword(event.target.value);
        } else if (event.target.type === "text") {
            setDisplayName(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email, password, displayName);
        signup(email, password, displayName);
    }

    return (
        <form className={styles.login_form} onSubmit={handleSubmit}>
            <fieldset>
                <legend>회원가입</legend>
                <label htmlFor="myEmail">email : </label>
                <input type="email" id="myEmail" required value={email} onChange={handleData}></input>

                <label htmlFor="myPassWord">password : </label>
                <input type="password" id="myPassWord" required value={password} onChange={handleData}></input>

                <label htmlFor="myNickName">닉네임 : </label>
                <input type="text" id="myNickName" required value={displayName} onChange={handleData}></input>

                <button type='submit' className={styles.btn}>회원가입</button>
            </fieldset>
        </form>
    )
}