function App() {
    const Test = <h1>hello 1</h1>
    console.log(Test) // object
    return (
        <div className="App">
            {[<h1>hello 1</h1>]}
        </div>
    );
}

export default App;