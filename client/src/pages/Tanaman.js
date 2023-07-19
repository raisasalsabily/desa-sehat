import React, { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"
import axios from "axios"

import dataTanaman from "./dataTanaman.json"

import Navbar from "../components/navbar/Navbar"
import PlantImg from "../assets/images/plantImg.png"
import PlantBg from "../assets/images/plantBg.svg"
import Footer from "../components/Footer"
import CariLebih from "../components/CariLebih"

const Plant = () => {
  const { slug } = useParams()
  const location = useLocation()
  const path = location.pathname.split("/")[2]

  const [data, setData] = useState(null)

  // Cari data yang sesuai dengan slug
  // const data = dataTanaman.find((item) => item.slug === slug)

  // if (!data) {
  //   return <div>Data tidak ditemukan.</div>
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://raw.githubusercontent.com/raisasalsabily/desa-sehat-data/main/data/dataTanaman.json"
        )
        const filteredData = response.data.filter((item) => item.slug === slug)
        setData(filteredData.length > 0 ? filteredData[0] : null)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [slug])

  return (
    <div>
      {data ? (
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
                  <p>{data?.jenis}</p>
                  {/* nama tanaman*/}
                  <h5 className="font-philosopher text-h-lg font-bold">
                    {data?.nama}
                  </h5>
                  {/* nama latin */}
                  <p>{data?.namaLatin}</p>
                </div>

                {/* gambar tanaman */}
                <div className="flex justify-end">
                  <div className="w-60">
                    <img src={data?.gambarUrl} alt="Template Tanaman"></img>
                  </div>
                </div>
              </div>
            </div>
            {/* Judul Tanaman - END */}

            {/* Artikel - START */}
            <article className="flex flex-col gap-6 px-8">
              {/* Deskripsi - START */}
              <div id="desk__container">
                <p className="text-b-md text-justify">{data?.deskripsi}</p>
              </div>
              {/* Deskripsi - END */}

              {/* Manfaat - START */}
              <div id="manfaat__container" className="flex flex-col gap-3">
                <h5 className="font-bold">Manfaat</h5>
                <p className="text-b-md text-justify">{data?.manfaat}</p>
              </div>
              {/* Manfaat - END */}

              {/* Kandungan Kimia - START */}
              <div id="kimia__container" className="flex flex-col gap-3">
                <h5 className="font-bold">Kandungan Kimia</h5>
                <p className="text-b-md text-justify">{data?.kandunganKimia}</p>
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
      ) : (
        <p>Data tidak ditemukan.</p>
      )}
    </div>
  )
}

export default Plant
