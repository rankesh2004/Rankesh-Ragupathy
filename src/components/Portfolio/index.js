/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import BackgroundDesign from "../BackgroundDesign";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPhoneAlt, FaLinkedinIn, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { SiWhatsapp, SiHackerrank } from "react-icons/si";
import "./index.css";

const skill = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Flexbox",
  "Javascript",
  "Reactjs",
  "Python",
  "Express",
  "Nodejs",
  "MySql",
  "Git",
  "GitHub",
  "Docker",
];

const Portfolio = () => {
  const navRef = useRef();
  const handleClick = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="full-container">
      <BackgroundDesign />
      <nav className="Navbar-container">
        <div className="Navbar-logo">
          <a href="#home" className="link bg-portfolio-logo">
            <img
              src="https://res-console.cloudinary.com/dnncpaqsn/media_explorer_thumbnails/58f7b93272cf0adbd26b0d055bfb2393/detailed"
              alt="portfolio-logo"
              className="portfolio-logo"
            />
          </a>
          <a href="#home" className="name">
            RANKESH RAGUPATHY{" "}
          </a>
        </div>
        <div ref={navRef} className="link-container">
          <button className="nav-btn nav-close-btn" onClick={handleClick}>
            <IoClose className="nav-icon" />
          </button>
          <a href="#home" className="link" onClick={handleClick}>
            HOME
          </a>
          <a href="#about" className="link" onClick={handleClick}>
            ABOUT
          </a>
          <a href="#projects" className="link" onClick={handleClick}>
            PROJECTS
          </a>
          <a href="#contact" className="link" onClick={handleClick}>
            CONTACT
          </a>
        </div>
        <button className="nav-btn" onClick={handleClick}>
          <GiHamburgerMenu className="nav-icon" />
        </button>
      </nav>
      <div id="home">
        <ul className="home-detail">
          <li>
            <a
              href="https://www.linkedin.com/in/rankesh-r"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="home-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rankesh2004"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="home-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/r_rankesh"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitterX className="home-icon" />{" "}
            </a>
          </li>
          <li>
            <a
              href="https://www.hackerrank.com/profile/rangesh_csr_2004"
              target="_blank"
              rel="noreferrer"
            >
              <SiHackerrank className="home-icon" />
            </a>
          </li>
        </ul>
        <div className="home-container">
          <h1 className="greeting">
            HEY, I'M <span className="greeting-name">RANKESH RAGUPATHY</span>
          </h1>
          <p className="intro-para">
            Aspiring software engineer ready to contribute enthusiasm and fresh
            perspectives to tackle challenges and learn
          </p>
          <a href="#projects" className="outer">
            <button type="button" className="portfolio-btn">
              PROJECTS
            </button>
          </a>
        </div>
      </div>
      <div id="about">
        <h1 className="heading">ABOUT ME</h1>
        <p className="horizontal">_</p>
        <p className="para">
          Here you will find more information about me, my current skills mostly
          in terms of programming and technology
        </p>
        <div className="about-skill-container">
          <div className="about-container">
            <h1 className="header">Professional Summary</h1>
            <p className="para-about">
              I possess problem-solving skills, attention to detail, and a
              collaborative mindset, enabling me to work effectively in both
              individual and team-based environments. I am adaptable and always
              eager to learn and explore new technologies and tools to enhance
              my development skills.
            </p>
            <a href="#contact">
              <button type="button" className="portfolio-btn">
                CONTACT
              </button>
            </a>
          </div>
          <div className="skill-container">
            <h1 className="header">My Skills</h1>
            <ul className="skill-card-container">
              {skill.map((eachItem) => (
                <li className="skill-box">
                  <p>{eachItem}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div id="projects">
        <h1 className="heading">PROJECTS</h1>
        <p className="horizontal">_</p>
        <p className="pro-para">
          Explore my personal projects, highlighting my skills and creativity as
          a newcomer in the field
        </p>
        <div className="project-container">
          <div className="project-cards-container">
            <h1 className="header">Food Munch</h1>
            <p className="para-about">
              Developed a responsive website for Food Store where users can see
              a list of food items, detailed information about a food item,
              offers
            </p>
            <p className="para-about">
              Technologies used: <b>HTML</b>, <b>CSS</b>, <b>Bootstrap</b>
            </p>
            <ul className="project-card-container">
              <li className="project-card">
                Designed page using following HTML structure elements like li,
                header, article, footer elements and different bootstrap
                components to show different sections in the website and
                different bootstrap classes for responsiveness through
                mobile-first approach.
              </li>
              <li className="project-card">
                Implemented product youtube videos by using bootstrap embed and
                model components.
              </li>
            </ul>
            <div className="project-link-container">
              <a
                href="https://foodmunchrr.ccbp.tech/"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="view-btn">
                  View Website
                </button>
              </a>
              <a
                href="https://github.com/rankesh2004/Food-Munch"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="Git-btn">
                  GitHub
                </button>
              </a>
            </div>
          </div>
          <div className="project-cards-container">
            <h1 className="header">Todo Application</h1>
            <p className="para-about">
              Developed persistent todo application with CRUD operations to
              track list of tasks
            </p>
            <p className="para-about">
              Technologies used: <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>,{" "}
              <b>Bootstrap</b>
            </p>
            <ul className="project-card-container">
              <li className="project-card">
                Displayed list of todos with HTML list elements, styled todo
                list using CSS, Bootstrap
              </li>
              <li className="project-card">
                Implemented todo crud operations by using <b>JavaScript</b>{" "}
                event listeners and updated UI dynamically by using JavaScript
                DOM operations.
              </li>
              <li className="project-card">
                Used Arrays, Objects and their methods during todolist{" "}
                <b>CRUD</b> Operations, Persisted todo list state on page
                reloads using local storage methods
              </li>
            </ul>
            <div className="project-link-container">
              <a
                href="https://todolistrr.ccbp.tech/"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="view-btn">
                  View Website
                </button>
              </a>
              <a
                href="https://github.com/rankesh2004/TodoList"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="Git-btn">
                  GitHub
                </button>
              </a>
            </div>
          </div>
          <div className="project-cards-container">
            <h1 className="header">Twitter API</h1>
            <p className="para-about">
              Twitter API Integration using <b>Node.js</b> with <b>Express</b>{" "}
              Framework
            </p>
            <ul className="project-card-container">
              <li className="project-card">
                Designed and developed custom routes and controllers using
                Express to handle Twitter API requests and responses
                effectively.
              </li>
              <li className="project-card">
                Utilized the `twitter` NPM package to interact with the Twitter
                API and perform actions such as fetching tweets, posting tweets,
                and retrieving user information.
              </li>
            </ul>
            <div className="project-link-container">
              <a
                href="https://github.com/rankesh2004/Twitter-Api"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="Git-btn">
                  GitHub
                </button>
              </a>
            </div>
          </div>
          <div className="project-cards-container">
            <h1 className="header">Password Manager</h1>
            <p className="para-about">
              Developed a Password Manager using <b>React.js</b>. The project
              aimed to provide a userfriendly solution for storing and managing
              passwords.
            </p>
            <ul className="project-card-container">
              <li className="project-card">
                Enable users to add, edit, and delete passwords, with validation
                checks for data integrity.
              </li>
              <li className="project-card">
                Technologies Utilized: React.js: Developed the front-end
                components, state management, and user interface.
              </li>
              <li className="project-card">
                CSS: Styled the application for an engaging and user-friendly
                interface.
              </li>
            </ul>
            <div className="project-link-container">
              <a
                href="https://rankeshpm.ccbp.tech/"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="view-btn">
                  View Website
                </button>
              </a>
              <a
                href="https://github.com/rankesh2004/PasswordManager"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="Git-btn">
                  GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="contact">
        <h1 className="heading">CONTACT</h1>
        <p className="horizontal">_</p>
        <p className="contact-intro-para">
          My portfolio includes my contact details. Feel free to reach out for
          any inquiries or collaborations
        </p>
        <div className="contacts">
          <div className="contact-detail">
            <FaPhoneAlt className="icon" />
            <p className="contact-para">+91 63747452527</p>
          </div>
          <div className="contact-detail">
            <MdMailOutline className="mail-icon" />
            <p className="contact-para">rangesh.csr.2004@gmail.com</p>
          </div>
          <div className="contact-btn-container">
            <a
              href="https://www.linkedin.com/in/rankesh-r"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="linkedIn-btn">
                <FaLinkedinIn className="linked-icon" /> <span>Linkedin</span>
              </button>
            </a>
            <a
              href="https://wa.me/916374752527"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="whatsApp-btn">
                <SiWhatsapp className="whatsApp-icon" /> <span>WhatsApp</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
