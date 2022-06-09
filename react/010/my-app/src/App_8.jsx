import './App.css';
import React, {useState} from 'react';

function App() {
  const Greeting = () => {
    const [message, setMessage] = useState("여기를 주목하세요");
    const handleonMouseEnter = () => {
      console.log("안녕하세요!");
      setMessage('hello!')
    };
  
    const handleonMouseLeave = () => {
      console.log("안녕히가세요!");
      setMessage('bye!')
    };
  
    return (
      <div>
        <p onMouseEnter={handleonMouseEnter} onMouseLeave={handleonMouseLeave}>
          여기에 마우스를 올려보세요!
        </p>
        <div>{message}</div>
      </div>
    );
  };

  const Heart = ()=>{
    const [like, setLike] = useState(0);
    function handleClickLike(){
      setLike(like + 1);
    }

    let heart = like%2===1?'❤️':''
    return(
      <>
        <button onClick={handleClickLike}>like</button>{heart}
      </>
    )
  }

  return (
    <div className="App">
      <Heart />
      <Greeting />
    </div>
  );
}

export default App;