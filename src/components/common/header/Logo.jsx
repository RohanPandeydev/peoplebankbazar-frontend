import React from 'react'
import { Link } from 'react-router-dom'
import ROUTE_PATHS from '../../../routes/routePaths'
import ImagePath from '../../../assets/images'

function Logo() {
  return (
      <Link to={ROUTE_PATHS.HOME} className="w-[120px] lg:w-[180px] h-full">
                <img
                  src={ImagePath?.Logo}
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </Link>
  )
}

export default Logo