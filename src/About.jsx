import person_icon from './assets/person_icon.png';
import edu from './assets/edu.png';
import college from './assets/college.png';
import location from './assets/location.png';
import email from './assets/email.png';



export function About() {
    const textStyle = { color: '#fff' };
    return (
        <>
         <h1 className = "About"><span className = "text"><span style={textStyle}>About</span> Me</span></h1>
                <div className="about-wrapper">
                   
                    <div className="about-text">                        
                        <p style={textStyle}>
    I am a Computer Science student passionate about frontend development, problem solving, and continuous learning.

    <br /><br />

    Currently, I am improving my skills in DSA, React, JavaScript, and responsive web design by building real-world projects and exploring modern web technologies.
</p>
                        <div className = "wrap">
                                <div className = "details">
                    <div className = "row">
                        <img src={person_icon} alt="Person icon" className = "image"/>
                        <p style={{ ...textStyle, display: 'inline-block' , margin: '0px' }}>Name: Lakkoju Jaya sri Durga Venkata Naga Sai Akhila</p>
                    </div>
                    <div className = "row" >
                        <img src={edu} alt="Person icon" className = "image"/>
                        <p style={{ ...textStyle, display: 'inline-block' }}>Education : B.Tech CSE</p>
                    </div>
                    <div className = "row">
                        <img src={college} alt="Person icon" className = "image"/>
                        <p style={{ ...textStyle, display: 'inline-block' }}>College: Shri Vishnu Engineering College For Women</p>
                    </div>
                    <div className = "row">
                        <img src={location} alt="Person icon" className = "image"/>
                        <p style={{ ...textStyle, display: 'inline-block' }}>Location : India</p>
                    </div>
                    <div className = "row">
                        <img src={email} alt="Person icon" className = "image"/>
                        <p style={{ ...textStyle, display: 'inline-block' }}>Email: akhilalakkoju779@gmail.com</p>
                    </div>
                </div>
                        </div>
                    </div>
                   
                </div>
        </>
    );
}
