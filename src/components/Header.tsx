import Link from "next/link";

const Header = () => {
  return (
    <section className="w-full px-8 text-gray-700 body-font">
      <div className="container flex flex-col flex-wrap items-center py-5 mx-auto max-w-7xl md:flex-row">
        <nav className="flex flex-wrap items-center pb-5 text-base md:w-2/5 md:pb-0 text-black">
          icon
        </nav>
        <a
          href="#_"
          className="flex items-center order-first mb-6 font-medium text-gray-900 md:order-none md:w-1/5 title-font md:items-center md:justify-center md:mb-0"
        >
          <span className="text-xl font-black leading-nones select-none logo text-white">
            CHEZ!<span className="text-indigo-600">.</span>
          </span>
        </a>
        <div className="inline-flex items-center space-x-6 md:w-2/5 md:justify-end">
          <Link
            href="/"
            className="text-base font-medium leading-6 text-gray-900 whitespace-no-wrap transition duration-150 ease-in-out hover:text-gray-600 border-2 border-black bg-white rounded-full w-92 py-2 px-4"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
