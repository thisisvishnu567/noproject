import React from 'react';
import './hOme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <div>
      <div>
        <nav id = "nav" className="navbar bg-primary" data-bs-theme="dark">
          <div class="btn-group">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Prepaid</button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Recharge</a></li>
              <li><a class="dropdown-item" href="#">New Prepaid Sim</a></li>
              <li><a class="dropdown-item" href="#">View Plans</a></li>
            </ul>
          </div> 
        </nav>
      </div>
    </div>
  );
}

export default Home;
