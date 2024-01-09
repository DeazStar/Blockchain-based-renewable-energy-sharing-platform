import * as React from "react";

function Dash(props) {
return (
<div className="bg-slate-900 flex flex-col items-stretch pt-8">
    <div className="self-center flex w-full max-w-[1438px] items-stretch justify-between gap-5 px-5 max-md:max-w-full max-md:flex-wrap">
    <div className="text-white text-2xl my-auto">BBESP</div>
    <div className="self-center flex items-start justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
        <div className="text-white text-center text-xl self-center whitespace-nowrap my-auto">
        Home
        </div>
        <div className="text-white text-center text-xl whitespace-nowrap bg-zinc-300 bg-opacity-30 self-stretch grow justify-center items-stretch px-4 py-5 rounded-3xl">
        Dashboard
        </div>
        <div className="text-white text-center text-xl self-center my-auto">
        Payment
        </div>
        <div className="text-white text-center text-xl self-center whitespace-nowrap my-auto">
        Trade
        </div>
    </div>
    <img
        loading="lazy"
        srcSet="..."
        className="aspect-[0.96] object-contain object-center w-[70px] overflow-hidden shrink-0 max-w-full"
    />
    </div>
    <div className="self-center w-full max-w-[1489px] mt-9 max-md:max-w-full">
    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
        <div className="flex grow flex-col items-stretch max-md:mt-10">
            <div className="backdrop-blur-[10px] bg-indigo-500 flex justify-between gap-5 pl-11 pr-4 py-6 rounded-2xl items-end max-md:pl-5">
            <div className="flex grow basis-[0%] flex-col mt-9 items-start">
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d45c72d9bb3c111ca360dbc9fd6730d3213e525b25925503e4c7eb9655c75a56?"
                className="aspect-[1.72] object-contain object-center w-28 overflow-hidden"
                />
                <div className="text-white text-base font-medium leading-4 self-stretch mt-6">
                Energy Power per <br />
                Purchase Left (%)
                </div>
                <div className="text-white text-center text-base font-semibold leading-4 whitespace-nowrap justify-center items-stretch border self-center mt-6 px-9 py-1.5 rounded-xl border-solid border-blue-400 max-md:px-5">
                Sell
                </div>
            </div>
            <div className="self-stretch flex grow basis-[0%] flex-col">
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b348e2ccc553e0bb3a6ee67ca4f528fee6d5dfdce20c45e412ebfbbdd275b97?"
                className="aspect-[1.28] object-contain object-center w-[23px] overflow-hidden max-w-full self-end"
                />
                <div className="text-white text-6xl font-medium leading-[55px] self-stretch whitespace-nowrap mt-8 max-md:text-4xl">
                50%
                </div>
                <div className="justify-center text-white text-base font-medium leading-5 ml-3 mt-9 self-start max-md:ml-2.5">
                Energy Consumed
                </div>
                <div className="text-white text-center text-base font-semibold leading-4 justify-center items-stretch border self-stretch mt-6 px-9 py-1 rounded-xl border-solid border-blue-400 max-md:px-5">
                Buy
                </div>
            </div>
            </div>
            <div className="backdrop-blur-[10px] bg-indigo-500 flex w-full flex-col mt-8 pl-8 pr-20 pt-8 pb-12 rounded-2xl items-start max-md:px-5">
            <div className="text-white text-lg font-medium capitalize">
                Assets
            </div>
            <div className="flex w-[198px] max-w-full items-stretch gap-3.5 mt-10">
                <img
                loading="lazy"
                srcSet="..."
                className="aspect-[1.43] object-contain object-center w-full overflow-hidden shrink-0 flex-1 rounded-xl"
                />
                <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                <div className="text-white text-sm font-medium whitespace-nowrap">
                    Total assets
                </div>
                <div className="text-white text-2xl font-bold uppercase mt-2.5">
                    $ 87.743
                </div>
                </div>
            </div>
            <div className="flex items-stretch gap-4 mt-16 max-md:mt-10">
                <img
                loading="lazy"
                srcSet="..."
                className="aspect-[1.43] object-contain object-center w-[83px] overflow-hidden shrink-0 max-w-full rounded-xl"
                />
                <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                <div className="text-white text-sm font-medium whitespace-nowrap">
                    Total deposits
                </div>
                <div className="text-white text-2xl font-bold uppercase mt-2">
                    $ 78,342
                </div>
                </div>
            </div>
            <div className="flex items-stretch gap-4 mt-16 mb-10 max-md:mt-10">
                <img
                loading="lazy"
                srcSet="..."
                className="aspect-[1.43] object-contain object-center w-[83px] overflow-hidden shrink-0 max-w-full rounded-xl"
                />
                <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                <div className="text-white text-sm font-medium">APY</div>
                <div className="text-white text-2xl font-bold uppercase whitespace-nowrap mt-3">
                    + 12.3%
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
        <div className="backdrop-blur-[10px] bg-blue-800 flex grow flex-col w-full mt-3 pl-8 pr-12 py-12 rounded-2xl items-start max-md:max-w-full max-md:mt-10 max-md:px-5">
            <div className="text-white text-5xl font-medium ml-12 mt-14 max-md:text-4xl max-md:ml-2.5 max-md:mt-10">
            DASHBOARD
            </div>
            <div className="items-stretch bg-white bg-opacity-0 self-stretch flex flex-col justify-center mt-32 mb-8 p-5 rounded-xl max-md:max-w-full max-md:mt-10">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b825d3f7f3213909722553da61699f356e526a943c06758af891fd75ab767b61?"
                className="aspect-[2.54] object-contain object-center w-full overflow-hidden max-md:max-w-full"
            />
            </div>
        </div>
        </div>
    </div>
    </div>
    <div className="bg-white flex w-full items-center justify-between gap-5 mt-14 p-12 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:px-5">
    <div className="text-zinc-800 text-base font-semibold my-auto">
        Privacy
    </div>
    <div className="text-black text-2xl my-auto">BBESP</div>
    <div className="text-zinc-800 text-base my-auto">IETP Project</div>
    </div>
</div>
);
}
export default Dash;


