import { Link } from 'react-router-dom'
import './menu.css'

export default function Menu() {
  return (
    <div>
      <ul>
        <li>Shine & Clean</li>
        <li className='push-right'> <Link className='links' to='/'>Home</Link> </li>
        <li> <Link className='links' to='/about'>About </Link></li>
        <li> <Link className='links' to='/contact'>Contact</Link> </li>
        <li><button className='btn-user'>Login<i className="fa-solid fa-user"></i></button></li>
      </ul>
    </div>
  )
}
