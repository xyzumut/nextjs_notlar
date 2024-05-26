'use client';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { arttir, ayarla, azalt } from "../../redux/slices/counterSlice";

export default function Home() {

  const inputRef = React.useRef();

  const sayac = useSelector( state => state.sayac );
  const dispatch = useDispatch();

  return (
    <main>
      <ul>
        <li>
          <h1>Sayı : {sayac}</h1>
        </li>
        <li>
          <button onClick={() => {dispatch(arttir())}}>Arttır</button>
        </li>
        <li>
          <button onClick={() => {dispatch(azalt())}}>Azalt</button>
        </li>
        <li>
          <input ref={inputRef} />
        </li>
        <li>
          <button onClick={() => { dispatch(ayarla(inputRef.current.value)) }}>Ayarla</button>
        </li>
      </ul>
    </main>
  );
}