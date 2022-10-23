import logo from "../images/logos/logo1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="bg-white shadow z-50 font-fredoka">
      <div class="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center  ">
        <div class="lg:flex lg:items-center">
          <div class="flex items-center justify-between">
            <div class="w-56">
              <Link to="/">
                <img src={logo} />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div class="flex lg:hidden">
              <button
                type="button"
                class="text-indigo-900  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                aria-label="toggle menu"
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="hidden text-indigo-900 capitalize  lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
            <a
              href="#"
              class="text-purple-700 mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 "
            >
              Annoy Now
            </a>
            <Link
              to="/features"
              class="mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 "
            >
              Features
            </Link>
            <Link
              to="/about"
              class="mt-2 transition-colors duration-200 transform lg:mt-0 lg:mx-4 hover:text-gray-900 "
            >
              About
            </Link>
          </div>
        </div>

        <div class="hidden mt-6 lg:flex lg:mt-0 lg:-mx-2">
          <Link
            to="/login"
            class="rounded-full bg-transparent text-gray-900 font-light py-1.5 px-3.5 border-2 hover:border-3 hover:border-gray-800 border-gray-300"
          >
            Log In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
