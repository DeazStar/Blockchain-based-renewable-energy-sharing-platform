import React from "react";

function Home(props) {
return (
    <div className="bg-slate-900 flex flex-col items-center justify-center h-screen">
    <header className="flex flex-col items-start">
    <h1 className="text-white text-2xl absolute left-8">BBESP</h1>
    <div className="self-stretch flex items-stretch justify-end gap-5 max-md:max-w-full max-md:flex-wrap">
        <a href="login" className="text-white text-center text-xl self-center my-auto">
            Sign up
        </a>
        <a href="#" className="text-white text-center text-xl self-center my-auto">
            Connect To Your Wallet
        </a>
    </div>
    </header>
    <h1 className="text-7xl font-medium tracking-widest bg-clip-text self-center mt-10 max-md:max-w-full max-md:text-4xl max-md:mt-10">
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
    >
    Connect To Your Wallet
    </button>
    <div className="bg-white self-stretch flex items-center justify-between gap-5 mt-24 pb-8 px-12">
    <div className="text-zinc-800 text-base font-semibold my-auto">Privacy</div>
    <h1 className="text-black text-3xl font-bold">BBESP</h1>
    <div className="text-zinc-800 text-base my-auto">IETP Project</div>
    </div>
</div>
);
}

export default Home
