// Contact.tsx

import { useState, useRef, FormEvent, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { CSSProperties } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import confetti from "canvas-confetti";

export const Contact = () => {
  const [stage, setStage] = useState<number>(1);
  const form = useRef<HTMLFormElement>(null);
  const [successInfo, setSuccessInfo] = useState({ name: "", email: "" });

  const formik = useFormik({
    initialValues: {
      from_name: "",
      from_email: "",
      message: "",
    },
    validationSchema: Yup.object({
      from_name: Yup.string()
        .max(30, "Name must be 30 characters or less")
        .required("* Name required"),
      from_email: Yup.string()
        .email("Invalid email address")
        .required("* Email required"),
      message: Yup.string()
        .required("Write a message below")
        .max(10000, "This message is too long")
        .min(10, "This message is too short"),
    }),
    onSubmit: () => {
      if (stage === 2 && form.current) {
        emailjs
          .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
          )
          .then(
            (result) => {
              console.log(result.text);
              setSuccessInfo({
                name: formik.values.from_name,
                email: formik.values.from_email,
              });
              setStage(3);
            },
            (error) => {
              console.log(error.text);
            }
          );
      }
    },
  });

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (stage === 1) {
      formik.validateField("message").then(() => {
        if (!formik.errors.message && formik.values.message) {
          setStage(2);
        }
      });
    } else if (stage === 2) {
      formik.handleSubmit();
    }
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const fieldStyle = (show: boolean): CSSProperties => ({
    display: show ? "flex" : "none", // we need all the form data to be in form.current for emailjs
    flexDirection: "column",
    gap: "0.5rem",
    marginBottom: "1rem",
  });

  useEffect(() => {
    if (stage === 3) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [stage]);

  return (
    <div
      className={
        stage === 3
          ? "p-4 sm:p-12 max-w-5xl mx-auto bg-green-600 text-white rounded-2xl"
          : "p-4 sm:p-12 max-w-5xl mx-auto bg-black text-white rounded-2xl"
      }
    >
      {stage < 3 && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={variants}
          transition={{ duration: 0.5 }}
          className=""
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Message Us</h1>
            <p className="text-lg mb-4">
              Write to us anything, inquire, offer feedback, or provide your
              address and request a quote.
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div style={fieldStyle(stage === 1)}>
              <textarea
                name="message"
                placeholder="message..."
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                className="w-full p-2 border border-white bg-black text-white rounded-md focus:ring-2 focus:ring-white"
                rows={6}
              ></textarea>
              {formik.errors.message && formik.touched.message && (
                <p className="text-sm text-red-500">{formik.errors.message}</p>
              )}
            </div>

            <div style={fieldStyle(stage === 2)}>
              <input
                type="text"
                name="from_name"
                placeholder="name"
                onChange={formik.handleChange}
                value={formik.values.from_name}
                className="w-full p-2 border border-white bg-black text-white rounded-md focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                name="from_email"
                placeholder="email"
                onChange={formik.handleChange}
                value={formik.values.from_email}
                className="w-full p-2 border border-white bg-black text-white rounded-md focus:ring-2 focus:ring-white"
              />
            </div>

            <input
              type="submit"
              value={stage === 1 ? "Next" : "Confirm"}
              className="font-bold w-full p-3 bg-white text-black rounded-md hover:bg-gray-200 cursor-pointer"
            />
          </form>
        </motion.div>
      )}

      {stage === 3 && (
        <div className="text-center mt-6">
          <FontAwesomeIcon icon={faCheckCircle} className="text-6xl mb-4" />
          <h2 className="text-3xl font-semibold">Success!</h2>
          <p className="text-lg mt-4">
            Thank you, <span className="font-bold">{successInfo.name}</span>!
          </p>
          <p className="text-lg mt-4">
            We have received your message and will respond to
            <span className="font-bold"> {successInfo.email}</span> soon.
          </p>
        </div>
      )}
    </div>
  );
};
