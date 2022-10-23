import Navbar from "../components/Navbar.js";
import annoyemshiba from "../images/generaluse/annoyemshiba.png";
import medjed from "../images/generaluse/medjed.png";
import castle from "../images/generaluse/pufi.gif";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="pb-8 md:pb-16 lg:pb-24 bg-red-400"></div>

      <div class="container px-6 py-4 mx-auto lg:flex lg:justify-end lg:items-end max-w-screen-xl bg-red-400">
        <p className="animate-fadeInUp text-white drop-shadow-md font-fredoka text-stroke-black text-stroke-2 text-6xl lg:text-7xl lg:pb-48">
          Who's behind <span className="text-yellow-200">Annoy'Em?</span>
        </p>

        <div className="lg:h-full lg:w-full lg:bg-red-400 lg:absolute lg:right-0 bottom-96 lg:z-[-1] "></div>
        <div className="mt-8 basis-1/99 lg:pl-[13rem]">
          <img className="w-96" src={annoyemshiba} />
        </div>
      </div>
      <div className="lg:h-full lg:w-full lg:bg-red-400 lg:absolute lg:right-0 bottom-[17rem] lg:z-[-1] "></div>

      {/* part 2 */}
      <div className="pt-24 lg:pt-40"></div>
      <div class="container px-6 py-4 mx-auto lg:flex lg:justify-center lg:items-center  max-w-screen-xl">
        <div className="">
          <p className="animate-fadeInUp drop-shadow-md font-fredoka text-stroke-black text-stroke-2 text-6xl lg:text-8xl lg:pb-8 text-blue-400">
            The story behind
          </p>
          <p className="animate-fadeInUp text-4xl text-blue-900 drop-shadow-md font-fredoka ">
            It all started a long, long time ago... far, far away...
          </p>
          <p className="animate-delay-[800ms] animate-fadeInUp text-1xl text-gray-400 drop-shadow-md font-fredoka mt-6">
            Way back, before Annoy'em was even a thought, I used to charge small amounts of money online to
            annoy people's friends through SMS messages, soon it became hard to manage doing it on a bigger scale by myself,
            so it came to my mind automatizing the process with the programming knowledge I would soon gain.  
          </p>
          <p className="animate-delay-[800ms] animate-fadeInUp text-1xl text-gray-400 drop-shadow-md font-fredoka mt-6">
            And so, Annoy'em was born, my biggest project, my dream! Annoying people all around the world, all the time.
            A dream for an annoyer.
          </p>
        </div>


      {/* PART 3 */}

        <div className="lg:h-full lg:w-full lg:absolute lg:right-0 bottom-96 lg:z-[-1] "></div>
        <div className="mt-8 basis-1/99 lg:pl-[13rem]">
          <img className="w-96" src={castle} />
          <p className="font-fredoka">real image of our secret headquarters</p>
        </div>
      </div>
      <div className="pt-24 lg:pt-40"></div>
      <div class="container px-6 py-4 mx-auto lg:flex lg:justify-center lg:items-center  max-w-screen-xl">
        <div className="">
          <p className="animate-fadeInUp drop-shadow-md font-fredoka text-stroke-black text-stroke-2 text-6xl lg:text-8xl lg:pb-8 text-white">
            Meet the creator
          </p>
          <p className="animate-fadeInUp text-4xl text-white drop-shadow-md font-fredoka ">
            (the creator of the website, that is)
          </p>
          <p className="animate-delay-[800ms] animate-fadeInUp text-1xl text-gray-100 drop-shadow-md font-fredoka mt-6">
            Way back, before Annoy'em was even a thought, I used to charge small amounts of money online to
            annoy people's friends through SMS messages, soon it became hard to manage doing it on a bigger scale by myself,
            so it came to my mind automatizing the process with the programming knowledge I would soon gain.  
          </p>
          <p className="animate-delay-[800ms] animate-fadeInUp text-1xl text-gray-100 drop-shadow-md font-fredoka mt-6">
            And so, Annoy'em was born, my biggest project, my dream! Allowing people to easily annoy 
            people all around the world, all the time.
            A dream for an annoyer such as myself.
          </p>
        </div>

        <div className="lg:h-full lg:w-full lg:absolute lg:right-0 bottom-96 lg:z-[-1] "></div>
        <div className="mt-8 basis-1/99 lg:pl-[13rem]">
          <img className="w-96" src={medjed} />
          <p className="font-fredoka text-white">real image of our CEO</p>
        </div>
      <div className="lg:h-[700px] lg:w-full lg:bg-red-400 lg:absolute lg:right-0 lg-bottom-0 lg:z-[-1]"></div>
      </div>
        <div className="pb-48"></div>
      <Footer />
    </div>
  );
};

export default About;
