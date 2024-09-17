import React from 'react'
import classNames from 'classnames';
import useNavi from '../hooks/use-navi';


// passing in two props for the path, and another one to show text
function Link({to, children}) {

const {navi} = useNavi()
const classes = classNames('text-blue-500')

const handleClick =(e) => {
    // prevent page from refreshing
    if(e.metakey || e.ctrlkey ){
      return
    }

    console.log(e)
    e.preventDefault();
    navi(to)
}


  return (
    <a className={classes} href={to} onClick={handleClick}>{children}</a>
  )
}

export default Link
