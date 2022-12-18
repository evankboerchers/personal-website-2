import React from 'react';
import { AiOutlineFolder } from 'react-icons/ai';
import { FiGithub } from 'react-icons/fi';

const PortfolioTile = ({ title, description, tags, main, github }) => {
  return (
    <a href={main} target="_blank" rel="noreferrer" class="group h-full">
      <div class="bg-tile rounded-md p-6 shadow-md mt-4 group-hover:mt-0 group-hover:shadow-2xl h-full">
        <div class="flex flex-row justify-between items-center mb-2">
          <AiOutlineFolder
            size="2.5rem"
            className="fill-theme group-hover:fill-selected-text"
          />
          <a href={github} target="_blank" rel="noreferrer">
            <FiGithub class="hover:text-selected-text" />
          </a>
        </div>
        <div class="text-xl mb-2">{title}</div>
        <div class="mb-2 text-text-secondary">{description}</div>
        <div class="text-text-alt">{tags.join(' / ')}</div>
      </div>
    </a>
  );
};

export default PortfolioTile;
