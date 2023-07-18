import React from "react"
import SearchPlant from "../assets/images/searchPlant.png"

const CariLebih = () => {
  return (
    <div id="cari__lebih" className="my-16 p-8 bg-lime-100">
      <div id="cari__lebih__container" className="flex gap-6">
        {/* kiri */}
        <div className="flex flex-col gap-8 basis-2/3">
          {/* text */}
          <div>
            <p className="font-philosopher font-bold text-h-md">
              Mau cari tau lebih?
            </p>
            <p className="font-semibold text-neutral-600">
              Cari tau tentang kunyit
            </p>
          </div>
          {/* button */}
          <div>
            <button
              type="button"
              class="w-full text-green-700 border border-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Cari di Google
            </button>
          </div>
        </div>

        {/* kanan */}
        <div className="basis-1/3 flex items-center justify-center">
          <div className="">
            <img src={SearchPlant} alt="Cari tanaman" className=""></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CariLebih
