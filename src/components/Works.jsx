import React, { useState } from 'react';
import { Button } from 'antd';
import GithubIcon from '../icons/GithubIcon.jsx';
import ShareboxIcon from '../icons/ShareboxIcon.jsx';
import GithubOutline from '../icons/GithubOutline.jsx';
import FolderIcon from '../icons/FolderIcon.jsx';

function Works({ otherWorks, selectedWorks }) {
    const [tab, setTab] = useState(0);

    const renderWork = ({
        name,
        description,
        date,
        link,
        images,
        technology,
        githubLink,
    }) => (
        <div className="rounded-xl bg-lightGray cursor-pointer h-60 p-4 select-none">
            <div className="flex items-center justify-between text-light">
                <FolderIcon />
                <div className="flex items-center gap-x-2">
                    <GithubOutline />
                    <ShareboxIcon />
                </div>
            </div>
            <h2 className="mt-0 text-light mb-2">{name}</h2>
            <div className="text-gray-900">{date}</div>
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
                    {(tab === 0 ? selectedWorks : otherWorks).map((item) =>
                        renderWork(item)
                    )}
                </div>
            </div>
        </div>
    );
}

export default Works;
