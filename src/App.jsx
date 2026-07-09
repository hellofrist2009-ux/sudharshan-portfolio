import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import myphoto from './assets/myphoto.jpg'
import './App.css'

function App() {
 const projects = [
 { title: "ToDo App", desc: "The source which i created by me ",live: "#", code: "#" },
 { title: "Automated Job Tracker", desc: "open job tracker API + REACT JS  COMMING SOON ...", live: "#", code: "#"
},
 { title: "Restaurant Website", desc: "HTML CSS la responsive landing page COMING SOON...", live: "#", code: "#"
},
 ]
 return (
 <div>
 {/* Navbar */}
 <nav>
 <div className="container">
 <h1>SUDHARSHAN</h1>
 <div>
 <a href="#about">About</a>
 <a href="#projects">Projects</a>
 <a href="#contact">Contact</a>
 </div>
 </div>
 </nav>
 
 
{/* Hero Section */}
 <section className="hero">
 <div><img
  src={myphoto}
  style={{width: '250px', height: '250px', borderRadius: '50%', border: '4px solid #22d3ee'}}
/>
 <h2>Hi, I'm <span>SUDHARSHAN</span></h2><br></br>
 <p>Full stack Developer | React + Vite</p><br></br>
<br></br>
<a href="#projects" className="btn">View My Work</a>
 </div>
 </section>
 {/* About Section */}
 <section id="about">
 <h2>About Me</h2>
 <p style={{marginTop: '20px', lineHeight: '1.8'}} >
 I am a 12th graduate and passionate about web development and programmer(beginner).
 I build responsive websites using React, HTML, and CSS.
 Currently looking for opportunities to learn and grow as a developer.
 </p>
 </section>
 {/* Projects Section */}
 <section id="projects" style={{background: '#1e293b'}}>
 <h2>My Projects</h2>
 <div className="projects-grid">
 {projects.map((p, i) => (
 <div className="card" key={i}>
 <h3 style={{color: '#22d3ee', marginBottom: '10px'}}>{p.title}</h3>
 <p style={{marginBottom: '15px'}}>{p.desc}</p>
 <a href={p.live}>Live Demo</a>
 <a href={p.code}>GitHub</a>
 </div>
 ))}
 </div>
 </section>
 {/* Contact Section */}
 <section id="contact">
 <h2>Contact Me</h2>
 <p style={{marginTop: '20px'}} >Email:<a href="mailto:hellofrist2009@gmail.com">hellofrist2009@gmail.com</a></p>
 
 <p style={{marginTop: '20px'}} >GitHub: <a href="https://github.com/hellofrist-ux" target="_blank" rel="noopener noreferrer">github.com/hellofrist-ux</a></p>
 
 <p style={{marginTop: '20px'}} >LinkedIn:<a href ="https://in.linkedin.com/in/sudharshan-g-b33a62420" target="_blank" rel="noopener noreferrer">Linkedin/sudharshan-g</a></p>
 </section>
 
 <footer>
 <p>© 2026 SUDHARSHAN. Built with React + Vite</p>
 </footer>
 </div>
 )
}
export default App
