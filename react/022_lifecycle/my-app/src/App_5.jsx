import { useState, useRef, useEffect, useLayoutEffect } from 'react'

function App() {
  const [modalShow, setModalShow] = useState(false)
  const modal = useRef()
  const button = useRef()
  // const a = useRef()
  // const b = useRef()
  // const c = useRef()
  useEffect(()=>{
    // if (modal.current == null || button.current == null ||a || b || c) {
    //   return
    // }
    if (modal.current == null || button.current == null) {
      return
    }
    setTimeout(()=>{
      modal.current.style.color = 'red';
      modal.current.style.margin = '30px';
    }, 100);

    // const { bottom } = button.current.getBoundingClientRect()
    // modal.current.style.margin = `${bottom}px`;

  }, [modalShow])
  return (
    <div className="App">
      <button 
        ref={button} 
        onClick={()=>setModalShow(!modalShow)}>
          show me the 모달!!
      </button>
      {modalShow ? (<div ref={modal}>modal</div>) : null}
    </div>
  );
}

export default App;