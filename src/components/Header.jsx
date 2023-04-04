import React, { useState } from 'react';
import { Drawer, Button, Space } from 'antd';
import MenuIcon from '../icons/MenuIcon.jsx';
import CloseIcon from '../icons/CloseIcon.jsx';
import styled from 'styled-components';

const CustomDrawer = styled(Drawer)`
    width: 240px !important;
    position: fixed;
    top: 0;
    right: 0;
    .ant-drawer-header {
        background-color: #2c3236 !important;
        border-color: #525866;
    }
    .ant-drawer-body {
        background-color: #2c3236 !important;
        padding: 0;
    }
`;

const Header = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const handleLinkClick = (link) => {
        const element = document.getElementById(link);
        element.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            onClose();
        }, 800);
    };

    return (
        <header className="fixed top-0 z-40 bg-dark shadow w-full">
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
                <Button
                    type="primary"
                    onClick={showDrawer}
                    className="md:hidden mr-8 px-0 menu-btn"
                >
                    <MenuIcon />
                </Button>
                <CustomDrawer
                    title={
                        <h1 className="text-3xl font-bold no-underline text-light my-0">
                            The Son
                        </h1>
                    }
                    placement="right"
                    closable={false}
                    onClose={onClose}
                    visible={visible}
                    extra={
                        <Space>
                            <Button
                                className="px-0 menu-btn"
                                type="primary"
                                onClick={onClose}
                            >
                                <CloseIcon />
                            </Button>
                        </Space>
                    }
                >
                    <div>
                        <div
                            className="no-underline text-light select-none cursor-pointer hover:bg-lightGray block p-4 text-xl hover:text-light"
                            onClick={() => handleLinkClick('home')}
                        >
                            Home
                        </div>
                        <div
                            onClick={() => handleLinkClick('about')}
                            className="no-underline text-light select-none cursor-pointer hover:bg-lightGray block p-4 text-xl hover:text-light"
                        >
                            About
                        </div>
                        <div
                            onClick={() => handleLinkClick('experience')}
                            className="no-underline text-light select-none cursor-pointer hover:bg-lightGray block p-4 text-xl hover:text-light"
                        >
                            Experience
                        </div>
                        <div
                            onClick={() => handleLinkClick('works')}
                            className="no-underline text-light select-none cursor-pointer hover:bg-lightGray block p-4 text-xl hover:text-light"
                        >
                            Works
                        </div>
                        <div
                            onClick={() => handleLinkClick('contact')}
                            className="no-underline text-light select-none cursor-pointer hover:bg-lightGray block p-4 text-xl hover:text-light"
                        >
                            Contact
                        </div>
                    </div>
                </CustomDrawer>
            </div>
        </header>
    );
};

export default Header;
