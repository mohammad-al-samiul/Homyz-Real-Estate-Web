import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const style = { color: 'white', fontSize: '24px' };
  return (
    <footer className="flex text-center">
      <div className="w-full lg:w-1/2 bg-[#1F2937] grid text-white p-8">
        <span className="text-2xl font-bold">Contact US</span>
        <a className="link link-hover">123 ABS Street, Uni 21, Bangladesh</a>
        <a className="link link-hover">+88 123456789</a>
        <a className="link link-hover">Mon - Fri: 08:00 - 22:00</a>
        <a className="link link-hover">Sat - Sun: 10:00 - 23:00</a>
      </div>
      <div className="bg-[#111827]  text-white w-full lg:w-1/2 p-8">
        <span className="text-2xl font-bold">Follow US</span>
        <br />
        <a className="leading-loose link link-hover">Join us on social media</a>
        <p className="flex justify-center mt-2">
          <a className="me-1 ">
            <FaFacebookF style={style} />
          </a>
          <a className="me-1">
            <FaYoutube style={style} />
          </a>
          <a className="me-1">
            <FaInstagram style={style} />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
