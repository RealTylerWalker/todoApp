import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <Link to='/'><button>Home</button></Link>
            <Link to='/completed'><button>Completed</button></Link>
            <Link to='/about'><button>About</button></Link>
        </div>
    )
}

export default Navbar