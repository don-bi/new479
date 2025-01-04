import Image from "next/image";
import avatar from "../../../../../public/team/avatar.webp";
import zachary from "../../../../../public/team/zachary.jpg";

export default function Members() {
  return (
    <div className="gap-10 grid auto-rows-fr grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 mt-20">
      {new Array(
        { name: "Ryan Kim", role: "Driver", avatar, },
        { name: "Kelly Lin", role: "Driver", avatar, },        
        { name: "Kiran Yesley", role: "Coach", avatar, },
        { name: "Brandon Ngyuen", role: "Veteran Programmer", avatar, },
        { name: "Stephen Chen", role: "Veteran Engineer", avatar, },
        { name: "Kayden Au", role: "Veteran Engineer", avatar, },
        { name: "Zachary Aaron", role: "Veteran Engineer", avatar: zachary, },
        { name: "Aidan Gray", role: "Rookie Engineer", avatar, },
        { name: "Cassandra Chan", role: "Rookie Programmer", avatar, },
        { name: "Erica You", role: "Rookie Engineer", avatar, },
        { name: "Izo Kawaguchi", role: "Rookie Engineer", avatar, },
        { name: "Gus Hurwitz", role: "Rookie Engineer", avatar, },
        { name: "Tasfia Bideeta", role: "Rookie Engineer", avatar, },


      ).map((v, i) => (
        <div key={i}>
          <div className="justify-center pb-8 grid place-items-center">
            <Image
              src={v.avatar}
              height={100}
              width={100}
              alt="img"
              className="rounded-full border-[1.5px] border-slate-300 mb-2"
            />
            <span className="text-base font-semibold md:text-xl text-gray-950">
              {v.name}
            </span>
            <p className="text-xs font-semibold text-blue-500">{v.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
