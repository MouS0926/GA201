import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function PrivateRoutes({children}) {
    const isAuth=useSelector(store=>store.authReducer.isAuth)
    
  return isAuth? children :<Navigate to="/login" />
}
