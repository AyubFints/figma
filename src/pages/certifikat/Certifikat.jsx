import "./kertifikat.css"
import img from "../../assets/image (11).png"
import images from "../../assets/logos.png"


function Certifikat(){
    return(
        <div style={{display:"flex", justifyContent:"space-between",padding:70,alignItems:"center"}}>
        <div style={{display:"flex",justifyContent:"center",gap:15}}>
            <div className="title">
                <p className="pin">Createx Certificate</p>
                <h2 className="h2in">Your expertise will <br />be confirmed</h2>
                <p className="pin">We are accredited by international <br />professional organizations and institutes:</p>


                <img src={images} alt="" />
                </div>

            </div>
            <img src={img} alt="" />
        </div>
    )
}

export default Certifikat;