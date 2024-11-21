"use client";
import React, { useEffect, useState } from "react";
import Top from "../Utils/Top";
import Image from "next/image";
import Contactform from "../Utils/Contactform";
import { ProjectsCount } from "../AdminDashboard/components/ShowApidatas/ShowUserAPiDatas";

const Page = () => {
  const [Projects, setProjects] = useState([]);
  const [getitem, setgetitem] = useState("All"); // Set initial state to "All"

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      const { admins } = await ProjectsCount();
      setProjects(admins);
    } catch (error) {
      console.log(`Failed to fetch team: ${error}`);
    }
  };

  const handleButtonClick = (buttonValue) => {
    setgetitem(buttonValue);
  };

  return (
    <div className="bg-white">
      <Top />
      <div
        className="max-w-full h-[350px] flex justify-center items-center mt-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/backgrounds/banner_Facebook Cover copy.png')",
          backgroundSize: "100% 100%",
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center py-24">
          <div className="text-custom-blue text-2xl md:text-4xl flex justify-center items-center font-bebas tracking-custom">
            OUR PORTFOLIO
          </div>
          <div className="flex m-auto py-3">
            <p className="flex m-auto justify-center items-center text-center w-3/4">
              We have developed many web and mobile applications for the last four years. Some of them are the following.
            </p>
          </div>
          <a
            href="/"
            className="text-paraClr font-semibold text-center md:text-left mt-20 text-xs"
          >
            Home -&nbsp; <span className="text-custom-blue">&nbsp;Our Portfolio</span>
          </a>
        </div>
      </div>

      <div className="mt-32 md:mt-32 w-11/12 m-auto bg-gray-200 p-5 md:w-4/6 md:m-auto rounded-md font-medium h-auto ">
        <ul className="flex gap-2 md:gap-5 justify-center h-auto">
          <li
            className={`cursor-pointer text-sm md:text-md ${
              getitem === "All" ? "text-custom-blue" : "text-gray-400"
            }`}
            onClick={() => {
              handleButtonClick("All");
            }}
          >
            ALL
          </li>
          <li
            className={`cursor-pointer text-sm md:text-md ${
              getitem === "mobileapplication" ? "text-custom-blue" : "text-gray-400"
            }`}
            onClick={() => {
              handleButtonClick("mobileapplication");
            }}
          >
            MOBILE APP
          </li>
          <li
            className={`cursor-pointer text-sm md:text-md ${
              getitem === "webapplication" ? "text-custom-blue" : "text-gray-400"
            }`}
            onClick={() => {
              handleButtonClick("webapplication");
            }}
          >
            WEB APP
          </li>
          <li
            className={`cursor-pointer text-sm md:text-md ${
              getitem === "artificialintelligence" ? "text-custom-blue" : "text-gray-400"
            }`}
            onClick={() => {
              handleButtonClick("artificialintelligence");
            }}
          >
            ARTIFICIAL INTELLIGENCE
          </li>
          <li
            className={`cursor-pointer text-sm md:text-md ${
              getitem === "blockchain" ? "text-custom-blue" : "text-gray-400"
            }`}
            onClick={() => {
              handleButtonClick("blockchain");
            }}
          >
            BLOCK CHAIN
          </li>
          <li
            className={`cursor-pointer text-sm md:text-md ${
              getitem === "uiux" ? "text-custom-blue" : "text-gray-400"
            }`}
            onClick={() => {
              handleButtonClick("uiux");
            }}
          >
            UI/UX DESIGNING
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:w-5/6 md:grid-cols-2 justify-center gap-10 mt-28 w-4/6 m-auto">
        {Projects.map((project) => {
          let searchproject = project.ProjectCategory.trim().replace(
            /\s+/g,
            ""
          );
          let LowerCase = searchproject.toLowerCase();
          console.log(LowerCase, getitem);
          if (LowerCase === getitem) {
            return (
              <div
                key={project.id}
                className="rounded-xl overflow-hidden shadow-lg w-6/6 p-5 bg-customprojects"
              >
                <Image
                  className="w-full"
                  src={`/uploads/${project.Image}`}
                  alt="Image"
                  width={200}
                  height={200}
                />
                <div className="px-6 py-4">
                  <div className="font-semibold text-sm text-gray-600 mb-4">
                    <span className="text-2xl font-black border-b-4 border-custom-blue">
                      {project.ProjectCategory.split(" ")[0]}
                    </span>
                    <span className="text-2xl font-black pl-2">
                      {project.ProjectCategory.split(" ")[1]}
                    </span>
                  </div>
                  <div className="font-bold text-md mb-2">
                    <span className="text-2xl font-bold ">
                      {project.ProjectName.split(" ")[0]}
                    </span>
                    <span className="text-2xl font-bold text-custom-blue pl-2">
                      {project.ProjectName.split(" ")[1]}
                    </span>
                  </div>
                  <p className="text-md text-gray-400 mt-5 w-11/12">
                    {project.ProjectDescription}
                  </p>
                  <div className="mt-10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-custom-blue hover:bg-transparent hover:border-2 hover:border-custom-blue hover:text-custom-blue text-white font-bold p-3 rounded">
                        READ CASE STUDY
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          } else if (!getitem || getitem === "All") {
            return (
              <div
                key={project.id}
                className="rounded-xl overflow-hidden shadow-lg w-6/6 p-5 bg-customprojects"
              >
                <img className="w-full rounded-xl" src={project.Image} alt="Image" />
                <div className="py-4">
                  <div className="text-xl font-bold text-paraClr mb-4 tracking-wider">
                    <span className="border-b-4 border-custom-blue">
                      {project.ProjectCategory.split(" ")[0]}
                    </span>
                    <span className="pl-1">
                      {project.ProjectCategory.split(" ")[1]}
                    </span>
                  </div>
                  <div className="text-[40px] text-paraClr font-bebas">
                    <span>
                      {project.ProjectName.split(" ")[0]}
                    </span>
                    <span className="text-custom-blue pl-2">
                      {project.ProjectName.split(" ")[1]}
                    </span>
                  </div>
                  <p className="text-md text-paraClr w-11/12">
                    {project.ProjectDescription}
                  </p>
                  <div className="mt-5">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-custom-blue hover:bg-transparent hover:border-2 hover:border-custom-blue hover:text-custom-blue text-[#E5E5E5] font-semibold w-[164px] h-10 rounded">
                        Read Case Study
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <Contactform />
    </div>
  );
};

export default Page;