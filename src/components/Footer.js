import React from "react";
import logo from "../assets/img/logo.svg";
import visaImg from "../assets/img/visa.png";
import masterCardImg from "../assets/img/mastercard.png";
import bitcoinImg from "../assets/img/bitcoin.png";
import {
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
} from "react-icons/io";

const Footer = () => {
  return (
    <footer className="lg:pt-24 pt-0" data-aos="fade-up" data-aos-offset="400">
      <div className="container mx-auto lg:mb-24">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]">
            <img src={logo} alt="" />
          </div>
          <div className="flex flex-1 flex-col gap-16 lg:flex-row">
            <div className="text-center w-full lg:text-left">
              <p className="text-xl font-medium mb-6">Quick Links</p>
              <ul className="space-y-4 text-gray">
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Products
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center w-full lg:text-left">
              <p className="text-xl font-medium mb-6">Resources Links</p>
              <ul className="space-y-4 text-gray">
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Download Whitepapper
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Smart Token
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Blockchain Explore
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Crypto API
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue transition" href="#">
                    Interest
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="lg:ml-[80px]">
              <h3 className="h3 font-medium text-center mb-10 lg:text-left">
                We accept following payment systems
              </h3>
              <div className="flex justify-center items-center gap-6">
                <img src={visaImg} alt="" />
                <img src={masterCardImg} alt="" />
                <img src={bitcoinImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
          <p>&copy; 2022 CRAPPO. All rights reserved.</p>
          <div className="flex text-2xl gap-x-8">
            <a href="#" className="hover:text-blue transition">
              <IoLogoYoutube />
            </a>
            <a href="#" className="hover:text-blue transition">
              <IoLogoInstagram />
            </a>
            <a href="#" className="hover:text-blue transition">
              <IoLogoLinkedin />
            </a>
            <a href="#" className="hover:text-blue transition">
              <IoLogoTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
