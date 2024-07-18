
import NavRail from "./NavRail"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"


function MainContent() {
  return (
    <div className="relative top-[100px]" >
      <main className="flex max-container">
        <NavRail />
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainContent