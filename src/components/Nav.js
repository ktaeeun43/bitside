import React from 'react'
import {Link} from 'react-router-dom'
import navList from '../atom/navList'

function Nav() {
  return (
    <>
    {navList.map(({ title, path }) => {
        return (
          <li>
            <Link
              to={`/page/${path}`}
            >
              {title} 
            </Link>
          </li>
        );
    })}
    </>
  )
}

export default Nav