import React, { useState } from "react";
import { Link } from "react-router-dom";


function Buy(props) {
const [isSelected, setIsSelected] = useState(false);

const handleButtonClick = () => {
setIsSelected(!isSelected);
};

return (
<div className="bg-slate-900 flex flex-col items-center justify-center h-screen w-screen">
    <header className="flex flex-col items-start">
    <h1 className="text-white text-2xl absolute left-8">BBESP</h1>
    <nav className="flex items-start justify-between gap-5 self-start max-md:max-w-full max-md:flex-wrap">
        <Link to="/" className="text-white text-center text-xl self-center whitespace-nowrap my-auto">
        Home
        </Link>
        <Link to="/sell" className="text-white text-center text-xl self-center my-auto">
        Sell
        </Link>
        <Link
        to="/buy"
        className="text-white text-center text-xl bg-zinc-300 bg-opacity-30 self-stretch grow justify-center items-stretch pl-10 pr-14 py-4 rounded-3xl max-md:px-5"
        >
        Buy
        </Link>
        <Link to="/dashboard" className="text-white text-center text-xl self-center my-auto">
        Dashboard
        </Link>
    </nav>
    </header>
    <div className="bg-blue-800 flex flex-col items-center mt-8 px-20 py-12 rounded-2xl">
    <h1 className="text-white text-4xl font-bold mb-8 ml-8 ">BUY</h1>
    <button
        className={`text-black text-center text-xl whitespace-nowrap justify-center items-center bg-neutral-100 mt-8 px-16 py-6 rounded-[100px] ${isSelected ? 'bg-green-500' : ''}`}
        onClick={handleButtonClick}
    >
        <a href="#" className="text-black text-center text-xl self-center my-auto">
        User 1--------100KWH--------43BTC
        </a>
    </button>
    <button className="text-white text-center text-xl whitespace-nowrap justify-center items-center bg-cyan-800 w-[212px] mt-8 px-16 py-6 rounded-[100px]">
        BUY
    </button>
    </div>

    <div className="bg-white self-stretch flex items-center justify-between gap-5 mt-40 pb-8 px-12">
    <div className="text-zinc-800 text-base font-semibold my-auto">Privacy</div>
    <h1 className="text-black text-3xl font-bold">BBESP</h1>
    <div className="text-zinc-800 text-base my-auto">IETP Project</div>
    </div>
</div>
);
}

export default Buy;
