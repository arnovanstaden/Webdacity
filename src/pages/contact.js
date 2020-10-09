import React from "react";
import Layout from "../components/Layout";
import "../styles/pages/contact.scss";
import "../assets/fonts/social/css/social.css"

const Contact = () => {
    return (
        <Layout
            pageMeta={{
                title: "Contact | Webdacity",
                description: "Contact Us",
                canonical: "/contact"
            }}
            landingTitle={
                <h1 className="landing__inner__title">
                    We’re always interested in hearing <br />
                    about <span>new projects</span>.
            </h1>}
            landingBig={<h1 className="landing__inner__big">Let's Work <br /> Together</h1>}
        >

            <section className="contact">
                <div className="contact__form">

                    <h1><span>Hello</span>.</h1>
                    <p>Have an idea? Tell us about it.</p>
                    <form action="">

                    </form>
                </div>
                <div className="contact__details">
                    <div className="contact__details__info">
                        <p>Contact Information</p>
                        <a href="mailto:hello@webdacity.co.za">hello@webdacity.co.za</a>
                        <a href="tel:+27797405874">+27 79 740 5874</a>
                        <a href="https://goo.gl/maps/fAWWq2N12tAA3YmX9">Cape Town, South Africa</a>
                        <a>Mon - Fri: 8.30 - 17.30</a>
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
                            <i className="icon-dribble"></i>
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
            </section>
        </Layout >
    )
}

export default Contact