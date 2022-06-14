import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0)
  const [checkRender, setCheckRender] = useState(false)
  const countUp =()=>{
    
    setCount(count + 1)
    
  }
  useEffect(() => {
    if (checkRender) {
      if(count % 2){
        alert("홀수입니다")
      } else {
        alert("짝수입니다")
      }
    }
    setCheckRender(true);
  }, [count])
  return(
    <>
    <div>{count}</div>
    <button onClick={countUp}>up!</button>
    </>
  )
}
function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;