import Image from "next/image";
import avatar from "../../../../../public/team/avatar.webp";
import victoria from "../../../../../public/team/victoria.jpg";
import megan from "../../../../../public/team/megan.jpg";

export default function Executives() {
  return (
    <div className="gap-10 grid auto-rows-fr grid-cols-1 sm:grid-cols-2">
      {new Array(
        {
          name: "Victoria Reguyal",
          role: "President",
          avatar: victoria,
          description:
            "I’m a senior and I joined Team 479 as a freshman to learn about engineering and electronics while having fun with robots. Though I’ve been interested in STEM since elementary school, I started out with hardly any relevant experience. But in FTC, I have been a part of a warm community with people who push each other to learn and achieve more. Outside of school, I like to spend my time reading, playing games, and exploring the city.",
        },

        {
          name: "Megan Chan",
          role: "Vice President",
          avatar: megan,
          description:
            "I joined the team as a sophomore, looking to learn more about mechanical engineering and electronics. Participating in the late-night meetings, I learned more about engineering and FTC in general. Learning from others, I began to take a role in our team for engineering. I’m excited to continue learning about robotics and strive to better my engineering skills to lead the engineering aspect of the team. Outside of school, I really enjoy sleeping in, playing video games, and buying weird snacks to try with friends.",
        },
      ).map((v, i) => (
        <div
          key={i}
          className="w-full flex-col xl:flex-row flex bg-white h-full p-8 text-left shadow-md rounded-3xl"
        >
          <Image
            src={v.avatar}
            alt="Image: headshot of one of our team members"
            className="xl:w-52 xl:mr-8 xl:flex-none aspect-[3/2] xl:mt-0 mb-8 xl:mb-0 w-full rounded-2xl object-cover"
          />
          <div>
            <span className="text-base font-semibold md:text-2xl text-gray-950">
              {v.name}
            </span>
            <p className="text-sm font-semibold text-blue-500">{v.role}</p>
            <p className="pt-2 text-xs font-normal text-gray-600 md:text-sm">
              {v.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
