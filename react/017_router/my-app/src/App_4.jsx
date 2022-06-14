import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
    const value = {
        name:'hojun',
        age:'10',
        one:'10',
        two:'20',
        three:'30',
        four:'40',
    }
    return (
        <BrowserRouter>
            {/* 라우트를 감싸줍니다. */}
            <Route 
              path="/" 
              exact 
              component={Index}
            />
            <Route 
              path="/one" 
              exact 
              component={One}
            />
            <Route 
              path="/one/ex" 
              exact 
              component={OneExtend}
            />
            <Route 
              path="/two"
              component={Two}
            />
            <Route
              path="/three" 
              render={()=><Three {...value}/>}
            />
            <Route
              path="/four"
            >
              <Four {...value}/>
            </Route>
        </BrowserRouter>
    );
}

function Index(){
  return <h1>hello world0</h1>
}

function One(){
  return <h1>hello world1</h1>
}

function OneExtend(){
  return <h1>hello world one extend</h1>
}

function Two(){
  return <h1>hello world2</h1>
}

function Three({name, age}){
  // console.log(props)
  console.log(name, age)
  return <h1>제 이름은 {name}입니다. 제 나이는 {age}입니다.</h1>
}

function Four({one, two, three, four}){
  return <h1>{one} {two} {three} {four}</h1>
}

export default App;