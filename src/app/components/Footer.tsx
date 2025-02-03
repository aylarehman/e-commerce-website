// Footer.js
import React from 'react';


export const Footer = () => {
  return (
    <div className="bg-black pt-20 mt-40 text-white justify-evenly flex items-center h-[300px] ">
      <div>
        <h1 className="text-2xl space-x-2 font-bold flex">Exclusive</h1>
        <br />
        <ul>
          <li>Subscribe</li>
          <li>Get 10% off your first order</li>
          <li>Enter your email </li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl justify-evenly space-x-2 font-bold flex">Support</h1>
        <br />
        <ul>
          <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
          <li>exclusive@gmail.com</li>
          <li>+88015-88888-9999</li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl justify-evenly space-x-2 font-bold flex">Account</h1>
        <br />
        <ul>
          <li>Privacy Policy</li>
          <li>Terms Of Use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl justify-evenly space-x-2 font-bold flex">Quick Link</h1>
        <br />
        <ul>
          <li>My Account</li>
          <li>Login/Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl justify-evenly font-bold flex space-y-6 space-x-2">Download App</h1>
        <br />
        <ul>
          <li>Save $3 with App New User Only</li>
          <li></li>
          <li></li>
        </ul>
      </div>
      
    </div>
  );
}
export default Footer;

