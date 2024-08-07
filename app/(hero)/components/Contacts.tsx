"use client";
import React, { useState } from "react";
import { AnimatedSection } from "@/components/ui/animated-reveal";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";

const Popup = ({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) => (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
    <div className="bg-white p-6 rounded-md shadow-lg flex flex-col items-center justify-center">
      <p className="text-lg font-semibold text-black">{message}</p>
      <button
        className="mt-4 px-4 py-2 bg-amber-300 text-white rounded-md hover:opacity-70"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

export default function Contacts() {
  const [loading, setLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY || "");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setPopupMessage("Message Sent");
      } else {
        setPopupMessage("Failed, Try Again Later");
      }
    } catch (error) {
      setPopupMessage("Failed, Try Again Later");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="py-8">
      {popupMessage && (
        <Popup message={popupMessage} onClose={() => setPopupMessage("")} />
      )}
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="text-white font-semibold">
            Sending your message...
          </div>
        </div>
      )}
      <AnimatedSection>
        <h1 className="font-black text-3xl sm:text-4xl underline underline-offset-4 decoration-amber-300">
          Contact Me !
        </h1>
      </AnimatedSection>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <AnimatedSection>
          <div className="flex flex-col my-12 gap-10 items-start">
            <div
              onClick={() =>
                window.open(
                  "https://www.instagram.com/kevin_cornelliuss/",
                  "_blank"
                )
              }
              className="mr-1 hover:opacity-60 cursor-pointer flex justify-center items-center underline underline-offset-2 decoration-amber-300 font-bold text-2xl gap-3"
            >
              <AiFillInstagram /> Instagram
            </div>
            <div
              onClick={() =>
                window.open("https://github.com/kevincornellius", "_blank")
              }
              className="mr-1  hover:opacity-60   flex justify-center cursor-pointer items-center underline underline-offset-2 decoration-amber-300 font-bold text-2xl gap-3"
            >
              <FaGithub /> Github
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/kevincornellius/",
                  "_blank"
                )
              }
              className="mr-1  hover:opacity-60  flex cursor-pointer justify-center items-center underline underline-offset-2 decoration-amber-300 font-bold text-2xl gap-3"
            >
              <FaLinkedinIn /> LinkedIn
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://discord.com/users/324513234604523530",
                  "_blank"
                )
              }
              className="mr-1  hover:opacity-60  flex cursor-pointer justify-center items-center underline underline-offset-2 decoration-amber-300 font-bold text-2xl gap-3"
            >
              <FaDiscord /> Discord
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              className="rounded-md border-2 border-amber-300 h-12 px-6 hover:border-black"
              placeholder="Your Name"
              type="text"
              name="name"
              required
            />
            <input
              className="rounded-md border-2 border-amber-300 h-12 px-6 hover:border-black"
              placeholder="Your Email"
              type="email"
              name="email"
              required
            />
            <textarea
              className="rounded-md border-2 border-amber-300 h-36 px-6 py-12 hover:border-black resize-none"
              placeholder="Message"
              name="message"
              required
            ></textarea>
            <button
              className="rounded-md bg-amber-300 font-black hover:opacity-60 h-12 px-6"
              type="submit"
            >
              Submit Form
            </button>
          </form>
        </AnimatedSection>
      </div>
    </div>
  );
}
