import React from "react"
import Navbar from "../components/navbar/Navbar"
import PlantImg from "../assets/images/plantImg.png"
import PlantBg from "../assets/images/plantBg.svg"
import Footer from "../components/Footer"
import CariLebih from "../components/CariLebih"

const Plant = () => {
  return (
    <div>
      <Navbar />

      <main>
        {/* Judul Tanaman - START */}
        <div
          id="plant__title__container"
          className="flex flex-col px-8 pt-12 pb-6 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${PlantBg})`,
          }}
        >
          <div id="plant__title" className="">
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
              <div className="w-60">
                <img src={PlantImg} alt="Template Tanaman"></img>
              </div>
            </div>

            {/* <div className="flex justify-end">
              <div className="w-56">
                <img src={PlantBg} alt="Template Tanaman"></img>
              </div>
            </div> */}
          </div>
        </div>
        {/* Judul Tanaman - END */}

        {/* Artikel - START */}
        <article className="flex flex-col gap-6 px-8">
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
      <CariLebih />
      {/* Cari Lebih - END */}

      {/* FOOTER - START */}
      <Footer />
      {/* FOOTER - END */}
    </div>
  )
}

export default Plant
