import { BookMarkIcon } from "../../icons/BookMarkIcon"
import { HomeIcon } from "../../icons/HomeIcon"
import { MenuIcon } from "../../icons/MenuIcon"
import { QuestionIcon } from "../../icons/QuestionIcon"
import { WatchHistoryIcon } from "../../icons/WatchHistoryIcon"

export const SideBarItem = ({openMenu, setOpenMenu} : any) => {
    return <div>
        <div className="fixed left-0 top-0 z-[1000] hidden h-full flex-col border-r border-primary/10 dark:border-r-gray-700 bg-background dark:bg-[#0a0b10] lg:flex min-w-16 dark:text-white w-80">
            <a href="/" className="flex items-center gap-4 p-6 border-b border-gray-700 text-2xl" onClick={()=> {setOpenMenu(!openMenu)}}>
                <MenuIcon />
                <span>Menu</span>
            </a>
            <div className="p-4">
                <a href="/" className="flex items-center gap-4 p-4 hover:bg-blue-600/15 hover:text-blue-500 hover:rounded-lg">
                    <HomeIcon />
                    <span className="hidden md:block">Home</span>
                </a>
                <a href="/" className="flex items-center gap-4 p-4 hover:bg-blue-600/15 hover:text-blue-500 hover:rounded-lg">
                    <BookMarkIcon />
                    <span className="hidden md:block">Bookmarks</span>

                </a>
                <a href="/" className="flex items-center gap-4 p-4 hover:bg-blue-600/15 hover:text-blue-500 hover:rounded-lg">
                    <QuestionIcon />
                    <span className="hidden md:block">Questions</span>

                </a>
                <a href="/" className="flex items-center gap-4 p-4 hover:bg-blue-600/15 hover:text-blue-500 hover:rounded-lg">
                    <WatchHistoryIcon />
                    <span className="hidden md:block">Watch History</span>

                </a>
            </div>
        </div>
    </div>
}