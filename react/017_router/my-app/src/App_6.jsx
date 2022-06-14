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

export default App;