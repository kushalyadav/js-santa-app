import React from "react";
import ReactDOM from "react-dom/client";
import SantaForm from './components/SantaForm/SantaForm'
import ErrorPage from './components/ErrorPage/ErrorPage'
import SuccessPage from './components/SuccessPage/SuccessPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App(){
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<SantaForm />} />
          <Route path="/success" element={<SuccessPage></SuccessPage>} />
          <Route path="/error" element={<ErrorPage></ErrorPage>} />
        </Routes>
      </main>
    </BrowserRouter>
  
  )  
}

export default App