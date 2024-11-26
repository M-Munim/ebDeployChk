import React from "react";
import Top from "../Utils/Top";
import Image from "next/image";
import { Webapps, WebSecapps } from "../components/Mobileapps";
import { Webeappslogo } from "../components/Mobileapps";
import Contactform from "../Utils/Contactform";
import Link from "next/link";

const WebAPP = () => {
  return (
    <div className=" bg-white">
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
        <div className="flex flex-col justify-center items-center py-24 text-center">
          <h1 className="text-custom-blue text-4xl font-bebas tracking-custom">
            WEB APP DEVELOPMENT
          </h1>
          <p className="w-5/6 leading-tight text-paraClr my-3">
            We design and create innovative, engaging, and secure web
            applications that are built to last.
          </p>
          <a
            href="/"
            className="text-paraClr font-semibold text-center md:text-left mt-20 text-xs"
          >
            Home - Services -&nbsp; <span className="text-custom-blue">&nbsp;Web App Development</span>
          </a>
        </div>
      </div>

      {/* section 2 */}
      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-32 md:gap-x-8 mb-32">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
          <div className="font-bold text-paraClr text-lg">
            <span className="border-b-4 border-custom-blue">W e b</span>
            <span className=""> &nbsp;a p p &nbsp;d e v e l o p m e n t.</span>
          </div>
          <div className="text-4xl font-bebas tracking-custom">
            <span className="text-paraClr">WE HELP BUSINESSES</span>
            <span className="text-custom-blue"> BY WEB APPLICATIONS.</span>
          </div>
          <p className="text-sm md:text-base text-paraClr leading-tight">
            Encoderbytes delivers web based applications at every stage of the
            growth from tailored to specific needs of the company.
          </p>

          <Link href='#form'
            className="text-customFull transition-all w-36 h-10 font-semibold mt-4 rounded-md bg-custom-blue mb-6 hover:bg-white hover:border-2 hover:border-custom-blue hover:text-custom-blue flex items-center justify-center"
          >
            Let’s Discuss
          </Link>
        </div>
        {/* iamge */}
        <div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
          <Image
            src="/backgrounds/Rectangle29.png"
            alt="Logo"
            className="object-cover w-full h-full"
            width={400}
            height={400}
          />
        </div>
      </div>

      {/* section 3 */}
      <div id="section3"></div>
      <div className="bg-custom py-14 md:px-20">
        <div className="flex justify-center items-center flex-col mt-4">
          <div className="text-custom-blue text-4xl font-bebas flex justify-center items-center gap-2 tracking-custom">
            <span className="text-black">WEB APP</span>
            <span className="text-custom-blue"> DEVELOPMENT SERVICES</span>
          </div>
          <div className="text-center w-5/6 md:w-4/6 text-paraClr leading-tight">
            The carefully designed web application is needed for the product
            idea of your startup that helps you innovate and solve real
            business problems to disrupt established markets and gain
            sustainability.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mt-14 md:mx-16">
          <div className="rounded-lg  bg-white p-9">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl font-bold text-paraClr opacity-20  font-bebas">
                01
              </span>
              <Image
                src="/icons/startup.png"
                alt="Logo"
                width={70}
                height={60}
              />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6">
              <div className="text-3xl font-bebas tracking-custom">
                <span className="text-black">NEW</span>
                <span className="text-custom-blue"> STARTUPS</span>
              </div>
              <p className="mt-2 text-paraClr opacity-50 leading-tight">
                To meet your business requirement and need of the end user we
                develop IOS apps .To create the superior quality we use the
                latest tools,technology and user friendly mobile apps.
              </p>
            </div>
          </div>
          <div className="rounded-lg bg-white p-9">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl font-bold text-paraClr opacity-20 font-bebas">
                02
              </span>
              <Image src="/icons/factory.png" alt="Logo" width={70} height={60} />
            </div>
            <div className="flex flex-col md:w-full ml-2 mt-6">
              <div className="text-3xl font-bebas tracking-custom">
                <span className="text-black">ESTABLISHED</span>
                <span className="text-custom-blue"> BUSINESSES</span>
              </div>
              <p className="mt-2 text-paraClr opacity-50 leading-tight">
                The bespoke web application greatly help you to streamline the
                operational workflows of your organization when off-the-shelf
                solutions are too generic or rigid .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}
      <div id="section4"></div>
      <div className="bg-red w-full">
        <div className="flex justify-center items-center  flex-col mt-32 md:mt-20">
          <div className="text-4xl text-center font-bebas tracking-custom">
            <span className="">WE UNDERSTAND </span>
            <span className="text-custom-blue">WHAT`S IMPORTANT</span>
          </div>
          <p className="w-4/5 md:w-3/5 text-center text-paraClr leading-tight">
            Apart from top-end software engineering, a whole lot more goes into
            developing and launching successful web applications.
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-6 gap-5 w-5/6 mt-10">
            {Webapps.map((items) => {
              return (
                <div
                  key={items.image}
                  className=" bg-[#F5F5F6] rounded-lg border-black p-4 gap-5 text-center flex flex-col justify-center items-center"
                >
                  <Image
                    src={items.image}
                    alt="image"
                    width={60}
                    height={60}
                  />
                  <span className="text-sm">{items.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* section 5 */}
      <div id="section5"></div>

      <section className="mt-[5%]">
        <div className="w-full py-16">
          <div
            className=" flex flex-col justify-center items-center  rounded-md md:h-auto md:p-16 text-white"
            style={{
              backgroundImage: "url('/backgrounds/webdevcst.png')",
              backgroundPosition: "center",
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="pt-10 text-2xl md:text-[40px] font-bebas tracking-custom">
              INTELLECTUAL PROPERTY [IP] PROTECTION
            </div>
            <p className="mt-5 mx-4 md:mx-40 text-center leading-tight">
              The devil is in the detail, and we ensure that our mobile application development services capture that by breaking down your project into different phases. Each phase is critical in the overall success of the mobile app development lifecycle.
            </p>

            <p className="mt-5 mx-4 md:mx-40 text-center leading-tight">
              We are a Peshawar based web app development agency serving an impressive client in the Pakistan and worldwide. We take pride in the fact that our clients continue to say positive things about our work.
            </p>

            <Link href='#form'
              className="text-custom-blue hover:text-white text-md w-40 h-10 transition-all font-semibold  mt-10 rounded-md bg-white hover:bg-custom-blue mb-2 flex items-center justify-center" >
              Tell Us Your Idea
            </Link>
          </div>
        </div>
      </section>

      {/* section 6 */}
      <div id="section6"></div>
      <div className="w-full">
        <div className="flex justify-center items-center  flex-col mt-14 ">
          <div className="text-4xl text-center font-bebas tracking-custom">
            <span className="">WEB APPLICATION DEVELOPMENT</span>
            <span className="text-custom-blue"> FOR A WIDE VARIETY OF INDUSTRIES</span>
          </div>
          <p className="w-4/5 md:w-3/5 mt-2 text-center text-paraClr leading-tight">
            Across the globe we have delivered large numbers of web applications
            to clients and web development applications are our strength .Before
            we initiate any programming work we will commit to understanding
            your industry and your project as your software partner.You can
            count on us as a web application development company.
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-6 gap-5 w-5/6 mt-10">
            {WebSecapps.map((items) => {
              return (
                <div
                  key={items.image}
                  className=" bg-[#F5F5F6] rounded-lg border-black w-[196px] h-[150px] gap-5 text-center flex flex-col justify-center items-center"
                >
                  <Image
                    src={items.image}
                    alt="image"
                    width={60}
                    height={60}
                  />
                  <span className="text-sm">{items.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* section 7  */}
      <div id="section7"></div>

      <div className="w-full mt-20">
        <div className="flex justify-center items-center flex-col ">
          <div className="text-[40px] font-bebas tracking-custom text-center mt-14">
            <span className="">TOOLS & </span>
            <span className="text-custom-blue">TECHNOLOGIES</span>
          </div>
          <p className="w-4/5 md:w-3/5 mt-3 text-center text-paraClr leading-tight">
            To launch and grow successful digital business as a leading web
            development company in Pakistan we cover every technology to choose
            the right platform for you that perfectly serves your requirements.
          </p>
          <div className=" grid grid-cols-2 md:grid-cols-6 gap-8 my-10  w-5/6">
            {Webeappslogo.map((items) => {
              return (
                <div
                  key={items.image}
                  className="border-2 border-gray-200 w-48 h-48 text-center flex flex-col gap-6 justify-center items-center rounded-lg "
                >
                  <img src={items.image} className="w-16" alt="image" />
                  <span className="font-semibold text-lg">{items.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* section 8 */}
      <div id="section8"></div>

      <section className="bg-gray-100 pb-10 mt-20">
        <div className="flex pt-20 justify-center items-center text-4xl font-bebas tracking-custom">
          <span>WEB</span>
          <span className="text-custom-blue">&nbsp; APPLICATIONS</span>
        </div>

        <div
          className="flex flex-col md:flex-row justify-start items-center px-6 md:px-32 mt-20 md:mt-8 gap-y-8 md:gap-x-16 md:w-5/6 m-auto p-8 rounded-lg"
          style={{ backgroundColor: "rgb(164, 189, 247)" }}
        >
          <div className="w-full md:w-[40%] h-auto md:h-full relative my-10">
            <Image
              src="/backgrounds/app2.png"
              alt="Logo"
              className="object-cover w-full h-full"
              width={350}
              height={350}
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
            <div className="text-2xl font-bold text-paraClr">
              <span className="border-b-4 border-white">v i d s </span>
              <span className=" border-black">s a v e</span>
            </div>
            <div className="text-4xl text-white font-bebas tracking-custom">
              SOCIAL MEDIA VIDEO DOWNLOADER
            </div>
            <p className="text-paraClr leading-tight">
              With over 2 years of experience in AI, EncoderBytes helps build
              software for businesses that can be a source of revenue for them.
              We deliver AI services to businesses to enhance and add value to
              their existing products. We also help them enhance their portfolio
              by creating brand new software for them.
            </p>
            <div className="text-white rounded-md w-40 h-11 border-2 hover:bg-custom-blue border-white text-center justify-center cursor-pointer flex items-center font-bold">
              <button>Read Casestudy</button>
            </div>
          </div>
        </div>


        <div
          className="flex flex-col md:flex-row justify-start items-center px-6 md:px-32 my-20 md:my-14  gap-y-8 md:gap-x-16 md:w-5/6 m-auto p-8 rounded-lg bg-pink-300"
        >

          <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
            <div className="text-2xl font-bold text-paraClr">
              <span className="border-b-4 border-white">v i d s </span>
              <span className=" border-black">s a v e</span>
            </div>
            <div className="text-4xl text-white font-bebas tracking-custom">
              SOCIAL MEDIA VIDEO DOWNLOADER
            </div>
            <p className="text-paraClr leading-tight">
              With over 2 years of experience in AI, EncoderBytes helps build
              software for businesses that can be a source of revenue for them.
              We deliver AI services to businesses to enhance and add value to
              their existing products. We also help them enhance their portfolio
              by creating brand new software for them.
            </p>
            <div className="text-white rounded-md w-40 h-11 border-2 hover:bg-custom-blue border-white text-center justify-center cursor-pointer flex items-center font-bold">
              <button>Read Casestudy</button>
            </div>
          </div>

          <div className="w-full md:w-[40%] h-auto md:h-full relative my-10">
            <Image
              src="/backgrounds/app3.png"
              alt="Logo"
              className="object-cover w-full h-full"
              width={350}
              height={350}
            />
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row justify-start items-center px-6 md:px-32 mt-20 md:mt-8 gap-y-8 md:gap-x-16 md:w-5/6 m-auto p-8 rounded-lg"
          style={{ backgroundColor: "rgb(164, 189, 247)" }}
        >
          <div className="w-full md:w-[40%] h-auto md:h-full relative my-10">
            <Image
              src="/backgrounds/app1.png"
              alt="Logo"
              className="object-cover w-full h-full"
              width={350}
              height={350}
            />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
            <div className="text-2xl font-bold text-paraClr">
              <span className="border-b-4 border-white">v i d s </span>
              <span className=" border-black">s a v e</span>
            </div>
            <div className="text-4xl text-white font-bebas tracking-custom">
              Social media video downloader
            </div>
            <p className="text-paraClr leading-tight">
              With over 2 years of experience in AI, EncoderBytes helps build
              software for businesses that can be a source of revenue for them.
              We deliver AI services to businesses to enhance and add value to
              their existing products. We also help them enhance their portfolio
              by creating brand new software for them.
            </p>
            <div className="text-white rounded-md w-40 h-11 border-2 hover:bg-custom-blue border-white text-center justify-center cursor-pointer flex items-center font-bold">
              <button>Read Casestudy</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center  mt-10">
          <Link href="/Projects">
            <button className="text-customFull transition-all w-36 h-10 font-semibold mt-4 rounded-md bg-custom-blue mb-6 hover:bg-gray-100 hover:border-2 hover:border-custom-blue hover:text-custom-blue">
              View Portfolio
            </button>
          </Link>
        </div>

      </section>
      {/* contact from */}
      <Contactform />
    </div>
  );
};

export default WebAPP;
