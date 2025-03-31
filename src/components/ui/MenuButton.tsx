import { CloseMenuIcon } from "../../icons/CloseMenuIcon"
import { OpenMenuIcon } from "../../icons/OpenMenuIcon"

export const MenuButton = ({openMenu, setOpenMenu} : any) => {
    return <div>
        {
            openMenu ? (
                <div className="fixed left-0 top-0 z-[1000] hidden h-full flex-col border-r border-primary/10 dark:border-r-gray-700 bg-background dark:bg-[#0a0b10] lg:flex min-w-16 dark:text-white w-80">
                            <a href="/" className="flex items-center gap-4 pt-6 pb-6 pl-4 border-b border-gray-700 text-2xl" onClick={(openMenu) => { setOpenMenu(!openMenu)}} >
                                <CloseMenuIcon />
                                <span>Menu</span>
                            </a>
                </div>
            ) : (
                <div className="fixed left-0 top-0 z-[1000] hidden h-full flex-col border-r border-primary/10 dark:border-r-gray-700 bg-background dark:bg-[#0a0b10] lg:flex min-w-16 dark:text-white w-sm">
                    <a href="/" className="flex items-center pt-6 pb-6 pl-7 border-b border-gray-700 text-2xl" >
                        <OpenMenuIcon />
                    </a>
                </div>
            )
        }
    </div>
}