import './App.css'

function App() {
  // 주석입니다.
  const name = 'hojun'
  function age(){
    return 10
  }
  const 값 = true
  const someStyle = {backgroundColor:"black", color:"white"}
  return (
    <div>
      {/* 주석입니다 */}
      {/* 
      주
      석
      입
      니
      다
      */}
      <h1 className="one">hello world</h1>
      <h1 style={{backgroundColor:"black", color:"white"}}>hello world</h1>
      <h1>hello {name}, {age()}</h1>
      <p>{값?'one':'two'}</p>
      <h1 style={someStyle}>hello world</h1>
    </div>
  );
}

export default App;