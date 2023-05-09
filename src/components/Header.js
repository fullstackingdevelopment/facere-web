import './styling/Header.css';
import { Link } from 'react-router-dom';

function Header(loginStateManager) {
  return(
    <>
      <div className='Header' style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <p className='Header-Title'>Facere-web Prototype</p>
        {/*<Link style ={{
          marginRight: '1em',
        }} to='/'>Login</Link>
      <Link to='/main'>App</Link>*/}
      </div>
    </>
  )
}

export default Header;