import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import portrait from '../assets/portrait_1.png';
import { HiBookOpen } from 'react-icons/hi';
import { IoBarbellOutline } from 'react-icons/io5';
import { SiHiveBlockchain } from 'react-icons/si';
import { BiNetworkChart } from 'react-icons/bi';
import { GiQueenCrown } from 'react-icons/gi';
import { HiLightBulb } from 'react-icons/hi';
import { FaBookReader } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import { BsGearFill } from 'react-icons/bs';

const About = () => {
  return (
    <section id="about">
      <div class="py-32 bg-body-2">
        <div class="container mx-auto relative flex items-center justify-center px-8 md:px-8 lg:px-24 w-full">
          <div>
            <SectionHeader title="About" />
            <div class="flex mt-12 flex-col lg:flex-row">
              <div class="flex flex-row justify-center items-center lg:flex-col">
                <div class="w-48 h-48 lg:w-64 lg:h-64 mx-6 lg:mx-0 lg:my-6 rounded-full border-theme border-8 border-opacity-60 shadow-2xl">
                  <img
                    class="rounded-full object-top"
                    alt="Evan Boerchers"
                    src={portrait}
                  ></img>
                </div>
                <div class="w-72 xl:w-96 text-center">
                  <h1 class="text-text-secondary text-2xl mb-2">Who am I?</h1>
                  <p>
                    Hi, im Evan. I am a software engineer from Calgary, Alberta,
                    Canada. I have spent the past 2 years building web API’s and
                    data analytics. I am particularly interested in AI and Web3,
                    and am always looking for new projects!
                  </p>
                </div>
              </div>
              <div class="flex flex-col items-center justify-center m-0 mt-12 lg:mt-0 lg:ml-16 xl:ml-32">
                <div class="flex flex-row">
                  <div class="flex flex-col items-center">
                    <div class="bg-blue-600 rounded-full p-3">
                      <HiLightBulb size="3rem" />
                    </div>
                    <div class="mt-2">Problem Solver</div>
                    <div class="w-48 text-center text-text-secondary text-sm">
                      Love finding solutions to challenging problems
                    </div>
                  </div>
                  <div class="flex flex-col items-center mx-4">
                    <div class="bg-blue-600 rounded-full p-3">
                      <FaBookReader size="3rem" />
                    </div>
                    <div class="mt-2">Learner</div>
                    <div class="w-48 text-center text-text-secondary text-sm">
                      Always looking to build an edge with new skills
                    </div>
                  </div>
                  <div class="flex flex-col items-center">
                    <div class="bg-blue-600 rounded-full p-3">
                      <RiTeamFill size="3rem" />
                    </div>
                    <div class="mt-2">Collaborator</div>
                    <div class="w-48 text-center text-text-secondary text-sm">
                      Thrive in terms of great people
                    </div>
                  </div>
                </div>
                <div class="flex flex-row mt-6">
                  <div>
                    <div class="ml-1">Skills</div>
                    <div class="w-full h-0.5 bg-text-secondary"></div>
                    <div class="grid grid-cols-3 space-x-3 mt-1">
                      <div class="flex flex-row items-center text-text-secondary">
                        <div class="h-2 w-2 rounded-full bg-green-500 m-2 ml-5"></div>
                        <div>Python</div>
                      </div>
                      <div class="flex flex-row items-center text-text-secondary">
                        <div class="h-2 w-2 rounded-full bg-green-500 m-2"></div>
                        <div>SQL</div>
                      </div>
                      <div class="flex flex-row items-center text-text-secondary">
                        <div class="h-2 w-2 rounded-full bg-green-500 m-2"></div>
                        <div>Docker</div>
                      </div>
                      <div class="flex flex-row items-center text-text-secondary">
                        <div class="h-2 w-2 rounded-full bg-green-500 m-2"></div>
                        <div>PySpark</div>
                      </div>
                      <div class="flex flex-row items-center text-text-secondary">
                        <div class="h-2 w-2 rounded-full bg-yellow-500 m-2"></div>
                        <div>Javascript</div>
                      </div>
                      <div class="flex flex-row items-center text-text-secondary">
                        <div class="h-2 w-2 rounded-full bg-yellow-500 m-2"></div>
                        <div>HTML</div>
                      </div>
                      <div class="flex flex-row items-center text-text-secondary">
                        <div class="h-2 w-2 rounded-full bg-yellow-500 m-2"></div>
                        <div>CSS</div>
                      </div>
                      <div class="flex flex-row items-center text-text-secondary">
                        <div class="h-2 w-2 rounded-full bg-yellow-500 m-2"></div>
                        <div>React</div>
                      </div>
                      <div class="flex flex-row items-center text-text-secondary">
                        <div class="h-2 w-2 rounded-full bg-red-500 m-2"></div>
                        <div>C/C++</div>
                      </div>
                    </div>
                  </div>
                  <div class="ml-12">
                    <div class="ml-1">Interests</div>
                    <div class="w-full h-0.5 bg-text-secondary"></div>
                    <div class="grid grid-cols-2 space-x-3 mt-1">
                      <div class="flex flex-row items-center text-text-secondary">
                        <BsGearFill class="mr-2 ml-3" />
                        <div>Automation</div>
                      </div>
                      <div class="flex flex-row items-center text-text-secondary">
                        <SiHiveBlockchain class="mr-2" />
                        <div>Web3</div>
                      </div>
                      <div class="flex flex-row items-center text-text-secondary">
                        <BiNetworkChart class="mr-2" />
                        <div>API's</div>
                      </div>
                      <div class="flex flex-row items-center text-text-secondary">
                        <IoBarbellOutline class="mr-2" />
                        <div>Fitness</div>
                      </div>
                      <div class="flex flex-row items-center text-text-secondary">
                        <HiBookOpen class="mr-2" />
                        <div>Reading</div>
                      </div>
                      <div class="flex flex-row items-center text-text-secondary">
                        <GiQueenCrown class="mr-2" />
                        <div>Chess</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
