import React from "react";
import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby"

// Styles, Fonts, Images
import "../styles/components/feedback-block.scss";

const FeedbackBlock = ({ feedback }) => {
    const data = useStaticQuery(graphql`
        query ClientLogomarksImagesQuery {
        allFile(filter: {ext: {regex: "/(png)/"}, relativeDirectory: {eq: "logos/clients/logomarks"}}) {
            edges {
              node {
                base
                name
                childImageSharp {
                  fluid {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                  }
                }
              }
            }
          }
        }
        `
    )

    const getImage = (name) => {
        let edges = data.allFile.edges;
        const item = edges.find(item => item.node.name === name);
        if (item) {
            return item.node.childImageSharp.fluid
        }
    }

    const image = getImage(feedback.name);

    return (
        <div className="feedback-block">
            <div className="feedback-block__heading">
                <div className="feedback-block__heading__image">
                    <Img fluid={image} />
                </div>
                <div>
                    <h3>{feedback.client}</h3>
                    <h5>{feedback.service}</h5>
                </div>
            </div>
            <p>
                {feedback.testimonial}
            </p>
        </div>
    )
}

export default FeedbackBlock;