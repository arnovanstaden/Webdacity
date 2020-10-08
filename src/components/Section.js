import React from "react";
import "../styles/section.scss";
import classNames from "classnames";
import GreySkew from "../assets/images/sections/grey.svg";
import BlackSkew from "../assets/images/sections/black.svg";


const Section = (props) => {

    const SectionSkew = (props) => {
        if (props.light) {
            return (
                <img src={BlackSkew} alt="Black Section Skew" />
            )
        }
        return (
            <img src={GreySkew} alt="Grey Section Skew" />
        )
    }

    var sectionClass = classNames({
        "section": true,
        'light': props.light,
    });

    return (
        <section className={sectionClass}>
            <div className="section__skew">
                <SectionSkew light={props.light} />
            </div>
            <div className="section__heading">
                <h1>{props.headingBig}</h1>
                <h5>{props.headingSmall}</h5>
            </div>
            {props.children}
        </section>
    )
}

export default Section;