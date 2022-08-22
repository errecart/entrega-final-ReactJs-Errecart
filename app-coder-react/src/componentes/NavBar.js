import React from "react";
import CardWiget from "./CardWiget";
import './styles/Nav.css'

import { Link,NavLink } from 'react-router-dom'



function NavBar(){
    return(
<>
<div className="navB">
<Link to='/'> 
<h2><span>TiendaMorfi</span></h2>
</Link>
<div className="navList"> 
<NavLink to='/' style={{textDecoration:"none", margin:9, color:"violet"}}>Home</NavLink>
<NavLink to='categoria/salado' style={{textDecoration:"none", margin:9, color:"violet"}}>Salado</NavLink>
<NavLink to='categoria/dulce' style={{textDecoration:"none", margin:9, color:"violet"}}>Dulce</NavLink>
<NavLink to='categoria/bebida' style={{textDecoration:"none", margin:9, color:"violet"}}>Bebidas</NavLink>
</div>
<Link to='/cart'>
<CardWiget/>
</Link>
</div>
</>
    );
}
export default NavBar

