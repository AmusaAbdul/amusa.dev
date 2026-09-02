import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import About from "./Components/About/About"
import Project from "./Components/Project/Project"
import Skill from "./Components/Skill/Skill"
import Education from "./Components/Education/Education"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer"
import BtnUp from "./Components/BtnUp"

function App() {

  return (
    <>
      <div>
        <Header />
      </div>
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="skills">
        <Skill />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <hr className="border-t border-line dark:border-surface-2-dark"/>
      <Footer />
      <BtnUp />
    </>
  )
}

export default App