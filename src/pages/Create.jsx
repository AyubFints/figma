import "./create.css"
import linter from "../assets/illustration.png";
import creat from "../assets/image (10).png"
import image from "../assets/imagee.png"
import linter1 from "../assets/illustration (1).png"
import iii from "../assets/iii.png"
import ggg from "../assets/ggg.png"
import eee from "../assets/eee.png"
import ooo from "../assets/ooo.png"
import ggr from "../assets/ggr.png"
import Certifikat from "./certifikat/Certifikat";
import { Link } from "react-router-dom";



function Create(){
    return(
        <div>
            <div className="head">
                <div className="titlee">
                    <p style={{fontSize:20}}>Play showreel</p>
                    <h1 style={{fontSize:58}}>Enjoy studying <br />
                    with Createx <br />Online Courses</h1>
                    <div style={{display:"flex" ,gap:30,marginTop:20}}>
                    <Link to="/About"><button className="btn2">About us</button></Link>
                    <button className="btn3">Explore courses</button>
                    </div>
                </div>
                <div className="img1">
                    <img src={linter} alt="" />
                </div>
            </div>

            <div className="creat">
                <img src={creat} alt="" />
                <div style={{lineHeight:2.1}}>
                    <p>Who we are</p>
                    <h2>Why Createx?</h2>
                    <p>A fermentum in morbi pretium aliquam adipiscing <br />donec tempus.</p>
                    <p>Vulputate placerat amet pulvinar lorem nisl.</p>
                    <p>Consequat feugiat habitant gravida quisque elit <br />bibendum id adipiscing sed.</p>
                    <p>Etiam duis lobortis in fames ultrices commodo nibh.</p>
                    <p>Etiam duis lobortis in fames ultrices commodo nibh.</p>
                    <p>Ultricies amet justo et eget quisque purus <br />vulputate dapibus tortor.</p>

                    <button style={{width:161,height:44, backgroundColor:"#FF3F3A", border:"none", marginTop:15}}>More about us</button>
                </div>
            </div>

            <section className="courses">


<div className="courses-header">
  <div>
    <span className="small">READY TO LEARN?</span>
    <h2>Featured Courses</h2>
  </div>

  <button className="view-btn">View all courses</button>
</div>


<div className="course-list">

  <div className="course-card">
    <img src={image} alt="" />
    <div className="course-info">
      <span className="tag green">Marketing</span>
      <h3>The Ultimate Google Ads Training Course</h3>
      <p className="price">$100 <span>| by Jerome Bell</span></p>
    </div>
  </div>

  <div className="course-card">
    <img src={eee} alt="" />
    <div className="course-info">
      <span className="tag blue">Management</span>
      <h3>Product Management Fundamentals</h3>
      <p className="price">$480 <span>| by Marvin McKinney</span></p>
    </div>
  </div>

  <div className="course-card">
    <img src={image} alt="" />
    <div className="course-info">
      <span className="tag orange">HR & Recruting</span>
      <h3>HR Management and Analytics</h3>
      <p className="price">$200 <span>| by Leslie Alexander</span></p>
    </div>
  </div>

  <div className="course-card">
    <img src={ggg} alt="" />
    <div className="course-info">
      <span className="tag green">Marketing</span>
      <h3>Brand Management & PR Communications</h3>
      <p className="price">$530 <span>| by Kristin Watson</span></p>
    </div>
  </div>

  <div className="course-card">
    <img src={iii} alt="" />
    <div className="course-info">
      <span className="tag blue">Management</span>
      <h3>Business Development Management</h3>
      <p className="price">$400 <span>| by Dianne Russell</span></p>
    </div>
  </div>

  <div className="course-card">
    <img src={image} alt="" />
    <div className="course-info">
      <span className="tag red">Design</span>
      <h3>Graphic Design Basic</h3>
      <p className="price">$500 <span>| by Guy Hawkins</span></p>
    </div>
  </div>

</div>

</section>
<section className="benefits">
      <p className="top-text">OUR BENEFITS</p>
      <h2>That’s how we do it</h2>

      <div className="tabs">
        <button className="active">Experienced Tutors</button>
        <button>Feedback & Support</button>
        <button>24/7 Online Library</button>
        <button>Community</button>
      </div>

      <div className="content">
        <div className="left">
          <h3>Only practicing tutors</h3>
          <p>
            Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse.
            Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa.
            Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.
          </p>
        </div>

        <div className="right">
          <img src={linter1} alt="" />
        </div>
      </div>
    </section>

    <section className="events">
      <p className="top">OUR EVENTS</p>
      <h2>Lectures & workshops</h2>

      <div className="event-list">

        <div className="event-card">
          <div className="date">
            <h3>05</h3>
            <span>August</span>
            <p>11:00 – 14:00</p>
          </div>

          <div className="info">
            <h4>Formation of the organizational structure of the company in the face of uncertainty.</h4>
            <p>Online master-class</p>
          </div>

          <button className="btn">View more</button>
        </div>

        <div className="event-card active">
          <div className="date">
            <h3>24</h3>
            <span>July</span>
            <p>11:00 – 12:30</p>
          </div>

          <div className="info">
            <h4>Building a customer service department. Best Practices.</h4>
            <p>Online lecture</p>
          </div>

          <button className="btn filled">View more</button>
        </div>

        <div className="event-card">
          <div className="date">
            <h3>16</h3>
            <span>July</span>
            <p>10:00 – 13:00</p>
          </div>

          <div className="info">
            <h4>How to apply methods of speculative design in practice. Worldbuilding prototyping.</h4>
            <p>Online workshop</p>
          </div>

          <button className="btn">View more</button>
        </div>

      </div>

      <div className="bottom">
        <p>Do you want more?</p>
        <button className="explore">Explore all events</button>
      </div>
    </section>
    <section className="container">
<Certifikat/>

      <div className="team">
        <div className="team-header">
          <div>
            <p className="subtitle">BEST TUTORS ARE ALL HERE</p>
            <h2 className="title">Meet our team</h2>
          </div>
          <div className="nav-btns">
            <button className="prev">←</button>
            <button className="next">→</button>
          </div>
        </div>

        <div className="team-grid">
          <div className="card">
            <div className="img-box">
              <img src={iii} alt="Dianne Russell" />
            </div>
            <h3>Dianne Russell</h3>
            <p>Founder and CEO</p>
          </div>

          <div className="card">
            <div className="img-box">
              <img src={image} alt="Jerome Bell" />
            </div>
            <h3>Jerome Bell</h3>
            <p>Founder and Program Director</p>
          </div>

          <div className="card">
            <div className="img-box">
              <img src={ggg} alt="Kristin Watson" />
            </div>
            <h3>Kristin Watson</h3>
            <p>Marketer, Curator of Marketing Course</p>
          </div>

          <div className="card">
            <div className="img-box">
              <img src={eee} alt="Marvin McKinney" />
            </div>
            <h3>Marvin McKinney</h3>
            <p>PM, Curator of Management Course</p>
          </div>
        </div>
      </div>
    </section>
    <section className="ortada" style={{textAlign:"center",lineHeight:1.8}}>
      <h4>TESTIMONIALS</h4>
      <h1>What our students say</h1>
      <div style={{background:"#cecd",height:244,width:900,textAlign:"center",marginLeft:310, alignItems:"center",justifyContent:"center", padding:50}}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam <br />viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis <br />tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. <br /> Pulvinar neque pharetra arcu diam maecenas diam integer in.</p>
        <h4 style={{marginRight:600}}>Eleanor Pena</h4>
        <p style={{marginRight:589}}>Position, Course</p>
      </div>
    </section>
    <section className="blog-sektsiya">
      <div className="blog-konteyner">
        <div className="blog-ustki-qism">
          <div>
            <p className="kichik-sarlavha">OUR BLOG</p>
            <h2 className="katta-sarlavha">Latest posts</h2>
          </div>
          <button className="blog-tugmasi">Go to blog</button>
        </div>

        <div className="blog-panjara">
          <div className="blog-karta">
            <div className="rasm-qutisi kok">
              <img src={ooo} alt="blog" />
              <span className="belgi">Podcast</span>
            </div>
            <div className="karta-malumot">
              <p className="karta-metni">Marketing | September 4, 2020 | 36 min</p>
              <h3>What is traffic arbitrage and does it really make money?</h3>
              <p className="karta-tavsifi">Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...</p>
            </div>
          </div>

          <div className="blog-karta">
            <div className="rasm-qutisi yashil">
              <img src={ggr} alt="blog" />
              <span className="belgi">Video</span>
            </div>
            <div className="karta-malumot">
              <p className="karta-metni">Management | August 25, 2020 | 45 min</p>
              <h3>What to do and who to talk to if you want to get feedback on the product</h3>
              <p className="karta-tavsifi">Neque a, senectus consectetuer odio in aliquet nec eu. Ultricies ac nibh urna urna sit faucibus...</p>

            </div>
          </div>

          <div className="blog-karta">
            <div className="rasm-qutisi sariq">
              <img src={ooo} alt="blog" />
              <span className="belgi">Article</span>
            </div>
            <div className="karta-malumot">
              <p className="karta-metni">Design | August 8, 2020</p>
              <h3>Should you choose a creative profession if you are attracted to creativity?</h3>
              <p className="karta-tavsifi">Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...</p>
              
            </div>
          </div>
        </div>
      </div>
    </section>

        </div>
    )
}

export default Create;