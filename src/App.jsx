import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Works from './components/Works.jsx';
import Contact from './components/Contact.jsx';
import {
    avatar,
    education,
    facebook,
    github,
    linkedin,
    otherWorks,
    selectedWorks,
    skillsAndTools,
    workExperience,
} from './constant/information.js';

function App() {
    return (
        <div className="bg-dark h-screen">
            <Header />
            <div className="mt-[60px] main-content">
                <Home
                    avatar={avatar}
                    facebook={facebook}
                    github={github}
                    linkedin={linkedin}
                />
                <About avatar={avatar} skillsAndTools={skillsAndTools} />
                <Experience
                    workExperience={workExperience}
                    education={education}
                />
                <Works selectedWorks={selectedWorks} otherWorks={otherWorks} />
                <Contact />
            </div>
        </div>
    );
}

export default App;
