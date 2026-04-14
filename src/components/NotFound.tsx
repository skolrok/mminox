import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white relative overflow-hidden px-4">
      {/* Oversized Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-20">
        <span className="text-[15rem] md:text-[25rem] font-black text-zinc-800">404</span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-4xl font-bold mt-8">Ups! Zgleda, da tu manjka en zvar.</h1>
        <p className="text-zinc-400 mt-4 max-w-md text-center text-lg">
          Strani, ki jo iščete, ne moremo najti. Brez skrbi, naša glavna stran stoji trdno kot naše ograje.
        </p>
        <a 
          href="/" 
          className="mt-8 inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-zinc-950 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(132,204,22,0.4)] hover:-translate-y-1"
        >
          Nazaj na domačo stran
        </a>
      </div>
    </div>
  );
}
