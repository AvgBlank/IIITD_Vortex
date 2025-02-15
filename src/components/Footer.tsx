'use client';

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#374151] text-gray-400 py-10 text-center">
            <div className="max-w-6xl mx-auto px-4">

                <div className="flex justify-center space-x-6 text-sm mb-6">
                    <a href="#" className="hover:text-white">About</a>
                    <a href="#" className="hover:text-white">Services</a>
                    <a href="#" className="hover:text-white">Contact</a>
                    <a href="#" className="hover:text-white">Talk to Support</a>
                </div>

                <h2 className="text-white text-lg font-bold">FlexiLoan</h2>
                <p className="text-gray-500 text-sm mb-6">We Optimize your process</p>

                <div className="flex justify-center space-x-4 text-xl">
                    <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
                    <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
                    <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
                    <a href="#" className="hover:text-red-500"><FaYoutube /></a>
                </div>
            </div>
        </footer>
    );
}
