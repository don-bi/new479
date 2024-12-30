import React from "react";
import lego from "../../../../public/impact/lego.png";
import school from "../../../../public/impact/school.png";
import demo from "../../../../public/impact/demo.png";
import Image from "next/image";

export default function List() {
  return (
    <div className="relative mb-10 mt-20">
      {[
        {
          title: "FIRST Lego League",
          subtitle: "Mentoring Other FIRST Teams",
          description:
            "Our team mentors FLL teams. FIRST Lego League is the robotics league for elementary and middle schoolers. We volunteer at FIRST events to give back to the NYC FIRST community and remedy referee shortages at FLL and FTC qualifiers. Many of our volunteers were among the first youth FLL referees, setting a precedent to allow more youth volunteers to participate. We are also teaching FLL to a local Girl Scouts troop that we met last school year at  the STEAM Dream robot demo. They are a pre-rookie team, competing in FLL next year! Finally, we along with FTC 310 mentor two FLL teams in Puerto Rico weekly via Zoom. In the words of their team coach, Lizmarie, “When they meet with you, they get inspired.”",
          src: lego,
        },
        {
          title: "At Our School",
          subtitle: "StuySplash, Educating Others",
          description:
            "Team 479 holds events at our school so we can give back to our own community. Every year, in December, all of Stuyvesant Robotics holds a conference called Stuy Splash where people from the three teams can give presentations about robotics for teams all around New York City. Around 200 people attend the conference every year. This year, we gave presentations on FTC Programming using Command Base, Innovative Ways to Upgrade Robots (alongside 310), and Rendering in Fusion360. In addition, we are actively involved in school events. We are always there to promote Stuyvesant Robotics during school open house events and alumni events.",
          src: school,
        },
        {
          title: "Lessons & Robot Demonstrations",
          subtitle: "Inspiring and Spreading FIRST",
          description:
            "We hold robot demonstrations and lessons online and in person to spread FIRST and engineering to a wide audience. We held a robot demo in Cornell Tech for the ACMSCF Symposium with many world-renowned international engineering researchers. By participating, we put FIRST robotics on a global radar. We also held the STEAM Dream Earth Day, where we showed park visitors how to make a bot that could draw patterns, and let them drive our robot to get them excited about robotics. This is also where we met the Girl Scouts troop that we mentor! Lastly, throughout the spring and summer, we taught weekly lessons on CAD using Onshape to students at the Science High School in Cabanatuan City, Philippines.",
          src: demo,
        },
      ].map((v, i) => (
        <React.Fragment key={i}>
          <div className="border-l-[1px] border-slate-300 h-36 right-1/2 absolute" />
          <div
            className={`flex flex-col ${
              i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } pt-20 items-center`}
          >
            <div className="p-10 bg-white shadow-md rounded-lg">
              <p className="text-blue-500 tracking-wide text-lg sm:text-xl lg:text-2xl mb-1 font-medium">
                {v.title}
              </p>
              <h3 className="lg:text-3xl tracking-wide font-medium sm:text-2xl text-xl mb-4">
                {v.subtitle}
              </h3>
              <p className="text-gray-500 text-sm lg:text-base">
                {v.description}
              </p>
            </div>
            <Image
              src={v.src}
              alt="Image: FTC Team 479 team members helping the local community at the event being described."
              className={`w-4/5 ${
                i % 2 === 0 ? "lg:ml-6" : "lg:mr-6"
              } mt-8 lg:mt-0 lg:w-2/5 rounded-lg`}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
