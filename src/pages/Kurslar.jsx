import React from 'react';
import './kurslar.css';
import image from "../assets/imagee.png"
import eee from "../assets/eee.png"
import vvv from "../assets/vvv.png"
import ggg from "../assets/ggg.png"
import Certifikat from './certifikat/Certifikat';
import { Link } from 'react-router-dom';

const Kurslar = () => {
  const rasm = "image";

  return (
<div>
<section className="kurslar-sektsiya">
      <div className="konteyner">
        <h2 className="kurslar-sarlavha">Our online courses</h2>
        
        <div className="filter-ustun">
          <div className="kategoriyalar">
            <button className="kategoriya-tugma aktiv">All</button>
            <button className="kategoriya-tugma">Marketing</button>
            <button className="kategoriya-tugma">Management</button>
            <button className="kategoriya-tugma">HR & Recruiting</button>
          
            <Link className="link" to="/design">
            <button className="kategoriya-tugma">Design</button>
            </Link>
            <button className="kategoriya-tugma">Development</button>
          </div>
          <div className="qidiruv-qutisi">
            <input type="text" placeholder="Search course..." />
          </div>
        </div>

        <div className="kurslar-panjarasii">
          <div className="kurs-kartasii">
            <div className="kurs-rasm sariq-fon">
              <img src={image} alt="kurs" />
            </div>
            <div className="kurs-malumot">
              <span className="kurs-tegi yashil">Marketing</span>
              <h3>The Ultimate Google Ads Training Course</h3>
              <p className="kurs-narxi">$100 <span>| by Jerome Bell</span></p>
            </div>
          </div>

          <div className="kurs-kartasii">
            <div className="kurs-rasm sariq-fon">
              <img src={eee} alt="kurs" />
            </div>
            <div className="kurs-malumot">
              <span className="kurs-tegi ko'k">Management</span>
              <h3>Product Management Fundamentals</h3>
              <p className="kurs-narxi">$480 <span>| by Marvin McKinney</span></p>
            </div>
          </div>


          <div className="kurs-kartasii">
            <div className="kurs-rasm sariq-fon">
              <img src={vvv} alt="kurs" />
            </div>
            <div className="kurs-malumot">
              <span className="kurs-tegi to'q-sariq">HR & Recruiting</span>
              <h3>HR Management and Analytics</h3>
              <p className="kurs-narxi">$200 <span>| by Leslie Alexander Li</span></p>
            </div>
          </div>


          <div className="kurs-kartasii">
            <div className="kurs-rasm sariq-fon">
              <img src={ggg} alt="kurs" />
            </div>
            <div className="kurs-malumot">
              <span className="kurs-tegi yashil">Marketing</span>
              <h3>Brand Management & PR Communications</h3>
              <p className="kurs-narxi">$530 <span>| by Kristin Watson</span></p>
            </div>
          </div>

          {/* 5-Kurs */}
          <div className="kurs-kartasii">
            <div className="kurs-rasm sariq-fon">
              <img src={image} alt="kurs" />
            </div>
            <div className="kurs-malumot">
              <span className="kurs-tegi pushti">Design</span>
              <h3>Graphic Design Basic</h3>
              <p className="kurs-narxi">$500 <span>| by Guy Hawkins</span></p>
            </div>
          </div>

          {/* 6-Kurs */}
          <div className="kurs-kartasii">
            <div className="kurs-rasm sariq-fon">
              <img src={image} alt="kurs" />
            </div>
            <div className="kurs-malumot">
              <span className="kurs-tegi ko'k">Management</span>
              <h3>Business Development Management</h3>
              <p className="kurs-narxi">$400 <span>| by Dianne Russell</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="fikrlar-sektsiya">
      <div className="konteyner">
        <p className="kichik-sarlavha">TESTIMONIALS</p>
        <h2 className="katta-sarlavha">What our students say</h2>

        <div className="fikr-slayder">
          <button className="yonalish-chap">←</button>
          
          <div className="fikr-kartasi">
            <div className="tirnoq">“</div>
            <p className="fikr-matni">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam 
              viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis 
              pulvinar neque pharetra arcu diam maecenas diam integer in.
            </p>
            <div className="shaxs-malumot">
              <img src={ggg} alt="Eleanor Pena" className="shaxs-rasmi" />
              <div>
                <h4>Eleanor Pena</h4>
                <p>Position, Course</p>
              </div>
            </div>
          </div>

          <button className="yonalish-ong">→</button>
        </div>


      </div>
    </section>
    <Certifikat/>
</div>
    
  );
};

export default Kurslar;