import Image from 'next/image'
import Link from 'next/link'
import Contactform from '../Utils/Contactform'
import Top from '../Utils/Top'

const page = () => {
  return (
    <>
      <Top />
      <div
        className="max-w-full h-[500px] flex justify-center items-start mt-20 bg-[#ff1e1e67] text-white relative">
        <div className="flex flex-col justify-center items-center mt-12">
          <div className="flex m-auto py-3">
            <p className="flex m-auto justify-center items-center text-center font-bold tracking-widest text-2xl">
              Statusaver
            </p>
          </div>
          <div className="text-4xl md:text-6xl text-center flex justify-center items-center font-bebas tracking-custom">
            Social media Apps Status Downloader
          </div>
        </div>
        <Image
          src="/backgrounds/appcase.png"
          alt="Logo"
          className="object-cover absolute bottom-0"
          width={588}
          height={314}
        />
      </div>


      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-32 mt-20 md:mt-32 md:gap-x-16 mb-32">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-3 text-center md:text-left md:w-[70%]">
          <div className="font-bold text-paraClr text-lg">
            <span className="border-b-4 border-custom-blue">S t a t u s</span>
            <span className="">&nbsp;a v e r</span>
          </div>
          <div className="text-4xl font-bebas tracking-custom">
            <span className="text-custom-blue">OVERVIEW</span>
          </div>
          <p className="text-sm md:text-base text-paraClr leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quis et cursus integer tincidunt cras velit quisque. Non at duis neque, ut elementum, sit integer sociis ac. Fringilla faucibus fermentum, lacus tellus. Urna nisl sagittis et ut at sit auctor. Aliquet ultrices interdum convallis augue. Blandit semper ipsum dignissim quisque molestie tempor neque ac. Nibh aliquet facilisi purus interdum amet varius pellentesque mauris sollicitudin. Diam turpis at lacus proin sit est et. Tempor eget pretium massa mattis.
          </p>
        </div>
        {/* iamge */}
        <div className="w-full md:w-[30%] h-auto md:h-full relative mt-5 md:mt-0">
          <div className="bg-custom-blue-light w-[216px] h-[139px] rounded-[10px] m-auto uppercase">
            <div className="bg-custom-blue rounded-t-[10px] h-10 flex items-center justify-center">
              <h2 className="font-bold text-white tracking-custom">Project Timeline</h2>
            </div>
            <div className="flex items-center justify-center h-[99px]">
              <h2 className=" flex items-center justify-center text-paraClr font-medium">Jan, 2021 - jan 2022</h2>

            </div>
          </div>
        </div>
      </div>

      <div className="bg-custom">
        <div className="py-20 flex flex-col md:flex-row justify-center items-center gap-7 text-white">
          <div className="w-[416px] h-[266px] bg-custom-blue-light rounded-[10px] flex justify-start items-center flex-col">
            <h2 className="uppercase font-bebas text-4xl tracking-custom my-10">our team </h2>
            <ul className="text-center tracking-custom leading-tight">
              <li>project manager</li>
              <li>Requirement engineer</li>
              <li>UI/UX researcher - Designer</li>
              <li>mobile app developer</li>
              <li>testing team</li>
            </ul>
          </div>

          <div className="w-[416px] h-[266px] bg-custom-blue-light rounded-[10px] flex justify-start items-center flex-col">
            <h2 className="uppercase font-bebas text-4xl tracking-custom my-10">technologies used</h2>
            <p className="text-center tracking-custom leading-tight">
              <ul className="text-center tracking-custom leading-tight">
                <li>Flutter</li>
                <li>Firebase</li>
              </ul>
            </p>
          </div>

          <div className="w-[416px] h-[266px] bg-custom-blue-light rounded-[10px] flex justify-start items-center flex-col">
            <h2 className="uppercase font-bebas text-4xl tracking-custom my-10">category</h2>

            <ul className="text-center tracking-custom leading-tight">
              <li> Mobile Application</li>
            </ul>
          </div>
        </div>
      </div>


      <div className="p-10 md:px-20" id="mobilesection3">
        <div className="flex justify-center items-center flex-col mt-8">
          <div className="text-custom-blue text-4xl font-bebas tracking-custom flex justify-center items-center gap-2">
            <span className="text-black">THE </span>
            <span className="text-custom-blue">PROBLEM  </span>
          </div>
          <div className="text-center w-5/6 text-paraClr leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quis et cursus integer tincidunt cras velit quisque. Non at duis neque, ut elementum, sit integer sociis ac. Fringilla faucibus fermentum, lacus tellus. Urna nisl sagittis et ut at sit auctor. Aliquet ultrices interdum convallis augue. Blandit semper ipsum dignissim quisque molestie tempor neque ac. Nibh aliquet facilisi purus interdum amet varius pellentesque mauris sollicitudin. Diam turpis at lacus proin sit est et. Tempor eget pretium massa mattis.
          </div>
        </div>
      </div>


      <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 md:mt-10  md:gap-x-16 mb-5 bg-[#ff1e1e61] py-10  text-white">
        <div className="flex flex-col justify-center items-center md:items-start gap-y-3 text-center md:text-left md:w-[70%]">
          <div className="font-bold text-lg">
            <span className="border-b-4 border-white">S t a t u s</span>
            <span className="">&nbsp;a v e r</span>
          </div>
          <div className="text-4xl font-bebas tracking-custom">
            <span>Solution</span>
          </div>
          <p className="text-sm md:text-base leading-tight mb-5 md:mb-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quis et cursus integer tincidunt cras velit quisque. Non at duis neque, ut elementum, sit integer sociis ac. Fringilla faucibus fermentum, lacus tellus. Urna nisl sagittis et ut at sit auctor. Aliquet ultrices interdum convallis augue. Blandit semper ipsum dignissim quisque molestie tempor neque ac. Nibh aliquet facilisi purus interdum amet varius pellentesque mauris sollicitudin. Diam turpis at lacus proin sit est et. Tempor eget pretium massa mattis.
          </p>
        </div>
        {/* iamge */}
        <div className="w-full md:w-[30%] h-auto md:h-full relative flex items-center justify-center">

          <Image
            src="/backgrounds/app3.png"
            alt="Logo"
            className="object-cover"
            width={390}
            height={400}
          />

        </div>
      </div>


      <div className="p-10 md:px-20 mt-10">
        <div className="flex justify-center items-center flex-col">
          <div className="text-custom-blue text-4xl font-bebas tracking-custom flex justify-center items-center gap-2">

            <span className="text-custom-blue">the process</span>
          </div>
          <div className="text-center md:w-4/6 text-paraClr leading-tight mb-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quis et cursus integer tincidunt cras velit quisque. Non at duis neque, ut elementum, sit integer sociis ac. Fringilla faucibus fermentum, lacus tellus. Urna nisl sagittis et ut at sit auctor. Aliquet ultrices interdum convallis augue. Blandit semper ipsum dignissim quisque molestie tempor neque ac. Nibh aliquet facilisi purus interdum amet varius pellentesque mauris sollicitudin. Diam turpis at lacus proin sit est et. Tempor eget pretium massa mattis.
          </div>
          <Image
            src="/backgrounds/process1.svg"
            alt="Logo"
            className="object-cover"
            width={1197}
            height={174}
          />
        </div>
      </div>


      <div className="p-10 md:px-20 mt-16">
        <div className="flex justify-center items-center flex-col">
          <div className="text-custom-blue text-3xl font-bebas tracking-custom flex justify-center items-center gap-2">
            <span className="text-custom-blue">impact</span>
          </div>
          <div className="text-center md:w-4/6 text-paraClr leading-tight mb-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quis et cursus integer tincidunt cras velit quisque. Non at duis neque, ut elementum, sit integer sociis ac. Fringilla faucibus fermentum, lacus tellus. Urna nisl sagittis et ut at sit auctor. Aliquet ultrices interdum convallis augue. Blandit semper ipsum dignissim quisque molestie tempor neque ac. Nibh aliquet facilisi purus interdum amet varius pellentesque mauris sollicitudin. Diam turpis at lacus proin sit est et. Tempor eget pretium massa mattis.
          </div>
          <Image
            src="/backgrounds/Group 105.svg"
            alt="Logo"
            className="object-cover"
            width={526}
            height={251}
          />
        </div>
      </div>

      <div className="p-10 md:px-20  mt-16">
        <div className="flex justify-center items-center flex-col">
          <div className="text-custom-blue text-3xl font-bebas tracking-custom flex justify-center items-center gap-2">
            <span className="text-custom-blue">future improvements</span>
          </div>
          <div className="text-center md:w-4/6 text-paraClr leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quis et cursus integer tincidunt cras velit quisque. Non at duis neque, ut elementum, sit integer sociis ac. Fringilla faucibus fermentum, lacus tellus. Urna nisl sagittis et ut at sit auctor. Aliquet ultrices interdum convallis augue. Blandit semper ipsum dignissim quisque molestie tempor neque ac. Nibh aliquet facilisi purus interdum amet varius pellentesque mauris sollicitudin. Diam turpis at lacus proin sit est et. Tempor eget pretium massa mattis.
          </div>
        </div>
      </div>

      <Link href='/Projects'
        className="text-customFull transition-all w-36 h-10 font-semibold m-auto rounded-md bg-custom-blue mb-6 hover:bg-white hover:border-2 hover:border-custom-blue hover:text-custom-blue flex items-center justify-center"
      >
        View Portfolio
      </Link>
      <Contactform />
    </>
  )
}

export default page