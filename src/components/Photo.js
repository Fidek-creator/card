import React from "react";

export default function Photo() {
return(
    <>
    <div className="flex flex-col items-center bg-gray-700">
        <img src={process.env.PUBLIC_URL + '/logo192.png'} />
            <h1 className="text-7xl font-Teko text-white">Juan Pablo</h1>
            <h2 className="text-4xl font-Teko text-pink-800">Front-end developer</h2>
            <h3 className="text-xl font-Teko text-white">and fury porn fan</h3>
        <div className="space-x-7 bg-gray-700 p-2">
            <button className="bg-white hover:bg-slate-300 text-black font-bold py-2 px-4 rounded-lg">Email</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">LinkedIn</button>
        </div>
    </div>
    </>
);
}
