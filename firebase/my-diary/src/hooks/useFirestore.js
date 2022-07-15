import { addDoc, collection, deleteDoc, doc } from "firebase/firestore"
import { useReducer } from "react"
import { appFireStore, timeStamp } from "../firebase/config"

// document : 파이어스토어에서 document 생성을 요청하면 우리가 생성한 document를 반환합니다. 
// isPending : 통신이 이루어지고 있는 상태
// success : 요청에 대한 응답의 성공 유무
const initState = {
    document: null,
    isPending: false,
    error: null,
    success: false
}

const storeReducer = (state, action) => {
    switch (action.type) {
        case 'isPending':
            return { isPending: true, document: null, success: false, error: null }
        case 'addDoc':
            return { isPending: false, document: action.payload, success: true, error: null }
        case 'error':
            return { isPending: false, document: null, success: false, error: action.payload }
        case 'deleteDoc':
            return { isPending: false, document: action.payload, success: true, error: null }
        default:
            return state
    }
}

export const useFirestore = (transaction) => {

    const [response, dispatch] = useReducer(storeReducer, initState);

    // colRef : 우리가 만들 컬랙션의 참조입니다. 우리가 따로 컬랙션을 만들지는 않지만, 원하는 컬랙션의 참조를 요구하기만 해도 자동으로 해당 컬랙션을 생성해줍니다.
    const colRef = collection(appFireStore, transaction);

    // 컬랙션에 문서를 추가합니다.
    const addDocument = async (doc) => {
        dispatch({ type: "isPending" });

        try {
            const createdTime = timeStamp.fromDate(new Date());

            // docRef : 우리가 만들 문서의 참조입니다.
            // addDoc : 컬랙션에 문서를 추가합니다.
            const docRef = await addDoc(colRef, { ...doc, createdTime });
            dispatch({ type: "addDoc", payload: docRef });

        } catch (error) {
            dispatch({ type: "error", payload: error.message });
        }
    }

    // 컬랙션에서 문서를 제거합니다.
    const deleteDocument = async (id) => {
        dispatch({ type: "isPending" });

        try {
            const docRef = await deleteDoc(doc(colRef, id));
            dispatch({ type: "deleteDoc", payload: docRef });
        } catch (error) {
            dispatch({ type: 'error', payload: error.message })
        }
    }

    return { response, addDocument, deleteDocument }

}