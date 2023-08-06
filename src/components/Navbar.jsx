import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div id="navbar">
            <Link to = '/react-router' >Home</Link>
            <Link to = '/react-router/blue' >Blue</Link>  
            <Link to = '/react-router/red' >Red</Link> 
            <Link to = '/react-router/silver' >Silver</Link> 
            <Link to = '/react-router/gold' >Gold</Link>  
        </div>
    )
}