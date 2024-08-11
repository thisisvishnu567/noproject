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
              <a href="#/paybill">Pay Bill</a>
              <a href="/plans">View Plan</a>
            </div>
          </li>

          <li className='nav-item'>
            <button className='nav-button'>Prepaid</button>
            <div className='dropdown-content'>
              <a href="/recharge">Recharge</a>
              <a href="/newprepaid">New Prepaid Sim</a>
              <a href="/plans">View Plan</a>
              <a href="/introam">International Roaming</a>
              <a href="/switchvice">Switch Prepaid to Postpaid</a>
            </div>
          </li>

          <li className='nav-item'>
            <button className='nav-button'>Postpaid</button>
            <div className='dropdown-content'>
              <a href="/recharge">Recharge</a>
              <a href="buynewconn">Buy New Connection</a>
              <a href="/plans">View Plan</a>
              <a href="/introam">International Roaming</a>
              <a href="/switch">Switch Prepaid to Postpaid</a>
            </div>
          </li>

          <li className='nav-item'>
            <button className='nav-button'>Broadband</button>
            <div className='dropdown-content'>
              <a href="/paybill">Pay Bill/ Recharge</a>
              <a href="/buynewconn">Buy New Connection</a>
              <a href="/plans">View Plan</a>
            </div>
          </li>

          <li className='nav-item'>
            <button className='nav-button'>DTH</button>
            <div className='dropdown-content'>
              <a href="/recharge">Recharge</a>
              <a href="buydth">Buy New DTH Connection</a>
              <a href="/plans">View Plans</a>
              <a href="/xstream">Xstream</a>
              <a href="buyadddth">Buy Second DTH Connection</a>
            </div>
          </li>

          <li className='nav-item'>
            <button className='nav-button'>Bank</button>
            <div className='dropdown-content'>
              <a href="/viewaccound">View Account</a>
              <a href="/getaccount">Get New Account</a>
              <a href="/addmoney">Add Money</a>
              <a href="/knowmore">Know More</a>
            </div>
          </li>

          <li className='nav-item'>
            <button className='nav-button'>Airtel Finance</button>
            <div className='dropdown-content'>
              <a href="/getcreditcard">Credit Card</a>
              <a href="/getloans">Get Loans</a>
              <a href="/knowmore">Know More</a>
            </div>
          </li>

          <li className='nav-item'>
             <button className='nav-button'>{/*<svg src="D:\Project\Noproject_Branch\noproject\src\Components\Assets\Nav\profile.svg" width="25" height="25" alt="" />*/}Profile</button> 
            <div className='dropdown-content'>
              <a href="./login">Login</a>
              <a href="/recharge">Recharge</a>
              <a href="/help">Help</a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;