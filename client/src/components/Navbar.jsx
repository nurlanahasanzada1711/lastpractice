import React from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <div className={style.navcenter}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/coins">Coins</Link>
              </li>
              <li>
                <Link to="/add-coin">Add Coin</Link>
              </li>
              <li>
                <Link to="/edit">Edit Coin</Link>
              </li>
              <li>
                <Link to="/detail">CoinDetail</Link>
              </li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar