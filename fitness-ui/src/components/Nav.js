import React from 'react'
import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {GrAddCircle} from 'react-icons/gr'

function  Navigation() {
  return (
    <nav>
        <Link to="/"><AiFillHome size={70} color="black"/></Link>
        <Link to="add-exercise"><GrAddCircle size={70} /></Link>
    </nav>
  )
}

export default Navigation