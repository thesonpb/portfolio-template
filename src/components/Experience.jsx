import React from 'react';

function Experience({ workExperience, education }) {
    const renderExperience = ({ place, dateRange, description }) => (
        <div className="mb-10">
            <p className="text-gray-900 text-sm mb-0">{dateRange}</p>
            <h4 className="text-xl font-semibold text-gray-900 mt-2 mb-2">
                {place}
            </h4>
            <p className="text-base text-light mt-0">{description}</p>
        </div>
    );
    return (
        <div id="experience" className="main-content bg-dark select-none">
            <div className="max-w-6xl mx-auto px-4 pt-16">
                <h1 className="text-light mt-0">Experience</h1>
                <div className="flex mb-8 gap-x-8">
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold mb-4 text-light text-center">
                            Work Experience
                        </h3>
                        <div
                            className="p-4 bg-lightGray rounded-xl"
                            style={{ height: '100%' }}
                        >
                            {workExperience.map((item) =>
                                renderExperience(item)
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
                            {education.map((item) => renderExperience(item))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
