import React from 'react';
import { Button } from 'antd';

function About({ avatar, skillsAndTools }) {
    const renderSkill = (name) => (
        <div className="border-solid border border-border rounded-xl text-center py-12 px-16 text-light text-xl font-semibold flex items-center justify-center">
            {name}
        </div>
    );
    return (
        <div id="about" className="main-content bg-dark">
            <div className="max-w-6xl mx-auto px-4 pt-16">
                <h1 className="text-light select-none">About Me</h1>
                <div className="flex gap-x-8 mt-16 select-none">
                    <div>
                        {avatar ? (
                            <img
                                className="object-cover object-center w-40 h-40 bg-blue-400 shadow rounded-full mb-2"
                                src={avatar}
                                alt="avatar"
                            />
                        ) : (
                            <div className="w-40 h-40 bg-blue-400 shadow rounded-full mb-2" />
                        )}
                    </div>
                    <div className="rounded-xl shadow-md bg-lightGray p-4 text-light">
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit.
                        </div>
                        <Button
                            className="mt-4 btn-green"
                            type="primary"
                            size="large"
                            shape="round"
                        >
                            Download CV
                        </Button>
                    </div>
                </div>
                <div className="mt-16 select-none">
                    <h2 className="text-light text-center mb-8">
                        Skills and Tools
                    </h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {skillsAndTools.map((item) => renderSkill(item))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
