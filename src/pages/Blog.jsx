import "./blog.css"
import ggg from "../assets/ggg.png"
import ooo from "../assets/ooo.png"
import yyy from "../assets/yyy.png"
import img5 from "../assets/illustration (5).png"
import { Link } from "react-router-dom"
import img14 from "../assets/image (14).png"
import dd from "../assets/dd.png"


function Blog(){
    return(
        <div>
            <div style={{textAlign:"center",marginTop:40}}>
                <h4>Our blog</h4>
                <h1>Createx School Journal</h1>
            </div>
            <div className="inputt">
                <div className="divin4">
                <button style={{width:62,height:46,borderColor:"red", background:"#fff",color:"red",borderRadius:5}}>All</button>
                <Link style={{textDecoration:"none",color:"black"}} to="/Article"><p>Articles</p></Link>
                <p>Videos</p>
                <p>Podcasts</p>
                </div>
                <div className="divin5">
                    <h4>Blog category</h4>
                    <select style={{width:140,height:44,borderColor:"grey", borderRadius:4}}>
                        <option value="1">all themes</option>
                        <option value="2">Ayuhbxon</option>
                        <option value="3">Ayubxon</option>
                    </select>
                    <input style={{width:255,height:44,borderRadius:4,borderColor:'grey'}} type="text" placeholder="Search blog..." />
                </div>

            </div>
            <div className="divimg">
                <div className="divtu">
                    <div className="divvan">
                        <img src={ooo} alt="" />
                        <p>Marketing  |  September 4, 2020  |  36 min</p>
                        <h3>What is traffic arbitrage and does it really <br />make money?</h3>
                        <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br />sed. Convallis proin dignissim lacus, purus gravida...</p>
                    </div>
                    <div className="divvan">
                        <img src={dd} alt="" />
                        <p>Marketing  |  September 4, 2020  |  36 min</p>
                        <h3>What is traffic arbitrage and does it really <br />make money?</h3>
                        <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br />sed. Convallis proin dignissim lacus, purus gravida...</p>
                    </div>
                    <div className="divvan">
                        <img src={yyy} alt="" />
                        <p>Marketing  |  September 4, 2020  |  36 min</p>
                        <h3>What is traffic arbitrage and does it really <br />make money?</h3>
                        <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br />sed. Convallis proin dignissim lacus, purus gravida...</p>
                    </div>
                </div>



                <div className="divtuu">
                    <div className="divvann">
                        <img className="iimm" src={img14} alt="" />
                        <p>Marketing  |  September 4, 2020  |  36 min</p>
                        <h3>HR statistics: job search,  interviews, hiring and recruiting</h3>
                        <p>Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing <br />aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, <br />massa vivamus. A molestie id semper fermentum pretium...</p>
                    </div>
                    <div className="divvan">
                        <img className="mmii" src={yyy} alt="" />
                        <p>Marketing  |  September 4, 2020  |  36 min</p>
                        <h3>What is traffic arbitrage and does it really <br />make money?</h3>
                        <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br />sed. Convallis proin dignissim lacus, purus gravida...</p>
                    </div>
                </div>
                <div className="divtu">
                    <div className="divvan">
                        <img src={ooo} alt="" />
                        <p>Marketing  |  September 4, 2020  |  36 min</p>
                        <h3>What is traffic arbitrage and does it really <br />make money?</h3>
                        <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br />sed. Convallis proin dignissim lacus, purus gravida...</p>
                    </div>
                    <div className="divvan">
                        <img src={ooo} alt="" />
                        <p>Marketing  |  September 4, 2020  |  36 min</p>
                        <h3>What is traffic arbitrage and does it really <br />make money?</h3>
                        <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br />sed. Convallis proin dignissim lacus, purus gravida...</p>
                    </div>
                    <div className="divvan">
                        <img src={yyy} alt="" />
                        <p>Marketing  |  September 4, 2020  |  36 min</p>
                        <h3>What is traffic arbitrage and does it really <br />make money?</h3>
                        <p>Pharetra, ullamcorper iaculis viverra parturient sed id <br />sed. Convallis proin dignissim lacus, purus gravida...</p>
                    </div>
                </div>
            </div>





            <div className="newlet">
                <img src={img5} alt="" />
                <div>
                    <h1>Want to get the best articles weekly?<br />
                    Subscribe to our newsletter!</h1>
                    <input className="pit" type="text" placeholder="Your working email"/>
                </div>
            </div>
        </div>
    )
}
export default Blog