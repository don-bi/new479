import Marquee from "react-fast-marquee";
import Image from "next/image";
declare module '*.jpg';
declare module '*.jpeg';

import one from "../../../../public/community/1.jpeg";
import two from "../../../../public/community/2.jpg";
import three from "../../../../public/community/3.jpg";
import four from "../../../../public/community/4.jpg";
import five from "../../../../public/community/5.jpeg";
import six from "../../../../public/community/6.jpeg";
import seven from "../../../../public/community/7.jpeg";
import eight from "../../../../public/community/8.jpeg";
import nine from "../../../../public/community/9.jpeg";
import ten from "../../../../public/community/10.jpeg";
import eleven from "../../../../public/community/11.jpeg";
import twelve from "../../../../public/community/12.jpeg";
import thirteen from "../../../../public/community/13.jpg";
import fourteen from "../../../../public/community/14.jpg";
import fifteen from "../../../../public/community/15.jpg";
import sixteen from "../../../../public/community/16.jpg";
import seventeen from "../../../../public/community/17.jpg";
import eighteen from "../../../../public/community/18.jpg";
import nineteen from "../../../../public/community/19.jpg";
import twenty from "../../../../public/community/20.jpg";



export default function Slider() {
  return (
    <>
      <Marquee className="h-[16.5rem]" speed={75} autoFill>
        {[one, two, three, four, five, six, seven, eight, nine, ten].map((v, i) => (
          <Image
            key={i}
            src={v}
            priority
            height={224}
            placeholder="blur"
            className={`mr-12 rounded-lg ${i % 6 === 0 ? "-rotate-6" : i % 3 === 0 && "rotate-6"
              }`}
            alt="Looping image slider: FTC Team 479 team members at various events and being community members."
          />
        ))}
      </Marquee>
      <Marquee className="h-[16.5rem]" speed={75} autoFill>
        {[eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty].map((v, i) => (
          <Image
            key={i}
            src={v}
            priority
            placeholder="blur"
            height={224}
            className={`mr-12 rounded-lg ${i % 6 === 0 ? "-rotate-6" : i % 3 === 0 && "rotate-6"
              }`}
            alt="Looper image slider: FTC Team 479 team members at various events and being community members."
          />
        ))}
      </Marquee>{" "}
    </>
  );
}
