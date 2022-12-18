import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const Graywolf = () => {
  return (
    <div>
      <h1 class="text-2xl">Graywolf Analytics</h1>
      <h2 class="text-xl text-text-secondary">Software Engineer</h2>
      <p class="mt-4">
        A startup devoted to building a platform for cryptocurrency forensics
        and risk analytics. Worked in many areas, backend, devops, frontend,
        data science.
      </p>
      <ul class="space-y-2 list-none list-inside mt-2">
        <li class="flex flex-row items-center justify-start space-x-2">
          <div class="w-8 mx-auto">
            <MdOutlineKeyboardArrowRight />
          </div>
          <p>
            Built backend services from scratch. Managed production deployments
            and worked with cloud assets.
          </p>
        </li>
        <li class="flex flex-row items-center justify-start space-x-2">
          <div class="w-8 mx-auto ">
            <MdOutlineKeyboardArrowRight />
          </div>
          <p>
            Worked on a small face paced dev team. Implemented AGILE
            methodologies and worked with team to shape features and build
            sprint commitments.
          </p>
        </li>
        <li class="flex flex-row items-center justify-start">
          <MdOutlineKeyboardArrowRight class="fill-selected-text w-8 h-8" />
          <p>
            Worked with large blockchain datasets, build out database
            infastructure and transformation pipelines. Designed analytics for
            risk assessment.
          </p>
        </li>
        <li class="flex flex-row items-center justify-start">
          <MdOutlineKeyboardArrowRight class="fill-selected-text w-8 h-8" />
          <p>
            Worked at all levels of our tech stack. Database, web API, frontend
            integration, UI/UX and dev ops.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Graywolf;
