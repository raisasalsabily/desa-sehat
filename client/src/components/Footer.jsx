import React from "react"
import TreeLogoLight from "../assets/images/treeLogoLight.svg"

const Footer = () => {
  return (
    <footer className="bg-emerald-600 py-4 flex justify-center items-center">
      <div className="flex gap-4">
        {/* image */}
        <img src={TreeLogoLight} alt="Desa Sehat"></img>
        {/* text */}
        <div className="text-white">
          <p className="font-philosopher text-h-sm tracking-widest">
            DESA SEHAT
          </p>
          <p className="font-philosopher text-b-sm text-center">
            Desa Wonokampir
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
