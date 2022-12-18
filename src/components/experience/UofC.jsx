import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const UofC = () => {
  return (
    <div>
      <h1 class="text-2xl">University of Calgary + Pason Systems</h1>
      <h2 class="text-xl text-text-secondary">Student Software Engineer</h2>
      <p class="mt-4">
        Industry project with Pason systems to evaluated potential frameworks to
        rebuild existing backend service architecture. Focused on how to
        implement Java's Spring framework to fullfile product requirements.
      </p>
      <ul class="space-y-2 list-none list-inside mt-2">
        <li class="flex flex-row items-center">
          <MdOutlineKeyboardArrowRight
            class="fill-selected-text mr-4"
            size="1.25rem"
          />
          Built backend service framework based on existing specification with
          Spring. Focused on using Spring to find optimal solutions to fullfill
          requirements.
        </li>
        <li class="flex flex-row items-center">
          <MdOutlineKeyboardArrowRight
            class="fill-selected-text mr-4"
            size="1.25rem"
          />
          Tackled challenging problems such as per method authorization and data
          sharding.
        </li>
        <li class="flex flex-row items-center">
          <MdOutlineKeyboardArrowRight
            class="fill-selected-text mr-4"
            size="1.25rem"
          />
          Presented findings on viability and usability of Spring to engineering
          team hoping to adopt it as a part of a new tech stack. Our
          reccomendations proved useful in the decision making process.
        </li>
      </ul>
    </div>
  );
};

export default UofC;
