import { BookMarkIcon } from "../../icons/BookMarkIcon"
import { HomeIcon } from "../../icons/HomeIcon"
import { QuestionIcon } from "../../icons/QuestionIcon"
import { WatchHistoryIcon } from "../../icons/WatchHistoryIcon"

export const BottomBar = () => {
    return <div className="fixed bottom-0 left-0 right-0 z-[999] lg:hidden bg-[#f7f9fc] border-t-2 dark:bg-[#0a0b10] dark:text-white">
    <div className="flex justify-between font-medium text-xl p-6 pl-8 pr-8">
        <a href="/" className="flex items-center gap-4">
            <HomeIcon />
            <span className="hidden md:block">Home</span>
        </a>
        <a href="/" className="flex items-center gap-4">
            <BookMarkIcon />
            <span className="hidden md:block">Bookmarks</span>

        </a>
        <a href="/" className="flex items-center gap-4">
            <QuestionIcon />
            <span className="hidden md:block">Questions</span>

        </a>
        <a href="/" className="flex items-center gap-4">
            <WatchHistoryIcon />
            <span className="hidden md:block">Watch History</span>

        </a>
    </div>
</div>
}