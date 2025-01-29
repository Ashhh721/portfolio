import { ReactTyped } from "react-typed";
import profilePic from "../assets/ashishprofile.jpg";

export const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <img
              src={profilePic}
              alt="Ashish Parmar"
              className="border border-stone-900 rounded-3xl"
            />
          </div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2">
          <span className="text-3xl">Ashish Parmar</span>

          <div className="flex space-x-1 text-3x1 md:text-3x1">
            <h1 className="flex space-x-1 text-3xl">Hello, I'm a ‎‎‎‎‎‎‎‎ </h1>

            {/* <span >Developer</span> */}

            <ReactTyped
              className="text-red-500 font-bold text-3xl"
              strings={["  Developer", "  Programmer", "  Coder"]}
              typeSpeed={40}
              backSpeed={50}
              loop={true}
            />
          </div>
          <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
            Highly motivated and detail-oriented MERN Stack Developer with a
            strong foundation in computer science and software development.
            Proficient in MongoDB, Express.js, React, and Node.js, with a
            passion for building scalable, efficient, and secure web
            applications. Eager to apply skills and knowledge in a real-world
            setting and continue learning and growing as a developer.
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="bg-white rounded-full p-4 text-1xl text-stone-800 mb-10"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};
