import { useState } from "react"
import { appAuth } from "../firebase/config";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useAuthContext } from "./useAuthContext";


export const useLogin = () => {

    // 에러 정보를 저장합니다.
    const [error, setError] = useState(null);
    // 서버와의 통신상태를 저장합니다.
    const [isPending, setIsPending] = useState(false);

    const { dispatch } = useAuthContext();

    const login = (email, password) => {
        setError(null);
        setIsPending(true);

        signInWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in
                setError(null);
                setIsPending(false);
                const user = userCredential.user;
                dispatch({ type: 'login', payload: user });
                console.log(user);
                if (!user) {
                    throw new Error('회원가입이 실패했습니다.');
                }

            })
            .catch((error) => {
                setError(error.message);
                setIsPending(false);
                console.log(error.message);
            });
    }

    return { error, isPending, login }
}