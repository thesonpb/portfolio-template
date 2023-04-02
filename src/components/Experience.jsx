import React from 'react';

function Experience({ workExperience, education }) {
    const renderExperience = (
        { place, dateRange, description, link, position },
        index
    ) => (
        <div
            className="mb-10"
            style={{ borderBottom: '1px solid white' }}
            key={index}
        >
            <p className="text-gray-900 text-sm mb-0">{dateRange}</p>
            <h4 className="text-xl text-white font-semibold mt-2 mb-2">
                {position}
            </h4>
            <h4
                className="mt-0 text-gray-900 cursor-pointer hover:text-light"
                onClick={() => window.open(link, '_blank')}
            >
                {place}
            </h4>
            <p className="text-base text-light mt-0">{description}</p>
        </div>
    );
    return (
        <div id="experience" className="main-content bg-dark select-none">
            <div className="max-w-6xl mx-auto px-4 pt-16">
                <h1 className="text-light mt-0">Experience</h1>
                <div className="flex flex-col sm:flex-row sm:gap-x-8">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4 text-light text-center">
                            Work Experience
                        </h3>
                        <div
                            className="p-4 bg-lightGray rounded-xl"
                            style={{ height: '100%' }}
                        >
                            {workExperience.map((item, index) =>
                                renderExperience(item, index)
                            )}
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4 text-light text-center">
                            Education
                        </h3>
                        <div
                            className="p-4 bg-lightGray rounded-xl"
                            style={{ height: '100%' }}
                        >
                            {education.map((item, index) =>
                                renderExperience(item, index)
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
