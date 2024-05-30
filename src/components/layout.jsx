import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
 return (
 <>
 <h1>My Portfolio</h1>
 <nav>
     <Link to="/">Home</Link> | <Link to="/aboutme">AboutMe</Link> | <Link to="/contactme">ContactMe</Link>| <Link to="/projects">Projects</Link>| <Link to="/services">Services</Link>
 </nav>
 <br/>
 <hr />

 </>
 );
}
