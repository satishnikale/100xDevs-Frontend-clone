import { useEffect, useState } from "react";
import { Darkmode } from "../../icons/DarkMode"
import { ProfileIcon } from "../../icons/ProfileIcon"
import { SearchIcon } from "../../icons/SearchIcon"
import { LightMode } from "../../icons/LightMode";

export const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      if (darkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }, [darkMode]);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };

    return <div className="h-[72px] mb-4 fixed top-0 z-0 border-b-1 bg-[#f7f9fc] w-full pt-4 pb-4 dark:bg-[#0a0b10]">
        <div className="flex justify-between w-10/12 mx-auto">
            <div className="flex items-center">
                <a className="flex items-center gap-2" href="/" >
                    <img src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" alt="image-logo" className="size-10 rounded-full" />
                    <p className="hidden font-satoshi bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-2xl font-black tracking-tighter text-transparent min-[410px]:block">100xDevs</p>
                </a>
            </div>
            <div className="flex w-auto items-center gap-4">
                <div className="relative flex items-center border rounded">
                    <SearchIcon />
                    <input className="hidden md:block outline-none focus:outline focus:outline-[2px] focus:outline-black rounded-md p-1 px-10 cursor-pointer dark:bg-[#0a0b10] dark:focus:outline-gray-300"
                        placeholder="Search Anything" type="text" />
                    <kbd className="hidden md:block absolute right-2 text-gray-500 text-sm border rounded-sm pl-1 pr-1 dark:bg-gray-800">ctlr + k</kbd>
                </div>
                <div className="cursor-pointer p-2 max-md:ml-8 max-md:text-gray-900 dark:text-white hover:bg-sky-50 hover:text-sky-700 rounded dark:hover:bg-black" onClick={toggleDarkMode}>
                    {darkMode ? <Darkmode /> : <LightMode />}
                </div>
                <div className="bg-gradient-to-b from-blue-400 to-blue-700 text-white rounded-full p-2 cursor-pointer">
                    <ProfileIcon />
                </div>
            </div>
        </div>
    </div>
}