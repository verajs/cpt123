import logo from "../images/logos/logo1.png";
const Footer = () => {
  return (
    <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8">
      <div class="sm:flex sm:items-center sm:justify-between">
        <a href="https://annoyem.com/" class="flex items-center mb-4 sm:mb-0">
          <img
            src={logo}
            class="mr-3 h-8 xmd:ml-2"
            alt="Annoy'Em Logo"
          />
          {/* <span class="self-center text-2xl font-semibold whitespace-nowrap font-fredoka">
            Annoy'Em
          </span> */}
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 ">
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              About
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" class="mr-4 hover:underline md:mr-6 ">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="#" class="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8 " />
      <span class="block text-sm text-gray-500 sm:text-center ">
        © 2022{" "}
        <a href="https://annoyem.com/" class="hover:underline">
          Annoy'Em™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
