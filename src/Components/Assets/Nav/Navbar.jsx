import './navB.scss';

const Navbar = () => {
  return (
    <div className="nav">
      <nav className='test-nav'>
        <a href='/' className='airtelLogo' ><img src='./Pics/airtel.png'alt='logo' /></a>
        <ul className='nav-list-options'>
          <li className='nav-item'>
            <button className='nav-button'>Airtel Black</button>
            <div className='dropdown-content'>
              <a href="#">Pay Bill</a>
              <a href="#">View Plan</a>
            </div>
          </li>

          <li className='nav-item'>
            <button className='nav-button'>Prepaid</button>
            <div className='dropdown-content'>
              <a href="#">Recharge</a>
              <a href="#">New Prepaid Sim</a>
              <a href="#">View Plan</a>
              <a href="#">International Roaming</a>
              <a href="#">Switch Prepaid to Postpaid</a>
            </div>
          </li>

          <li className='nav-item'>
            <button className='nav-button'>Postpaid</button>
            <div className='dropdown-content'>
              <a href="#">Recharge</a>
              <a href="#">Buy New Connection</a>
              <a href="#">View Plan</a>
              <a href="#">International Roaming</a>
              <a href="#">Switch Prepaid to Postpaid</a>
            </div>
          </li>

          <li className='nav-item'>
            <button className='nav-button'>Broadband</button>
            <div className='dropdown-content'>
              <a href="#">Pay Bill/ Recharge</a>
              <a href="#">Buy New Connection</a>
              <a href="#">View Plan</a>
            </div>
          </li>

          <li className='nav-item'>
            <button className='nav-button'>DTH</button>
            <div className='dropdown-content'>
              <a href="#">Recharge</a>
              <a href="#">Buy New DTH Connection</a>
              <a href="#">View Plans</a>
              <a href="#">Xstream</a>
              <a href="#">Buy Second DTH Connection</a>
            </div>
          </li>

          <li className='nav-item'>
            <button className='nav-button'>Bank</button>
            <div className='dropdown-content'>
              <a href="#">View Account</a>
              <a href="#">Get New Account</a>
              <a href="#">Add Money</a>
              <a href="#">Know More</a>
            </div>
          </li>

          <li className='nav-item'>
            <button className='nav-button'>Airtel Finance</button>
            <div className='dropdown-content'>
              <a href="#">Credit Card</a>
              <a href="#">Get Loans</a>
              <a href="#">Know More</a>
            </div>
          </li>

          <li className='nav-item'>
            <button className='nav-button'><img src="./profile.svg" width="25" height="25" alt="Profile" style={{ color: 'red' }} />Profile</button>
            <div className='dropdown-content'>
              <a href="#">Login</a>
              <a href="#">Recharge</a>
              <a href="#">Help</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;