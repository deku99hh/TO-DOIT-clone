import { Route, Router, Routes } from "react-router"

import { HomePage } from './pages/HomePage'

import { MyCridet } from './comp/MyCridet'

import './App.css'

export function App() {

  return (
    <>
      <MyCridet />
      <Routes>
        <Route path="/" element={<HomePage />} />

      </Routes>
    </>

  )
}
