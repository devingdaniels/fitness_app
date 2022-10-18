import React from 'react'
import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import { MdAddTask} from 'react-icons/md'

function  Navigation() {
  return (
    <nav>
        <Link to="/"><AiFillHome size={70} color="white"/></Link>
        <Link to="add-exercise"><MdAddTask size={70} color="white" /></Link>
    </nav>
  )
}

export default Navigation