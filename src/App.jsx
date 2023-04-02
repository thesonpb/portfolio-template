import './App.css';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Works from './components/Works.jsx';
import Contact from './components/Contact.jsx';

const avatar = '/images/avatar.jpg';
const facebook = 'https://www.facebook.com/thesonlp/';
const github = 'https://github.com/thesonpb';
const linkedin =
    'https://www.linkedin.com/in/th%E1%BA%BF-s%C6%A1n-nguy%E1%BB%85n-a38b3a212/';

const skillsAndTools = [
    'Javascript',
    'Java',
    'React',
    'Spring Boot',
    'Git',
    'Ant Design',
    'Tailwind CSS',
    'Craft.js',
    'Figma',
    'Microsoft Office',
];

const workExperience = [
    {
        place: 'VNPT Technology',
        dateRange: '2022 - Present',
        description: 'I work as a Frontend Web Developer using ReactJS',
    },
    {
        place: 'VNPT Technology',
        dateRange: '2022 - Present',
        description: 'I work as a Frontend Web Developer using ReactJS',
    },
    {
        place: 'VNPT Technology',
        dateRange: '2022 - Present',
        description: 'I work as a Frontend Web Developer using ReactJS',
    },
];

const education = [
    {
        place: 'Luong Phu High School',
        dateRange: '2016 - 2019',
        description: 'I was student at Luong Phu High School',
    },
    {
        place: 'University of Engineering and Technology',
        dateRange: '2016 - 2019',
        description: 'Computer Science',
    },
];

const selectedWorks = [
    {
        name: 'Component Craft',
        description: 'description',
        date: 'May 2023',
        link: 'github.com',
        images: ['image1.png', 'image2.png'],
    },
    {
        name: 'Component Craft',
        description: 'description',
        date: 'May 2023',
        link: 'github.com',
        images: ['image1.png', 'image2.png'],
    },
    {
        name: 'Component Craft',
        description: 'description',
        date: 'May 2023',
        link: 'github.com',
        images: ['image1.png', 'image2.png'],
    },
    {
        name: 'Component Craft',
        description: 'description',
        date: 'May 2023',
        link: 'github.com',
        images: ['image1.png', 'image2.png'],
    },
    {
        name: 'Component Craft',
        description: 'description',
        date: 'May 2023',
        link: 'github.com',
        images: ['image1.png', 'image2.png'],
    },
    {
        name: 'Component Craft',
        description: 'description',
        date: 'May 2023',
        link: 'github.com',
        images: ['image1.png', 'image2.png'],
    },
];
const otherWorks = [
    {
        name: 'Component Craft',
        description: 'description',
        date: 'May 2023',
        link: 'github.com',
        images: ['image1.png', 'image2.png'],
    },
];
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
