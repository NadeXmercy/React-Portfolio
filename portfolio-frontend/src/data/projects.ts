export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
    image: '/src/assets/E-commerce image.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    githubUrl: 'https://github.com/NadeXmercy',
    liveUrl: 'https://ecommerce-demo.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    image: '/src/assets/task management image.jpg',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
    githubUrl: 'https://github.com/NadeXmercy',
    liveUrl: 'https://taskmanager-demo.com'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing projects and skills.',
    image: '/src/assets/portfolio image.jpg',
    technologies: ['React', 'TypeScript', 'Material-UI', 'Framer Motion'],
    githubUrl: 'https://github.com/NadeXmercy',
    liveUrl: 'https://portfolio-demo.com'
  }
]; 