import React from 'react'
import {Link} from 'react-router-dom'
// Icons
import {AiFillHome} from 'react-icons/ai'
import { MdAddTask} from 'react-icons/md'

function  Navigation() {
  return (
    <nav>        
        <Link to="/"><AiFillHome size={60}/>
          <div>Home</div>        
        </Link>        
        <Link to="add-exercise"><MdAddTask size={60}/>
         <div>Add</div> 
        </Link>
    </nav>
  )
}

export default Navigation