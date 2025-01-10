import Image from "next/image";
import powerplay from "../../../../../public/robots/powerplay.webp";
import { act } from "react-dom/test-utils";
import { title } from "process";

const info = [
  {
    name: "[INTO THE DEEP NAME]",
    image: powerplay,
    description: `fake rectangles womp womp`,
    awards: [
      "NYC Qualifier 2 Think Award Winner",
    ],
    videos: [
      
    ],
    code: [
      
    ],
  },
  {
    name: "Theo",
    image: powerplay,
    description: `hexagons are the bestagons`,
    awards: [
      "NYC Qualifier 2 Think Award Winner",
      "NYC Qualifier 2 Design Award 3rd Place",
      "NYC Qualifier 4 Think Award Winner",
      "NYC Super Qualifiers 1 Finalist Alliance 1st Pick",
      "NYC Super Qualifiers 1 Think Award Winner",
      "NYC Championship Finalist Alliance Captain",
      "NYC Championship Finalist Design Award 3rd Place",
      "NYC Championship Finalist Promote Award Winner",
    ],
    videos: [

      {link: "https://youtu.be/1cGlKInUGVw?si=k56MmKQ53QeEoi6n", title: "Centerstage MTI Submission"},
      {link: "https://youtu.be/ECyHcyyOW_I?si=x4e9TfUC0rPLX4vL", title: "NYC Championship Promote Award"},
      
    ],
    code: [

    ],
  },

  {
    name: "Steven",
    image: powerplay,
    description: `stack cup`,
    awards: [
      "NYC Qualifier 3 Think Award 2nd Place",
      "NYC Qualifier 3 Design Award Winner",
      "NYC Qualifier 5 Winning Alliance 1st Pick",
      "NYC Super Qualifier 2 Inspire Award 2nd Place",
      "NYC Super Qualifier 2 Finalist Alliance 2nd Pick",
      "NYC Super Qualifier 2 Innovate Award Winner",
      "NYC Championship Inspire Award 3rd Place",
      "NYC Championship Finalist Alliance 1st Pick",
      "NYC Championship Motivate Award Winner",
    ],
    videos: [
      {link: "https://youtu.be/iQ7rFubse38?si=W5AwveR3rZ7It94y", title: "Powerplay MTI Submission"},
    ],
    code: [

    ],
  },

  {
    name: "[FREIGHT FRENZY NAME]",
    image: powerplay,
    description: `train car woo`,
    awards: [
      "NYC Qualifier 3 Winning Alliance 1st Pick",
      "NYC Qualifier 3 Design Award Winner",
      "NYC Qualifier 5 Inspire Award 2nd Place",
      "NYC Qualifier 5 Winning Alliance Captain",
      "NYC Qualifier 5 Think Award 3rd Place",
      "NYC Qualifier 5 Control Award Winner",
      "NYC Qualifier 5 Design Award 3rd Place",
      "NYC Championship Innovate Award 2nd Place",
    ],
    videos: [
      {link: "https://youtu.be/eH5ao59nbVw?si=0V4ii-xrdjf4FPQK", title: "Freight Frenzy MTI Submission"},
    ],
    code: [

    ],
  },

  {
    name: "[ULTIMATE GOAL NAME]",
    image: powerplay,
    description: `frc 2023 but smaller`,
    awards: [
      "NYC Qualifying Tournament 2 Top Ranked First Place",
      "NYC Qualifying Tournament 2 Innovate Award Winner",
      "NYC Qualifying Tournament 2 Design Award 2nd Place",
      "NYC Championship Tournament Top Ranked 4th Place",
      "NYC Championship Tournament Innovate Award Winner",
    ],
    videos: [

    ],
    code: [

    ],
  },

  {
    name: "[SKYSTONE NAME]",
    image: powerplay,
    description: `lego but ftc`,
    awards: [
      "NYC Qualifier 2 Finalist Alliance 1st Pick",
      "NYC Qualifier 2 Think Award Winner",
      "NYC Super Qualifier 1 Finalist Alliance 1st Pick",
      "NYC Super Qualifier 1 Connect Award Winner",
      "NYC Championship Connect Award 3rd Place",
      "NYC Championship Design Award 2nd Place",
    ],
    videos: [

    ],
    code: [

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
                <span className="mr-4 h-full">-</span> 
                <a href={v.link}> {v.title} </a>
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
