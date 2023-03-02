import React, { useState } from "react";
import { useRef} from "react";
import "./contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import emailjs from "emailjs-com";
import swal from 'sweetalert'




const Contact = () => {

/*creando mensaje de exito*/

/*swal("Mensaje Enviado!", "En breve nos pondremos en contacto");*/

/*================================ */

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_01eha8n",
      "template_ygs1v8w",
      form.current,
      "G9uc6I-g3rICfmBTb"
    );
    e.target.reset().then(
      (result) => {
        if(result){
          swal("Mensaje Enviado!", "En breve nos pondremos en contacto");
        }
        
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <a className="contact__option" href='mailto:"nmalvarez@gmail.com' target="_blank">
            <div>
              <MdOutlineMailOutline className="contact__option-icon" />
              <h4>nmalvarez@gmail.com</h4>
              <small>Send a Message</small>
            </div>
          </a>
          <a
            className="contact__option"
            href="https://wa.me/5493413124012"
            target="_blank"
          >
            <div>
              <AiOutlineWhatsApp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <small>Send a Message</small>
            </div>
          </a>

          <a
            className="contact__option"
            href="https://t.me/Betfield83"
            target="_blank"
          >
            <div>
              <FaTelegramPlane className="contact__option-icon" />
              <h4>Telegram</h4>
              <small>Send a Message</small>
            </div>
          </a>
        </div>
        {/*END OF CONTACT OPTIONS*/}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <textarea
            name="message"
            rows="9"
            placeholder="Your Message"
            required
            
          ></textarea>
          <button
            type="submit"
            id="send"
            className="btn btn-primary"
            href="#about"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
