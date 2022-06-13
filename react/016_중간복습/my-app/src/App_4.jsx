const appStyle = {
    titlefontsize: {fontSize : '32px'},
    titlefontcolor: {color:'red'}
}

function App() {
    return (
        <div>
            <div style={{fontSize:'32px'}}>hello 1</div>
            <div style={{fontSize:'32px', color:'blue'}}>hello 2</div>
            <div style={appStyle.titlefontsize}>hello 3</div>
            <div style={appStyle.titlefontcolor}>hello 4</div>
        </div>
    );
}

export default App;