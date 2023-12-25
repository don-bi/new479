export default function Game() {
  return (
    <div>
      <h1 className="max-w-4xl mt-24 mx-auto text-center font-display text-3xl md:text-5xl font-medium tracking-tight sm:text-6xl">
        FIRST Tech Challenge
      </h1>{" "}
      <div className="flex flex-col md:flex-row mt-2 items-center justify-center">
        <div className="max-w-2xl mt-2 md:text-lg tracking-tight text-slate-700">
          <p>
            We are Team 479 Stuy Fusion, a robotics team from Stuyvesant High
            School, NYC. Our team competes annually in the First Tech Challenge
            (FTC). We are also part of Stuyvesant Robotics, a 501(c)(3)
            nonprofit which includes our sister teams, FTC 310 Stuy Fission and
            FRC 694 Stuy Pulse. Our mission is to create a robot viable for the
            highest levels of competition while fostering a welcoming STEM
            community.
          </p>
          <p className="mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>{" "}
        <img
          src="/landing/ftc.jpeg"
          alt="3D model of robot"
          className="xl:w-5/12 rounded-lg md:ml-6 mt-6"
        />
      </div>
    </div>
  );
}
