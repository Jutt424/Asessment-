import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className="bg-charcoal-blue shadow-lg flex justify-between items-center px-8 h-16">
        <h1 className="text-white text-2xl font-semibold">Assessment</h1>
        <ul className="flex gap-8 text-white text-lg">
          <li>
            <NavLink
              to="/"
              className="hover:text-black transition-all duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/form"
              className="hover:text-black transition-all duration-300"
            >
              Form
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/list"
              className="hover:text-black transition-all duration-300"
            >
              List
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
