import { BottomBar } from "../components/ui/BottomBar"
import { Card } from "../components/ui/Card"
import { Navbar } from "../components/ui/Navbar"
import { SideBar } from "../components/ui/SideBar"

export const HomePage = () => {
    return <div>
        <div>
        <Navbar />
        </div>
   
        <SideBar />
        <BottomBar />
        {/* <Card /> */}
    </div>
}