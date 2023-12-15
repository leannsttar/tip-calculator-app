import { useState } from "react";

export function Input({ icon, value, setValue }) {

  return (
    <>
      <div className="relative">
        {window.innerWidth > 768 && (value < 1 && value != '' && <p className="text-right text-sm text-red-400 md:absolute md:bottom-14 md:right-0 ">Can't be zero</p>)}
        <img src={icon} alt="" className="absolute top-[.9em] left-[1.09em]" />
        <input
          value={value === undefined || value === '' ? '' : value}
          onChange={(e) => setValue(e.target.value)}
          className={`bg-[#f3f8fb] w-full text-right py-[.31em] px-4 text-2xl text-[#00494d] font-bold rounded-md ${value < 1 && value != '' ? 'outline-red-400' : 'outline-[#75c1b8]'}`}
          type="text"
          placeholder="0"
        />
        {window.innerWidth < 768 && (value < 1 && value != '' && <p className="text-right text-sm text-red-400">Can't be zero or negative</p>)}
      </div>
    </>
  );
}
