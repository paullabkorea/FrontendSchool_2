import { createContext, useEffect, useReducer } from "react";
import { appAuth } from "../firebase/config";

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return { ...state, user: action.payload }
        case 'logout':
            return { ...state, user: null }
        case 'authIsReady':
            return { ...state, user: action.payload, isAuthReady: true }
        default:
            return state
    }
}

// context 객체를 구독할 컴포넌트의 묶음 범위를 정하는 함수입니다.
const AuthContextProvider = ({ children }) => {

    // authReducer : 리듀서 함수. state 업데이트합니다.
    // useReducer 두번쩨 인자 : state를 초기화합니다.
    // state: 우리가 관리할 대상
    // dispatch : authReducer 함수를 호출합니다. action 인자를 사용합니다.
    // action : authReducer 함수에서 사용할 수 있는 type, payload 값을 dispatch함수에 전달합니다. 
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        isAuthReady: false
    })

    useEffect(() => {
        const unsubscribe = appAuth.onAuthStateChanged(function (user) {
            dispatch({ type: 'authIsReady', payload: user });
        });
        return unsubscribe
    }, [])

    // prvider는 value를 통해서 값을 공유합니다. 
    // dispatch 함수를 전달하여 다른 훅이나 컴포넌트에서도 user state 값을 업데이트 할 수 있게 만들어 줍니다.
    console.log('유저의 상태 : ', state);
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )

}

export { AuthContext, authReducer, AuthContextProvider }