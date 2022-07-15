import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react"
import { appFireStore } from "../firebase/config";

export const useCollection = (transaction, myQuery) => {

    const [documents, setDocument] = useState(null);
    const [error, setError] = useState(null);

    // onSnapshot 함수는 가장 최신의 컬랙션의 모습을 반환하는 함수입니다. 
    useEffect(() => {

        let q;
        if (myQuery) {
            q = query(collection(appFireStore, transaction), where(...myQuery), orderBy("createdTime", 'desc'))
        }

        const unsubscribe = onSnapshot((myQuery ? q : collection(appFireStore, transaction)),
            // snapshot : 가장 최신의 컬랙션이 snapshot에 저장됩니다.
            (snapshot) => {
                let result = [];
                console.log('snapshot', snapshot);
                // docs는 문서의 정보를 배열로 저장합니다.
                snapshot.docs.forEach((doc) => {
                    // data() 함수는 문서의 데이터를 반환합니다.
                    result.push({ ...doc.data(), id: doc.id });
                })

                setDocument(result);
                setError(null);
            },
            (error) => {
                setError(error.message);
            });

        return unsubscribe;
    }, [collection])

    return { documents, error }
}