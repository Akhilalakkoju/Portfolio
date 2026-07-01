import youtube from "./assets/youtube_project.png";
import todo from "./assets/todo.png";
import form from "./assets/form.png";
import myWebsite from "./assets/my-website.png";
import "./Projects.css";

export function Projects() {
  const projects = [
    {
      image: myWebsite,
      title: "Personal Portfolio Website",
      description:
        "A responsive personal portfolio website built using HTML, CSS, and JavaScript, focused on modern UI and responsive frontend design.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/Akhilalakkoju/Portfolio",
      live: "https://portfolio-78ns.vercel.app/"
    },
    {
      image: youtube,
      title: "Youtube Static Clone",
      description:
        "A responsive YouTube clone built using HTML, CSS, and JavaScript, focused on modern UI and responsive frontend design.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/Akhilalakkoju/static-youtube-clone",
      live: "https://static-youtube-clone.vercel.app/"
    },
    {
      image: todo,
      title: "React TODO List Application",
      description:
        "A responsive React To-Do App focused on task management, state handling, and clean UI design.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/Akhilalakkoju/todo_list",
      live: "https://todolist-delta-one-37.vercel.app/"
    },
    {
      image: form,
      title: "React Form Application",
      description:
        "A responsive React Form Application built for collecting and managing user input through interactive forms and clean UI design.",
      tech: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/Akhilalakkoju/react-form-validator",
      live: "https://react-form-validator-bnue.vercel.app/"
    }
  ];

  return (
    <section id="project">
      <h1 className="skills">
        <span className="skills-title">
          <span style={{ color: "#fff" }}>My</span> Projects
        </span>
      </h1>

      <div className="project-cards">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="text">
              <h2 style={{ color: "#a855f7" }}>{project.title}</h2>

              <p style={{ color: "#fff" }}>{project.description}</p>

              <div className="technologies">
                {project.tech.map((item, i) => (
                  <div className="tech" key={i}>
                    {item}
                  </div>
                ))}
              </div>

              <a
                href={project.github}
                className="github"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repository ↗
              </a>

              <a
                href={project.live}
                className="github"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
