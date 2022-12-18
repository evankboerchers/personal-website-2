import React from 'react';
import Graphic from './components/Graphic';
const Hero = () => {
  return (
    <section id="home">
      <div class="container relative h-screen flex items-center mx-auto px-8 md:px-8 lg:px-24 w-full">
        <div class="relative">
          <div class="relative z-40">
            <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl">
              Hi I'm <span class="text-text-alt">Evan Boerchers</span>
            </h1>
            <h2 class="text-text-secondary text-4xl">
              I am a software engineer
            </h2>
            <button class="mt-8 px-6 py-2 bg-theme">About me</button>
          </div>
        </div>
        <div class="absolute h-48 w-48 md:h-64 md:w-64 top-1/2 transform -translate-y-72 right-6">
          <Graphic />
        </div>
      </div>
    </section>
  );
};

export default Hero;
