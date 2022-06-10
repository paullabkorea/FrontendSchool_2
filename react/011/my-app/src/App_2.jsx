import React, { useState } from "react";

function App() {
    return (
        <NavBar />
    );
}

function Detail(){
    return (
        <h1>hello world 1</h1>
    )
}

function Question(){
    return (
        <h1>hello world 2</h1>
    )
}

function Review(){
    return (
        <h1>hello world 3</h1>
    )
}

const ContentsContainer = ({ listName }) => {
    if (listName === "detail") {
        return <Detail />;
    } else if (listName === "qa") {
        return <Question />;
    } else if (listName === "review") {
        return <Review />;
    }
};

function NavBar() {
    const [listName, setListName] = useState("detail");
    const checkId = (e) => {
        console.log(e)
        console.log(e.target)
        console.log(e.target.id)
        setListName(e.target.id);
    };

    return (
        <>
        <nav>
            <ul>
            <li
                id="detail"
                style={
                listName === "detail" ? { color: "red" } : { color: "black" }
                }
                onClick={checkId}
            >
                상세정보
            </li>
            <li
                id="qa"
                onClick={checkId}
                style={listName === "qa" ? { color: "red" } : { color: "black" }}
            >
                Q&A
            </li>
            <li
                id="review"
                onClick={checkId}
                style={
                listName === "review" ? { color: "red" } : { color: "black" }
                }
            >
                Review
            </li>
            </ul>
        </nav>
        <ContentsContainer listName={listName} />
        </>
    );
}

export default App;