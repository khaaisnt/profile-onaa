import React from "react";

export default function Navbar() {
    return (
        <nav className="bg-pink-500 border-pink-300">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="https://flowbite.com/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                        Onaa Bakwan
                    </span>
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-pink-100 rounded-lg bg-pink-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-pink-500">
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-white rounded hover:bg-pink-700 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-white rounded hover:bg-pink-700 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-white rounded hover:bg-pink-700 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0"
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-white rounded hover:bg-pink-700 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0"
                            >
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-white rounded hover:bg-pink-700 md:hover:bg-transparent md:border-0 md:hover:text-pink-700 md:p-0"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
