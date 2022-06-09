import React, { useState } from 'react';

function App() {
  return (
    <Hello name="licat"/>
  );
}

function Hello(props) {
	const name = props.name;
  const num = [6, 7, 8, 9, 10]; //1~10호를 만들 것입니다.
  return(
    <div>
      <h1>안녕, {name} 1호</h1>
      <h1>안녕, {name} 2호</h1>
      <h1>안녕, {name} 3호</h1>
      <h1>안녕, {name} 4호</h1>
      <h1>안녕, {name} 5호</h1>
      {/* 경고 : 컴포넌트 안에서 리스트를 렌더링할 때는 꼭 key 값을 넣어줘야 합니다. */}
      {/* { num } */}
      {/* { num.map((i) => <h1>안녕, {i}호</h1>) } */}
      { num.map((i) => <h1 key={i}>안녕, {i}호</h1>) }

    </div>
  )
}

export default App;