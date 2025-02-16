"use client";

import React, { useEffect } from "react";

const MarqueeAnimation = () => {
  useEffect(() => {
    const styles = `
      @keyframes marquee {
        from {
          transform: translateX(0%);
        }
        to {
          transform: translateX(-100%);
        }
      }

      
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div className="relative w-full h-32 overflow-hidden bg-black text-white">
      <div className="absolute top-5 flex whitespace-nowrap" style={marqueeStyle}>
        <p className="text-4xl font-bold uppercase px-4">
        Fair & Affordable Loans  &nbsp; Fair & Affordable Loans  &nbsp; Fair & Affordable Loans  &nbsp; Fair & Affordable Loans  &nbsp; Fair & Affordable Loans  &nbsp;
        </p>
        <p className="text-4xl font-bold uppercase px-4">
        Fair & Affordable Loans  &nbsp; Fair & Affordable Loans  &nbsp; Fair & Affordable Loans  &nbsp; Fair & Affordable Loans  &nbsp; Fair & Affordable Loans  &nbsp;
        </p>
        <p className="text-4xl font-bold uppercase px-4">
          Fair & Affordable Loans &nbsp; Fair & Affordable Loans  &nbsp; Fair & Affordable Loans  &nbsp; Fair & Affordable Loans  &nbsp; Fair & Affordable Loans  &nbsp;
        </p>
        <p className="text-4xl font-bold uppercase px-4">
          Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp;
        </p>
        <p className="text-4xl font-bold uppercase px-4">
          Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp;
        </p>
        <p className="text-4xl font-bold uppercase px-4">
          Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp;
        </p>
        <p className="text-4xl font-bold uppercase px-4">
          Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp;
        </p>
        <p className="text-4xl font-bold uppercase px-4">
          Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp;
        </p>

        <p className="text-4xl font-bold uppercase px-4">
          Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp;
        </p>
        <p className="text-4xl font-bold uppercase px-4">
          Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp;
        </p>
        <p className="text-4xl font-bold uppercase px-4">
          Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp;
        </p>

        <p className="text-4xl font-bold uppercase px-4">
          Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp;
        </p>
        <p className="text-4xl font-bold uppercase px-4">
          Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp;
        </p>
        <p className="text-4xl font-bold uppercase px-4">
          Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp;
        </p>
        <p className="text-4xl font-bold uppercase px-4">
          Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp;
        </p>
        <p className="text-4xl font-bold uppercase px-4">
          Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp;
        </p>
        <p className="text-4xl font-bold uppercase px-4">
          Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp;
        </p>

        <p className="text-4xl font-bold uppercase px-4">
          Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp;
        </p>
        <p className="text-4xl font-bold uppercase px-4">
          Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp;
        </p>
        <p className="text-4xl font-bold uppercase px-4">
          Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp; Fair & Affordable Loans &nbsp;
        </p>



      </div>

    </div>
  );
};

const marqueeStyle = {
  display: "flex",
  animation: "marquee 80s linear infinite",
  width: "max-content",
};

const marqueeReverseStyle = {
  display: "flex",
  animation: "marqueeReverse 10s linear infinite",
  width: "max-content",
};

export default MarqueeAnimation;
