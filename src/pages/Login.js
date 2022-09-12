import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
    <div className="bg-deepdeepblue font-fredoka">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/3 bg-journey-login"
        >
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-25">
            <div>
              {/* <h2 className="text-4xl font-bold text-white">Brand</h2>

              <p className="max-w-xl mt-3 text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                libero suscipit nam temporibus molestiae
              </p> */}
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-yellow-400 ">
                Annoy'Em
              </h2>

              <p className="mt-3 text-white ">
                Sign in to access your account
              </p>
            </div>

            <div className="mt-8">
              <form>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm text-gray-300 "
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <label
                      for="password"
                      className="text-sm text-gray-300 "
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="mt-6">
                  <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Log In
                  </button>
                </div>
              </form>

              <p className="mt-6 text-sm text-center text-gray-400">
                Don't have an account yet?{" "}
                <Link
                  to="/register"
                  className="text-purple-500 focus:outline-none focus:underline hover:underline"
                >
                  Sign up
                </Link>
                .
              </p>
              <p className="mt-2 text-sm text-center text-gray-400">
                  {" "}
                  <Link
                    to="/"
                    className="text-purple-500 focus:outline-none focus:underline hover:underline"
                  >
                    Home
                  </Link>
                  
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
