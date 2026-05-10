import "./kertifikat.css"
import img from "../../assets/image (11).png"


function Certifikat(){
    return(
        <div style={{display:"flex",justifyContent:"center",gap:15}}>
            <div className="title">
                <p className="pin">Createx Certificate</p>
                <h2 className="h2in">Your expertise will <br />be confirmed</h2>
                <p className="pin">We are accredited by international <br />professional organizations and institutes:</p>


                <div style={{display:"flex", alignItems:"center", gap:20,}}>
                <p className="piin">Del Mar <br /> Strategiy</p>
                <p className="piin">SENTINAL <br />CONSULTING</p>
                <p style={{color:"green",fontSize:25}}>NATIONANL</p>
                </div>

            </div>
            <img src={img} alt="" />
        </div>
    )
}

export default Certifikat;