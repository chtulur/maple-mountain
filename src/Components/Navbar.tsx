import {Link} from 'react-router-dom'

const Navbar = (): React.ReactElement => (
  <nav>
    <Link to='/'>Home</Link>
    <Link to='/hooker-management'>Hooker Management</Link>
    <Link to='/rnd'>R&D</Link>
  </nav>
)

export default Navbar
