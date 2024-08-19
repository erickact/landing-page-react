import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark px-md-4 px-2 navbar-dark">
      <div className="container-fluid ">
        <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ms-3">
            <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-secondary" href="#">About</a>
            </li>
            <li className="nav-item ">
                <a className="nav-link text-secondary" href="#">Services</a>
            </li>
            <li className="nav-item ">
                <a className="nav-link text-secondary" href="#">Contact</a>
            </li>
            </ul>
        </div>
     </nav>
     
  )
}

export default NavBar