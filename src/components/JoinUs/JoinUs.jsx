import { useRef } from "react";
import "./JoinUs.css";

import emailjs from "@emailjs/browser";

const JoinUs = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q06igil",
        "template_dmxhyr1",
        form.current,
        "iswBttN3XVi8TjRaR"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join-us" id="join">
      <div className="left-join">
        <hr />
        <div>
          <span>ready to</span>
          <span className="text-stroke">level up</span>
        </div>
        <div>
          <span>your body</span>
          <span className="text-stroke">with us</span>
        </div>
      </div>
      <div className="right-join">
        <form ref={form} onSubmit={sendEmail} className="email-container">
          <input
            type="email"
            name="user-email"
            placeholder="Enter your email address"
          />
          <button className="btn btn-primary">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default JoinUs;
