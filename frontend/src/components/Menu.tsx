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
        <li className='border'> <Link className='links' to='/login'> Login <i className="fa-solid fa-user"></i></Link></li>
      </ul>
    </div>
  )
}
