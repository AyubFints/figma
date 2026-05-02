import "./header.css"
import { Link } from "react-router-dom";
import About from "../pages/About"


function Header(){
    return(
        <div>
            <header>
                <h1>CREATE</h1>
                <div style={{display:"flex",gap:20}}>
                    <Link className="link" to="/About">About Us</Link>
                    <Link className="link" to="/Kurslar">Courses</Link>
                    <Link className="link" to="/">Events</Link>
                    <Link className="link" to="/">Blog</Link>
                    <Link className="link" to="/">Contacts</Link>
                </div>
                <div style={{display:"flex", alignItems:"center", gap:20}}>
                    <button className="btn1">Get consultation</button>
                    <p>Log in / Register</p>
                </div>
            </header>
        </div>
    )
}

export default Header;