import React, {useState} from 'react';

function App() {
  const [like, setLike] = useState(0);
  
  function handleClickLike(){
    setLike(like + 1);
  }

  let heart = like%2===1?'❤️':''

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

  return (
    <div className="App">
      <button onClick={handleClickLike}>like</button>{heart}
      <Greeting />
    </div>
  );
}

export default App;