import "./contacts.css"
import img6 from "../assets/illustration (6).png"




function Contacts(){
    return(
        <div>
            <section className="aloqa-sektsiyasi">
      <div className="aloqa-konteyner">
        
        <div className="aloqa-malumotlari">
          <p className="ust-yozuv">CONTACT INFO</p>
          <h2 className="aloqa-sarlavha">Get in touch</h2>

          <div className="aloqa-bandlari">
            <div className="band">
              <span className="ikona">✉</span>
              <div>
                <p>Talk to us:</p>
                <a href="mailto:hello@createx.com">hello@createx.com</a>
              </div>
            </div>

            <div className="band">
              <span className="ikona">📞</span>
              <div>
                <p>Call us:</p>
                <a href="tel:4055550128">(405) 555-0128</a>
              </div>
            </div>

            <div className="band">
              <span className="ikona">📍</span>
              <div>
                <p>Address:</p>
                <span>2464 Royal Ln. Mesa, New Jersey 45463, USA</span>
              </div>
            </div>
          </div>

          <div className="ijtimoiy-tarmoqlar">
            <h4>FOLLOW US:</h4>
            <div className="ikonalar-toplami">
              <span>f</span>
              <span>t</span>
              <span>yt</span>
              <span>tg</span>
              <span>ig</span>
              <span>in</span>
            </div>
          </div>
        </div>

        <div className="xarita-qismi">

          <iframe 
            className="haqiqiy-xarita"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.2674394149673!2d-111.8385413!3d33.547842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b74070a2730cf%3A0x6b772c7247348937!2sMesa%2C%20AZ!5e0!3m2!1sen!2sus!4v1700000000000" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

      </div>
    </section>
    <section className="xat-sektsiyasi">
      <div className="xat-konteyner">
        
        <div className="xat-rasm-qismi">
          <img src={img6} alt="Illustration" />
        </div>

        <div className="xat-forma-qismi">
          <p className="kichik-matn">ANY QUESTIONS?</p>
          <h2 className="katta-sarlavha">Drop us a line</h2>

          <form className="xat-formasi">
            <div className="forma-qatori">
              <div className="forma-guruhi">
                <label>First Name*</label>
                <input type="text" placeholder="Your first name" required />
              </div>
              <div className="forma-guruhi">
                <label>Last Name*</label>
                <input type="text" placeholder="Your last name" required />
              </div>
            </div>

            <div className="forma-qatori">
              <div className="forma-guruhi">
                <label>Email*</label>
                <input type="email" placeholder="Your working email" required />
              </div>
              <div className="forma-guruhi">
                <label>Phone</label>
                <input type="tel" placeholder="Your phone number" />
              </div>
            </div>

            <div className="forma-guruhi">
              <label>Message*</label>
              <textarea placeholder="Your message" rows="4" required></textarea>
            </div>

            <div className="forma-pastki-qismi">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>I agree to receive communications from Createx Online School</span>
              </label>
              <button type="submit" className="yuborish-tugmasi">Send message</button>
            </div>
          </form>
        </div>

      </div>
    </section>
        </div>
    )
}
export default Contacts