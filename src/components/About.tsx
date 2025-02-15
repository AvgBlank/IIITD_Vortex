'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About: React.FC = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const h1Text = document.querySelector('.page2 h1');
    if (h1Text) {
      const textContent = h1Text.textContent || '';
      h1Text.innerHTML = textContent
        .split('')
        .map(letter => `<span>${letter}</span>`)
        .join('');
    }

    gsap.to('.page2 h1 span', {
      color: '#fff',
      stagger: 0.05,
      scrollTrigger: {
        trigger: '.page2',
        start: 'top 50%',
        end: 'top 20%',
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="page2 bg-[#000] w-full  flex flex-col items-center pb-32 relative">
      <h1 className="text-6xl font-bold mt-36 w-[80%] text-[#505050] text-center">
        We merge technology and accessibility to connect people with essential financial services, bridging the gap between institutions and underserved communities.      </h1>
    </div>
  );
};

export default About;
