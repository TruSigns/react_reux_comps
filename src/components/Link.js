import React from 'react'
import { useContext } from 'react';
import NaviContext from '../context/navigation';


// passing in two props for the path, and another one to show text
function Link({to, children}) {

const {navi} = useContext(NaviContext)

const handleClick =(e) => {
    // prevent page from refreshing
    e.preventDefault();
    navi(to)
}


  return (
    <a onClick={handleClick}>{children}</a>
  )
}

export default Link
