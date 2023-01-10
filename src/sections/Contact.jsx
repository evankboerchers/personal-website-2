import React, { useRef } from 'react';
import SectionHeader from '../components/SectionHeader';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {
  const form = useRef();

  const [fields, setFields] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [subError, setSubError] = useState(false);

  const handleChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
    checkFields();
  };

  const checkName = () => {
    return !fields.name.length > 0;
  };

  const checkEmail = () => {
    if (
      String(fields.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      return false;
    } else {
      return true;
    }
  };

  const checkMessage = () => {
    return !fields.message.length > 0;
  };

  const checkFields = () => {
    setErrors({
      name: checkName(),
      email: checkEmail(),
      message: checkMessage(),
    });
    return errors.name || errors.email || errors.message ? false : true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const check = checkFields();
    if (check) {
      setSubError(false);
      console.log(errors);
      console.log(subError);
      sendEmail(e);
      setFields({ name: '', email: '', message: '' });
      console.log(errors);
      console.log(subError);
    } else {
      setSubError(true);
      console.log(errors);
      console.log(subError);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log('Sending email...');
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAILJS_KEY
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
    <section id="contact">
      <div class="py-12 bg-body-3">
        <div class="container mx-auto relative flex flex-col items-center justify-center px-8 md:px-8 lg:px-24 w-full">
          <SectionHeader title="Contact" />
          <div class="mt-6 text-xl w-96 text-center">
            Have an interesting opportunity? A question? Book recommendation?
            Just want to say hi? Shoot me a message!
          </div>
          <form
            class="w-full lg:w-1/2 p-8 flex flex-col items-end"
            ref={form}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="name"
              value={fields.name}
              onChange={handleChange}
              class={`w-full bg-text-input rounded-md px-2 py-1 my-1 
              border border-text-secondary focus:border-selected-text  focus:outline-none
              ${
                errors.name && subError
                  ? 'border-red-500'
                  : 'border-text-secondary'
              }`}
            />
            <input
              type="text"
              name="email"
              value={fields.email}
              onChange={handleChange}
              placeholder="email"
              class={`w-full bg-text-input rounded-md px-2 py-1 my-1
              border border-text-secondary focus:border-selected-text  focus:outline-none
              ${
                errors.email && subError
                  ? 'border-red-500'
                  : 'border-text-secondary'
              }`}
            />
            <textarea
              type="text"
              name="message"
              placeholder="message..."
              value={fields.message}
              onChange={handleChange}
              class={`w-full bg-text-input rounded-md px-2 py-1 my-1 h-32
              border border-text-secondary focus:border-selected-text  focus:outline-none
              ${
                errors.message && subError
                  ? 'border-red-500'
                  : 'border-text-secondary'
              }`}
            />
            <input
              type="submit"
              name="submit"
              value="Send"
              class="bg-theme px-4 py-1 w-fit m-4 rounded-sm cursor-pointer my-4"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
