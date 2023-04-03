import React from 'react';

const Header = () => {
    return (
        <header className="fixed top-0 z-50 bg-dark shadow w-full">
            <div className="container flex items-center justify-between px-4 py-3 mx-auto">
                <a
                    href="#"
                    className="text-3xl font-bold no-underline text-light"
                >
                    The Son
                </a>
                <nav className="hidden md:flex md:items-center text-base font-semibold">
                    <a
                        href="#home"
                        className="no-underline text-light select-none rounded-full cursor-pointer py-1 px-3 hover:bg-lightGray"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="no-underline text-light select-none rounded-full cursor-pointer py-1 px-3 hover:bg-lightGray"
                    >
                        About
                    </a>
                    <a
                        href="#experience"
                        className="no-underline text-light select-none rounded-full cursor-pointer py-1 px-3 hover:bg-lightGray"
                    >
                        Experience
                    </a>
                    <a
                        href="#works"
                        className="no-underline text-light select-none rounded-full cursor-pointer py-1 px-3 hover:bg-lightGray"
                    >
                        Works
                    </a>
                    <a
                        href="#contact"
                        className="no-underline text-light select-none rounded-full cursor-pointer py-1 px-3 hover:bg-lightGray"
                    >
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
