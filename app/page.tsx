'use client'

import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <section className="calc-min-h-screen md:calc-min-h-screen-md flex items-center font-anek-devanagari">
      <div className="w-5/6 md:w-2/3 m-auto">
        <div className="text-4xl md:text-5xl text-start leading-14 md:leading-18">
          <span className="block md:inline-block animate-fade-up">Hi, I am</span>
          <TypeAnimation
            className="block animate-fade-up animate-delay-200"
            sequence={[
              " Naing Aung Lwin",
              3000,
              " Web Developer",
              3000,
            ]}
            repeat={Infinity}
          />
          <span className="block font-light text-lg md:text-2xl animate-fade-up animate-delay-400">
              A passionate developer with over year of experience in PHP
            </span>
        </div>
      </div>
    </section>
  );
}
