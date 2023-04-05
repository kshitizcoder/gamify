import React from 'react'
import "./style.scss";
// FaFacebookF
import { FaFacebookF ,FaInstagram,FaTwitter,FaLinkedinIn} from "react-icons/fa";
const Footer = () => {
  return (
   <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="wrapper">
                <div className="footlinks">
                    <ul>
                        <li>Terms Of Use</li>
                        <li>Privacy-Policy</li>
                        <li>About</li>
                        <li>Blog</li>

                    </ul>

                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui velit, quos nulla ea repellat ipsa, dolore maiores voluptatum nihil veniam perferendis ullam tempore enim aspernatur debitis fugit voluptatibus at eius. Ipsum quibusdam nam dignissimos impedit corrupti corporis, dolor excepturi eligendi. Quibusdam impedit velit placeat eligendi.</p>

                <div className="social_links">
<FaFacebookF  className='footersocialicons' /> <FaInstagram className='footersocialicons' /> <FaTwitter className='footersocialicons' /> <FaLinkedinIn className='footersocialicons' />
                </div>
            </div>
        </div>
    </div>
   </footer>
  )
}

export default Footer