import React from "react";
import { SiIfood } from "react-icons/si";
import { Link } from "react-router";

const socialLinks = [
    {
    name: "linkedin",
    href: "https://www.linkedin.com/in/jahirulshifat/",
    svg: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M22.162 0H1.838C.822 0 0 .822 0 1.838v20.324C0 23.178.822 24 1.838 24h20.324A1.838 1.838 0 0 0 24 22.162V1.838A1.838 1.838 0 0 0 22.162 0zM7.548 20.452H3.548V9.548h4zm-2-12.452a2.001 2.001 0 1 1 0-4.002 2.001 2.001 0 0 1 0 4.002zm15.452 12.452h-4v-5.604c0-1.336-.025-3.057-1.865-3.057-1.865 0-2.151 1.454-2.151 2.957v5.704h-4V9.548h3.845v1.493h.055c.536-1.014 1.845-2.084 3.797-2.084 4.062 0 4.812 2.676 4.812 6.156v5.339z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/jahirul.sifat.3?rdid=YYWIB49484Dywv3e&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16R69rZHFf%2F#",
    svg: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    svg: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395c-.98.98-1.263 2.092-1.322 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.342 2.393 1.322 3.373.98.98 2.092 1.263 3.373 1.322C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.342 3.373-1.322.98-.98 1.263-2.092 1.322-3.373.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.342-2.393-1.322-3.373-.98-.98-2.092-1.263-3.373-1.322C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
      </svg>
    ),
  },
  
];

const Footer = () => {
  return (
    <footer className="bg-[#141A1F] text-[#DBE8F2] border-t border-[#2B3640] mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <SiIfood size={44} className="text-[#9EADBF]" />
          <span className="text-2xl font-extrabold tracking-wide">Share & Care</span>
          <span className="text-xs text-[#9EADBF] mt-1">&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <Link to="/aboutUs" className="text-[#9EADBF] hover:text-[#FFFFFF] transition-colors">
            About Us
          </Link>
          <Link to="/contactUs" className="text-[#9EADBF] hover:text-[#FFFFFF] transition-colors">
            Contact Us
          </Link>
          <Link to="/availableFoods" className="text-[#9EADBF] hover:text-[#FFFFFF] transition-colors">
            Available Foods
          </Link>
          <Link to="/blogs" className="text-[#9EADBF] hover:text-[#FFFFFF] transition-colors">
            Blogs
          </Link>
        </div>

        {/* Contact and Social */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <p>
            Email:{" "}
            <a href="mailto:info.jahirulsifat@gmail.com" className="text-[#9EADBF] hover:underline">
              info.jahirulsifat@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+8801612872845" className="text-[#9EADBF] hover:underline">
              +880 1612872845
            </a>
          </p>
          <div className="flex gap-5 mt-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-[#9EADBF] hover:text-[#FFFFFF] transition-colors"
              >
                {social.svg}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
