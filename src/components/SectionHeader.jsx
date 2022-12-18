import React from 'react';

export const SectionHeader = (props) => {
  return (
    <div class="flex flex-col items-center">
      <h2 class="text-4xl">{props.title}</h2>
      <div class="mt-1 w-12 h-1 bg-theme rounded-sm"></div>
    </div>
  );
};

export default SectionHeader;
