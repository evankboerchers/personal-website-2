import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Graywolf from '../components/experience/Graywolf';
import UofC from '../components/experience/UofC';
import { useState } from 'react';
import Warrior from '../components/experience/Warrior';

const panels = {
  0: <Graywolf />,
  1: <UofC />,
  2: <Warrior />,
};

const Experience = () => {
  const [currentPanel, setCurrentPanel] = useState(0);
  return (
    <section id="experience">
      <div class="py-32 bg-body">
        <div class="container mx-auto relative flex items-center justify-center px-8 md:px-8 lg:px-24 w-full">
          <div class="w-full lg:w-3/4">
            <SectionHeader title="Experience" />
            <div class="flex flex-row bg-tile mt-4 rounded-md">
              <div class="flex flex-col w-32">
                <button
                  class={`text-center text-lg items-center p-4 hover:text-selected-text 
                  border-l-2  ${
                    currentPanel === 0
                      ? 'border-selected-text'
                      : 'border-text-secondary'
                  }`}
                  onClick={() => setCurrentPanel(0)}
                >
                  Graywolf Analytics
                </button>
                <button
                  class={`text-center text-lg items-center p-4 hover:text-selected-text 
                   border-l-2  ${
                     currentPanel === 1
                       ? 'border-selected-text'
                       : 'border-text-secondary'
                   }`}
                  onClick={() => setCurrentPanel(1)}
                >
                  University of Calgary
                </button>
                <button
                  class={`text-center text-lg items-center p-4 hover:text-selected-text 
                border-l-2  ${
                  currentPanel === 2
                    ? 'border-selected-text'
                    : 'border-text-secondary'
                }`}
                  onClick={() => setCurrentPanel(2)}
                >
                  Warrior
                </button>
              </div>
              <div class="p-16 w-full">{panels[currentPanel]}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
