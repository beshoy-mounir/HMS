import React, { useState, useEffect } from "react";
// images
import logo from "../../Images/hms.ico";
// icon
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdWbSunny } from "react-icons/md";
import { Link } from "react-router-dom";
const NavBar = () => {
    const [th, eTh] = useState();
    const [dropM, eDropM] = useState(false);
    const [profileM, eProfileM] = useState(false);
    // Dark Mode
    useEffect(() => {
        if (
            localStorage.th === "dark" ||
            (!("th" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [th]);

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="w-11/12 flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex justify-between gap-4">
                        <img src={logo} className="h-8" alt="HMS Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            HMS
                        </span>
                    </Link>
                    {/* Buttons */}
                    <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        {/* Profile Menu Button */}
                        <button
                            onClick={() => eProfileM(!profileM)}
                            className="relative flex flex-col justify-center items-center dark:focus:ring-gray-600">
                            <div>
                                <span className="sr-only">Open user menu</span>
                                <FaUserCircle className="size-6 text-white bg-black rounded-full hover:bg-blue-400" />
                            </div>
                        </button>
                        {/* Profile Menu */}
                        <div
                            className={`absolute top-10 -left-40 clg:-left-48 cmd:-left-48  z-50 w-60 ${
                                profileM ? "" : "hidden"
                            } text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}>
                            <div className="px-4 py-3">
                                <span className="w-full block text-sm text-blue-400 dark:text-blue-400">
                                    Beshoy
                                </span>
                                <span className="w-full block text-sm  text-gray-500 truncate dark:text-white">
                                    beshoy_mounir22@yahoo.com
                                </span>
                            </div>
                            <Link
                                to=""
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white dark:hover:text-white">
                                Profile
                            </Link>
                            <Link
                                to=""
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white dark:hover:text-white">
                                My Reservation
                            </Link>
                            <Link
                                to=""
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white dark:hover:text-white">
                                Support
                            </Link>
                            <Link
                                to=""
                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:red-600 dark:hover:text-white">
                                Sign out
                            </Link>
                        </div>
                        {/* Drop Down Menu Button */}
                        <button
                            onClick={() => eDropM(!dropM)}
                            className="inline-flex   items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14">
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    {/* Drop Down Menu */}
                    <div
                        className={`${
                            dropM ? "" : "hidden"
                        } w-full md:flex md:w-auto md:order-1`}
                        id="navbar-user">
                        <div className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <Link
                                className="dark:text-white hover:text-primaly"
                                to="/doctors">
                                Doctors
                            </Link>
                            <Link
                                className="dark:text-white hover:text-primaly"
                                to="/reservation">
                                Reservation
                            </Link>
                            <Link
                                className="dark:text-white hover:text-primaly"
                                to="/contactus">
                                Contact Us
                            </Link>
                            {localStorage.th == "light" ? (
                                <div
                                    onClick={() => {
                                        localStorage.th = "dark";
                                        eTh("dark");
                                    }}
                                    className="group">
                                    <MdDarkMode className="text-black size-6 group-hover:text-primaly" />
                                </div>
                            ) : (
                                <div
                                    onClick={() => {
                                        localStorage.th = "light";
                                        eTh("light");
                                    }}
                                    className="group">
                                    <MdWbSunny className="text-white size-6 group-hover:text-yellow-500" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;