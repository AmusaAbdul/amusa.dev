import { useRef } from "react";
import emailjs from "@emailjs/browser";

import Form from "./Form";
import Social from "./Social";

const Contact = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("FORM:", form.current);

    emailjs
      .sendForm(
        "service_vl00rbe",
        "template_dz1i44l",
        form.current,
        {
          publicKey: "c4A9INeZ3oOK0Bqr2",
        }
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Something went wrong. Try again.");
        }
      );
  };

  return (
    <div>
      <div className="container p-5 pt-20 WeekSitting items-center mt-5 flex flex-col gap-10">
        <Form
          form={form}
          handleSubmit={handleSubmit}
        />

        <Social />
      </div>
    </div>
  );
};

export default Contact;