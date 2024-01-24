import { useState } from "react";
import { Link } from "react-router-dom";
import { buyContractMethod } from "../scripts/contractInteraction";
import axios from "axios";

function Buy({ product, user }) {
  const [isSelected, setIsSelected] = useState(false);
  const wallet_address = user.wallet;
  const [transactionCompleted, setTransactionCompleted] = useState(false);

  async function handleButtonClick() {
    setIsSelected(!isSelected);
    const transactionResponse = await buyContractMethod(
      product._id,
      String(product.price),
    );

    console.log(transactionResponse);

    await axios.post(
      "http://localhost:5000/api/v1/product/release",
      { txtId: product._id, deviceId: user.deviceId },
      {
        withCredentials: true,
      },
    );

    setTransactionCompleted(true);
  }

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
            className="text-white text-center text-xl self-center my-auto"
          >
            Sell
          </Link>
          <Link
            to="/buy"
            className="text-white text-center text-xl bg-zinc-300 bg-opacity-30 self-stretch grow justify-center items-stretch pl-10 pr-14 py-4 rounded-3xl max-md:px-5"
          >
            Buy
          </Link>
          <a
            href="https://app.arduino.cc/dashboards/03256a17-78fc-4751-a91c-ebcb053d8b10"
            target="_blank"
            className="text-white text-center text-xl self-center my-auto"
          >
            Dashboard
          </a>
        </nav>
      </header>
      <div className="bg-blue-800 flex flex-col items-center mt-14 px-20 py-12 rounded-2xl drop-shadow-[0_14px_35px_rgba(52,216,235)]">
        <h1 className="text-white text-4xl font-bold mb-8">BUY</h1>
        <button
          className={`text-black text-center text-xl whitespace-nowrap justify-center items-center bg-neutral-100 mt-8 px-16 py-6 rounded-[100px] ${
            isSelected ? "bg-green-500" : ""
          }`}
        >
          <a
            href="#"
            className="text-black text-center text-xl self-center my-auto"
          >
            {product === null
              ? "No Available Energy"
              : product.energyAmount + "watt" +  "------" + product.price + "Eth"}
          </a>
        </button>
        {transactionCompleted && (
          <div className="bg-green-500 text-white text-center py-2 px-4 rounded-md mb-4">
            Transaction completed
          </div>
        )}
        <button
          onClick={handleButtonClick}
          className="text-white text-center text-xl whitespace-nowrap justify-center items-center bg-cyan-800 w-[212px] mt-8 px-16 py-6 rounded-[100px]"
        >
          BUY
        </button>
      </div>

      <div className="bg-white self-stretch flex items-center justify-between gap-5 mt-40 pb-8 px-12">
        <div className="text-zinc-800 text-base font-semibold my-auto">
          Privacy
        </div>
        <h1 className="text-black text-3xl font-bold">BBESP</h1>
        <div className="text-zinc-800 text-base my-auto">IETP Project</div>
      </div>
    </div>
  );
}

export default Buy;
