import React, { useState } from 'react';

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

function App() {
  return (
    <div>
      <h1>App.js test1</h1>
      <p>App.js test2</p>
      <Greeting />
    </div>
  );
}

export default App;