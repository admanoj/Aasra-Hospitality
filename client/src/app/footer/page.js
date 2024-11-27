"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-sans">
      <div className="container mx-auto px-4 py-8 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="/aasra.png"
              alt="Aasra Hospitality Logo"
              width={180}
              height={80}
            />
            <p className="text-sm">
              Experience comfort and luxury with Aasra Hospitality's world-class
              hotels across America.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-gray-300 transition">
                  About Aasra
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="hover:text-gray-300 transition">
                  Our Hotels
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:text-gray-300 transition">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-gray-300 transition"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-gray-300 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Hospitality Street, Mumbai, India</li>
              <li>Phone: +91 22 1234 5678</li>
              <li>Email: info@aasrahospitality.com</li>
            </ul>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://facebook.com/aasrahospitality"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl hover:text-blue-500 transition" />
              </a>
              <a
                href="https://twitter.com/aasrahospitality"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="text-2xl hover:text-blue-400 transition" />
              </a>
              <a
                href="https://instagram.com/aasrahospitality"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl hover:text-pink-500 transition" />
              </a>
              <a
                href="https://linkedin.com/company/aasrahospitality"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl hover:text-blue-700 transition" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-2">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-3 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-md transition"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Our Trademarks
          </h2>
          <div
            className="relative overflow-hidden mx-auto"
            style={{ width: "100%", maxWidth: "600px", height: "100px" }}
          >
            <div className="flex items-center animate-carousel absolute left-0 top-0">
              <Image
                src="/comfort.png"
                alt="Comfort Inn Logo"
                width={100}
                height={100}
                className="mx-4"
              />
              <Image
                src="/holi.jpg"
                alt="Holiday Inn Logo"
                width={100}
                height={100}
                className="mx-4"
              />
              <Image
                src="/red.png"
                alt="Red Roof Logo"
                width={100}
                height={100}
                className="mx-4"
              />
              <Image
                src="/hilton.jpeg"
                alt="Hilton Logo"
                width={100}
                height={100}
                className="mx-4"
              />
              <Image
                src="/road.png"
                alt="Roadway Inn Logo"
                width={100}
                height={100}
                className="mx-4"
              />
              <Image
                src="/ramada.png"
                alt="Ramada Logo"
                width={100}
                height={100}
                className="mx-4"
              />
              <Image
                src="/comfort.png"
                alt="Comfort Inn Logo"
                width={100}
                height={100}
                className="mx-4"
              />
              <Image
                src="/holi.jpg"
                alt="Holiday Inn Logo"
                width={100}
                height={100}
                className="mx-4"
              />
              <Image
                src="/red.png"
                alt="Red Roof Logo"
                width={100}
                height={100}
                className="mx-4"
              />
              <Image
                src="/hilton.jpeg"
                alt="Hilton Logo"
                width={100}
                height={100}
                className="mx-4"
              />
              <Image
                src="/road.png"
                alt="Roadway Inn Logo"
                width={100}
                height={100}
                className="mx-4"
              />
              <Image
                src="/ramada.png"
                alt="Ramada Logo"
                width={100}
                height={100}
                className="mx-4"
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes carousel {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-carousel {
            animation: carousel 10s linear infinite;
            width: 1632px; /* (100px + 2 * 16px margin) * 12 images */
          }
        `}</style>

        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Aasra Hospitality. All rights
            reserved.
          </p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-gray-300 transition">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-gray-300 transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
