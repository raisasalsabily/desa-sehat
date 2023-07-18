import { useState } from "react"
// import { useNavigate } from "react-router-dom";
// import LoginBtn from "../button/LoginBtn"
import Backdrop from "./Backdrop"
import Sidebar from "./Sidebar"

import TreeLogo from "../../assets/images/treeLogo.svg"
import MenuLine from "../../assets/images/MenuLine.svg"

// import jssLogoText from "../../assets/images/jss-logo-text.png"

export default function NavBar() {
  const [sidebar, setSidebar] = useState(false)

  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }

  return (
    <nav className="max-h-[70px] w-full">
      <div className="bg-teal-50">
        <div
          id="nav-container"
          className="justify-between px-10 py-4 mx-auto lg:max-w-7xl flex items-center md:items-center md:flex md:px-8"
        >
          {/* KIRI - Logo */}
          <div className="flex gap-4">
            {/* image */}
            <img src={TreeLogo} alt="Desa Sehat" />
            {/* nama web */}
            <h1 className="text-h-sm font-philosopher font-bold tracking-widest">
              DESA SEHAT
            </h1>
          </div>

          {/* KANAN - image garis */}
          <img src={MenuLine} alt="Menu" />
        </div>
      </div>
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} />
    </nav>
  )
}
