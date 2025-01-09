import Image from "next/image";
import powerplay from "../../../../../public/robots/powerplay.webp";
import { act } from "react-dom/test-utils";

const info = [
  {
    name: "[CENTERSTAGE NAME]",
    image: powerplay,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. tion ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`,
    awards: [
      " NYC Qualifier 3 Design Award",
      " NYC Qualifier 5 Winning Alliance",
      " NYC Super Qualifier Innovate Award",
      " NYC Super Qualifier Inspire Award 2nd place",
      " NYC Championship Motivate Award",
    ],
    videos: [
      " NYC Qualifier 3 Design Award",
      "NYC Qualifier 5 Winning Alliance",
      "NYC Super Qualifier Innovate Award",
      "NYC Super Qualifier Inspire Award 2nd place",
      "NYC Championship Motivate Award",
    ],
    code: [
      "NYC Qualifier 3 Design Award",
      "NYC Qualifier 5 Winning Alliance",
      "NYC Super Qualifier Innovate Award",
      "NYC Super Qualifier Inspire Award 2nd place",
      "NYC Championship Motivate Award",
    ],
  },

  {
    name: "Stephen",
    image: powerplay,
    description: `In 2022’s Power Play, two alliances consisting of two teams each competed to manipulate cones and score them on a grid system that was divided into different levels and areas. The challenge involved stacking these cones on top of junctions, which were essentially poles with scoring areas, in order to earn points. Teams could earn additional points through autonomous and teleoperated tasks, with an important focus on endgame strategies in which robots could "park" on the grid in specific ways to earn bonus points.

`,
    awards: [
      " NYC Qualifier 3 Think Award 2nd Place",
      " NYC Qualifier 3 Design Award",
      " NYC Qualifier 5 Winning Alliance 1st Pick",
      " NYC Super Qualifier 2 Inspire Award 2nd Place",
      " NYC Super Qualifier 2 Finalist Alliance 2nd Pick",
      " NYC Super Qualifier 2 Innovate Award Winner",
      " NYC Championship Inspire Award 3rd Place",
      " NYC Championship Finalist Alliance 1st Pick",
      " NYC Championship Motivate Award",
    ],
    videos: [
      <a href="https://www.youtube.com/watch?v=HsitvZ0JaDc">POWERPLAY Game Animation</a>,
      <a href="https://www.youtube.com/watch?v=5DdmL6PPfMQ">POWERPLAY Field Walkthrough</a>,
      <a href="https://www.youtube.com/watch?v=DhhTHuA1Z50">POWERPLAY Kickoff</a>,
      <a href="https://www.youtube.com/watch?v=tnEnOQaJwjc">POWERPLAY Season Teaser</a>,
      <a href="https://www.youtube.com/watch?v=A5O-u9kt1ao">POWERPLAY Good Luck</a>,
    ],
    code: [
      <a href="https://github.com/fusion479/PowerPlay.git">GitHub</a>,
      <a href="https://ftcscout.org/events/2022/USNYNYBRQ3/matches">NYC Qualifier 3</a>,
      <a href="https://ftcscout.org/events/2022/USNYNYQUQ5/matches">NYC Qualifier 5</a>,
      <a href="https://ftcscout.org/events/2022/USNYNYNYSQ2/matches">NYC Super Qualifier 2</a>,
      <a href="https://ftcscout.org/events/2022/USNYNYCMP/matches">NYC Championship</a>,
    ],
  },

  {
    name: "[FREIGHT FRENZY NAME]",
    image: powerplay,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. tion ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`,
    awards: [
      " NYC Qualifier 3 Design Award",
      " NYC Qualifier 5 Winning Alliance",
      " NYC Super Qualifier Innovate Award",
      " NYC Super Qualifier Inspire Award 2nd place",
      " NYC Championship Motivate Award",
    ],
    videos: [
      " NYC Qualifier 3 Design Award",
      "NYC Qualifier 5 Winning Alliance",
      "NYC Super Qualifier Innovate Award",
      "NYC Super Qualifier Inspire Award 2nd place",
      "NYC Championship Motivate Award",
    ],
    code: [
      "NYC Qualifier 3 Design Award",
      "NYC Qualifier 5 Winning Alliance",
      "NYC Super Qualifier Innovate Award",
      "NYC Super Qualifier Inspire Award 2nd place",
      "NYC Championship Motivate Award",
    ],
  },

  {
    name: "[ULTIMATE GOAL NAME]",
    image: powerplay,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. tion ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`,
    awards: [
      " NYC Qualifier 3 Design Award",
      " NYC Qualifier 5 Winning Alliance",
      " NYC Super Qualifier Innovate Award",
      " NYC Super Qualifier Inspire Award 2nd place",
      " NYC Championship Motivate Award",
    ],
    videos: [
      " NYC Qualifier 3 Design Award",
      "NYC Qualifier 5 Winning Alliance",
      "NYC Super Qualifier Innovate Award",
      "NYC Super Qualifier Inspire Award 2nd place",
      "NYC Championship Motivate Award",
    ],
    code: [
      "NYC Qualifier 3 Design Award",
      "NYC Qualifier 5 Winning Alliance",
      "NYC Super Qualifier Innovate Award",
      "NYC Super Qualifier Inspire Award 2nd place",
      "NYC Championship Motivate Award",
    ],
  },

  {
    name: "[SKYSTONE NAME]",
    image: powerplay,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. tion ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`,
    awards: [
      " NYC Qualifier 3 Design Award",
      " NYC Qualifier 5 Winning Alliance",
      " NYC Super Qualifier Innovate Award",
      " NYC Super Qualifier Inspire Award 2nd place",
      " NYC Championship Motivate Award",
    ],
    videos: [
      " NYC Qualifier 3 Design Award",
      "NYC Qualifier 5 Winning Alliance",
      "NYC Super Qualifier Innovate Award",
      "NYC Super Qualifier Inspire Award 2nd place",
      "NYC Championship Motivate Award",
    ],
    code: [
      "NYC Qualifier 3 Design Award",
      "NYC Qualifier 5 Winning Alliance",
      "NYC Super Qualifier Innovate Award",
      "NYC Super Qualifier Inspire Award 2nd place",
      "NYC Championship Motivate Award",
    ],
  },
];

export default function Info({ active }: { active: number }) {
  return (
    <div className="xl:max-w-4xl flex flex-col justify-center items-center">
      <div className="text-center -translate-y-12 mb-4 text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        <span className="relative whitespace-nowrap text-blue-500">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          {info[active].name}
        </span>
      </div>
      <Image
        src={info[active].image}
        alt="Image: team 479's powerplay (2023 season) robot in a render"
      />
      <p className="mt-6 max-w-3xl text-base tracking-wide text-slate-700">
        {info[active].description}
      </p>
      <div className="border-t-[1px] w-3/4 ml-auto my-8 mr-auto border-slate-300" />

      <div className="flex">
        <div>
          <span className="text-xl text-blue-500 tracking-wide font-semibold">
            Awards
          </span>
          <ul className="ml-8">
            {info[active].awards.map((v, i) => (
              <li className="flex text-slate-500 text-sm font-semibold" key={i}>
                <span className="mr-4 h-full">-</span> {v}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-xl text-blue-500 tracking-wide font-semibold">
            Videos
          </span>
          <ul className="ml-8">
            {info[active].videos.map((v, i) => (
              <li className="flex text-slate-500 text-sm font-semibold" key={i}>
                <span className="mr-4 h-full">-</span> {v}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="text-xl text-blue-500 tracking-wide font-semibold">
            Code & Records
          </span>
          <ul className="ml-8">
            {info[active].code.map((v, i) => (
              <li className="flex text-slate-500 text-sm font-semibold" key={i}>
                <span className="mr-4 h-full">-</span> {v}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
