import './portfolio.css'
import {Skills} from './Skills.jsx';
import {Home} from './Home.jsx';
import {About} from './About.jsx';
import {Projects} from './Projects.jsx';
import {ContactMe} from './ContactMe.jsx';

export function Portfolio() {
    return (
        <>
            <section id = "home">  <Home /> </section>
            <section id = "about"> <About /> </section>
            <section id = "skills"> <Skills /> </section>
            <section id = "projects"> <Projects /> </section>
            <section id = "contact"> <ContactMe /> </section>
        </>
    );
}