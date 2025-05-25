import project1 from '../assets/projects/project-1.jpg';
import project2 from '../assets/projects/project-2.jpg';
import project3 from '../assets/projects/project-3.jpg';
import project4 from '../assets/projects/project-4.jpg';

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: '2024 - Present',
    role: 'Full Stack Developer',
    company: 'Asinnah',
    description: `Building scalable and maintainable full stack web applications with a strong focus on React.js, Next.js, and Node.js. Designing RESTful APIs, managing databases, and optimizing performance across frontend and backend layers. Collaborating with cross-functional teams to deliver high-quality products that meet client needs.`,
    technologies: [
      'JavaScript',
      'React.js',
      'Next.js',
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'Docker',
      'TypeScript',
    ],
  },
  {
    year: '2022 - 2024',
    role: 'Frontend Developer',
    company: 'Freelancer',
    description: `Delivered responsive and modern web interfaces using React.js and Next.js. Focused on UI/UX, integrating APIs, and ensuring cross-browser compatibility. Worked closely with clients to translate requirements into pixel-perfect designs.`,
    technologies: [
      'JavaScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
    ],
  },
];

export const PROJECTS = [
  {
    title: 'Kxhm - E-Commerce Platform',
    image: project1,
    description:
      'A modern e-commerce platform built with React and Node.js featuring product listings, shopping cart, and user authentication.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://kxhm.vercel.app/',
    codeUrl: 'https://github.com/MrPenguz/Kxhm',
  },
  {
    title: 'Tomato - Restaurant Ordering App',
    image: project2,
    description:
      'A restaurant app to browse menu, place orders, and manage reservations built with React and Firebase for real-time data handling.',
    technologies: ['React', 'Firebase', 'JavaScript', 'CSS'],
    liveUrl: 'https://tomato-two-beta.vercel.app/',
    codeUrl: 'https://github.com/MrPenguz/Tomato',
  },
  {
    title: 'MERN Chat App',
    image: project3,
    description:
      'A real-time chat application built with the MERN stack (MongoDB, Express, React, Node.js) supporting user authentication and messaging.',
    technologies: [
      'MongoDB',
      'Express',
      'React',
      'Node.js',
      'Socket.io',
      'CSS',
    ],
    // No live demo URL provided
    codeUrl: 'https://github.com/MrPenguz/MERN-Chatapp',
  },
  {
    title: 'Blogging Platform',
    image: project4,
    description:
      'A platform for creating and publishing blog posts, with rich text editing, commenting, and user profiles.',
    technologies: ['Vue.js', 'Express', 'MySQL', 'HTML', 'CSS'],
    // Add liveUrl and codeUrl when available
    liveUrl: '',
    codeUrl: 'https://github.com/yourusername/blogplatform',
  },
];

export const CONTACT = {
  telegram: 'moe_masri',
  phoneNo: '+963 956 374 959',
  email: 'mohammadmaser@gmail.com',
};
