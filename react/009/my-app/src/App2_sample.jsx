import './App.css'

function Menu () {
  return (
      <div>
          menu
      </div>
  )
}

function Header(){
    return (
        <div>
            header
            <Menu/>
        </div>
    )
}

function Main(){
    return (
        <div>
            section
        </div>
    )
}

function Footer(){
    return (
        <div>
            footer
        </div>
    )
}

function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;

// import './App.css'

// function App() {
//   return (
//     <div>
//       <div>
//         header
//         <div>
//           menu
//         </div>
//       </div>
//       <div>
//         section
//       </div>
//       <div>
//         footer
//       </div>
//     </div>
//   );
// }

// export default App;