 import {Link} from 'react-router-dom'
// import logo from "./Images/image copy 2.png"


import './nav.css'

const Navbar =()=>(
<div>


<nav className="link-container" >

<Link to="/" className="Link">Home

</Link>
<Link to="/Collection" className="Link">Collections</Link>
<Link to="/About" className="Link">About
</Link>
<Link to="/Contact"className="Link" >Contact</Link>

</nav>




</div>
)
export default Navbar