import React from "react"
import Navbar from "../components/navbar/Navbar"
import PlantImg from "../assets/images/plantImg.png"
import PlantBg from "../assets/images/plantBackground.svg"
import SearchPlant from "../assets/images/searchPlant.png"
import TreeLogoLight from "../assets/images/treeLogoLight.svg"

const Plant = () => {
  return (
    <div>
      <Navbar />
      <main className="px-8">
        {/* Judul Tanaman */}
        <div id="plant__title__container" className="flex flex-col mt-12">
          <div id="plant__title">
            {/* nama tanaman */}
            <div className="font-semibold text-b-md flex flex-col gap-0">
              {/* jenis tanaman*/}
              <p>Tanaman Obat</p>
              {/* nama tanaman*/}
              <h5 className="font-philosopher text-h-lg font-bold">Kunyit</h5>
              {/* nama latin */}
              <p>Curcuma longa</p>
            </div>

            {/* gambar tanaman */}
            <div className="flex justify-end">
              <div className="w-56">
                <img src={PlantImg} alt="Template Tanaman"></img>
              </div>
            </div>
          </div>
        </div>
        {/* Judul Tanaman - END */}

        {/* Artikel - START */}
        <article className="flex flex-col gap-6">
          {/* Deskripsi - START */}
          <div id="desk__container">
            <p className="text-b-md text-justify">
              Kunyit, yang dikenal juga dengan nama Curcuma longa, adalah sebuah
              tanaman herbal yang berasal dari Asia Tenggara, khususnya India
              dan Indonesia. Tanaman ini dikenal karena akarnya yang memiliki
              rasa pahit dan kaya akan senyawa-senyawa aktif yang memberikan
              manfaat kesehatan. Tanaman kunyit memiliki batang yang pendek dan
              rimpang yang berbentuk mirip jahe. Rimpang kunyit memiliki warna
              oranye cerah dan daging yang keras. Daun-daun kunyit berbentuk
              pelepah, berwarna hijau, dan tumbuh dalam kelompok yang rapat.
            </p>
          </div>
          {/* Deskripsi - END */}

          {/* Manfaat - START */}
          <div id="manfaat__container" className="flex flex-col gap-3">
            <h5 className="font-bold">Manfaat</h5>
            <p className="text-b-md text-justify">
              Antiinflamasi: Mengurangi peradangan dalam tubuh. Antioksidan:
              Melindungi sel-sel tubuh dari kerusakan oksidatif. Meningkatkan
              sistem kekebalan tubuh: Menstimulasi sistem kekebalan tubuh.
              Mendukung pencernaan: Membantu pencernaan lemak dan meredakan
              masalah pencernaan. Perlindungan hati: Melindungi kesehatan hati
              dan mencegah kerusakan.
            </p>
          </div>
          {/* Manfaat - END */}

          {/* Kandungan Kimia - START */}
          <div id="kimia__container" className="flex flex-col gap-3">
            <h5 className="font-bold">Kandungan Kimia</h5>
            <p className="text-b-md text-justify">
              Antiinflamasi: Mengurangi peradangan dalam tubuh. Antioksidan:
              Melindungi sel-sel tubuh dari kerusakan oksidatif. Meningkatkan
              sistem kekebalan tubuh: Menstimulasi sistem kekebalan tubuh.
              Mendukung pencernaan: Membantu pencernaan lemak dan meredakan
              masalah pencernaan. Perlindungan hati: Melindungi kesehatan hati
              dan mencegah kerusakan.
            </p>
          </div>
          {/* Manfaat - END */}
        </article>
      </main>

      {/* Cari Lebih - START */}
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
      {/* Cari Lebih - END */}

      {/* FOOTER - START */}
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
      {/* FOOTER - END */}
    </div>
  )
}

export default Plant
