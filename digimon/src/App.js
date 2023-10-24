import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/service/user";
import SignUp from "./pages/signUp/signUp";
import LogIn from './pages/login/login'
import DigiDex from './pages/digiDex/digiDex'

export default function App() {
  const [user, setUser] = useState(getUser());

  return (

    <>
      <Routes>
      <Route path='/' element={ <SignUp setUser={setUser} />} />
      <Route path='/logIn' element={ <LogIn setUser={setUser} />} />
      <Route path='/digiDex' element={ <DigiDex setUser={setUser} />} />
      </Routes>

      
    </>

  )
}




