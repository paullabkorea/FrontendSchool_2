import React, { useState, useRef } from 'react';
import axios from "axios";

function App() {
  // {
  //   "id": 4,
  //   "date": "2022-06-23",
  //   "email": "hojun4@gmail.com",
  //   "phone": "01000000004"
  // }
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const emailInput = useRef(null);
  const phoneInput = useRef(null);

  function handlePost(e){
    e.preventDefault();
    console.log(emailInput);
    console.log(phoneInput);
    setEmail(emailInput.current.value);
    setPhone(phoneInput.current.value);

    axios.post("http://localhost:3001/user", {
      "email": emailInput.current.value,
      "phone": phoneInput.current.value
    })
    .then(function (response) {
      console.log(response)
    }).catch(function (error) {
      console.log(error)
    })

  }
  return (
    <div className="App">
      이메일 : <input ref={emailInput} type="text" /><br />
      휴대폰 : <input ref={phoneInput} type="email" />
      <button onClick={handlePost}>Click Me!</button>
      <span>{email}</span>
      <span>{phone}</span>
    </div>
  );
}

export default App;