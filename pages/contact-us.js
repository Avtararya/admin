import { Fragment } from 'react';
import NewsLetter from '../components/multiusable/news-letter';
import ContactForm from '../components/contact-us/contact-form';
import Social from '../components/contact-us/social-section';
import SocialContact from '../components/contact-us/middle-section';

const ContactUs = () => {
  return (
    <Fragment>
      <div className="hidden lg:block">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 flex w-full justify-center">
            <ContactForm />
          </div>
          <img
            className="flex-1"
            src="/images/contact-us-images/contact-us-banner.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="lg:hidden">
        <img
          className="flex-1"
          src="/images/contact-us-images/contact-us-banner.jpg"
          alt=""
        />
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex-1 flex w-full justify-center">
            <ContactForm />
          </div>
        </div>
      </div>

      <SocialContact />
      <NewsLetter />
    </Fragment>
  );
};

export default ContactUs;
