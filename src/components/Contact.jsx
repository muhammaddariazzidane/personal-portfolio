import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Contact() {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        form.current.reset();
        Swal.fire({
          icon: "success",
          position: "center",
          title: "Thanks for sending the message",
          timerProgressBar: true,
          showConfirmButton: false,
          timer: 3000,
        });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="mx-auto max-w-xl px-4 lg:mb-12 mb-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center font-semibold text-4xl my-5 lg:mb-12" id="contact">
          Contact me
        </h1>
        <form ref={form} onSubmit={sendEmail} className="mb-0 mt-6 space-y-5  rounded-lg p-4 pt-12 shadow-lg shadow-slate-200 sm:p-6 ">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <div className="">
              <input required type="text" name="client_name" className="w-full rounded-md border-indigo-400 focus:outline-indigo-500 border lg:p-4 p-3 text-sm shadow-sm" placeholder="Enter your name" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Your email
            </label>
            <div className="">
              <input required type="email" name="email_name" className="w-full rounded-md border-indigo-400 focus:outline-indigo-500 border lg:p-4 p-3 text-sm shadow-sm" placeholder="Enter your email" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <div className="">
              <textarea required name="message" id="message" cols="30" rows="5" placeholder="your message" className="w-full rounded-md border-indigo-400 focus:outline-indigo-500 border lg:p-4 p-3 text-sm shadow-sm"></textarea>{" "}
            </div>
          </div>
          <button type="submit" disabled={isLoading} className={`flex items-center gap-x-1 rounded-md mx-auto  lg:px-4 px-3 py-3 text-sm font-medium text-white  ${isLoading ? "bg-indigo-400 cursor-wait" : "bg-indigo-600"}`}>
            {isLoading ? (
              <>
                <AiOutlineLoading3Quarters size={15} className="animate-spin" />
                Proccessing...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
