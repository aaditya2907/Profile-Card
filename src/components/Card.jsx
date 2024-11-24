import React from "react";
import img from "../assets/pic.jpg";

function Card() {
  return (
    <div className="flex flex-row h-screen justify-center items-center bg-zinc-800">
      <div className="h-3/5 w-80 bg-white flex-col">
        <div className="bg-cyan-300 h-2/5 flex justify-center items-center">
          <img
            src={img}
            alt=""
            className="h-28 w-28 rounded-full relative top-16"
          />
        </div>
        <div className="h-3/5 flex flex-col justify-between items-center">
          <div className="flex flex-row justify-center items-baseline relative top-11 ">
            <h1 className="text-3xl font-bold mx-1 text-slate-800">Aaditya</h1>
            <p className="text-xl text-slate-500"> 22</p>
          </div>
          <div className="relative top-1 text-lg text-slate-500">Bhopal</div>

          <hr
            className="relative top-6"
            style={{ color: "black", width: "300px" }}
          />

          <div className="flex w-72 mx-3 mb-3 flex-row justify-between items-center">
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-bold text-slate-600">80k</h3>
              <p className="text-slate-500">Followers</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-bold text-slate-600">803k</h3>
              <p className="text-slate-500">Likes</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-bold text-slate-600">1.4k</h3>
              <p className="text-slate-500">Photos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
