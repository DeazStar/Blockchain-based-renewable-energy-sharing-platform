import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sellContractMethod } from "../scripts/contractInteraction";

function Sell() {
  const wallet_address = "John Doe";
  const [amount, setAmount] = useState(null);
  async function handleSelling() {
    const data = await axios.post(
      "https://bbresp.up.railway.app/api/v1/product",
      {
        energyAmount: amount,
        price: 0.001,
      },
      { withCredentials: true }
    );

    console.log(data.data.data.product);
    const txtId = data.data.data.product._id;
    const price = data.data.data.product.price;

    const transactionResponse = await sellContractMethod(txtId, String(price));

    console.log(transactionResponse);
  }
  return (
    <div className="bg-slate-900 flex flex-col items-center justify-center w-screen">
      <header className="flex flex-col items-start">
        <h1 className="text-white text-2xl absolute left-8">BBESP</h1>
        <div className="flex items-center absolute right-8">
          <img src="https://e7.pngegg.com/pngimages/782/114/png-clipart-profile-icon-circled-user-icon-icons-logos-emojis-users-thumbnail.png" alt="Profile Icon" className="w-8 h-8 rounded-full" />
          <span className="text-white text-sm ml-2">{wallet_address}</span>
        </div>
        <nav className="flex items-start justify-between gap-5 self-start max-md:max-w-full max-md:flex-wrap">
          <Link
            to="/"
            className="text-white text-center text-xl self-center whitespace-nowrap my-auto"
          >
            Home
          </Link>
          <Link
            to="/sell"
            className="text-white text-center text-xl bg-zinc-300 bg-opacity-30 self-stretch grow justify-center items-stretch pl-10 pr-14 py-4 rounded-3xl max-md:px-5"
          >
            Sell
          </Link>
          <Link
            to="/buy"
            className="text-white text-center text-xl self-center my-auto"
          >
            Buy
          </Link>
          <Link
            to="/dashboard"
            className="text-white text-center text-xl self-center my-auto"
          >
            Dashboard
          </Link>
        </nav>
      </header>
      <div className="bg-blue-800 flex flex-col items-center mt-4 px-20 py-12 rounded-2xl drop-shadow-[0_35px_35px_rgba(76,46,89)]">
        <h1 className="text-white text-4xl font-bold mb-4 ml-8 ">SELL</h1>
        <h3 className="text-white text-2xl font-bold mb-8 ml-8 ">
          Rate: 1KWh = $ 0.43BTC
        </h3>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca68d76b0d12ac9a5d9e768c5fed8da57763e54899fc4c8f4f57fbcb5726fb05?apiKey=5a98d2d9d3854888a8f8a5e65984a499&"
          className="aspect-[0.51] object-contain object-center w-[37px] overflow-hidden self-center max-w-full ml-5"
        />
        <input
          type="number"
          placeholder="Energy in KWH"
          className="text-black text-2xl bg-neutral-100 placeholder-gray-500 hover:bg-neutral-200 text-center px-8 py-4 rounded-[100px] mb-4 w-64 focus:outline-none focus:ring focus:border-cyan-800"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <h3 className="text-white text-2xl font-bold mb-2 ml-8 ">
          Price = 43 BTC
        </h3>
        <button
          onClick={handleSelling}
          className="text-white text-center text-xl whitespace-nowrap justify-center items-center bg-cyan-800 w-[212px] mt-2 px-16 py-6 rounded-[100px]"
        >
          SELL
        </button>
      </div>
      <div className="bg-white self-stretch flex items-center justify-between gap-5 mt-24 pb-8 px-12">
        <div className="text-zinc-800 text-base font-semibold my-auto">
          Privacy
        </div>
        <h1 className="text-black text-3xl font-bold">BBESP</h1>
        <div className="text-zinc-800 text-base my-auto">IETP Project</div>
      </div>
    </div>
  );
}

export default Sell;
