import "./lekture.css"
import { Link } from "react-router-dom"
import iii from "../assets/image (13).png"
import img3 from "../assets/illustration (3).png"
import img4 from "../assets/illustration (4).png"


function Lekture(){
    return(
        <div>
            <div className="header">
                <Link className="linkk" to="/event"><p>Online lecture</p></Link>
                <h1>Formation of the organizational structure of the <br />company in the face of uncertainty</h1>
            </div>



            <div className="event">

<div className="event_yuqori">


  <div className="event_chap">

    <h1 className="event_title">
      We will talk about:
    </h1>

    <div className="mavzu">

      <div className="raqam">
        —
      </div>

      <div>
        <h3 className="mavzu_title">
          Theme 1. Aliquet lectus urna viverra in odio.
        </h3>

        <p className="mavzu_text">
        Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec <br />enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio <br />mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. <br />Commodo nunc orci vitae accumsan id.
        </p>
      </div>

    </div>

    <div className="mavzu">
      <div className="raqam">+</div>

      <h3 className="mavzu_title">
        Theme 2. Orci commodo, viverra orci mollis eu euismod.
      </h3>
    </div>

    <div className="mavzu">
      <div className="raqam">+</div>

      <h3 className="mavzu_title">
        Theme 3. Sagittis vitae facilisi rutrum amet mauris quisque vel.
      </h3>
    </div>

    <div className="mavzu">
      <div className="raqam">+</div>

      <h3 className="mavzu_title">
        Theme 4. In id dolor quis nunc, nunc hendrerit pharetra.
      </h3>
    </div>

  </div>

  {/* o'ng */}
  <div className="event_ong">

    <div className="info_box">

      <div className="info_item">
        <p className="info_label">TIME</p>

        <h3 className="info_qizil">
          August 5, 11:00 – 14:00
        </h3>

        <p className="info_text">
          Metus turpis sit lorem lacus, in elit tellus lacus.
        </p>
      </div>

      <div className="info_item">
        <p className="info_label">PRICE</p>

        <h3 className="info_qizil">
          Free
        </h3>

        <p className="info_text">
          Nulla sem adipiscing adipiscing felis fringilla.
        </p>
      </div>

      <div className="info_item">
        <p className="info_label">EVENT ON FACEBOOK</p>
      </div>

      <button className="join_btn">
        Join the event
      </button>

    </div>

  </div>

</div>

{/* speaker */}
<div className="speaker">

  <div className="speaker_rasm">
    <img src={iii} alt="" />
  </div>

  <div className="speaker_info">

    <p className="speaker_kichik">
      SPEAKER
    </p>

    <h1 className="speaker_title">
      Kathryn Murphy
    </h1>

    <p className="speaker_job">
      Analyst and Marketing specialist in IT Company
    </p>

    <p className="speaker_text">
    Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur <br />venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis <br />commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel <br />diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id <br />habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique <br />sollicitudin interdum quam. 
    </p>

    <div className="speaker_logolar">

      <div className="logo"></div>
      <div className="logo"></div>
      <div className="logo"></div>

    </div>

    <div className="socials">

      <span>f</span>
      <span>◎</span>
      <span>z</span>
      <span>in</span>

    </div>

  </div>

</div>


<div className="benefit">

  <div className="benefit_left">

    <p className="benefit_small">
      FOR WHOM?
    </p>

    <h1 className="benefit_title">
      Who will benefit from the event:
    </h1>

  </div>

  <div className="benefit_right">

    <div className="benefit_item">
      <span>✓</span>

      <p>
        Specialists with more than 1 year of active work experience
      </p>
    </div>

    <div className="benefit_item">
      <span>✓</span>

      <p>
        Mobile app designers who want to improve their skills in
        solving business problems.
      </p>
    </div>

    <div className="benefit_item">
      <span>✓</span>

      <p>
        Professional designers who want to feel more confident in UX
      </p>
    </div>

  </div>

</div>


<section className="sorov-sektsiyasi">
      <div className="konteyner">
        <div className="obuna-qutisi">
          <div className="obuna-rasmi">
            <img src={img3} alt="newsletter" />
          </div>
          <div className="obuna-matni">
            <h3>Don't want to miss the best events? <br />Subscribe to our newsletter!</h3>
            <div className="obuna-formasi">
              <input type="email" placeholder="Your working email" />
              <button>Subscribe</button>
            </div>
            <label className="rozilik">
              <input type="checkbox" /> 
              I agree to receive communications from Createx Online School
            </label>
          </div>
        </div>

        <div className="sorov-asosiy">
          <div className="sorov-matn-qismi">
            <p className="kichik-sarlavha">DON'T MISS THE EVENT</p>
            <h2 className="katta-sarlavha">Leave a request</h2>
            <form className="aloqa-formasi">
              <div className="input-guruhi">
                <label>Full Name</label>
                <input type="text" placeholder="Your full name" />
              </div>
              <div className="input-guruhi">
                <label>Email</label>
                <input type="email" placeholder="Your working email" />
              </div>
              <div className="input-guruhi">
                <label>Phone</label>
                <input type="tel" placeholder="Your phone number" />
              </div>
              <button className="yuborish-tugmasi">Join the event</button>
              <p className="izoh">* You will receive a link to the online lecture in an email after registration.</p>
            </form>
          </div>
          <div className="sorov-rasm-qismi">
            <img src={img4} alt="request illustration" />
          </div>
        </div>
      </div>
    </section>

</div>
        </div>
    )
}


export default Lekture;