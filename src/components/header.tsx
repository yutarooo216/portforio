import React from 'react';

export const Header = () => {
    return (
        <header className="bg-blue-400 text-white p-4">
            <h1 className="text-2xl font-bold">yutaro's portforio</h1>
            <nav className="mt-2">
                <ul className="flex space-x-4">
                    <li><a href="#profile" className="hover:underline">Profile</a></li>
                    <li><a href="#works" className="hover:underline">Works</a></li>
                    <li><a href="#publications" className="hover:underline">Publications</a></li>
                    {/* <li><a href="#contact" className="hover:underline">contact</a></li> */}
                </ul>
            </nav>
        </header>
    )
}