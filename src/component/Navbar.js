import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  useEffect(() => {
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('mouseover', () => {
      dropdown.classList.add('show');
      dropdown.querySelector('.dropdown-menu').classList.add('show');
    });
    dropdown.addEventListener('mouseout', () => {
      dropdown.classList.remove('show');
      dropdown.querySelector('.dropdown-menu').classList.remove('show');
    });
  }, []);
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">E-Commerce</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/abt">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cont">Contact</Link>
              </li>
            </ul>
          </div>

          <Link className='btn btn-outline-info me-2' to="/register">
            Register
          </Link>

          {/* Dropdown on hover for Login */}
          <div className="dropdown">
            <Link className='btn btn-outline-success me-2 dropdown-toggle' to="/login" id="loginDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Login
            </Link>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="loginDropdown">
              <li><Link className="dropdown-item" to="/admin">Admin Panel</Link></li>
            </ul>
          </div>

          <Link className='btn btn-outline-primary btn-sm d-flex align-items-center' to="/cart">
            Cart
            <img className='icon icon-cart ms-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAlNJREFUWEftlztoVUEQhr+ICqaw0SKQVIbgA2zsDEhSSKwk2BjUSotYiPa+UIlgOiFF0BRa+SoU0lgoiEmhFsHCBxgIWoiPWhBDVMz5Ya8sJ7tnH+cEbpFtbrEz/3x3Znd2TgdttjrajIc1oFBFyhm6bDn8Ap4Bc8C/kFBT+2UgV+C7wLGmAoZ0YoCkcRS4FxJrYr+qZHuAgybIS6C/iYAhjapb1gV8BtYbkd3Au5Bg3f3QtX8AHDZBJoFTdQOG/ENA+4BZI/IDuB4STNxfBB4Db1p+ISDZyVjlWq31F9gE/FaAGKCTwI3VogG+AD0pGeoEvgGbI6BmgOfGbhAYiPC5BpxLAZLtBHA6QvxKYdPq9vq9FOGzDfiUCtQLLESIpwK9AvbaujFnqGX/FNjvgLLLpHLZJVPZtHzl0/mcygU6BDxyANlZ8SXRVT5d+a3Az1ygdeZGqIPbKxfoPnCk/A9SSibf88VTcrUkkluyA8X7+KQu0Bbgu/W+lfViD/VX03tWjDupGRLAHTOOuM5LLNA4cNYlkAOka/rCc3pjG2Ofr43kAInlPbAroi+5TFb0ntxbZvvpdmi0zVkah72+uRkSyAiwM5HobTE5PKzyqQOUyBJnXgfoJnAc+AiccfUUgzBkHmc9oreLyUHPhXflAgnklqU6D+zwRPlQfLFst/ZOGDCneS7QBWDMUtS0t9EDtARssPYuOrr9/+1cII20r62OrRfbVwqVdtRE/APo80qHu9EMSUxQw+bB1dmoWipxNzBdBSOB3AzFXZkMqzWgUNLaLkPLSj5iJQgfdtsAAAAASUVORK5CYII="/>
          </Link>

        </div>
      </nav>
    </div>
  )
}

export default Navbar;
