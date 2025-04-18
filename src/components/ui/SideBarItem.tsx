import { useState } from "react"
import { BookMarkIcon } from "../../icons/BookMarkIcon"
import { CloseMenuIcon } from "../../icons/CloseMenuIcon"
import { HomeIcon } from "../../icons/HomeIcon"
import { OpenMenuIcon } from "../../icons/OpenMenuIcon"
import { QuestionIcon } from "../../icons/QuestionIcon"
import { WatchHistoryIcon } from "../../icons/WatchHistoryIcon"

export const SideBarItem = () => {
    const [openMenu, setOpenMenu] = useState(true);

    function toggleCase(){
        setOpenMenu(!openMenu)
        console.log("togglecase running ")
    }

    return <div>
        
        {openMenu ? (
            <div className="fixed left-0 top-0 z-20 hidden h-full flex-col border-r bg-[#f7f9fc] border-primary/10 dark:border-r-gray-700 bg-background dark:bg-[#0a0b10] lg:flex dark:text-white w-80">
                <p className="flex items-center gap-4 pt-5 pb-5 pl-4 border-b dark:border-gray-700 text-2xl"
                    onClick={toggleCase}  
                >
                    <CloseMenuIcon />
                    <span>Menu</span>
                </p>

                <div className="p-2 text-lg">

                    <a href="/" className="flex items-center gap-4 my-8 p-2 hover:bg-blue-600/15 hover:text-blue-500 hover:rounded-lg">
                        <HomeIcon />
                        <span className="hidden md:block">Home</span>
                    </a>
                    <a href="/" className="flex items-center gap-4 my-8 p-2 hover:bg-blue-600/15 hover:text-blue-500 hover:rounded-lg">
                        <BookMarkIcon />
                        <span className="hidden md:block">Bookmarks</span>

                    </a>
                    <a href="/" className="flex items-center gap-4 my-8 p-2 hover:bg-blue-600/15 hover:text-blue-500 hover:rounded-lg">
                        <QuestionIcon />
                        <span className="hidden md:block">Questions</span>

                    </a>
                    <a href="/" className="flex items-center gap-4 my-8 p-2 hover:bg-blue-600/15 hover:text-blue-500 hover:rounded-lg">
                        <WatchHistoryIcon />
                        <span className="hidden md:block">Watch History</span>

                    </a>
                </div>
            </div>
        ) : (
            <div className="fixed left-0 top-0 z-20 hidden h-full flex-col border-r bg-[#f7f9fc] border-primary/10 dark:border-r-gray-700 bg-background dark:bg-[#0a0b10] lg:flex dark:text-white">
                <p className="flex items-center gap-4 pt-5 pb-5 pl-6 border-b dark:border-gray-700 text-2xl"  
                   onClick={toggleCase} 
                >
                    <OpenMenuIcon />
                </p>
                <div className="p-2">
                    <a href="/" className="flex items-center gap-4 my-8 p-4 hover:bg-blue-600/15 hover:text-blue-500 hover:rounded-lg">
                        <HomeIcon />
                    </a>
                    <a href="/" className="flex items-center gap-4 my-8 p-4 hover:bg-blue-600/15 hover:text-blue-500 hover:rounded-lg">
                        <BookMarkIcon />

                    </a>
                    <a href="/" className="flex items-center gap-4 my-8 p-4 hover:bg-blue-600/15 hover:text-blue-500 hover:rounded-lg">
                        <QuestionIcon />

                    </a>
                    <a href="/" className="flex items-center gap-4 my-8 p-4 hover:bg-blue-600/15 hover:text-blue-500 hover:rounded-lg">
                        <WatchHistoryIcon />
                    </a>
                </div>

            </div>
        )}
    </div>
}