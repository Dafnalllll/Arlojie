import React from "react";
import { useNavigate } from "react-router-dom";
import { User, Headphones } from "lucide-react";

const UserSidebar = ({ onClose }) => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-100 flex">
      <div className="bg-gray-100/60 backdrop-blur-lg w-[90vw] max-w-sm h-full p-8 relative shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-3xl font-bold"
        >
          &times;
        </button>
        {/* Logo */}
        <div className="text-center text-4xl font-bold mb-10 tracking-wide">
          ARLOJIE
        </div>
        {/* Menu */}
        <div className="space-y-6">
          <button
            onClick={() => {
              navigate("/");
              onClose();
            }}
            className="flex justify-between items-center w-full text-lg font-medium py-2"
          >
            BERANDA <span>&#8250;</span>
          </button>
          <button
            onClick={() => {
              navigate("/wishlist");
              onClose();
            }}
            className="flex justify-between items-center w-full text-lg font-medium py-2"
          >
            WISHLIST <span>&#8250;</span>
          </button>
          <button
            onClick={() => {
              navigate("/keranjang");
              onClose();
            }}
            className="flex justify-between items-center w-full text-lg font-medium py-2"
          >
            KERANJANG BELANJA <span>&#8250;</span>
          </button>
          <button
            onClick={() => {
              navigate("/ordermanage");
              onClose();
            }}
            className="flex justify-between items-center w-full text-lg font-medium py-2"
          >
            RIWAYAT BELANJA <span>&#8250;</span>
          </button>
        </div>
        <hr className="my-8" />
        {/* Akun & Layanan */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-lg">
            <Headphones className="w-6 h-6" />
            Layanan Costumer
          </div>
        </div>
      </div>
      {/* Klik area luar sidebar untuk close */}
      <div className="flex-1" onClick={onClose} />
    </div>
  );
};

export default UserSidebar;
