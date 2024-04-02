import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import "./App.css";
import SignUp from "./component/Sign/SignUp.jsx";
import SignIn from "./component/Sign/SignIn.jsx";
import Home from "./component/home/home.jsx";

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route >
      <Route path='/' element={<SignIn />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/home' element={<Home />} />
    </Route >
  ))

  return (
    <RouterProvider router={router} />
  )
}

export default App;
