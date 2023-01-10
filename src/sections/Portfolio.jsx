import React from 'react';
import SectionHeader from '../components/SectionHeader';
import PortfolioTile from '../components/portfolio/PortfolioTile';
import { useState } from 'react';
import { FiChevronsLeft } from 'react-icons/fi';
import { FiChevronsRight } from 'react-icons/fi';

const Portfolio = () => {
  const [more, setMore] = useState(false);
  return (
    <section id="portfolio">
      <div class="py-32 bg-body">
        <div class="container mx-auto relative flex flex-col items-center justify-center px-8 md:px-8 lg:px-24 w-full">
          <SectionHeader title="Portfolio" />
          <div class="grid grid-cols-3 w-full auto-cols-max mt-12 gap-4">
            <div class="flex flex-col">
              <div></div>
              <PortfolioTile
                title="Personal Website v2"
                description="Personal website you are currently viewing!"
                tags={['React', 'JavaScript', 'Tailwind', 'HTML', 'CSS']}
                main="https://github.com/evankboerchers/personal-website-2"
                github="https://github.com/evankboerchers/personal-website-2"
              />
            </div>
            <div class="flex flex-col">
              <div></div>
              <PortfolioTile
                title="Spring Framework Evaluation"
                description="Spring framework evaluation done for Pason Systems. Demonstrates how a nominal backend service can be build using Spring. Demonstrates a basic backend data services with a variety of features."
                tags={['Spring', 'Java', 'MySql', 'Gradle', 'Redis']}
                main="https://github.com/evankboerchers/SpringChicken"
                github="https://github.com/evankboerchers/SpringChicken"
              />
            </div>
            <div class="flex flex-col">
              <div></div>
              <PortfolioTile
                title="Classification of ReadMe's"
                description="A trained machine learning model to classify Github readme sections based on contents, best result was 87% accuracy. Includes data processing of large amounts of ReadMe files, plus a pyspark pipeline for processing data and training models."
                tags={['Machine Learning', 'PySpark', 'Databricks']}
                main="https://github.com/evankboerchers/Classification-of-Github-READMES"
                github="https://github.com/evankboerchers/Classification-of-Github-READMES"
              />
            </div>
            <div class="flex flex-col">
              <div></div>
              <PortfolioTile
                title="Sorting Algorithm Visualizer"
                description="A web app that visualizes how various sorting algorithms are functioning in realtime."
                tags={['React', 'JavaScript', 'HTML', 'CSS']}
                main="https://github.com/evankboerchers/sorting-visualization"
                github="https://github.com/evankboerchers/sorting-visualization"
              />
            </div>
            <div class="flex flex-col">
              <div></div>
              <PortfolioTile
                title="Grocer iOS app"
                description="simple iOS for keeping a grocery list."
                tags={['Swift', 'iOS']}
                main="https://github.com/evankboerchers/GroceriOSApp"
                github="https://github.com/evankboerchers/GroceriOSApp"
              />
            </div>
            <div class="flex flex-col">
              <div></div>
              <PortfolioTile
                title="Plant Disease Neural Net Classification"
                description="Trained a nueral net to classify plant leafs as healthy or diseased with 99% accuracy. A onvulutional nueral net was trained with data consisting of potato, tomato and bell pepper plant leaves. "
                tags={['Machine Learning', 'Python', 'TensorFlow']}
                main="https://github.com/evankboerchers/PlantDiseaseDetection"
                github="https://github.com/evankboerchers/PlantDiseaseDetection"
              />
            </div>
            <div class={`${more ? '' : 'hidden'}`}>
              <div class="flex flex-col">
                <div></div>
                <PortfolioTile
                  title="Personal Website v1"
                  description="First iteration of personal website."
                  tags={['React', 'JavaScript', 'HTML', 'CSS']}
                  main="https://github.com/evankboerchers/personal-website-1"
                  github="https://github.com/evankboerchers/personal-website-1"
                />
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center justify-center mt-12 text-text-secondary">
            <button
              class={`flex flex-row justify-center items-center space-x-2 ${
                more ? 'hidden' : ''
              } hover:text-selected-text`}
              onClick={() => {
                setMore(true);
              }}
            >
              <div>more</div>
              <FiChevronsRight size="1.25rem" />
            </button>
            <button
              class={`flex flex-row justify-center items-center ${
                more ? '' : 'hidden'
              } hover:text-selected-text`}
              onClick={() => {
                setMore(false);
              }}
            >
              <FiChevronsLeft size="1.25rem" />
              <div>less</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
