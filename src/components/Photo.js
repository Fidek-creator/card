import React from "react";

export default function Photo() {
return(
    <>
    <div className="flex flex-col items-center bg-slate-900 rounded-t-3xl">
        <img src={process.env.PUBLIC_URL + '/logo192.png'} />
            <h1 className="text-5xl font-Teko text-white">Juan Pablo</h1>
            <h2 className="text-3xl font-Teko text-pink-800">Front-end developer</h2>
            <h3 className="text-xl font-Teko text-white">and kids porn enjoyer</h3>
        <div className="space-x-10 p-2">
            <button className="bg-slate-500 hover:bg-slate-300 text-white hover:text-black font-bold py-2 px-4 rounded-2xl">Email</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl">LinkedIn</button>
        </div>
    </div>
    </>
);
}
