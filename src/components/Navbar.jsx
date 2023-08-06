import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div id="navbar">
            <Link to = '/' >Home</Link>
            <Link to = '/blue' >Blue</Link>  
            <Link to = '/red' >Red</Link> 
            <Link to = '/silver' >Silver</Link> 
            <Link to = '/gold' >Gold</Link>  
        </div>
    )
}