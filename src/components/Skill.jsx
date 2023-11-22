import React from "react";
import { Cicon, JavaIcon, CssIcon } from "./Icon";
import { skillText } from "../constants";

const Skill = () => {
    return (
        <section id="skill">
            <div className="slkll__inner">
                <div className="skill__title">
                    <h2>
                        Skills <em>집념과 도전정신</em><br />
                        Language<br />
                        <JavaIcon /><Cicon /><CssIcon />
                        
                    </h2>
                </div>
                <div className="skill__desc">
                    {skillText.map((skill, key) => (
                        <div key={key}>
                            <span>{key+1}.</span>
                            <h3>{skill.title}</h3>
                            <p>{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skill;