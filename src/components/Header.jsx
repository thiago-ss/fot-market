import { useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full shadow bg-[#181818] font-montserrat fixed z-10 p-[10px] sm:max-w-[320px] md:max-w-[100%]">
      <div className="justify-between px-4 mx-auto xl:items-center xl:flex xl:px-8 2xl:items-center 2xl:flex 2xl:px-8">
        <div>
          <div className="flex items-center justify-between py-3 xl:py-5 xl:block 2xl:py-5 2xl:block">
            <a href="#hero">
              <img src="/logo.png" alt="Logo" />
            </a>
            <div className="xl:hidden 2xl:hidden">
              <button
                className="p-2 text-gray-700 rounded-2xl outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 xl:block xl:pb-0 xl:mt-0 2xl:block 2xl:pb-0 2xl:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 xl:flex xl:space-x-6 xl:space-y-0 2xl:flex 2xl:space-x-6 2xl:space-y-0 font-semibold">
              <li className="text-white hover:text-indigo-200">
                <a href="#hero">Início</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="#about">Quem somos</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <a href="#negotiation">Condições</a>
              </li>
              <li className="text-white hover:text-indigo-200">
                <button
                  id="dropdownInformationButton"
                  data-dropdown-toggle="dropdownInformation"
                  class="text-[#3c3400] w-[110px] h-[30px] bg-[#c6aa0e] text-[20px] rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                  type="button"
                >
                  <h1 className="text-[16px] text-center">Serviços</h1>
                  <svg
                    class="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                <div
                  id="dropdownInformation"
                  class="z-10 hidden bg-[#111111] divide-y rounded-lg shadow w-44"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownInformationButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 dark:hover:bg-gray-600 text-[14px]"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 dark:hover:bg-gray-600 text-[14px]"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 dark:hover:bg-gray-600 text-[14px]"
                      >
                        Earnings
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>

            <div className="mt-3 space-y-2 xl:hidden 2xl:hidden">
              <button className="button1 w-full">Chat ao vivo</button>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 xl:inline-block 2xl:inline-block">
          <div className="flex justify-center items-center ">
            <div className="justify-center items-center flex gap-5">
              <img src="/person.svg" alt="Person icon" />
              <img src="/globe.svg" alt="Globe icon" />
              <img src="/questionmark.svg" alt="Question mark icon" />
            </div>
            <button className="button1 ml-5">Chat ao vivo</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
