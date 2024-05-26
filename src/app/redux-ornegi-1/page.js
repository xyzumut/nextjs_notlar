'use client';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bakiyeArttir, userAyarla } from "../../redux/slices/userSlice";

export default function Home() {

  const dispatch = useDispatch();

  const {user} = useSelector( state => state );

  const handleOnSubmit = (e) => {

    e.preventDefault();

    const target = e.target;

    dispatch(userAyarla({
        username : target.username.value,
        password : target.password.value,
        isAdmin  : target.isAdmin.checked,
        wallet   : target.wallet.value,
        email    : target.email.value,
        token    : target.token.value,
        id       : target.id.value,
    }))
  }

  return (
    <main>
      
      <button onClick={() => {dispatch(bakiyeArttir())}}>
        Arttır {user.wallet}
      </button>

      <form onSubmit={handleOnSubmit} style={{width:200, height:300, display:"flex", flexDirection:'column', justifyContent:'space-around'}}>
        <input name="username" type="text" placeholder="Kullanıcı Adı"/>
        <input name="password" type="text" placeholder="Şifre"/>
        <input name="email" type="email" placeholder="Email"/>
        <input name="token" type="text" placeholder="Token"/>
        <input name="wallet" type="number" placeholder="Cüzdan"/>
        <input name="id" type="number" placeholder="ID"/>
        <input name="isAdmin" type="checkbox"/>
        <button>Gönder bebeğim</button>
      </form>

      <div>
        {JSON.stringify(user)}
      </div>

    </main>
  );
}