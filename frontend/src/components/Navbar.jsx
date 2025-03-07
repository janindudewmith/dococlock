import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData, setUserData, loading } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken(null);
    setUserData(null);
    localStorage.removeItem('token');
    navigate('/login');
  };

  const isLoggedIn = !!token && !!userData;

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-300">
      <img onClick={() => navigate('/')} className="w-44 cursor-pointer" src={assets.logo} alt="Doc o'clock Logo" />

      <ul className="hidden md:flex items-start gap-8 font-medium">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-primary' : '')}>
          <li className="py-1 hover:text-primary">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-full m-auto hidden hover:block" />
        </NavLink>
        <NavLink to="/doctors" className={({ isActive }) => (isActive ? 'text-primary' : '')}>
          <li className="py-1 hover:text-primary">DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-full m-auto hidden hover:block" />
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-primary' : '')}>
          <li className="py-1 hover:text-primary">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-full m-auto hidden hover:block" />
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-primary' : '')}>
          <li className="py-1 hover:text-primary">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-primary w-full m-auto hidden hover:block" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-4">
        {loading ? (
          <span>Loading...</span>
        ) : isLoggedIn ? (
          <div className="flex items-center gap-3">
            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hidden md:block shadow-md hover:shadow-lg transition-all duration-200">
              {"Hi"}, {userData.name}
            </button>
            <div className="relative group">
              <button className="bg-white border border-primary border-2 px-2 py-1 rounded-full flex items-center gap-2 hover:shadow-md transition-all duration-200">
                <img className="w-8 h-8 rounded-full object-cover" src={userData.image || assets.upload_area} alt={`${userData.name}'s profile`} />
                <img className="w-2.5 transition-transform duration-200 group-hover:rotate-180" src={assets.dropdown_icon} alt="Dropdown menu" />
              </button>
              {/* Dropdown menu */}
              <div className="absolute top-full right-0 pt-2 text-base font-medium text-gray-600 z-20 hidden group-hover:block transition-all duration-200">
                <div className="relative min-w-52 bg-white rounded-xl shadow-lg flex flex-col gap-2 p-3 border border-gray-200">
                  <div className="absolute top-0 right-4 -mt-2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-white"></div>
                  <button
                    onClick={() => navigate('/my-profile')}
                    className="hover:bg-blue-100 text-gray-800 px-4 py-2 rounded-lg text-left transition-colors duration-200 flex items-center gap-2"
                  >
                    My Profile
                  </button>
                  <button
                    onClick={() => navigate('/my-appointments')}
                    className="hover:bg-blue-100 text-gray-800 px-4 py-2 rounded-lg text-left transition-colors duration-200 flex items-center gap-2"
                  >
                    My Appointments
                  </button>
                  <button
                    onClick={logout}
                    className="hover:bg-blue-100 text-gray-800 px-4 py-2 rounded-lg text-left transition-colors duration-200 flex items-center gap-2"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => navigate('/login')} className="bg-primary text-white px-8 py-3 rounded-full font-bold hidden md:block">Get Started</button>
        )}

        <img onClick={() => setShowMenu(true)} className="w-6 md:hidden cursor-pointer" src={assets.menu_icon} alt="Open mobile menu" />

        {showMenu && (
          <div className="fixed md:hidden right-0 top-0 bottom-0 w-full z-20 overflow-hidden bg-white transition-all">
            <div className="flex items-center justify-between px-5 py-6">
              <img className="w-36" src={assets.logo} alt="Doc o'clock Logo" />
              <img className="w-7 cursor-pointer" onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="Close mobile menu" />
            </div>
            <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
              <NavLink onClick={() => setShowMenu(false)} to="/"><p className="px-4 py-2 rounded inline-block">HOME</p></NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/doctors"><p className="px-4 py-2 rounded inline-block">DOCTORS</p></NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/about"><p className="px-4 py-2 rounded inline-block">ABOUT</p></NavLink>
              <NavLink onClick={() => setShowMenu(false)} to="/contact"><p className="px-4 py-2 rounded inline-block">CONTACT</p></NavLink>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;