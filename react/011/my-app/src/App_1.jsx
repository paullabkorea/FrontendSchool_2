function App() {
    return (
        <Hello name='licat'/>
    );
}

function Hello({name}){
    if (name) {
        return (
            <div>
                <h1>{name}</h1>
            </div>
        )
    }
    return <NoName/>
}

function NoName(){
    return(
        <div>
            <h1>이름을 입력하지 않았습니다.</h1>
        </div>
    )
}

export default App;