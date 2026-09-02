import { useRef } from "react";
import emailjs from "@emailjs/browser";

import Form from "./Form";
import Social from "./Social";

const Contact = () => {
  const form = useRef(null);
  const [sending, setSending] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    setSending(true);
    const name = form.current.name.value;
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
          setSending(false);
          alert(`Thanks ${name}, Message sent successfully!`);
          form.current.reset();
        },
        (error) => {
          setSending(false);
          console.log("FAILED...", error);
          alert("Something went wrong. Try again later.");
        }
      );
  };

  return (
    <div>
      <div className="container p-5 pt-20 WeekSitting items-center mt-5 flex flex-col gap-10">
        <Form
          form={form} sending={sending}
          handleSubmit={handleSubmit}
        />
        <Social />
      </div>
    </div>
  );
};

export default Contact;