import Image from "next/image";
import avatar from "../../../../../public/team/avatar.webp";
import owen from "../../../../../public/team/owen.jpg"
import jason from "../../../../../public/team/jason.jpg"

export default function Heads() {
  return (
    <div className="gap-10 grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20">
      {new Array(
        {
          name: "Jason Zhao",
          role: "Head of Engineering",
          avatar: jason,
          description:
            "jason desc",
        },

        {
          name: "Owen Shi",
          role: "Head of Programming",
          avatar: owen,
          description:
            "I joined Stuy Fusion a little late, as a sophomore, unsure of where I could contribute. Determined to help out, I quickly immersed myself in learning FTC software and discovered my passion for programming and problem-solving. Being part of Stuy Fusion has sharpened my technical skills and taught me the value of collaboration and perseverance. Outside of robotics, I enjoy playing video games and swimming, both of which help me unwind and stay motivated in everything I do.",
        },

        {
          name: "Elizabeth Chen",
          role: "Head of Marketing",
          avatar,
          description:
            "elizabeth desc"
        },
      ).map((v, i) => (
        <div
          key={i}
          className="w-full bg-white h-full p-8 text-left shadow-md rounded-3xl"
        >
          <div className="flex justify-center pb-8">
            <Image
              src={v.avatar}
              height={164}
              width={164}
              alt="img"
              className="aspect-[3/2] w-full rounded-2xl object-cover"
            />
          </div>
          <span className="text-base font-semibold md:text-2xl text-gray-950">
            {v.name}
          </span>
          <p className="text-sm font-semibold text-blue-500">{v.role}</p>
          <p className="pt-2 text-xs font-normal text-gray-600 md:text-sm">
            {v.description}
          </p>
        </div>
      ))}
    </div>
  );
}
