'use client';

import { useState, useEffect } from 'react';

const Navbar = () => {
    const [active, setActive] = useState('home');
    const [hovered, setHovered] = useState<string | null>(null);

    const menuItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Our Services', id: 'services' },
        { name: 'Contact', id: 'contact' },
    ];

    // Function to handle scrolling behavior
    const handleScroll = () => {
        const sections = menuItems.map((item) => ({
            id: item.id,
            element: document.getElementById(item.id),
        }));

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section.element) {
                const rect = section.element.getBoundingClientRect();
                if (rect.top <= window.innerHeight * 0.3) {
                    setActive(section.id);
                    break;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-black text-white shadow-md">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    ⚡
                </div>
                <span className="text-xl font-semibold">Paisa</span>
            </div>
            <div className="flex items-center gap-4 bg-[#191919] px-2 py-1 rounded-full">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                        onMouseEnter={() => setHovered(item.id)}
                        onMouseLeave={() => setHovered(null)}
                        className={`px-4 py-1 rounded-full text-sm transition ${hovered === item.id || active === item.id ? 'bg-white text-black font-semibold' : 'text-gray-400'
                            }`}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
            <div className="flex items-center gap-2">
                <button className="px-4 py-1 rounded-full bg-[#191919] text-white text-sm">Login</button>
                <button className="px-4 py-1 rounded-full bg-white text-black font-semibold text-sm">Sign up</button>
            </div>
        </nav>
    );
};

export default Navbar;
