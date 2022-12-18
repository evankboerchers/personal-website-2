import React, { useState } from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';

const Socials = () => {
  const [show, setShow] = useState(true);

  return (
    <div class="fixed bottom-0 right-8">
      <div class={`${show ? '' : 'hidden'}`}>
        <div class="fixed bottom-0 right-8 flex flex-col space-y-2 justify-center items-center">
          <button onClick={() => setShow(false)}>
            <BsChevronDown class="hover:fill-selected-text" />
          </button>
          <a
            class="bg-linkedin rounded-full p-2 shadow-md border-2 border-transparent hover:border-selected-text"
            href="https://www.linkedin.com/in/evan-boerchers/"
            target="_blank"
          >
            <AiFillLinkedin class="fill-white" size="2rem" />
          </a>
          <a
            class="bg-github rounded-full p-2 shadow-md border-2 border-transparent hover:border-selected-text"
            href="https://github.com/evankboerchers"
            target="_blank"
          >
            <AiFillGithub class="fill-white" size="2rem" />
          </a>
          <div class="bg-nav h-6 w-0.5"></div>
        </div>
      </div>
      <div class={`${show ? 'hidden' : ''}`}>
        <button onClick={() => setShow(true)}>
          <BsChevronUp class="hover:fill-selected-text" />
        </button>
      </div>
    </div>
  );
};

export default Socials;
