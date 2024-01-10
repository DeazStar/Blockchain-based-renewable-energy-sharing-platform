import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Login({ setUser, setProduct }) {
  const [wallet, setWallet] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const navigate = useNavigate();

  async function handleSignUp() {
    let user;
    let product;
    async function handleAuth() {
      const { data } = await axios.post(
        "https://bbresp.up.railway.app/api/v1/user/signup",
        {
          wallet,
          deviceId,
        },
        {
          withCredentials: true,
        }
      );

      user = data.data.user;
    }

    async function getData() {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/product/",
        {
          withCredentials: true,
        }
      );

      if (data.data.product != null) product = data.data.product;
    }

    await handleAuth();
    await getData();

    setUser(user);
    if (product) setProduct(product);
    navigate("/buy");
  }

  return (
    <div className="bg-slate-900 flex flex-col items-center justify-center w-screen">
      <header className="flex flex-col items-start">
        <h1 className="text-white text-4xl font-bold mb-2 ml-8 mt-12">
          Sign up
        </h1>
        <h1 className="text-white text-2xl absolute  left-8">BBESP</h1>
      </header>
      <div className="bg-blue-800 flex flex-col items-center mt-8 px-20 py-12 rounded-2xl">
        <input
          onChange={(e) => {
            setWallet(e.target.value);
          }}
          value={wallet}
          type="text"
          placeholder="Wallet Address"
          className="text-black text-2xl bg-neutral-100 placeholder-gray-500 hover:bg-neutral-200 text-center px-8 py-4 rounded-[100px] mb-4 w-64 focus:outline-none focus:ring focus:border-cyan-800"
        />
        <input
          onChange={(e) => {
            setDeviceId(e.target.value);
          }}
          value={deviceId}
          type="text"
          placeholder="Device ID"
          className="text-black text-2xl bg-neutral-100 placeholder-gray-500 hover:bg-neutral-200 text-center px-8 py-4 rounded-[100px] mb-4 w-64 focus:outline-none focus:ring focus:border-cyan-800"
        />
        <button
          className="text-white text-center text-xl whitespace-nowrap justify-center items-center bg-cyan-800 w-[212px] mt-8 px-16 py-6 rounded-[100px]"
          onClick={handleSignUp}
        >
          SIGN UP
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

export default Login;
