import Input from "./input-field";
// sm:pb-17 md:pt-20 md:pb-24
const ContactForm = () => {
  return (
    <div className="shadow-xl text-white w-3/5 rounded-lg py-4 bg-[#f9ccab] flex flex-col items-center sm:pt-15 ">
      <div className="w-4/5 flex flex-col items-center space-y-4">
        <h1 className="text-lg  font-bold sm:text-xl md:text-2xl">
          Submit your Feedback
        </h1>
        <form className="w-full flex flex-col items-center space-y-2">
          <Input type="text" name="name" placeHolder="Name" />
          <Input type="email" name="email" placeHolder="Email Address" />
          <Input type="number" name="number" placeHolder="Phone Number" />
          <textarea
            className="w-full h-20 px-3 outline-none text-black"
            placeholder="Feedback"
            name="feedback"
          ></textarea>
          <button className="bg-[#d37170] text-white mt-2 py-2 px-5 text-xs sm:py-4 sm:px-8">
            JOIN NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
