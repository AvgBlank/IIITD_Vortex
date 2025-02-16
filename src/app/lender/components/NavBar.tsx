'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
    const [hovered, setHovered] = useState<string | null>(null);

    const menuItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Our Services', id: 'services' },
        { name: 'Testing', id: 'contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-black text-white shadow-md">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    ⚡
                </div>
                <span className="text-xl font-semibold">FlexiLoan</span>
            </div>
            <div className="flex items-center gap-4 bg-[#191919] px-2 py-1 rounded-full">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => router.push(`#${item.id}`)} 
                        onMouseEnter={() => setHovered(item.id)}
                        onMouseLeave={() => setHovered(null)}
                        className={`px-4 py-1 rounded-full text-sm transition ${
                            hovered === item.id ? 'bg-white text-black font-semibold' : 'text-gray-400'
                        }`}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
            <div className="flex items-center gap-2">
                <button 
                    className="px-4 py-1 rounded-full bg-[#191919] text-white text-sm"
                    onClick={() => router.push('/login')} 
                >
                    Login
                </button>
                <button className="px-4 py-1 rounded-full bg-white text-black font-semibold text-sm" onClick={() => router.push('/signup')}>
                    Sign up
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
