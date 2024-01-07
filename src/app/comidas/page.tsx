"use client";

import { useState } from "react";
import Header from "@/components/common/header";
import Image, { StaticImageData } from "next/image";
import imagesData from "@/components/cardsInfos";

interface ImageData {
  image: StaticImageData;
  name: string;
  rating: number;
  description: string;
  //tabelainfo
  calorias: string;
  proteinas: string;
  carboidratos: string;
  gorduras: string;
  sodio: string;
  fibras: string;
  acucares: string;
}

export default function Comidas() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const openModal = (image: ImageData) => {
    setSelectedImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 gap-y-5 gap-x-32 p-10">
          {imagesData.map((data, index) => (
            <div
              key={index}
              className="max-w-xs mx-auto rounded overflow-hidden shadow-lg"
            >
              <Image
                className="w-full"
                src={data.image}
                alt={`Image ${index + 10}`}
              />
              <div className="px-6 py-4 bg-EBDFD6">
                <div className="font-bold text-xl mb-2">{data.name}</div>
                <p className="text-gray-700 text-base">
                  {data.description.substring(0, 140)}...
                </p>
                <div className="flex items-center mt-4">
                  {Array.from({ length: data.rating }, (_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-current text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2l2.5 6H17l-4 4 1 6-5-3-5 3 1-6-4-4h8.5L10 2z" />
                    </svg>
                  ))}
                </div>

                <button
                  onClick={() => openModal(data)}
                  className="bg-8F0000 text-lg text-white px-4 py-2 rounded-full font-semibold ml-auto"
                >
                  Ver mais ↓
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {modalOpen && selectedImage && (
  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
    <div className="bg-FF6E41 p-8 rounded flex" style={{ width: "60%" }}>
      
      <div className="w-1/3">
        <Image
          className="w-full"
          src={selectedImage.image}
          alt={`Image ${selectedImage.name}`}
        />
      </div>
      <div className="w-2/3 ml-8 text-white">
        <div className="font-bold text-5xl mb-4">{selectedImage.name}</div>
        <div className="flex items-center mt-4">
                  {Array.from({ length: selectedImage.rating }, (_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-current text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2l2.5 6H17l-4 4 1 6-5-3-5 3 1-6-4-4h8.5L10 2z" />
                    </svg>
                  ))}
                </div>
        <p className="text-gray-300 text-xl font-semibold">
          {selectedImage.description}
        </p>

        {/* Tabela Nutricional */}

        <table className="mt-4 w-full border">
          <thead className="border-b">
            <tr>
              <th className="text-left border-r">Nutriente</th>
              <th className="text-left">Quantidade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-r">Calorias:</td>
              <td>{selectedImage.calorias}</td>
            </tr>
            <tr>
              <td className="border-r">Proteínas:</td>
              <td>{selectedImage.proteinas}</td>
            </tr>
            <tr>
              <td className="border-r">Carboidratos:</td>
              <td>{selectedImage.carboidratos}</td>
            </tr>
            <tr>
              <td className="border-r">Gorduras:</td>
              <td>{selectedImage.gorduras}</td>
            </tr>
            <tr>
              <td className="border-r">Sódio:</td>
              <td>{selectedImage.sodio}</td>
            </tr>
            <tr>
              <td className="border-r">Fibras:</td>
              <td>{selectedImage.fibras}</td>
            </tr>
            <tr>
              <td className="border-r">Açúcares:</td>
              <td>{selectedImage.acucares}</td>
            </tr>
          </tbody>
        </table>

        <button
          onClick={closeModal}
          className="bg-8F0000 text-xl text-white px-4 py-2 rounded-full font-semibold mt-4"
        >
          Fechar
        </button>
      </div>
    </div>
  </div>
)}


    </>
  );
}
