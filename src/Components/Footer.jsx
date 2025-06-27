import React from 'react';


const socialLinks = [
    {
        name: 'Facebook',
        href: 'https://facebook.com/',
        svg: (
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
            </svg>
        ),
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com/',
        svg: (
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.567 5.782 2.295 7.148 2.233 8.414 2.175 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395c-.98.98-1.263 2.092-1.322 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.612.059 1.281.342 2.393 1.322 3.373.98.98 2.092 1.263 3.373 1.322C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.342 3.373-1.322.98-.98 1.263-2.092 1.322-3.373.059-1.28.072-1.689.072-7.612 0-5.923-.013-6.332-.072-7.612-.059-1.281-.342-2.393-1.322-3.373-.98-.98-2.092-1.263-3.373-1.322C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
            </svg>
        ),
    },
    {
        name: 'X',
        href: 'https://x.com/',
        svg: (
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M22.162 0H1.838C.822 0 0 .822 0 1.838v20.324C0 23.178.822 24 1.838 24h20.324A1.838 1.838 0 0 0 24 22.162V1.838A1.838 1.838 0 0 0 22.162 0zM7.548 20.452H3.548V9.548h4zm-2-12.452a2.001 2.001 0 1 1 0-4.002 2.001 2.001 0 0 1 0 4.002zm15.452 12.452h-4v-5.604c0-1.336-.025-3.057-1.865-3.057-1.865 0-2.151 1.454-2.151 2.957v5.704h-4V9.548h3.845v1.493h.055c.536-1.014 1.845-2.084 3.797-2.084 4.062 0 4.812 2.676 4.812 6.156v5.339z" />
            </svg>
        ),
    },
];

const Footer = () => {
    return (
        <footer className="bg-[#141A1F] text-[#DBE8F2] border-t border-[#2B3640] mt-8">
            <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                {/* Logo and Brand */}
                <div className="flex flex-col items-center md:items-start gap-2">
                    <img src="https://imgs.search.brave.com/zDw1xGdwixUElXRu1cjMhrSWf06QrWcYEBAxf0LGrvg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnJlZWxvZ292ZWN0/b3JzLm5ldC93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8xMC9z/aGFyZWNhcmUtbG9n/by1mcmVlbG9nb3Zl/Y3RvcnMubmV0Xy00/MDB4NDAwLnBuZw" alt="Company Logo" className="w-14 h-14 mb-2" />
                    <span className="text-xl font-bold tracking-wide">Share & Care</span>
                    <span className="text-xs text-[#9EADBF]">&copy; {new Date().getFullYear()} All rights reserved.</span>
                </div>
                {/* Contact */}
                <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="font-semibold text-lg mb-1">Contact</span>
                    <span>Email: <a href="mailto:info.jahirulsifat@gmail.com" className="text-[#9EADBF] hover:underline">info.jahirulsifat@gmail.com</a></span>
                    <span>Phone: <a href="tel:+880 1612872845" className="text-[#9EADBF] hover:underline">+880 1612872845</a></span>
                    {/* Socials */}
                    <div className="flex gap-4 mt-2">
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
                {/* Terms & Conditions */}
                <div className="flex flex-col items-center md:items-start gap-1">
                    <span className="font-semibold text-lg mb-1">Legal</span>
                    <a href="/terms" className="text-[#9EADBF] hover:underline">Terms & Conditions</a>
                    <a href="/privacy" className="text-[#9EADBF] hover:underline">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;