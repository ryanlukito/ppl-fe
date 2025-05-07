import React from "react";
import { Link } from "react-router-dom";

const Tiket = () => {
  return (
    <div className="w-1/3 h-1/3 flex flex-col items-center justify-center border bg-white">
      <h1 className="text-2xl font-bold">Nomor Antrean</h1>
      <h1 className="text-4xl font-bold">A32</h1>
      <h1>Nama Pasien: John Doe</h1>
      <h1>Nama Dokter: Johnny Sins</h1>
      <h1>Jam Kunjungan: 13:00</h1>
      <Link
        to="/TabelHistori"
        className=" p-2 border rounded-md mt-3 bg-black text-white"
      >
        Lanjutkan
      </Link>
    </div>
  );
};

export default Tiket;
