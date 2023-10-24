import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/service/user";
import SignUp from "./pages/signUp/signUp";
import LogIn from './pages/login/login'
import Home from "./pages/home/home"
import DigiDex from './pages/digiDex/digiDex'
import Game from "./pages/game/game"

export default function App() {
  const [user, setUser] = useState(getUser());

 return (

    <>
      <Routes>
      <Route path='/' element={ <SignUp setUser={setUser} />} />
      <Route path='/logIn' element={ <LogIn setUser={setUser} />} />
      <Route path='/home' element={ <Home setUser={setUser} />} />
      <Route path='/digiDex' element={ <DigiDex setUser={setUser} />} />
      <Route path='/game' element={ <Game setUser={setUser} />} />
      </Routes>
    </>

  )
}




