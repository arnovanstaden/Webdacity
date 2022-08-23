import React from "react";

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";

// Styles, Fonts, Images
import "../styles/pages/terms.scss";


const Terms = () => {
  return (
    <Layout
      pageMeta={{
        title: "Terms & Conditions | Webdacity",
        description: "Webdacity Service Terms & Conditions",
        robots: "noindex, nofollow"
      }}
      landingTitle={
        <h3>
          It's always important to establish <br /> some healthy <span>ground rules</span>.
        </h3>}
      landingBig={<h1>T's and  <br /> the C's</h1>}
      classNameProp="services"
    >

      <Section>
        <h1>Terms &amp; Conditions</h1>

        <h2>General</h2>

        <ul>
          <li>Webdacity will never and under no circumstances commence any work that will be billed above and
            beyond what was expressed in the initial quote. For extra services that are required by the client
            or deemed necessary by Webdacity, clients will be notified in advance and work will only commence
            if written approval/confirmation has been received from the client.</li>
          <li> All projects are subject to a 50% non-refundable deposit BEFORE any work will commence. This is to
            protect both Webdacity and respective client. If Clients wish to proceed hastily, they can provide
            us with a proof of payment</li>
          <li> No final project will be delivered without the entire project's payment being received in full.
          </li>
          <li> If more than 50% of the project's scope worth of work has been completed and clients wish to
            cancel the project, clients will be liable for the difference between the deposit received and the
            pro-rata amount owed for work done above and beyond 50% of the scope of the project</li>
          <li> Any and all projects that Webdacity undertakes and any and all intellectual property created in
            the process will be protected by copyright and remain the sole property of Webdacity, until the
            date that payment for services rendered have been received in full.</li>
        </ul>

        <h2>Development</h2>
        <ul>
          <li>Changes to projects falling outside the scope as stated in the initial quote will be charged at R400 p/h (at the time of writing)</li>
          <li>Webdacity reserves the right to place an unobtrusive link to our site ("https://webdacity.dev") in the footer of any or all page of all development projects with the link text describing the relevant scope of that project.</li>
          <li>For E-Commerce Solutions, monthly fees are payable in advance BEFORE the start of the month. If fees (or proof thereof) are not received, the website in question will be temporarily shut down. E-Commerce packages can be cancelled or put on hold with a 30-day notice period. If clients don't give the 30-day notice, the client will be held liable for the month(s) not paid and websites will only be restored to full working order once fees in arrears are paid in full. </li>
          <li>Webdacity takes no responsibility for any legal claims that may arise from copyright infringement or violations that may occur for clients choosing to provide their own media for use in their projects.</li>
        </ul>

        <h2>Social Media Management</h2>
        <ul>
          <li>
            Monthly invoices needs to be paid in full BEFORE the 1st of each month before Webdacity will
            commence any social media management. Proof of payment will be sufficient should the client bank
            elsewhere than First National Bank.
          </li>
          <li>Invoices will be sent out on the 25th of the preceding month. A payment reminder will be sent on the
            last day of every month if payment or proof thereof has not been received.</li>
          <li>Packages are not on a contractual basis and to cancel a package simply send a notice of cancellation
            at least 30-days before the start of the next month.</li>
          <li>All prepared content and posts must be approved by the client before scheduling. </li>
          <li>Community Management has a maximum response time of 12 hours during working hours and a
            maximum of 24 hours after hours.
          </li>
          <li>Social Media Management Reports will be sent out on the 10th of the next month.
          </li>
          <li>Videos created &amp; included in relevant package by Webdacity will have a maximum duration of 60 seconds.
          </li>

        </ul>

        <h2>Correspondence</h2>
        <ul>
          <li>Webdacity has a communication policy of sending 3 follow-up messages if clients have not responded to communication in a while. If no response has been received back after the 3rd follow-up message, Webdacity will assume the client is busy and that the client will get back to us at a time that suits them best.</li>
          <li>Should clients fail to respond within a time span of 3 months after the last correspondence, the full balance of the project will become due immediately.</li>
          <li>Should clients fail to send any content or media necessary (as described during the discovery meeting, the project scope as sent to the client or any further correspondence with a client) to complete a given project, the full balance of the project will become due immediately.</li>
        </ul>
      </Section>
    </Layout>
  )
}

export default Terms
