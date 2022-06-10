import React, { useState } from "react";

function App() {
    return (
        <Menu/>
    );
}

function A(){
    return (
        <section>
            <h2>menu A</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis quaerat velit maiores sunt voluptatibus amet magnam nisi expedita sapiente aliquid repellendus quam blanditiis ipsa tenetur, reiciendis saepe nihil? Corporis?</p>
        </section>
    )
}

function B(){
    return (
        <section>
            <h2>menu B</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis quaerat velit maiores sunt voluptatibus amet magnam nisi expedita sapiente aliquid repellendus quam blanditiis ipsa tenetur, reiciendis saepe nihil? Corporis?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio odit corporis quidem harum dolorum beatae in, accusantium blanditiis? Commodi mollitia quidem nemo, dignissimos impedit suscipit repudiandae? Iste, fugiat tenetur.
            </p>
        </section>
    )
}

function C(){
    return (
        <section>
            <h2>menu C</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque veritatis quaerat velit maiores sunt voluptatibus amet magnam nisi expedita sapiente aliquid repellendus quam blanditiis ipsa tenetur, reiciendis saepe nihil? Corporis?</p>
        </section>
    )
}

function NotFound(){
    return <h2>not found</h2>
}

function Control({menuList}){
    if (menuList === 'a') {
        return <A/>
    }
    else if (menuList === 'b') {
        return <B/>
    }
    else if (menuList === 'c') {
        return <C/>
    } 
    else {
        return <NotFound/>
    }
}

function Menu (){
    const [menuList, setMenuList] = useState('a')

    const handleMenu = (e) => {
        setMenuList(e.target.id)
    }

    return (
        <div>
            <nav>
                <ul>
                    <li id="a" onClick={handleMenu}>메뉴1</li>
                    <li id="b" onClick={handleMenu}>메뉴2</li>
                    <li id="c" onClick={handleMenu}>메뉴3</li>
                    <li id="d" onClick={handleMenu}>메뉴4</li>
                </ul>
            </nav>
            <Control menuList={menuList}/>
        </div>
    )
}

export default App;