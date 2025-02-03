import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/layout'
import HomePage from './pages/Homepage'
import Menu from './pages/menu'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/menu' element={<Menu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
