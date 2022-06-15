import React, { useEffect, useLayoutEffect, useState } from "react";

import ReactDOM from 'react-dom/client';

function App() {

  const [num, setNum] = useState(0)

  const handleonClick = () => {
    setNum(num + 1)
  }

  useLayoutEffect(()=>{
    console.log(1)
    return () => {
      console.log('return_1')
    }
  }, [])

  useLayoutEffect(()=>{
    console.log(2)
    return () => {
      console.log('return_2')
    }
  })

  useLayoutEffect(()=>{
    console.log(3)
    return () => {
      console.log('return_3')
    }
  }, [num])

  useEffect(()=>{
    console.log('useEffect 1')
    return () => {
      console.log('useEffect_return_1')
    }
  }, [])

  useEffect(()=>{
    console.log('useEffect 2')
    return () => {
      console.log('useEffect_return_2')
    }
  })

  useEffect(()=>{
    console.log('useEffect 3')
    return () => {
      console.log('useEffect_return_3')
    }
  }, [num])

  return (
    <div className="App">
      <button onClick={handleonClick}>{num}</button>
      <Wrap/>
    </div>
  );
}

const Wrap = ()=>{
  const [isVisible,setIsVisible] = useState(true)
  const handleClick = ()=> setIsVisible(!isVisible)
  return (
    <>
      <button onClick={handleClick}>{isVisible? "언마운트시키기" : "마운트시키기"}</button>
      <br></br>
      {isVisible&& <App />}
    </>
  )
}

export default App;