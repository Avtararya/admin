import { Fragment } from "react";
import NewsLetter from "../components/multiusable/news-letter";
import ContactForm from "../components/contact-us/contact-form";
import Social from "../components/contact-us/social-section";
import SocialContact from "../components/contact-us/middle-section";

const ContactUs = () => {
  return (
    <Fragment>
      <div className="flex items-center">
        <div className="flex-1 flex justify-center">
          <ContactForm />
        </div>
        <img
          className="flex-1"
          src="/images/contact-us-images/contact-us-banner.jpg"
          alt=""
        />
      </div>

      <SocialContact />
      <NewsLetter />
    </Fragment>
  );
};

export default ContactUs;
