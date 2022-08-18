import Navbar from "./Navbar";
import console from "./images/homepage/blackconsole.gif";
import sms1 from "./images/homepage/sms1.gif";

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
            <div className="lg:w-450 mt-6 w-900">
              <p className="animate-fadeInUp text-4xl text-indigo-900 drop-shadow-md font-fredoka">
                Annoy'em all, annoy'em wherever they are, annoy'em now.
              </p>

              <p className="animate-delay-[800ms] animate-fadeInUp text-1xl text-gray-400 drop-shadow-md font-fredoka mt-6">
                Send automatized SMS to annoy your friends or remind them to
                drink their daily cups of water.
              </p>

              <button class="tracking-wide animate-delay-[1700ms] animate-fadeInUp font-fredoka text-1xl mt-6 rounded-full bg-fuchsia-800 hover:bg-purple-900 text-white font-bold py-5 px-10">
                ANNOY'EM
              </button>
            </div>
          </div>
        </div>

        <div className="lg:h-228 lg:w-600 lg:p-56 lg:rounded-full lg:bg-[#1d1853] lg:absolute lg:-right-72 z-[-1] "></div>
        <div className="mt-8 basis-1/99">
          <img className="lg:rotate-12 basis-1/99" src={console} />
        </div>
      </div>
      {/* SPACING */}
      <div className="lg:pt-[28vh]"></div>
      <div class=" relative bg-deepdeepblue">
        <div className=" container px-6 py-4 mx-auto">
          <div className="max-w-screen-lg">
            {/* TEXT */}
            <div className="mt-6 w-900">
              <h1 className="animate-fadeInUp text-7xl text-yellow-300 text-stroke drop-shadow-md font-fredoka">
                Thousands of annoying{" "}
                <span className="text-white">
                  automated SMS at your disposal.
                </span>
              </h1>
              <div className="pt-[14vh] lg:pt-[28vh]"></div>
              <p className="text-3xl font-fredoka text-yellow-300 w-900">
                Get reminders for daily cups of water, or send automatized daily
                animal facts.
              </p>
              <p className="text-white font-fredoka text-1xl mt-5">
                Leave manual processes behind. Easily annoy or help your friends
                achieve their daily goals with our strong automated SMS API.
              </p>

              <ul
                role="list"
                class="marker:text-white mt-5 list-disc pl-5 space-y-3 text-1xl text-white font-fredoka ml-6 lg:ml-16"
              >
                <li>Leverage your capacity for annoying your friends</li>
                <li>
                  Use the power of our relentless API to help or annoy your
                  friends. The choice is yours.
                </li>
                <li>
                  Never forget to drink water again, our API has you covered.
                </li>
              </ul>

              <p className="text-3xl font-fredoka text-yellow-300 w-900 mt-44">
                Get reminders for daily cups of water, or send automatized daily
                animal facts.
              </p>
              <p className="text-white font-fredoka text-1xl mt-5">
                Leave manual processes behind. Easily annoy or help your friends
                achieve their daily goals with our strong automated SMS API.
              </p>

              <ul
                role="list"
                class="marker:text-white mt-5 list-disc pl-5 space-y-3 text-1xl text-white font-fredoka ml-6 lg:ml-16"
              >
                <li>Unstoppable SMS tools to annoy anyone</li>
                <li>
                  Our API will make your friends never forget why koalas sleep at daytime.
                </li>
                <li>
                  Never miss a deadline again, we won't stop reminding you until you get your goal.
                </li>
              </ul>
            </div>

            <img
              className="mt-8 w-450 top-0 relative xmd:absolute bottom-0 right-0 mr-20"
              src={sms1}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
