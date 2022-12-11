import React from 'react'

function Nav() {

  return (
    <header className='header'>
      <h2>
        <a href='/'>
          <span className='username'>Mpergolatti</span>
        </a>
      </h2>
      <nav className='header_nav'>
        <ul className='header_ul'>

          <li className='header_li'>
            <a href='#about' className='about_me'>About Me</a>
          </li>

          <li className='header_li'>
            <span>Contact</span>
          </li>

          <li className='header_li'>
            <span>Portfolio</span>
          </li>

          <li className='header_li'>
            <span>Resume</span>
          </li>
          
        </ul>
      </nav>
    </header>
  )
}

export default Nav