import React from 'react';
import SectionHeader from '../components/SectionHeader';

const Contact = () => {
  return (
    <section id="contact">
      <div class="py-12 bg-body-3">
        <div class="container mx-auto relative flex flex-col items-center justify-center px-8 md:px-8 lg:px-24 w-full">
          <SectionHeader title="Contact" />
          <div class="mt-6 text-lg w-96 text-center">
            Have an interesting opportunity? A question? Book recommendation?
            Just want to say hi? Shoot me a message!
          </div>
          <a
            class="bg-theme m-4 py-2 px-6 hover:text-selected-text"
            href="mailto:evan.boerchers@gmail.com"
          >
            Email
          </a>
          <div class="text-secondary">evan.boerchers@gmail.com</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
