import Certifikat from "./certifikat/Certifikat"
import "./event.css"
import { Link } from "react-router-dom"

function Event(){
    return(
        <div>
    <section className="bolim">
      <h2>Lectures, workshops & master-classes</h2>

      <div className="filtr">
        <select><option>Event category</option></select>
        <select><option>Sort by</option></select>
        <select><option>Show 9</option></select>
        <input type="text" placeholder="Search event..." />
      </div>

      <div className="royxat">

        <div className="qator">
          <div className="sana">
            <h3>05</h3>
            <span>August</span>
            <p>11:00 – 14:00</p>
          </div>
          <div className="malumot">
            <h4>Formation of the organizational structure of the company in the face of uncertainty.</h4>
            <p>Online master-class</p>
          </div>
          <Link className="linnk" to="/lekture"><button className="tugmaa">View more</button></Link>
        </div>

        <div className="qator">
          <div className="sana">
            <h3>24</h3>
            <span>July</span>
            <p>11:00 – 12:30</p>
          </div>
          <div className="malumot">
            <h4>Building a customer service department. Best Practices.</h4>
            <p>Online lecture</p>
          </div>
          <button className="tugmaa">View more</button>
        </div>

        <div className="qator">
          <div className="sana">
            <h3>16</h3>
            <span>July</span>
            <p>10:00 – 13:00</p>
          </div>
          <div className="malumot">
            <h4>How to apply methods of speculative design in practice. Worldbuilding prototyping.</h4>
            <p>Online workshop</p>
          </div>
          <button className="tugmaa">View more</button>
        </div>

        <div className="qator">
          <div className="sana">
            <h3>10</h3>
            <span>July</span>
            <p>9:00 – 14:00</p>
          </div>
          <div className="malumot">
            <h4>Find and evaluate: search and assessment tools for candidates.</h4>
            <p>Online workshop</p>
          </div>
          <button className="tugmaa">View more</button>
        </div>

        <div className="qator">
          <div className="sana">
            <h3>27</h3>
            <span>June</span>
            <p>15:00 – 19:00</p>
          </div>
          <div className="malumot">
            <h4>Connection to Microsoft Excel and Google Sheets. Data Visualization in Power BI.</h4>
            <p>Online master-class</p>
          </div>
          <button className="tugmaa">View more</button>
        </div>

        <div className="qator">
          <div className="sana">
            <h3>15</h3>
            <span>June</span>
            <p>10:00 – 12:00</p>
          </div>
          <div className="malumot">
            <h4>Marketing or growth hacking: main differences and what business needs.</h4>
            <p>Online lecture</p>
          </div>
          <button className="tugmaa">View more</button>
        </div>

        <div className="qator">
          <div className="sana">
            <h3>02</h3>
            <span>June</span>
            <p>11:00 – 13:00</p>
          </div>
          <div className="malumot">
            <h4>How to brief a client and present your design to approve it from the first show.</h4>
            <p>Online lecture</p>
          </div>
          <button className="tugmaa">View more</button>
        </div>

        <div className="qator">
          <div className="sana">
            <h3>29</h3>
            <span>May</span>
            <p>11:00 – 12:00</p>
          </div>
          <div className="malumot">
            <h4>Who is a project manager and do I want to be PM?</h4>
            <p>Online lecture</p>
          </div>
          <button className="tugmaa">View more</button>
        </div>

        <div className="qator">
          <div className="sana">
            <h3>18</h3>
            <span>May</span>
            <p>10:00 – 12:00</p>
          </div>
          <div className="malumot">
            <h4>The company's business page as an additional tool to support the announcement of vacancies.</h4>
            <p>Online lecture</p>
          </div>
          <button className="tugmaa">View more</button>
        </div>

      </div>
    </section>
        </div>
    )
}
export default Event