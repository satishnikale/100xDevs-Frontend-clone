import { BottomBar } from "../components/ui/BottomBar"
import { Content } from "../components/ui/Content"
import { Navbar } from "../components/ui/Navbar"
import { SideBar } from "../components/ui/SideBar"

export const HomePage = () => {
    return <div className="bg-[#f7f9fc] dark:bg-[#0a0b10]">
            <Navbar />   
            <SideBar />
            <BottomBar />
            <Content />

    </div>
}