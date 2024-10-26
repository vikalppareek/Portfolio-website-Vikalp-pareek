import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Coding from "./Coding";

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section_title">Skills</h2>
            <span className="section_subtitle">My technical level</span>

            <div className="skills_container container grid">
                <Coding/>

                <Frontend />

                <Backend />
            </div> 
        </section>
    )
}

export default Skills;