import { BottomBar } from "../components/ui/BottomBar"
import { Card } from "../components/ui/Card"
import { Content } from "../components/ui/Content"
import { Navbar } from "../components/ui/Navbar"
import { SideBar } from "../components/ui/SideBar"

export const HomePage = () => {
    return <div>
        <Navbar />   
        <SideBar />
        <BottomBar />
        <Content />
    </div>
}