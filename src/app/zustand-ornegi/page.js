'use client';
import React from "react";
import useStoreZustand from "@/zustandStore/store";

export default function Home() {

  const {sayi, arttir, azalt, ayarla} = useStoreZustand((state) => state);
  const inputRef = React.useRef();

  return (
    <main>
      <ul>
        <li>
          <h1>Sayı : {sayi}</h1>
        </li>
        <li>
          <button onClick={() => {arttir()}}>Arttır</button>
        </li>
        <li>
          <button onClick={() => {azalt()}}>Azalt</button>
        </li>
        <li>
          <input ref={inputRef} />
        </li>
        <li>
          <button onClick={() => { ayarla(inputRef.current.value) }}>Ayarla</button>
        </li>
      </ul>
    </main>
  );
}
