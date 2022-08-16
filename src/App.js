import Navbar from "./Navbar";
import console from "./images/homepage/blackconsole.gif";

const App = () => {
  return (
    <div>
      <Navbar />
      {/* SPACING */}
      <div className="pb-8 md:pb-16 lg:pb-24 "></div>

      <div class="container px-6 py-4 mx-auto lg:flex lg:justify-end lg:items-end ">
        <div className="w-full relative ">
          <div className="max-w-screen-lg ">
            <div className="w-full lg:w-600 ">
              <p className="animate-fadeInUp text-white drop-shadow-md font-fredoka text-stroke-black text-stroke-2 text-6xl lg:text-6xl">
                THE NEW WAY TO ANNOY YOUR FRIENDS
              </p>
            </div>
            <div className="w-450 mt-6">
              <p className="animate-fadeInUp text-4xl text-indigo-900 drop-shadow-md font-fredoka">
                Annoy'em all, annoy'em wherever they are, annoy'em now.
              </p>
              <p className="animate-delay-[800ms] animate-fadeInUp text-1xl text-gray-400 drop-shadow-md font-fredoka mt-6 ">
                Send automatized SMS to annoy your friends or remind them to
                drink their daily cups of water.
              </p>
              <button class="tracking-wide animate-delay-[1700ms] animate-fadeInUp font-fredoka text-1xl mt-6 rounded-full bg-fuchsia-800 hover:bg-purple-900 text-white font-bold py-5 px-10">
                ANNOY'EM
              </button>
            </div>
          </div>
        </div>

        <div className="lg:h-228 lg:w-600 lg:p-56 lg:rounded-full lg:bg-purple-800 lg:absolute lg:-right-72 z-[-1] "></div>
        <div className="mt-8 basis-1/99">
          <img className="lg:rotate-12 basis-1/99" src={console} />
        </div>
        
      </div>
      {/* SPACING */}
      <div className="pt-64"></div>
      <div className="w-full bg-indigo-900 py-96 px-96"></div>
    </div>
  );
};

export default App;
