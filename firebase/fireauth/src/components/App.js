import MyRouter from "./Router";
import { useState, useEffect } from "react";
import { authService } from "../fBase";


function App() {

  const [isLogin, setIsLogin] = useState(false);
  const [init, setInit] = useState(false);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
      setInit(true);
    })
  })

  return (
    init ? <MyRouter isLogin={isLogin}></MyRouter> : '로딩중....'
  )
}

export default App;
