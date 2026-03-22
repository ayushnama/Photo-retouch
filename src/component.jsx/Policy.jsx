import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-page">
      <Navbar />

      <div className="privacy-container">
    <section className="privacy-hero">
  <img
    src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1600"
    alt="Privacy Policy"
  />
</section>

        <section className="privacy-content">
          <h1>Privacy Policy</h1>

          <p>
            This privacy policy explains how Photon Retouch manages your
            information. We understand how important data privacy is for both
            individuals and organizations. We gather personal information, which
            tends to simplify transactions and ensure seamless operations in the
            digital world. Our policy protects your data by only utilizing it
            for necessary transactions with Photon Retouch and prevents any
            misuse. Your trust is vital to us, and we will respect your
            privacy.
          </p>

          <h2>Information Collection and Use</h2>

          <p>
            Photon Retouch may gather personal identification information from
            users in a variety of ways, such as when they visit our site,
            subscribe to our newsletter, register, place a purchase, or
            interact with other services, features, or resources on our site.
            Users may also be required to provide their payment information,
            name, phone number, and email address.
          </p>

          <p>
            PS- Individuals can choose not to supply personal information, but
            doing so may limit their ability to access some services or
            activities on the website.
          </p>

          <p>
            <strong>1. Non-Personal Identification Information:</strong> Users’
            non-personal information can be gathered by us via their
            interactions with our website. This can include details like the
            browser type, type of device, and technical information about how
            users connect to our site, such as their operating system and
            internet service provider.
          </p>

          <p>
            <strong>2. Web Browser Cookies:</strong> Photon Retouch may use
            cookies to improve the user experience on our website. A cookie is a
            small text file that is stored on a user’s device to improve the
            website’s operation. Users can enable their web browser to refuse
            cookies or be notified when cookies are being sent to their device.
            However, if they do so, some aspects of the site may not work
            properly.
          </p>

          <h2>How We Use Collected Information</h2>

          <p>
            We collect and utilize users’ personal information for the following
            purposes:
          </p>

          <p>
            To process payments, we only use the information users supply when
            placing an order to fulfill that order. We do not disclose this
            information to third parties unless required to perform the service.
          </p>

          <p>
            <strong>1. To Send Periodic Emails:</strong> We may utilize users’
            email to send them information and updates about their orders. This
            could include responses to inquiries, questions, and other
            requests.
          </p>

          <p>
            <strong>2. Image Usage Policy:</strong> At Photon Retouch, we take
            your privacy seriously and adhere to a strict image usage policy.
            The images you provide for retouching or editing are used
            exclusively for the services you’ve requested.
          </p>

          <ul className="privacy-list">
            <li>
              <strong>How We Handle Your Images:</strong> Photon Retouch
              prioritizes the confidentiality and privacy of your photographs.
              The photographs you provide for our retouching or video editing
              services are securely preserved and used only for the purposes
              specified. We guarantee that your photographs will never be
              shared, sold, or used in any other way without your specific
              permission. After the project is completed, your photographs are
              stored securely for a brief time as a backup. They will be
              permanently removed after this period unless you request something
              different. Your trust and the security of your photographs are our
              top objectives.
            </li>

            <li>
              <strong>How We Protect Your Information:</strong> Photon Retouch
              uses robust security methods to secure your personal information,
              such as usernames, passwords, and transaction data, against
              unauthorized access, change, disclosure, or destruction. While we
              use strong security mechanisms, no system is perfect, so we cannot
              guarantee the absolute security of our website. However, we
              safeguard your data and photographs using industry-standard
              encryption and security protocols. Your files are securely saved
              throughout the process, beginning with the moment you submit them.
              We maintain the highest level of security, keeping your
              photographs and personal information secret and secure at all
              times. Your trust in us is crucial, and we are constantly working
              to safeguard the privacy and security of your data.
            </li>

            <li>
              <strong>Retention of Information:</strong> We keep your
              information just as long as necessary to accomplish the purposes
              for which it was obtained, which include providing services and
              meeting legal responsibilities. Once your project is completed,
              your photographs will be safely saved for a limited time as a
              backup. After this time, we will permanently destroy your files
              unless you request otherwise. Personal information, such as
              usernames and transaction data, is also maintained for as long as
              necessary. We are committed to protecting your data and keeping it
              secret throughout the retention process.
            </li>

            <li>
              <strong>Disclosing Your Personal Information:</strong> We do not
              sell, trade, or rent the user’s personally identifiable
              information to anyone.
            </li>

            <li>
              <strong>Third-Party Websites:</strong> Users may encounter content
              on our website that links to third-party sites. We have no control
              over the content or practices on these websites.
            </li>

            <li>
              <strong>Changes to This Privacy Policy:</strong> Photon Retouch
              reserves the right to update this privacy policy at any time. We
              encourage users to review this page regularly for any updates.
            </li>
          </ul>

          <h2>Your Acceptance of These Terms</h2>

          <p>
            By visiting our website and doing business with us for any of your
            picture editing needs (such as background removal, clipping path
            services, or photo retouching), you agree to our data policy. We
            provide outstanding service while also protecting your data privacy.
            If you have concerns or recommendations for improving the integrity,
            privacy, safety, or security of our website, please email us at{" "}
            <a href="mailto:info@photonretouch.com">info@photonretouch.com</a>
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}