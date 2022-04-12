import { Fragment, useState } from "react";
import NewsLetter from "../components/multiusable/news-letter";
import { AnimatePresence } from "framer-motion";
import SocialContact from "../components/contact-us/middle-section";
import ContactModal from "../components/layout/contact-modal";

const ContactUs = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
    // document.body.style.overflow = 'hidden';
  };

  return (
    <Fragment>
      <div className={` flex items-center bg-white h-[calc(100vh-80px)]`}>
        <div className="z-10 flex-1 flex justify-center">
          {modal ? (
            <ContactModal setModal={setModal} />
          ) : (
            <div
              className="  text-white w-72 h-10 flex items-center justify-center  bg-gradient-to-r from-cyan-500 to-blue-400  border-b-0 
              shadow-xl shadow-gray-600"
            >
              <button onClick={openModal}>Contact US</button>
            </div>
          )}
        </div>
        <img
          className="flex-1"
          height="50px"
          width="30px"
          src="/images/contact-us-images/contact-banner.png"
          alt=""
        />
      </div>

      <AnimatePresence initial={false} exitBeforeEnter={true}></AnimatePresence>

      <SocialContact />
      <NewsLetter />
    </Fragment>
  );
};

export default ContactUs;

// shadow-purple-900/50
// hover: bg-gradient-to-br focus:ring-4 focus:ring-purple-600 dark:focus:ring-purple-800
