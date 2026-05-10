import "./desigin.css"
import { Link } from "react-router-dom";
import eee from "../assets/eee.png"
import opq from "../assets/illustration (2).png"
import img12 from "../assets/image (12).png"
import resimyoq from "../assets/illustration.png"
import imgg from "../assets/imagee.png"


function Design() {
    return (
      <div>
        <div className="headd">
            <Link className="linkk" to="/kurslar">course</Link>
            <h1>User Experience. Principles of Human-Centered <br />Design</h1>
        </div>

        <div className="kurs-konteyner">
      <div className="kurs-kartasi">

        <div className="chap-qism">
          <h2 className="sarlavha">About the course</h2>

          <p className="matn">
          Bibendum vulputate adipiscing venenatis at est, a eu tincidunt. Leo aenean congue in <br />sagittis, felis maecenas amet varius at. Pellentesque euismod in faucibus at <br />elementum. Tellus maecenas libero est tempus sit cras at malesuada diam. Consequat <br />senectus dictumst non hac dignissim montes, pretium, egestas molestie. Sed magna <br />aliquet ornare nibh vel lectus diam eget pretium. Lorem risus nunc tincidunt tortor, mi <br />nulla pellentesque
          </p>

          <h3 className="ichki-sarlavha">You will learn:</h3>

            <p style={{marginTop:-20}}>Fermentum in morbi pretium aliquam adipiscing donec tempus.</p>
            <p>Vulputate placerat amet pulvinar lorem nisl.</p>
            <p>Consequat feugiat habitant gravida quisque elit bibendum.</p>
            <p>Etiam duis lobortis in fames ultrices commodo nibh.</p>
            <p>Fringilla in nec risus congue venenatis pretium posuere nec.</p>
            <p>Cursus eu pretium, vulputate tempus quam massa sed at.</p>
        </div>

        <div className="ong-qism">
          <div className="info-karta">

            <div className="blok">
              <p className="kichik">DATES</p>
              <h4 className="qizil">Sept 7 – Nov 2</h4>
              <p className="yordamchi">Metus turpis sit lorem lacus, in elit tellus lacus.</p>
            </div>

            <div className="blok">
              <p className="kichikk">DURATION</p>
              <h4 className="qizil">2 months – 8 lessons</h4>
              <p className="yordamchi">Rhoncus pellentesque auctor auctor orci vulputate faucibus <br />quis ut.</p>
            </div>

            <div className="blok">
              <p className="kichikk">PRICE</p>
              <h4 className="qizil">$120 per month</h4>
              <p className="yordamchi">Nulla sem adipiscing adipiscing felis fringilla. Adipiscing <br />mauris quam ac elit tristique dis.</p>
            </div>

            <button className="tugma">Join the course</button>

          </div>
        </div>

      </div>
    </div>


    <div className="cody">
        <img src={eee} alt="" />

        <div style={{lineHeight:1.8}}>
            <p>Course curator</p>
            <h1>Cody Fisher</h1>
            <p>Senior UX designer in IT Product Company</p>
            <div>
                <p className="pop">4.9sate</p>
                <p className="pop">4 courses</p>
                <p className="pop">350 students</p>
            </div>
            <p>Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur <br />venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis <br />commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel <br />diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id <br />habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique <br />sollicitudin interdum quam. </p>
        </div>
    </div>

    <div className="stepis">
      <div style={{textAlign:"center", padding:80}}>
        <p>Main steps</p>
        <h1>Online learning process</h1>
      </div>
      <div className="number">
        <div>
          <h1 className="hhh">01</h1>
          <h3>Watching online video lectures</h3>
          <p>Culpa nostrud commodo ea consequat <br />aliquip reprehenderit. Veniam velit <br />nostrud aliquip sunt.</p>
        </div>
        <div>
          <h1 className="hhh">02</h1>
          <h3>Passing test</h3>
          <p>Anim reprehenderit sint voluptate <br />exercitation adipisicing laborum <br />adipisicing. Minim ad tempor est ea.</p>
        </div>
        <div>
          <h1 className="hhh">03</h1>
          <h3>Curator’s feedback</h3>
          <p>Adipisicing esse aliqua aliquip qui amet. <br />Aute eiusmod dolore dolore et ad et <br />veniam ad deserunt.</p>
        </div>
        <div>
          <h1 className="h1on">04</h1>
          <h3>Corrections if needed</h3>
          <p>Sit veniam aute dolore adipisicing nulla <br />sit culpa. Minim mollit voluptate ullamco <br />proident ea ad.</p>
        </div>
      </div>
    </div>




    <div className="birds">
        <div className="earl">
          <h1>20% discount for early birds!</h1>
          <div>
          <div style={{display:"flex", gap:45}}>
            <h3>06</h3>
            <h3>18</h3>
            <h3>24</h3>
            <h3>12</h3>
          </div>
          <div style={{display:"flex", gap:27}}>
            <p>Days</p>
            <p>Hours</p>
            <p>Mins</p>
            <p>Sec</p>
          </div>
          </div>
        </div>


        <div className="inpt">
          <input type="text" placeholder="Your full name"/>
          <input type="text" placeholder="Your working email"/>
          <input type="text" placeholder="Your phone number" />
          <button className="btn1">Join the course</button>
        </div>
    </div>


    <div className="vhom">
      <div>
        <p>For whom?</p>
        <h1>Who will benefit from <br />the course:</h1>
      </div>
      <div style={{lineHeight:3}}>
        <p>Specialists with more than 1 year of active work experience</p>
        <p style={{lineHeight:1.3}}>Mobile app designers who want to improve their skills in <br />solving business problems, creating and testing <br />human-centered interfaces</p>
        <p>Professional designers who want to feel more confident in UX</p>
        <p>Specialists who would like to structure their knowledge, fill in the gaps</p>
      </div>
    </div>

    <section className="darslar-sektsiyasi">
      <div className="asosiy-konteyner">
        <div className="matn-qismi">
          <p className="ust-sarlavha">COURSE PROGRAM</p>
          <h2 className="asosiy-sarlavha">What will you learn</h2>

          <div className="akkordeon-royxat">
            <div className="dars-elementi ochiq">
              <span className="belgi-minus">—</span>
              <div className="dars-mazmuni">
                <h3><span>Lesson 1.</span> Aliquet lectus urna viverra in odio.</h3>
                <p>
                  Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec 
                  enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio 
                  mi suscipit sed.
                </p>
              </div>
            </div>

            <div className="dars-elementi">
              <span className="belgi-plus">+</span>
              <h3><span>Lesson 2.</span> Orci commodo, viverra orci mollis ut euismod.</h3>
            </div>

            <div className="dars-elementi">
              <span className="belgi-plus">+</span>
              <h3><span>Lesson 3.</span> Sagittis vitae facilisi rutrum amet mauris quisque vel.</h3>
            </div>

            <div className="dars-elementi">
              <span className="belgi-plus">+</span>
              <h3><span>Lesson 4.</span> In id dolor quis nunc, urna hendrerit pharetra.</h3>
            </div>

            <div className="dars-elementi">
              <span className="belgi-plus">+</span>
              <h3><span>Lesson 5.</span> Est, ut tempus id rutrum facilisi.</h3>
            </div>

            <div className="dars-elementi">
              <span className="belgi-plus">+</span>
              <h3><span>Lesson 6.</span> Amet nec in pellentesque.</h3>
            </div>

            <div className="dars-elementi">
              <span className="belgi-plus">+</span>
              <h3><span>Lesson 7.</span> Massa vel arcu mauris, id vel rhoncus mattis quis.</h3>
            </div>

            <div className="dars-elementi">
              <span className="belgi-plus">+</span>
              <h3><span>Lesson 8.</span> Neque, cursus sapien nullam id.</h3>
            </div>
          </div>
        </div>

        <div className="rasm-qismi">
          <img src={opq} alt="Learning Illustration" />
        </div>
      </div>
    </section>


    <div className="asosiy">

{/* testimonial */}
<div className="testimonial">

  <p className="testimonial_kichik">
    TESTIMONIALS
  </p>

  <h1 className="testimonial_sarlavha">
    What our students say
  </h1>

  <div className="testimonial_karta">

    <button className="chap_btn">
      ←
    </button>

    <div className="testimonial_orta">

      <p className="testimonial_text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.
      </p>

      <div className="foydalanuvchi">

        <div className="foydalanuvchi_rasm">
          <img src={img12} alt="" />
        </div>

        <div>
          <h4 className="foydalanuvchi_ism">
            Eleanor Pena
          </h4>

          <p className="foydalanuvchi_kasb">
            Position, Course
          </p>
        </div>

      </div>

    </div>

    <button className="ong_btn">
      →
    </button>

  </div>

  <div className="slider_nuqta">
    <span className="aktiv"></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

</div>


<div className="register">

  <div className="register_left">

    <div className="register_rasm">
      <img src={resimyoq} alt="" />
    </div>

  </div>

  <div className="register_right">

    <p className="register_kichik">
      LEAVE A REQUEST NOW AND GET 20% OFF!
    </p>

    <h2 className="register_title">
      Register for the course
    </h2>

    <form className="form">

      <div className="input_box">
        <label>Full Name</label>

        <input
          type="text"
          placeholder="Your full name"
        />
      </div>

      <div className="input_box">
        <label>Email</label>

        <input
          type="email"
          placeholder="Your working email"
        />
      </div>

      <div className="input_box">
        <label>Phone</label>

        <input
          type="text"
          placeholder="Your phone number"
        />
      </div>

      <button className="join_btn">
        Join the course
      </button>

    </form>

  </div>

</div>



<div className="kurslar">

<div className="yuqori">

  <div>
    <p className="kichik_text">
      CHECK OTHER COURSES
    </p>

    <h1 className="sarlavha">
      You may also like
    </h1>
  </div>

  <div className="slider_btnlar">
    <button>←</button>
    <button>→</button>
  </div>

</div>

<div className="kartalar">


  <div className="karta">

    <div className="karta_rasm">
      <img src={imgg} alt="" />
    </div>

    <div className="karta_info">

      <span className="teg yashil">
        Marketing
      </span>

      <h3 className="kurs_nomi">
        The Ultimate Google Ads Training Course
      </h3>

      <div className="narx_qator">

        <p className="narx">
          $100
        </p>

        <p className="muallif">
          | by Jerome Bell
        </p>

      </div>

    </div>

  </div>

 
  <div className="karta">

    <div className="karta_rasm">
      <img src={eee} alt="" />
    </div>

    <div className="karta_info">

      <span className="teg kok">
        Management
      </span>

      <h3 className="kurs_nomi">
        Product Management Fundamentals
      </h3>

      <div className="narx_qator">

        <p className="narx">
          $480
        </p>

        <p className="muallif">
          | by Marvin McKinney
        </p>

      </div>

    </div>

  </div>

</div>

<div className="pastki">

  <p className="pastki_text">
    Do you want more courses?
  </p>

  <button className="view_btn">
    View all courses
  </button>

</div>

</div>

</div>
      </div>
    );
  }
  
  export default Design;