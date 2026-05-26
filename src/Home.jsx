import github from './assets/github-w.webp';
import linkedin from './assets/linkedin.webp';
import emailicon from './assets/emailicon.webp';
import anime from './assets/last.gif';


export function Home() {
    const textStyle = { color: '#fff' };
    return(
        <>
         <div className = "flex">
                             <div>
                                
                            <p style={textStyle}>Hi, I'm</p>
                        <h1 className = "Name">Akhila</h1>
                        <h2 style={textStyle}>Aspiring Software & Frontend Developer</h2>
                        <a href = "#projects">
                            <button>View Projects  &#8594;</button>
                        </a>
                        <a href = "#contact">
                            <button> Get In Touch  <span className = "letter">&#9993;</span></button>
                        </a>
                        <div className = "icons">
                            <a href = "https://www.linkedin.com/in/akhila-lakkoju-a63b5732b/" target = "_blank">
                                <img src = {linkedin} className = "icon"></img>
                            </a>
                            <a href = "https://github.com/Akhilalakkoju" target = "_blank">
                                <img src = {github} className = "icon"></img>
                            </a>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=akhilalakkoju779@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={emailicon} className="icon" />
                            </a>
                        </div>
                        </div>
                        <div className="anime-box">
  <img src={anime} className="anime" alt="coding girl" />
</div>
                        </div>
        </>
    );
}
