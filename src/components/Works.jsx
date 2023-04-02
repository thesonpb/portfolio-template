import React, { useState } from 'react';
import { Button, Tag, Tooltip } from 'antd';
import ShareboxIcon from '../icons/ShareboxIcon.jsx';
import GithubOutline from '../icons/GithubOutline.jsx';

function Works({ otherWorks, selectedWorks }) {
    const [tab, setTab] = useState(0);

    const renderTechnology = (item, index) => (
        <Tag key={index} color="#60a5fa">
            {item}
        </Tag>
    );
    const renderWork = (
        { name, description, date, link, image, technology, githubLink },
        index
    ) => (
        <div
            key={index}
            className="rounded-xl bg-lightGray cursor-pointer h-60 p-4 select-none"
        >
            <div className="flex items-center justify-between text-light mb-2 gap-x-2">
                <div className="truncate">
                    <Tooltip title={name}>
                        <h3 className="mt-0 text-light mb-1 truncate">
                            {name}
                        </h3>
                    </Tooltip>
                    <div className="text-gray-900 text-sm">{date}</div>
                </div>
                <div className="flex items-center gap-x-2">
                    <Tooltip title="Github">
                        <div
                            className="hover:text-greenest cursor-pointer"
                            onClick={() =>
                                githubLink && window.open(githubLink, '_blank')
                            }
                        >
                            <GithubOutline />
                        </div>
                    </Tooltip>
                    <Tooltip title="External Link">
                        <div
                            className="hover:text-greenest cursor-pointer"
                            onClick={() => {
                                link && window.open(link, '_blank');
                            }}
                        >
                            <ShareboxIcon />
                        </div>
                    </Tooltip>
                </div>
            </div>

            <div className="relative w-full h-[180px]">
                {image ? (
                    <img
                        src={`./images/${image}`}
                        alt="images"
                        className="object-cover object-center h-full w-full rounded-md"
                    />
                ) : (
                    <div className="bg-blue-400 object-cover object-center h-full w-full rounded-md" />
                )}
                <div className="rounded-md absolute inset-0 bg-black bg-opacity-50 text-white opacity-0 transition-opacity hover:opacity-100 px-4 py-2 flex flex-col justify-between">
                    <p className="line-clamp-5 mt-0 mb-2 text-sm">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-y-2 line-clamp-2">
                        {technology?.map((item, index) =>
                            renderTechnology(item, index)
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div id="works" className="main-content bg-dark">
            <div className="max-w-6xl mx-auto px-4 pt-16">
                <h1 className="text-light mt-0">Works</h1>
                <div className="flex gap-x-2">
                    <Button
                        type="primary"
                        shape="round"
                        className={`${
                            tab === 0 ? 'active-tab-btn' : 'inactive-tab-btn'
                        }`}
                        onClick={() => setTab(0)}
                    >
                        Selected Works
                    </Button>
                    <Button
                        type="primary"
                        shape="round"
                        className={`${
                            tab === 1 ? 'active-tab-btn' : 'inactive-tab-btn'
                        }`}
                        onClick={() => setTab(1)}
                    >
                        Others
                    </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {(tab === 0 ? selectedWorks : otherWorks).map(
                        (item, index) => renderWork(item, index)
                    )}
                </div>
            </div>
        </div>
    );
}

export default Works;
