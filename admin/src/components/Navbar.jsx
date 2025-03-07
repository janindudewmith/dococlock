import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

const Navbar = () => {

  const { aToken, setAToken } = useContext(AdminContext)
  const { dToken, setDToken } = useContext(DoctorContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 border-b bg-white'>
      <div className='flex items-center gap-2 text-xs'>
        <img className='w-50 cursor-pointer mt-2' src={assets.admin_logo} alt="" />
        <p className='border-2 px-5 py-2 rounded-full border-primary text-primary text-medium font-bold'>{aToken ? 'Admin' : 'Doctor'}</p>
      </div>
      <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar