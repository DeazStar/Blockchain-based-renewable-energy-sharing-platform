import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import connectMetaMask from "../scripts/connectMetaMask";

function Home({ setUser, setProduct }) {
  const navigate = useNavigate();

  async function handleConnection() {
    let user;
    let product;
    async function handleWalletConnection() {
      const wallet = await connectMetaMask();

      const { data } = await axios.post(
        "http://localhost:5000/api/v1/user/login",
        {
          wallet,
        },
        {
          withCredentials: true,
        },
      );

      user = data.data.user;
    }

    async function getData() {
      const { data } = await axios.get(
        "http://localhost:5000/api/v1/product/",
        {
          withCredentials: true,
        },
      );

      if (data.data.product != null) product = data.data.product;
    }

    await handleWalletConnection();
    await getData();

    setUser(user);
    if (product) setProduct(product);
    navigate("/buy");
  }
  return (
    <div className="bg-slate-900 flex flex-col items-center justify-center w-screen">
      <header className="flex flex-col items-start mt-4 mb-10">
        <h1 className="text-white text-2xl absolute left-8">BBESP</h1>
        <nav className="absolute right-8">
          <Link
            to="/login"
            className="text-white text-center text-xl whitespace-nowrap justify-center items-stretch bg-cyan-800 self-center mt-20 px-8 py-6 rounded-[100px] max-md:mt-10 max-md:px-5 mr-3"
          >
            Sign Up
          </Link>
          <button
            className="text-white text-center text-xl whitespace-nowrap justify-center items-stretch bg-cyan-800 self-center px-8 py-6 rounded-[100px] max-md:mt-10 max-md:px-5"
            aria-label="Connect To Your Wallet"
            onClick={handleConnection}
          >
            Connect To Your Wallet
          </button>
        </nav>
      </header>
      <h1 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-7xl font-medium tracking-widest self-center mt-10 max-md:max-w-full max-md:text-4xl max-md:mt-10">
        A Fast Blockchain.
      </h1>
      <h1 className="text-white text-7xl font-medium tracking-widest self-center mt-8 max-md:max-w-full max-md:text-4xl">
        Efficient Energy .
      </h1>
      <div className="text-white text-center text-xl leading-8 tracking-wider self-center max-w-[723px] mt-8 max-md:max-w-full max-md:mt-10">
        Our technology performing fast blockchain (120K TPS) and it has
        guaranteed AI-based data security. Proof of Stake, its consensus
        algorithm enables unlimited speeds.
      </div>
      <button
        className="text-white text-center text-xl whitespace-nowrap justify-center items-stretch bg-cyan-800 self-center mt-20 px-8 py-6 rounded-[100px] max-md:mt-10 max-md:px-5"
        aria-label="Connect To Your Wallet"
        onClick={handleConnection}
      >
        Connect To Your Wallet
      </button>
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

export default Home;
