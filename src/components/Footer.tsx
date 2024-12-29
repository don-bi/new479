import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

export default function Copyright({ theme }: { theme: "dark" | "light" }) {
  return (
    <>
      <div className="border-t-[1px] w-1/2 ml-auto mt-8 mr-auto" />
      <div
        className={`text-center text-sm text-gray-50 text-bold sm:text-center pt-6 ${
          theme === "light" ? "text-gray-50" : " text-gray-500"
        }`}
      >
        Copyright © StuyFusion 2023
      </div>
      <div className="text-center">
        <a href="https://www.youtube.com/@stuyfusion">
          <AiOutlineYoutube className="inline-block w-7 h-7 mt-4 text-gray-600 hover:text-gray-700 cursor-pointer duration-150" />
        </a>
        <a href="https://github.com/fusion479">
          <AiOutlineGithub className="inline-block w-7 h-7 mt-4 ml-4 text-gray-600 hover:text-gray-700 cursor-pointer duration-150" />
        </a>
        <a href="https://www.instagram.com/stuyfusion/">
          <AiOutlineInstagram className="inline-block w-7 h-7 mt-4 ml-4 text-gray-600 hover:text-gray-700 cursor-pointer duration-150" />
        </a>
      </div>
    </>
  );
}
