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
  const [isSending, setIsSending] = useState(false);

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
    setIsSending(true);

    try {
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
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="min-h-screen py-16 mt-10 bg-gradient-to-b from-gray-50 to-white">
      <div className="px-4 mx-auto max-w-4xl">
        <h2 className="mb-6 text-5xl font-bold text-center text-gray-900">
          Get in Touch
        </h2>
        <p className="mb-12 text-center text-gray-600 text-lg max-w-2xl mx-auto">
          Have a question or want to collaborate? We&apos;d love to hear from you. Fill out the form below, and we&apos;ll get back to you soon.
        </p>
        <form className="space-y-8 bg-white shadow-xl rounded-lg p-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="you@example.com"
              />
              {emailError && (
                <p className="mt-2 text-sm text-red-600">{emailError}</p>
              )}
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={handleSubjectChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="What's this about?"
              />
              {subjectError && (
                <p className="mt-2 text-sm text-red-600">{subjectError}</p>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              rows="6"
              value={message}
              onChange={handleMessageChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
              placeholder="Tell us what's on your mind..."
            ></textarea>
            {messageError && (
              <p className="mt-2 text-sm text-red-600">{messageError}</p>
            )}
          </div>
          <div className="text-right">
            <button
              type="submit"
              disabled={isSending}
              className="px-6 py-3 text-white bg-gray-900 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSending ? (
                <>
                  <span className="inline-block animate-spin mr-2">&#9696;</span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
