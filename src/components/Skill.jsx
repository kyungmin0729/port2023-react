import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import { Cicon, JavaIcon, CssIcon, HtmlIcon, JavascriptIcon, TypescriptIcon,
            MysqlIcon, OracleIcon,
            SpringIcon,
            JqueryIcon, ReactIcon,
            JsonIcon,
            TomcatIcon, NodejsIcon,
            IntelijIcon, VscodeIcon,
            GradleIcon,
            NotionIcon, GitIcon,
             } from "./Icon";
             
import { skillText } from "../constants";

const Skill = () => {
    useEffect(() => {
      const lenis = new Lenis({
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
  
      const handleAnchorClick = (e) => {
        e.preventDefault();
  
        const targetId = e.currentTarget.getAttribute("href");
        const targetElement = document.querySelector(targetId);
  
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      };
  
      const anchorLinks = document.querySelectorAll("a[href^='#']");
      anchorLinks.forEach((anchor) => {
        anchor.addEventListener("click", handleAnchorClick);
      });
  
      lenis.on("scroll", (e) => {
        console.log(e);
      });
  
      return () => {
        anchorLinks.forEach((anchor) => {
          anchor.removeEventListener("click", handleAnchorClick);
        });
      };
    }, []);

    return (
        <section id="skill">
            <div className="slkll__inner">
                <div className="skill__title">
                    <h2>
                        Skills<br/>
                    </h2>
                    <h3 style={{ filter: "grayscale(100%)" }}>
                            Language<JavaIcon/><Cicon/><CssIcon/><HtmlIcon/><JavascriptIcon/><TypescriptIcon/><br/>
                            DB<MysqlIcon/><OracleIcon/><br/>
                            Framework<SpringIcon/><br/>
                            Library<JqueryIcon/><ReactIcon/><br/>
                            DATA<JsonIcon/><br/>
                            Server<TomcatIcon/><NodejsIcon/><br/>
                            Platform<IntelijIcon/><VscodeIcon/><br/>
                            Equipment <em>Maven</em><GradleIcon/><br/>
                            System<NotionIcon/><GitIcon/>
                    </h3>
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