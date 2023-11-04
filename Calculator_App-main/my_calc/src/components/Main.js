import React, { useState } from "react";

function Main() {
  const [result, setResult] = useState("");
  const [er, setEr] = useState("");
  
  const handleClick = (e) => {
    let resultStr = result.toString();
    if (
      (resultStr[resultStr.length - 1] === "+" ||
        resultStr[resultStr.length - 1] === "-" ||
        resultStr[resultStr.length - 1] === "*" ||
        resultStr[resultStr.length - 1] === "/") &&
      (e.target.innerText === "+" ||
        e.target.innerText === "-" ||
        e.target.innerText === "*" ||
        e.target.innerText === "/")
    ) {
      resultStr = resultStr.slice(0, -1);
    }
    console.log(resultStr[resultStr.length - 1]);
    setResult(resultStr.concat(e.target.innerText));
  };

  const handlePer = () => {
    let resultStr = result.toString();
    setResult(resultStr / 100);
  };

  const handleClear = () => {
    setResult("");
    setEr("");
  };

  const handleResult = () => {
    try {
      if (
        result[result.length - 1] === "+" ||
        result[result.length - 1] === "-" ||
        result[result.length - 1] === "*" ||
        result[result.length - 1] === "/"
      ) {
        setResult("Error");
      }
      else {
        setResult(eval(result));
      }
    }
     catch (error) {
      setResult("Error");
      setEr("Don't use numbers with preceding zeros");
    }
  };

  const handleDel = () => {
    let resultStr = result.toString();
    setResult(resultStr.slice(0, -1));
  };

  return (
    <main className="font-Orbitron w-auto h-atuo justify-items-center p-8 bg-[#2E2F31] mx-5 mt-24 rounded-lg md:w-1/3 md:ml-[33.3%]">
      <div className="text-left flex items-center bg-[#A3AF76] mb-4 w-full h-14 rounded-lg text-black text-lg font-extrabold font-Orbitron">
        <p className="text-left mx-3 w-full h-3/4 pt-2 rounded-3xl font-extr bg-transparent pl-4">
          {result}
        </p>
      </div>
      <div className="bg-[#2E2F31] grid grid-cols-4 gap-3 py-5 rounded-lg p-3 text-white text-lg font-bold">
        <button
          className="rounded-lg bg-[#110C0E] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handleClear}
        >
          AC
        </button>
        <button
          className="rounded-lg bg-[#110C0E] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handleDel}
        >
          Bksp
        </button>
        <button
          className="rounded-lg bg-[#110C0E] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handlePer}
        >
          %
        </button>
        <button
          className="rounded-lg bg-[#110C0E] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handleClick}
        >
          +
        </button>
        <button
          className="rounded-lg bg-[#59585B] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handleClick}
        >
          7
        </button>
        <button
          className="rounded-lg bg-[#59585B] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handleClick}
        >
          8
        </button>
        <button
          className="rounded-lg bg-[#59585B] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handleClick}
        >
          9
        </button>
        <button
          className="rounded-lg bg-[#110C0E] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handleClick}
        >
          -
        </button>
        <button
          className="rounded-lg bg-[#59585B] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handleClick}
        >
          4
        </button>
        <button
          className="rounded-lg bg-[#59585B] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handleClick}
        >
          5
        </button>
        <button
          className="rounded-lg bg-[#59585B] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handleClick}
        >
          6
        </button>
        <button
          className="rounded-lg bg-[#110C0E] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handleClick}
        >
          *
        </button>
        <button
          className="rounded-lg bg-[#59585B] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handleClick}
        >
          1
        </button>
        <button
          className="rounded-lg bg-[#59585B] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handleClick}
        >
          2
        </button>
        <button
          className="rounded-lg bg-[#59585B] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handleClick}
        >
          3
        </button>
        <button
          className="rounded-lg bg-[#110C0E] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handleClick}
        >
          /
        </button>
        <button
          className="rounded-lg bg-[#59585B] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handleClick}
        >
          0
        </button>
        <button
          className="rounded-lg bg-[#59585B] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handleClick}
        >
          00
        </button>
        <button
          className="rounded-lg bg-[#59585B] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handleClick}
        >
          .
        </button>
        <button
          className="rounded-lg bg-[#F05B2A] py-2 hover:bg-slate-100 hover:text-black text-xl"
          onClick={handleResult}
        >
          =
        </button>
      </div>
      <p className="bg-white font-extrabold mt-3 rounded-xl">{er}</p>
    </main>
  );
}

export default Main;
