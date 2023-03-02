import React from 'react'
import './footer.css'
import {GrFacebookOption} from 'react-icons/gr'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <a href="#" className='footer__logo'>Norberto Alvarez</a>

        <ul className='permalinks'>
          <li><a href='#'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'> Contact</a></li>
        </ul>

        <div className='footer__socials'>
          <a href='https://facebook.com'><GrFacebookOption/></a>
          <a href='https://instagram.com'><BsInstagram/></a>
          <a href='https://twitter.com'><BsTwitter/></a>
        </div>
        <div className='footer__copyright'>
          <p>&copy; Iternova.com.ar - - All rigths reserved</p>
          

        </div>
    </footer>
  )
}

export default Footer