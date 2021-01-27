import React from "react";
import Fade from "react-reveal/Fade"


// Components
import Layout from "../components/Layout";

// Styles, Fonts, Images
import "../styles/pages/contact.scss";

const Contact = () => {
    return (
        <Layout
            pageMeta={{
                title: "Contact | Webdacity",
                description: "We’re always interested in hearing about new projects.",
                canonical: "/contact",
                classNameProp: "contact"
            }}
            landingTitle={
                <h3>
                    We’re always interested in hearing <br />
                    about <span>new projects</span>.
            </h3>}
            landingBig={<h1>Let's Work <br /> Together</h1>}
        >

            <section className="contact">
                <Fade left>
                    <div className="contact__form">
                        <h1><span>Hello</span>.</h1>
                        <p>Have an idea? Tell us about it.</p>
                        <form data-netlify="true" name="contact" method="post">
                            <input type="hidden" name="contact" value="contact" />
                            <div className="contact__form__group">
                                <input type="text" name="Name" placeholder="Your Name" required />
                                <label htmlFor="Name">Your Name</label>
                            </div>
                            <div className="contact__form__group">
                                <input type="email" name="Email" placeholder="Your Email" required />
                                <label htmlFor="Email">Your Email</label>
                            </div>
                            <div className="contact__form__group">
                                <textarea name="Message" placeholder="Your Message" required></textarea>
                                <label htmlFor="Message">Your Message</label>
                            </div>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </Fade>
                <Fade right>
                    <div className="contact__details">
                        <div className="contact__details__info">
                            <p>Contact Information</p>
                            <a href="mailto:hello@webdacity.dev">hello@webdacity.dev</a>
                            <a href="tel:+27797405874">+27 79 740 5874</a>
                            <a href="https://goo.gl/maps/fAWWq2N12tAA3YmX9">Cape Town, South Africa</a>
                            <p>Mon - Fri: 8.30 - 17.30</p>
                        </div>
                        <div className="contact__details__social">
                            <p>Stay up to date with the latest news &amp; projects...</p>
                            <a href="https://www.instagram.com/?hl=en" target="blank">
                                <i className="icon-instagram"></i>
                            </a>
                            <a href="https://www.linkedin.com/company/webdacity" target="blank">
                                <i className="icon-linkedin"></i>
                            </a>
                            <a href="https://www.facebook.com/Webdacity" target="blank">
                                <i className="icon-facebook"></i>
                            </a>
                        </div>
                        <div className="contact__details__social">
                            <p>For the design enthusiasts, get inspired here...</p>
                            <a href="https://dribbble.com/Webdacity" target="blank">
                                <i className="icon-dribbble"></i>
                            </a>
                            <a href="https://www.behance.net/Webdacity" target="blank">
                                <i className="icon-behance"></i>
                            </a>
                        </div>
                        <div className="contact__details__social">
                            <p>For the geeky amongst us, you know where to go...</p>
                            <a href="https://github.com/Webdacity" target="blank">
                                <i className="icon-github"></i>
                            </a>
                        </div>
                    </div>
                </Fade>
            </section>
        </Layout >
    )
}

export default Contact