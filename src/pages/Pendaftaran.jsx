"use client";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tiket from "../component/Tiket";

const Pendaftaran = () => {
  const [daftarAntrean, setDaftarAntrean] = useState(false);
  return (
    <div className="w-screen h-screen relative flex flex-col justify-center items-center">
      <h1 className="font-bold text-7xl mb-6">Hospital System</h1>
      <h1 className="text-2xl text-gray-500 mb-6">
        Pengujian Perangkat Lunak 2025
      </h1>
      <form action="" className="w-1/2">
        <div className="flex flex-col mb-4">
          <label htmlFor="">Nama</label>
          <input
            type="text"
            placeholder="Insert nama anda di sini"
            className="w-full border-gray-400 border rounded-md p-1"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="">Nama Dokter</label>
          <select
            placeholder="Pilih dokter yang anda inginkan di sini"
            className="w-full border-gray-400 border rounded-md p-1"
          >
            <option value="Dokter A">Dokter A</option>
            <option value="Dokter B">Dokter B</option>
            <option value="Dokter C">Dokter C</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Jam Kunjungan</label>
          <select
            placeholder="Pilih dokter yang anda inginkan di sini"
            className="w-full border-gray-400 border rounded-md p-1"
          >
            <option value="9">9</option>
            <option value="11">11</option>
            <option value="14">14</option>
          </select>
        </div>
        <div className="w-full flex items-center justify-center mt-3">
          <div className="w-2/3 flex items-center justify-evenly">
            <button
              type="button"
              className="p-2 bg-black rounded-md text-white"
              onClick={() => setDaftarAntrean(true)}
            >
              Daftar Antrean
            </button>
            <Link
              to="/TabelHistori"
              className="p-2 border border-black rounded-md"
            >
              Cek History Antrean
            </Link>
          </div>
        </div>
      </form>
      {daftarAntrean && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Tiket />
        </div>
      )}
    </div>
  );
};

export default Pendaftaran;
