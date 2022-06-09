import './App.css'
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login'

function App() {
    const user = {
        login: true,
        id: 'hojun@weniv.com',
        nickname: 'juni'
    }
    return (
        <div>
            {user.login ? <Homepage id={user.id} nickname={user.nickname}/> : <Login/>}
        </div>
    );
}

export default App;