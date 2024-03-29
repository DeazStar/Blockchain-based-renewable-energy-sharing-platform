import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sellContractMethod } from "../scripts/contractInteraction";

function Sell({ user }) {
  const wallet_address = user.wallet;
  const [amount, setAmount] = useState(null);
  const [transactionCompleted, setTransactionCompleted] = useState(false);
  let pricePerWatt;
  async function handleSelling() {
    const data = await axios.post(
      "http://localhost:5000/api/v1/product",
      {
        energyAmount: amount,
        price: pricePerWatt,
      },
      { withCredentials: true },
    );

    console.log(data.data.data.product);
    const txtId = data.data.data.product._id;
    const price = data.data.data.product.price;

    const transactionResponse = await sellContractMethod(txtId, String(price));

    console.log(transactionResponse);
    setTransactionCompleted(true);
  }

  pricePerWatt = amount * 0.001;
  return (
    <div className="bg-slate-900 flex flex-col items-center justify-center w-screen">
      <header className="flex flex-col items-start">
        <h1 className="text-white text-2xl absolute left-8 mt-3">BBESP</h1>
        <div className="flex items-center absolute right-8 mt-3">
          <img
            src="https://e7.pngegg.com/pngimages/782/114/png-clipart-profile-icon-circled-user-icon-icons-logos-emojis-users-thumbnail.png"
            alt="Profile Icon"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-white text-sm ml-2">{wallet_address}</span>
        </div>
        <nav className="flex items-start mt-3 justify-between gap-5 self-start max-md:max-w-full max-md:flex-wrap">
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
      <div className="bg-blue-800 flex flex-col items-center mt-14 px-20 py-12 rounded-2xl drop-shadow-[0_35px_35px_rgba(52,216,235)]">
        <h1 className="text-white text-4xl font-bold mb-4">SELL</h1>
        <h3 className="text-white text-2xl font-bold mb-8 ml-8 ">
          Rate: 1Watt = 0.001Eth
        </h3>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca68d76b0d12ac9a5d9e768c5fed8da57763e54899fc4c8f4f57fbcb5726fb05?apiKey=5a98d2d9d3854888a8f8a5e65984a499&"
          className="aspect-[0.51] object-contain object-center w-[37px] overflow-hidden self-center max-w-full ml-5"
        />
        <input
          type="number"
          placeholder="Energy in Watt"
          className="text-black text-2xl bg-neutral-100 placeholder-gray-500 hover:bg-neutral-200 text-center px-8 py-4 rounded-[100px] mb-4 w-64 focus:outline-none focus:ring focus:border-cyan-800"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <h3 className="text-white text-2xl font-bold mb-2 ml-8 ">
          Price = {pricePerWatt}
        </h3>
        {transactionCompleted && (
          <div className="bg-green-500 text-white text-center py-2 px-4 rounded-md mb-4">
            Transaction completed
          </div>
        )}
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
