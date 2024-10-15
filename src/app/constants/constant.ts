import { UserObject } from "../models/User"
import { NavItems } from "../models/Header"
export const userInfo: UserObject = {
    name: 'Software Developer',
    picture: 'https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg',
    heading: 'I&#39;m a Software Engineer based in Los Angles, with a passion for creating elegant and efficient solutions that seamlessly integrate user-friendly experiences. I&#39;ve built websites, desktop applications, and corporate software, leveraging cutting-edge technologies to drive innovation and enhance business processes.',
    about: `
     <p>I am a passionate Software Engineer with a strong background in Web Development, I have been crafting digital experiences for 5 years.</p>
        <p>My journey in IT began in 2019 since then, I've had the privilege to work on a diverse range of projects, allowing me to refine my skills and approach to problem-solving.</p>
        <p> I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts. </p>
        `,
    skills: ['React', 'Next', 'Data Structure', 'Java', 'Spring Boot', 'Hibernate', 'AWS', 'MongoDB', 'MySQL', 'HTML', 'CSS'],   
}
  

export const headerItems: NavItems = {
    home: { label: 'Home', page: 'home'},
    about: { label: 'About', page: 'about'},
    projects: { label: 'Projects', page: 'projects'}
}

export const projects = {
    Coding: { image: 'https://i.ibb.co/WzSmTfF/profile.jpg' },
    Typescript: { image: 'https://i.ibb.co/sbMPp00/images.png' },
    html: { image: 'https://i.ibb.co/yNSHyhM/Symbols-in-HTML.png' },
    JAVA: { image: 'https://i.ibb.co/p14TVWh/images.jpg' },
    Tailwindcss: { image: 'https://i.ibb.co/f4y99bH/images-1.png' },
    React: { image: 'https://i.ibb.co/YRq9hf2/1-j-DIj2-SKAE-Bp32ow-Lo-HDjw.png' },
    
}