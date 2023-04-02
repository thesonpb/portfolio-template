import React from 'react';
import GithubIcon from '../icons/GithubIcon.jsx';
import LinkedinIcon from '../icons/LinkedinIcon.jsx';
import FacebookIcon from '../icons/FacebookIcon.jsx';
import { Button } from 'antd';
import MouseIcon from '../icons/MouseIcon.jsx';

function Home({ avatar, github = '#', linkedin = '#', facebook = '#' }) {
    return (
        <div id="home" className="main-content flex justify-center relative">
            <div className="flex flex-col items-center justify-center -translate-y-14">
                {avatar ? (
                    <img
                        className="object-cover object-center w-40 h-40 bg-blue-400 shadow rounded-full mb-2"
                        src={avatar}
                        alt="avatar"
                    />
                ) : (
                    <div className="w-40 h-40 bg-blue-400 shadow rounded-full mb-2" />
                )}
                <h1 className="select-none text-3xl text-light font-bold mb-0">
                    The Son
                </h1>
                <h4 className="select-none text-light mt-2">
                    I'm a Web Developer
                </h4>
                <div className="flex items-center justify-around gap-x-4">
                    <a target="_blank" href={github} className="text-white">
                        <GithubIcon />
                    </a>
                    <a target="_blank" href={linkedin} className="text-white">
                        <LinkedinIcon />
                    </a>
                    <a target="_blank" href={facebook} className="text-white">
                        <FacebookIcon />
                    </a>
                </div>
                <Button
                    type="primary"
                    className="mt-8 bg-blue-500 w-32"
                    size="large"
                    shape="round"
                >
                    Hire me
                </Button>
            </div>
            <div className="text-white text-sm font-semibold absolute bottom-2 flex flex-col items-center justify-center gap-y-2 select-none">
                <div>Scroll Down</div>
                <MouseIcon />
            </div>
        </div>
    );
}

export default Home;
