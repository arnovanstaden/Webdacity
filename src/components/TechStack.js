import React from "react";
import ReactTooltip from 'react-tooltip';


// Styles, Fonts, Images
import "../styles/components/tech-stack.scss";

const TechStack = () => {
    return (
        <div className="tech-stack__grid">
            <i className="icon-html5" data-tip="HTML5"></i>
            <i className="icon-css3" data-tip="CSS3"></i>
            <i className="icon-javascript" data-tip="JavaScript"></i>
            <i className="icon-react" data-tip="ReactJS"></i>
            <i className="icon-typescript" data-tip="TypeScript"></i>
            <i className="icon-jquery" data-tip="JQuery"></i>
            <i className="icon-bootstrap" data-tip="Boostrap"></i>
            <i className="icon-sass" data-tip="SASS"></i>
            <i className="icon-gatsby" data-tip="GatsbyJS"></i>
            <i className="icon-git" data-tip="Git"></i>
            <i className="icon-github" data-tip="GitHub"></i>
            <i className="icon-stackoverflow" data-tip="Stack Overflow"></i>
            <i className="icon-npm" data-tip="NPM"></i>
            <i className="icon-netlify" data-tip="Netlify"></i>
            <i className="icon-jest" data-tip="Jest"></i>
            <i className="icon-webpack" data-tip="Webpack"></i>
            <i className="icon-node-dot-js" data-tip="NodeJS"></i>
            <i className="icon-mongodb" data-tip="MongoDB"></i>
            <i className="icon-adobeillustrator" data-tip="Adobe Illustrator"></i>
            <i className="icon-adobephotoshop" data-tip="Adobe Photoshop"></i>
            <i className="icon-adobeaftereffects" data-tip="Adobe After Effects"></i>
            <i className="icon-adobeindesign" data-tip="Adobe InDesign"></i>
            <ReactTooltip
                place="bottom"
                effect="solid"
                borderColor="#0061f0"
                border={true} />
        </div>
    )
}

export default TechStack