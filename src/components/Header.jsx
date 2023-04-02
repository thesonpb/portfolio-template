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
                    <div className="rounded-full cursor-pointer p-1 hover:bg-lightGray">
                        <a
                            href="#home"
                            className="mx-3 no-underline text-light select-none"
                        >
                            Home
                        </a>
                    </div>
                    <div className="rounded-full cursor-pointer p-1 hover:bg-lightGray">
                        <a
                            href="#about"
                            className="mx-3 no-underline text-light select-none"
                        >
                            About
                        </a>
                    </div>
                    <div className="rounded-full cursor-pointer p-1 hover:bg-lightGray">
                        <a
                            href="#experience"
                            className="mx-3 no-underline text-light select-none"
                        >
                            Experience
                        </a>
                    </div>
                    <div className="rounded-full cursor-pointer p-1 hover:bg-lightGray">
                        <a
                            href="#works"
                            className="mx-3 no-underline text-light select-none"
                        >
                            Works
                        </a>
                    </div>
                    <div className="rounded-full cursor-pointer p-1 hover:bg-lightGray">
                        <a
                            href="#contact"
                            className="mx-3 no-underline text-light select-none"
                        >
                            Contact
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
