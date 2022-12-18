import React from 'react';
import Section from '../components/Section';
import SectionHeader from '../components/SectionHeader';
import PortfolioTile from '../components/portfolio/PortfolioTile';

const Portfolio = () => {
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
                title="Personal Website v1"
                description="First iteration of personal website."
                tags={['React', 'JavaScript', 'HTML', 'CSS']}
                main="https://github.com/evankboerchers/personal-website-1"
                github="https://github.com/evankboerchers/personal-website-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
