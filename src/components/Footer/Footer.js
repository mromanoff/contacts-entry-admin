import './Footer.css';
import React from 'react';

const Footer = () => (
  <footer role="contentinfo" className="Footer">
    <h4>Follow me</h4>
    <ul className="Footer-socialIcons">
      <li>
        <a target="_blank" rel="nofollow" title="twitter" className="icon-twitter" href="https://twitter.com/zelcie"></a>
      </li>
      <li>
        <a target="_blank" rel="nofollow" title="instagram" className="icon-instagram" href="https://www.instagram.com/michael.romanoff"></a>
      </li>
      <li>
        <a target="_blank" rel="nofollow" title="github" className="icon-github2" href="https://github.com/mromanoff"></a>
      </li>
      <li>
        <a target="_blank" rel="nofollow" title="linkedin" className="icon-linkedin" href="http://www.linkedin.com/in/michaelromanoff"></a></li>
    </ul>

    <ul className="Footer-links">
      <li>
        <a href="#">Overview</a>
      </li>
      <li>
        <a href="#work">Work</a>
      </li>
      <li>
        <a href="#photography">Photography</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
    <hr />
      <p className="Footer-copyright">&copy; Copyright Romanoff.io 1998 — 2016 All Right Reserved.</p>
  </footer>
);

export default Footer;
