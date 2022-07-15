import { useState } from "react"
import { appAuth } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useAuthContext } from "./useAuthContext";


export const useSignup = () => {

    // 에러 정보를 저장합니다.
    const [error, setError] = useState(null);
    // 서버와의 통신상태를 저장합니다.
    const [isPending, setIsPending] = useState(false);

    const { dispatch } = useAuthContext();

    const signup = (email, password, displayName) => {
        setError(null);
        setIsPending(true);

        createUserWithEmailAndPassword(appAuth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                if (!user) {
                    throw new Error('회원가입이 실패했습니다.');
                }

                updateProfile(appAuth.currentUser, { displayName })
                    .then(() => {
                        setError(null);
                        setIsPending(false);
                        dispatch({ type: 'login', payload: user });
                    }).catch((error) => {
                        setError(error.message);
                        setIsPending(false);
                        console.log(error.message);
                    });
            })
            .catch((error) => {
                setError(error.message);
                setIsPending(false);
                console.log(error.message);
            });
    }

    return { error, isPending, signup }
}