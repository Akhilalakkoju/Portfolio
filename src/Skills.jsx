import { useState } from "react";
import "./skills.css";
import html from "./assets/html.png";
import react from "./assets/react.svg";
import js from "./assets/js.png";
import css from "./assets/css-icon.webp";
import java from "./assets/java.png";
import c_lang from "./assets/c-lang.png";
import github from './assets/github-w.webp';
import vscode from "./assets/vscode.png";
import api from "./assets/API.svg";

export function Skills() {

    const [activeTab, setActiveTab] = useState("languages");

    const skills = {
        frontend: [
            { image: html, name: "HTML" },
            { image: css, name: "CSS" },
            { image: js, name: "JavaScript" },
            { image: react, name: "React" }
        ],

        languages: [
            { image: java, name: "Java" },
            { image: c_lang, name: "C Language" },
            { image: js, name: "JavaScript" }
        ],

        tools: [
            { image: github, name: "GitHub" },
            { image: vscode, name: "VS Code" }
        ],

        others: [
            { image: api, name: "API Integration" }
        ]
    };

    return (
        <>
            <h1 className="skills">
                <span className="skills-title">
                    <span style={{ color: "#fff" }}>My</span> Skills
                </span>
            </h1>

            <div className="skilllist">

                <div
                    className="one"
                    onClick={() => setActiveTab("languages")}
                >
                    Languages
                </div>
                
                <div
                    className="one"
                    onClick={() => setActiveTab("frontend")}
                >
                    Frontend
                </div>
                <div
                    className="one"
                    onClick={() => setActiveTab("tools")}
                >
                    Tools
                </div>

                <div
                    className="one"
                    onClick={() => setActiveTab("others")}
                >
                    Others
                </div>

            </div>

            <div className="skillcards">

                {
                    skills[activeTab].map((skill, index) => (
                        <div className="skillcard" key={index}>

                            <img
                                src={skill.image}
                                className="techimages"
                            />

                            <p className="techname">
                                {skill.name}
                            </p>

                        </div>
                    ))
                }
            </div>
        </>
    );
}
