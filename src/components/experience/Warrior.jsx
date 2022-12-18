import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Warrior = () => {
  return (
    <div>
      <h1 class="text-2xl">Warrior Rig Technologies</h1>
      <h2 class="text-xl text-text-secondary">Mechanical Engineer Intern</h2>
      <p class="mt-4">
        Designed, build and tested state of the art drilling rig equipment on
        engineering and R&D teams.
      </p>
      <ul class="space-y-2 list-none list-inside mt-2">
        <li class="flex flex-row items-center">
          <MdOutlineKeyboardArrowRight
            class="fill-selected-text mr-4"
            size="1.25rem"
          />
          Designed and carried out test plans on complex systems. Aggregated
          results and reported to senior engineers.
        </li>
        <li class="flex flex-row items-center">
          <MdOutlineKeyboardArrowRight
            class="fill-selected-text mr-4"
            size="1.25rem"
          />
          Optimized CAD files by reducing size and complexity leading to 10x
          improved load times.
        </li>
        <li class="flex flex-row items-center">
          <MdOutlineKeyboardArrowRight
            class="fill-selected-text mr-4"
            size="1.25rem"
          />
          Personally managed design assemblies for team of engineers.
        </li>
      </ul>
    </div>
  );
};

export default Warrior;
