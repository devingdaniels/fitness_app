import React from 'react'
import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import { MdAddTask} from 'react-icons/md'

function  Navigation() {
  return (
    <nav>        
        <Link to="/"><AiFillHome size={50}/>
          <div>Home</div>        
        </Link>        
        <Link to="add-exercise"><MdAddTask size={50}/>
         <div>Add</div> 
        </Link>
    </nav>
  )
}

export default Navigation