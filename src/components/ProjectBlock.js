import React from 'react';
import Img from "gatsby-image";
import { Link, navigate } from "gatsby"


// Styles, Fonts, Images
import "../styles/components/project-block.scss";
import image from "../assets/images/projects/development/Hundredfold/landing.jpg"

const ProjectBlock = (props) => {
    const project = props.project;
    const link = "/portfolio/" + project.name.replace(/ /g, "");

    if (props.thumbnail) {
        console.log(props.thumbnail)
    }

    return (
        // <div className="project-block" onClick={goToProject}>
        <Link className="project-block" to={link}>
            <div>
                <div className="project-block__image">
                    <Img fluid={props.thumbnail} />
                </div>
                <div className="project-block__heading">
                    <h3>{project.name}</h3>
                    <p>{project.services}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProjectBlock;



