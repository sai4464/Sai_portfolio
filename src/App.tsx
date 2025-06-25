import React, { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';
import ResumeDownload from './components/ResumeDownload';

const jobTitles = [
  'Software Developer',
  'Software engineer',
  'Python Developer',
  'Fullstack Developer',
  'ML Engineer',
  'Data Analyst',
  'Data Scientist'
];

interface SectionProps {
  children: ReactNode;
  className?: string;
  id: string;
  color?: string;
}

function Section({ children, className = '', id, color = 'from-[#457B9D]/20 to-[#1D3557]/10' }: SectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      className={`min-h-screen relative overflow-hidden ${className}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} backdrop-blur-3xl -z-10 animate-gradient`} />
      <div className="max-w-6xl mx-auto px-4 py-20">
        {children}
      </div>
    </motion.section>
  );
}

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const sections = ['home', 'about', 'education', 'experience', 'publications', 'projects', 'skills', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F1FAEE]/80 backdrop-blur-lg shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#home"
            className="text-xl font-bold bg-gradient-to-r from-[#457B9D] to-[#1D3557] bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            SC
          </motion.a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden md:flex space-x-8">
            {sections.map(section => (
              <motion.a
                key={section}
                href={`#${section}`}
                className={`capitalize ${
                  activeSection === section
                    ? 'text-[#457B9D]'
                    : 'text-gray-600 hover:text-[#1D3557]'
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {section}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#F1FAEE]"
        >
          <div className="px-4 py-2 space-y-2">
            {sections.map(section => (
              <motion.a
                key={section}
                href={`#${section}`}
                className={`block capitalize ${
                  activeSection === section
                    ? 'text-[#457B9D]'
                    : 'text-gray-600'
                }`}
                whileHover={{ x: 10 }}
                onClick={() => setIsOpen(false)}
              >
                {section}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}

function RotatingTitle() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % jobTitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 overflow-hidden">
      <motion.p
        key={titleIndex}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl text-[#1D3557]"
      >
        {jobTitles[titleIndex]}
      </motion.p>
    </div>
  );
}

const skills = [
  'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Express.js', 'Django', 'Flask', 
  'FastAPI', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Machine Learning', 'Data Science'
].map(skill => ({ name: skill }));

function App() {
  return (
    <div className="bg-gradient-to-br from-[#F1FAEE] to-[#E9F5DB] min-h-screen text-gray-800">
      <Navbar />
      
      <Section id="home" className="flex items-center justify-center" color="from-[#457B9D]/10 to-[#1D3557]/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
          className="text-center"
        >
          <motion.h1 
            className="text-7xl font-bold mb-4 bg-gradient-to-r from-[#457B9D] to-[#1D3557] bg-clip-text text-transparent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Sai Charan
          </motion.h1>
          <RotatingTitle />
          <motion.div 
            className="flex flex-col items-center gap-6 mt-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="https://github.com/sai4464"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#457B9D] hover:text-[#1D3557]"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                href="https://www.linkedin.com/in/sai-vathsavayi-1015261ba/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#457B9D] hover:text-[#1D3557]"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="mailto:vathsavayisai@gmail.com"
                className="text-[#457B9D] hover:text-[#1D3557]"
              >
                <Mail size={24} />
              </motion.a>
            </div>
            <ResumeDownload />
          </motion.div>
        </motion.div>
      </Section>

      <Section id="about" color="from-[#A8DADC]/20 to-[#457B9D]/10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src="src/img/IMG_2404.png"
            alt="Sai Profile"
            className="w-64 h-64 rounded-full object-cover shadow-lg ring-4 ring-white"
          />
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#457B9D] to-[#1D3557] bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a versatile software developer with a strong foundation in full-stack development,
              machine learning, and data science. My expertise spans across multiple technologies
              including React, Node.js, Django, and various cloud platforms. I'm passionate about
              creating efficient, scalable solutions and have experience in both frontend and
              backend development, as well as implementing ML/AI solutions for real-world problems.
            </p>
          </div>
        </div>
      </Section>

      <Section id="education" color="from-[#457B9D]/10 to-[#1D3557]/5">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#457B9D] to-[#1D3557] bg-clip-text text-transparent">
          Education
        </h2>
        <div className="space-y-8">
          {[
            {
              school: "California State University East Bay",
              degree: "Master of Science in Computer Science",
              period: "August 2023 - May 2025",
              description: "Pursuing advanced studies in Computer Science with focus on Machine Learning, Web Systems, and Advanced Computing concepts.",
              location: "Hayward, California"
            },
            {
              school: "Bharath University",
              degree: "Bachelor of Technology in Computer Science",
              period: "July 2019 - May 2023",
              description: "Completed undergraduate studies with strong foundation in core Computer Science subjects and Software Engineering principles.",
              location: "Chennai, India"
            }
          ].map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-[#1D3557]">{edu.school}</h3>
              <p className="text-lg text-gray-600">{edu.degree}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-2 mb-4">
                <span>{edu.period}</span>
                <span>•</span>
                <span>{edu.location}</span>
              </div>
              <p className="text-gray-700">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="experience" color="from-[#A8DADC]/20 to-[#457B9D]/10">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#457B9D] to-[#1D3557] bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="space-y-8">
          {[
           {
            company: "UL Solutions",
            role: "Software Engineer Intern",
            period: "May 2024 - Aug 2024",
            description: "Developed high-quality, scalable web components and backend services. Automated unit testing workflows, boosting testing speed by 30%. Collaborated with product owners and global teams to support CI/CD integration and robust code delivery.",
            technologies: ["Java", "Spring Boot", "React", "CI/CD", "Git", "Unit Testing"]
          },
          {
            company: "Hamaara",
            role: "Frontend Developer Intern",
            period: "Oct 2024 - Feb 2025",
            description: "Led the design and development of a responsive company website using modern UI libraries. Integrated animations and built reusable components to ensure consistent branding and user experience.",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Git", "CI/CD"]
          },
          {
            company: "Sikharas",
            role: "Web Developer Intern",
            period: "Nov 2023 - Feb 2024",
            description: "Engineered an end-to-end website using React.js, delivering a user-friendly, responsive UI. Integrated APIs and applied clean design principles to enhance component reusability and scalability.",
            technologies: ["React", "JavaScript", "CSS", "REST APIs", "Git"]
          },
          {
            company: "Self-Initiated Project",
            role: "AI Cricket Pitch & Score Predictor",
            period: "Apr 2025 - Present",
            description: "Building a real-time cricket pitch prediction system with live score analysis. Utilizing machine learning models to assess pitch conditions, match context, and team strategies to forecast match outcomes and individual performances.",
            technologies: ["Python", "Pandas", "Scikit-learn", "Flask", "Live Score API", "Machine Learning", "Data Visualization"]
          }
          ].map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/80 backdrop-blur p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-[#1D3557]">{exp.company}</h3>
              <p className="text-lg text-gray-600">{exp.role}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
              <p className="text-gray-700 mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="publications" color="from-[#457B9D]/10 to-[#1D3557]/5">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#457B9D] to-[#1D3557] bg-clip-text text-transparent">
          Publications
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/80 backdrop-blur p-8 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-3 text-[#1D3557]">
            Python-based Student Attentiveness Detection System
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
              IJSDR Journal
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
              April 2023
            </span>
          </div>
          <p className="text-gray-700 mb-6">
            Published research on developing an automated system using Python and machine learning
            for monitoring and analyzing student engagement during online learning sessions.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.ijsdr.org/papers/IJSDR2304272.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#1D3557] hover:text-[#457B9D] transition-colors"
            >
              <ExternalLink size={20} />
              <span>Read Paper</span>
            </a>
            <span className="text-gray-300">|</span>
            <span className="text-gray-600 text-sm">
              DOI: IJSDR2304272
            </span>
          </div>
        </motion.div>
      </Section>

      <Section id="projects" color="from-[#A8DADC]/20 to-[#457B9D]/10">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#457B9D] to-[#1D3557] bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            
              {
                title: "PrepNest – Role-Based Interview Preparation",
                description: "Designed an AI-driven interview preparation platform that tailors questions and study materials based on the selected job role and experience level.",
                technologies: ["React", "Node.js", "MongoDB", "OpenAI API"],
                link: "https://github.com/sai4464/prepnest",
                image: "src/img/prepnest.jpg"
                
              },
              {
                title: "Stock Manager for Small Restaurants",
                description: "Developed an intuitive stock management system tailored for small restaurants, enabling real-time inventory tracking, automated restocking alerts, and cost analysis for efficient supply chain management.",
                technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
                link: "https://github.com/sai4464/restaurant-stock-manager",
                image: "src/img/stockmanager.jpg"
              },
              {
                title: "Cricket Pitch & Match Outcome Predictor",
                description: "Building a real-time cricket analytics system to predict pitch behavior and match outcomes using live score data and machine learning. Focused on identifying conditions favoring batters or bowlers based on past trends and current match stats.",
                technologies: ["Python", "Scikit-learn", "Pandas", "Flask", "Live Score API", "Data Visualization"],
                image: "https://images.unsplash.com/photo-1579981075884-2a9d5b2d1353?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "AI-Powered Resume Analyzer",
                description: "Built an AI-driven resume analyzer that provides feedback on formatting, keyword optimization, and job match percentage using NLP and machine learning models.",
                technologies: ["Next.js", "Python", "TensorFlow", "OpenAI API"],
                image: "https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Fraud Detection System",
                description: "Implemented a machine learning model that detects fraudulent transactions using anomaly detection and classification algorithms. The system helps businesses minimize financial losses.",
                technologies: ["Python", "Scikit-learn", "Pandas", "Flask"],
                image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "AI Chatbot for Customer Support",
                description: "Created an AI-driven chatbot for automating customer support queries using NLP. Integrated real-time responses and adaptive learning for improved user experience.",
                technologies: ["Python", "Flask", "OpenAI API", "MongoDB"],
                image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=800&auto=format&fit=crop"
              },
              {
                title: "Medical Diagnosis System using Machine Learning",
                description: "Developed a predictive system for diagnosing diseases based on symptoms using classification models like Random Forest and Neural Networks.",
                technologies: ["Python", "TensorFlow", "Flask", "Scikit-learn"],
                image: "src/img/medical.jpg"
              },
              {
                title: "Sentiment Analysis on Social Media Data",
                description: "Designed a machine learning pipeline to analyze and classify sentiments from Twitter data using NLP and deep learning models.",
                technologies: ["Python", "NLTK", "TensorFlow", "Flask"],
                image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=800&auto=format&fit=crop"
              
              }
            
            
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg overflow-hidden group"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-[#1D3557]">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#1D3557] hover:text-[#457B9D] transition-colors"
                whileHover={{ x: 5 }}
              >
                <ExternalLink size={20} />
                <span>View Project</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="skills" className="min-h-0 py-12" color="from-[#A8DADC]/20 to-[#457B9D]/10">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#457B9D] to-[#1D3557] bg-clip-text text-transparent text-center">
          Skills & Technologies
        </h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-4 skills-scroll">
            {[...skills, ...skills].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="bg-white/80 backdrop-blur px-6 py-2 rounded-xl shadow-lg flex items-center gap-3 whitespace-nowrap"
              >
                <span className="font-medium text-[#1D3557] text-lg">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="contact" color="from-[#457B9D]/10 to-[#1D3557]/5">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#457B9D] to-[#1D3557] bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur p-8 rounded-xl shadow-lg"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1D3557] mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#457B9D] focus:border-transparent transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#1D3557] mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#457B9D] focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#1D3557] mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#457B9D] focus:border-transparent transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 text-white font-medium rounded-lg bg-gradient-to-r from-[#457B9D] to-[#1D3557] hover:from-[#1D3557] hover:to-[#457B9D] transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-[#1D3557]">Contact Information</h3>
              <div className="space-y-4">
                <motion.a
                  whileHover={{ x: 10 }}
                  href="mailto:vathsavayisai@gmail.com"
                  className="flex items-center gap-4 text-[#1D3557] hover:text-[#457B9D] transition-colors"
                >
                  <div className="p-3 bg-[#F0F4F8] rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm">vathsavayisai@gmail.com</p>
                  </div>
                </motion.a>
                <motion.a
                  whileHover={{ x: 10 }}
                  href="https://www.linkedin.com/in/sai-vathsavayi-1015261ba/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[#1D3557] hover:text-[#457B9D] transition-colors"
                >
                  <div className="p-3 bg-[#F0F4F8] rounded-lg">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm">Connect with me</p>
                  </div>
                </motion.a>
                <motion.a
                  whileHover={{ x: 10 }}
                  href="https://github.com/sai4464"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-[#1D3557] hover:text-[#457B9D] transition-colors"
                >
                  <div className="p-3 bg-[#F0F4F8] rounded-lg">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm">Check out my projects</p>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

export default App;