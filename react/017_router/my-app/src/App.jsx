import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
    const style = {
      margin:'5px'
    }
    return (
        <BrowserRouter>
            <Link to="/" style={style}>HomePage</Link>
            <Link to="/about" style={style}>AboutPage</Link>
            <Link to="/contact" style={style}>ContactPage</Link>
            <Link to="/blog" style={style}>BlogPage</Link>
            {/* 라우트를 감싸줍니다. */}
            <Route 
              path="/" 
              exact 
              component={HomePage}
            />
            <Route 
              path="/about" 
              exact 
              component={AboutPage}
            />
            <Route 
              path="/contact" 
              exact 
              component={ContactPage}
            />
            <Route 
              path="/blog"
              exact
              component={BlogPage}
            />
            <Route 
              path="/blogdetail/:id"
              exact
              component={BlogDetailPage}
            />
        </BrowserRouter>
    );
}

function HomePage(){
  return <h1>HomePage</h1>
}

function AboutPage(){
  return <h1>AboutPage</h1>
}

function ContactPage(){
  return <h1>ContactPage</h1>
}

function BlogPage(){
  return <h1>BlogPage</h1>
}

function BlogDetailPage(props){
  // http://localhost:3000/blogdetail/1#hello
  // http://localhost:3000/blogdetail/1?key1=value1&key2=value2#hello
  //location:
  //    - hash: "#hello"
  //    - pathname: "/blogdetail/1"
  //    - search: "?key1=value1&key2=value2"
  console.log(props)
  console.log(props.match.params.id)
  return (
    <div>
      <h1>BlogDetailPage</h1>
      <p>{props.match.params.id}번 게시물이 로드되었습니다.</p>
    </div>
  )
}

export default App;