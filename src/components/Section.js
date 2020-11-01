import React from "react";
import "../styles/components/section.scss";
import classNames from "classnames";
import GreySkew from "../assets/images/sections/grey.svg";
import BlackSkew from "../assets/images/sections/black.svg";

const Section = (props) => {

    const SectionSkew = (props) => {
        return (
            <div className="section__skew">
                {props.light ? <img src={BlackSkew} alt="Black Section Skew" /> : <img src={GreySkew} alt="Grey Section Skew" />}
            </div>
        )
    }

    const SectionHeading = (props) => {
        if (props.headingBig) {
            return (
                <div className="section__heading">
                    <h1>{props.headingBig}</h1>
                    <h5>{props.headingSmall}</h5>
                </div>
            )
        }
        return (
            <div className="section__heading">
            </div>
        )
    }

    var sectionClass = classNames({
        "section": true,
        'section--light': props.light,
        'section--simple': props.sectionSimple,
    }, props.classNameProp);

    return (
        <section className={sectionClass} id={props.idProp}>
            {props.skew === false ? null : <SectionSkew light={props.light} />}
            {props.container === false ?
                <>
                    <SectionHeading headingBig={props.headingBig} headingSmall={props.headingSmall} />
                    {props.children}
                </>
                :
                <div className="container">
                    <SectionHeading headingBig={props.headingBig} headingSmall={props.headingSmall} />
                    {props.children}
                </div>}
        </section>
    )
}

export default Section;