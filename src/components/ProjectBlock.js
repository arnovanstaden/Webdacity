import React from 'react';
import Img from "gatsby-image";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";



// Styles, Fonts, Images
import "../styles/components/project-block.scss";

const ProjectBlock = (props) => {
    const project = props.project;
    let link = "";
    if (project.type === "Design") {
        link = "/portfolio/design/" + project.name.replace(/ /g, "").toLowerCase();
    } else {
        link = "/portfolio/development/" + project.name.replace(/ /g, "").toLowerCase();
    }

    return (
        <Fade>
            <div className="project-block">
                <Link to={link}>
                    <div className="project-block__image">
                        <Img fluid={props.thumbnail} style={{ width: "100%" }} />
                    </div>
                    <div className="project-block__heading">
                        <h3>{project.name}</h3>
                        <p>{project.services}</p>
                    </div>
                </Link>
            </div>
        </Fade>
    )
}

export default ProjectBlock;



