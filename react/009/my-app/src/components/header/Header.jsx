import './header.css'
import Menu from '../menu/Menu.jsx'

export default function Header({id, nickname}){
    // console.log(userName)
    return (
        <div className='test'>
            header, {nickname}({id})님 반갑습니다.
            <Menu/>
        </div>
    )
}