import React from "react";

export default function Footer() {
    return(
        <div className="bg-slate-900 py-2 flex space-x-2 place-content-center rounded-b-3xl">
            <div className="w-8"><img src={process.env.PUBLIC_URL + '/twiter.png'} /></div>
            <div className="w-8"><img src={process.env.PUBLIC_URL + '/fb.png'} /></div>
            <div className="w-8"><img src={process.env.PUBLIC_URL + '/insta.png'} /></div>
            <div className="w-8"><img src={process.env.PUBLIC_URL + '/mess.png'} /></div>
        </div>
    );
}