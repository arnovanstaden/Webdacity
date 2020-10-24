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
                    fluid(jpegQuality: 10, maxWidth: 100, quality: 100, pngQuality: 100) {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                    srcWebp
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
                <div className="feedback-block__heading__client-details">
                    <h3>{feedback.client}</h3>
                    <h5>{feedback.service}</h5>
                </div>
            </div>
            <div className="feedback-block__feedback">
                <p>                {feedback.testimonial}
                </p>
            </div>
        </div>
    )
}

export default FeedbackBlock;