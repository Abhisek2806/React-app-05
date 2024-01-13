import React from 'react';
import {
  AiOutlineArrowUp,
  AiFillYoutube,
  AiFillInstagram,
  AiFillFacebook,
} from 'react-icons/ai';
import User from '../assets/user.png';

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={User} alt="Founder" />
        <h2>Abhisek Das</h2>
        <p>Motivation is temporary but discipline is forever</p>
      </div>

      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://youtube.com" target="blank">
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com" target="blank">
            <AiFillInstagram />
          </a>
          <a href="https://facebook.com" target="blank">
            <AiFillFacebook />
          </a>
        </article>
      </aside>

      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
