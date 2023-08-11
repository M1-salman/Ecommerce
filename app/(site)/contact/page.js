"use client";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    setSubjectError("");
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setMessageError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;
    if (!email) {
      setEmailError("Please enter your email !");
      isValid = false;
    }
    if (!subject) {
      setSubjectError("Please enter a subject !");
      isValid = false;
    }
    if (!message) {
      setMessageError("Please enter your message !");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    setEmailError("");
    setSubjectError("");
    setMessageError("");

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        subject,
        message,
      }),
    });
    const { msg, errmsg } = await res.json();

    if (msg !== undefined) {
      toast.success(`${msg}`);
    } else {
      toast.error(`${errmsg}`);
    }

    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
          Got a technical issue? Want to send feedback about the website? Let us
          know.
        </p>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm mt-0.5 font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm mt-0.5 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@gmail.com"
            />
            {emailError && (
              <p className="text-red-400 font-sans text-sm mt-0.5 pl-0.5">
                {emailError}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm mt-0.5 font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={handleSubjectChange}
              className="block p-3 w-full text-sm mt-0.5 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Let us know how we can help you"
            />
            {subjectError && (
              <p className="text-red-400 font-sans text-sm mt-0.5 pl-0.5">
                {subjectError}
              </p>
            )}
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm mt-0.5 font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={handleMessageChange}
              className="block p-2.5 w-full text-sm mt-0.5 text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Leave a comment..."
            ></textarea>
            {messageError && (
              <p className="text-red-400 font-sans text-sm mt-0.5 pl-0.5">
                {messageError}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm mt-0.5 font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
