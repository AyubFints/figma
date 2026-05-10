import "./article.css"
import ggg from "../assets/ggg.png"
import ooo from "../assets/ooo.png"
import ggr from "../assets/ggr.png"
import img14 from "../assets/image (14).png"
import img5 from "../assets/illustration (5).png"
import dd from "../assets/dd.png"



function Article(){
    return(
        <div>
            <section className="maqola-sahifasi">
      <div className="maqola-konteyner">
        
        <div className="asosiy-mazmun">
          <div className="maqola-ust-qismi">
            <span className="maqola-kategoriya">Article | HR & Recruiting</span>
            <h1 className="maqola-sarlavhasi">HR statistics: job search, interviews, hiring and recruiting</h1>
            <div className="maqola-meta">
              <span>August 3, 2020 | 4 min read</span>
              <div className="ulashish">
                Share: <span>f t in</span>
              </div>
            </div>
          </div>

          <div className="maqola-asosiy-rasm">
            <img src={img14} alt="Workstation" />
          </div>

          <div className="maqola-matni">
            <p className="qalin-matn">
              Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. 
              Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam 
              diam quis est hendrerit ac euismod.
            </p>
            <p>
              At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, 
              vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate 
              metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa.
            </p>

            <blockquote className="maqola-iqtibos">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam 
              viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi.
            </blockquote>

            <ul className="maqola-ruyxat">
              <li>A fermentum in pretium aliquam adipiscing donec tempus.</li>
              <li>Vulputate placerat amet pulvinar lorem nisl.</li>
              <li>Consequat feugiat habitant gravida quis elit bibendum id adipiscing sed.</li>
            </ul>
          </div>

          <div className="maqola-pastki-qismi">
            <div className="teglar">
              Tags: <span>#learning</span> <span>#HR</span> <span>#self-development</span>
            </div>
          </div>
        </div>

        <aside className="yon-panel">
          <div className="qidiruv-qutisi">
            <input type="text" placeholder="Search blog..." />
          </div>

          <div className="muallif-blok">
            <h4>AUTHOR</h4>
            <div className="muallif-info">
              <img src={ggg} alt="Kristin Watson" />
              <div>
                <h5>Kristin Watson</h5>
                <p>Curator of Marketing Course</p>
                <div className="ijtimoiy">in t ig</div>
              </div>
            </div>
          </div>

          <div className="trend-blok">
            <h4>TRENDING ARTICLES</h4>
            <div className="trend-item">
              <img src={ooo} alt="post" />
              <div>
                <span>September 4, 2020</span>
                <p>What is traffic arbitrage and does it really make money?</p>
              </div>
            </div>
            <div className="trend-item">
              <img src={ggr} alt="post" />
              <div>
                <span>July 15, 2020</span>
                <p className="qizil-matn">Startup: how to build a team that will live longer than a year</p>
              </div>
            </div>
          </div>

          <div className="teglar-blok">
            <h4>TAGS</h4>
            <div className="teglar-ro'yxati">
              <span>#marketing</span>
              <span>#recruiting</span>
              <span className="aktiv-teg">#coding</span>
              <span>#learning</span>
              <span>#HR</span>
            </div>
          </div>
        </aside>

      </div>
    </section>


        <div className="newlet">
                <img src={img5} alt="" />
                <div>
                    <h1>Want to get the best articles weekly?<br />
                    Subscribe to our newsletter!</h1>
                    <input className="pit" type="text" placeholder="Your working email"/>
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
                        <img src={dd} alt="" />
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
                </div>
    </div>

        
    )
}

export default Article;