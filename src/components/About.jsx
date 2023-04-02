import React, { useState } from 'react';
import { Button } from 'antd';

function About({ avatar, skillsAndTools }) {
    const [showMore, setShowMore] = useState(false);
    const renderSkill = (name, index) => (
        <div
            key={index}
            className={`border-solid border border-border rounded-xl text-center py-12 px-16 text-light text-xl font-semibold flex items-center justify-center ${
                index >= 3 && !showMore ? 'hidden' : ''
            } sm:block`}
        >
            {name}
        </div>
    );
    return (
        <div id="about" className="main-content bg-dark">
            <div className="max-w-6xl mx-auto px-4 pt-16">
                <h1 className="text-light select-none">About Me</h1>
                <div className="flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-8 mt-16 select-none">
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
                            Hi! I am a dedicated and passionate front-end
                            developer with experience in a variety of
                            technologies. For over a year of professional
                            experience, I have been working extensively with
                            React, making it my primary focus and expertise.
                        </div>
                        <div className="flex items-center justify-center sm:justify-start">
                            <Button
                                className="mt-4 btn-green"
                                type="primary"
                                size="large"
                                shape="round"
                                onClick={() =>
                                    window.open(
                                        'https://stellar-hemisphere-28f.notion.site/Nguyen-The-Son-ff97d68f4db7415a96b8765e07e30094'
                                    )
                                }
                            >
                                Download CV
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="mt-16 select-none">
                    <h2 className="text-light text-center mb-8">
                        Skills and Tools
                    </h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {skillsAndTools.map((item, index) =>
                            renderSkill(item, index)
                        )}
                    </div>
                    <div className="flex items-center justify-center mt-4">
                        <Button
                            size="large"
                            className="sm:hidden showmore-btn"
                            onClick={() => setShowMore(!showMore)}
                        >
                            {!showMore ? 'Show more' : 'Show less'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
