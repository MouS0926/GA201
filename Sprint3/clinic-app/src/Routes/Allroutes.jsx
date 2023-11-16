import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Clinic from '../Components/Clinic'
import Doctorlist from '../Components/Doctorlist'
import Doctordetails from '../Components/Doctordetails'
import Register from '../Components/Register'
import Login from '../Components/Login'
import Bookings from '../Components/Bookings'
import PrivateRoutes from './PrivateRoutes'

export default function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Clinic/> }/>
            <Route path='/doctors/:id' element={<Doctorlist/> }/>
            <Route path='/doctors-details/:id' element={
              <PrivateRoutes>
                <Doctordetails/>
              </PrivateRoutes>
           
            
            }/>
            <Route path='/signup' element={<Register/> } />
            <Route path='/login' element={<Login/> } />
            <Route path='/bookings' element={
              <PrivateRoutes>

                  <Bookings/> 
              </PrivateRoutes>
           
            
            }/>
        </Routes>

    </div>
  )
}
