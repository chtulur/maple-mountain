import {Link} from 'react-router-dom'
import Navbar from './Navbar-styled'

const Nav = (): React.ReactElement => (
  <Navbar className='navbar bg-gray-800'>
    <Link to='/'>Home</Link>
    <Link to='/hooker-management'>Hooker Management</Link>
    <Link to='/rnd'>R&D</Link>
  </Navbar>
)

export default Nav
