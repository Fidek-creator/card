import React from "react";

export default function Photo() {
return(
    <>
    <div className="flex flex-col items-center bg-slate-900 rounded-t-3xl">
        <img src={process.env.PUBLIC_URL + 'avatar.png'} className="h-auto max-w-full rounded-full mt-2" />
            <h1 className="text-5xl font-Teko text-white">Juan Pablo</h1>
            <h2 className="text-3xl font-Teko text-pink-800">Front-end developer</h2>
            <h3 className="text-xl font-Teko text-white">and bike enjoyer</h3>
        <div className="space-x-10 p-2">
            <button className="bg-slate-500 hover:bg-slate-300 text-white hover:text-black font-bold py-2 px-4 rounded-2xl inline-flex items-center">
               <img src={process.env.PUBLIC_URL + '/mail.png'} className="fill-current w-4 h-4 mr-2" />
                Email
            </button>
            <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-2xl inline-flex items-center">
               <img src={process.env.PUBLIC_URL + '/in.png'} className="fill-current w-4 h-4 mr-2" />
                LinkedIn
            </button>
        </div>
    </div>
    </>
);
}
