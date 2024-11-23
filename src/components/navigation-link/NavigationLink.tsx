import React from 'react';

const NavigationLinks = () => {
    const links = [
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
    ];

    return (
        <nav className="flex space-x-6">
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className="relative text-lg text-gray-800 dark:text-white transition-colors duration-3 after:block after:content-[''] after:border-b-2 after:border-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-250 after:ease-in-out"
                >
                    {link.name}

                    <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] text-[#FF868E] transition-all duration-300 hover:w-full"></span>
                </a>
            ))}
        </nav>
    );
};

export default NavigationLinks;