import "./header.css"
import { Link } from "react-router-dom";
import About from "../pages/About"


function Header(){
    return(
        <div>
            <header>
                <Link className="link" to="/Create"><h1>CREATE</h1></Link>
                <div style={{display:"flex",gap:20}}>
                    <Link className="link" to="/About">About Us</Link>
                    <Link className="link" to="/Kurslar">Courses</Link>
                    <Link className="link" to="/Event">Events</Link>
                    <Link className="link" to="/Blog">Blog</Link>
                    <Link className="link" to="/Contacts">Contacts</Link>
                </div>
                <div style={{display:"flex", alignItems:"center", gap:20}}>
                    <button className="btn1">Get consultation</button>
                    <Link style={{textDecoration:"none",color:"black"}} to="/sigin">Login</Link>
                    <p>/ Register</p>
                </div>
            </header>
        </div>
    )
}

export default Header;