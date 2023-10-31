import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

export default function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path="/push/:owner/:repo/:committerName" element={<Home/>}/>
        </Routes>
    </div>
  )
}
