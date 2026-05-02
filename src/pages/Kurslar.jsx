import React from 'react';
import './kurslar.css';
import image from "../assets/imagee.png"

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
            <button className="kategoriya-tugma">Design</button>
            <button className="kategoriya-tugma">Development</button>
          </div>
          <div className="qidiruv-qutisi">
            <input type="text" placeholder="Search course..." />
          </div>
        </div>

        <div className="kurslar-panjarasi">
          <div className="kurs-kartasi">
            <div className="kurs-rasm sariq-fon">
              <img src={image} alt="kurs" />
            </div>
            <div className="kurs-malumot">
              <span className="kurs-tegi yashil">Marketing</span>
              <h3>The Ultimate Google Ads Training Course</h3>
              <p className="kurs-narxi">$100 <span>| by Jerome Bell</span></p>
            </div>
          </div>

          {/* 2-Kurs */}
          <div className="kurs-kartasi">
            <div className="kurs-rasm sariq-fon">
              <img src={image} alt="kurs" />
            </div>
            <div className="kurs-malumot">
              <span className="kurs-tegi ko'k">Management</span>
              <h3>Product Management Fundamentals</h3>
              <p className="kurs-narxi">$480 <span>| by Marvin McKinney</span></p>
            </div>
          </div>

          {/* 3-Kurs */}
          <div className="kurs-kartasi">
            <div className="kurs-rasm sariq-fon">
              <img src={image} alt="kurs" />
            </div>
            <div className="kurs-malumot">
              <span className="kurs-tegi to'q-sariq">HR & Recruiting</span>
              <h3>HR Management and Analytics</h3>
              <p className="kurs-narxi">$200 <span>| by Leslie Alexander Li</span></p>
            </div>
          </div>

          {/* 4-Kurs */}
          <div className="kurs-kartasi">
            <div className="kurs-rasm sariq-fon">
              <img src={image} alt="kurs" />
            </div>
            <div className="kurs-malumot">
              <span className="kurs-tegi yashil">Marketing</span>
              <h3>Brand Management & PR Communications</h3>
              <p className="kurs-narxi">$530 <span>| by Kristin Watson</span></p>
            </div>
          </div>

          {/* 5-Kurs */}
          <div className="kurs-kartasi">
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
          <div className="kurs-kartasi">
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
              <img src={image} alt="Eleanor Pena" className="shaxs-rasmi" />
              <div>
                <h4>Eleanor Pena</h4>
                <p>Position, Course</p>
              </div>
            </div>
          </div>

          <button className="yonalish-ong">→</button>
        </div>

        <div className="sertifikat-bolimi">
          <div className="sertifikat-matn">
            <p className="kichik-sarlavha">CREATEX CERTIFICATE</p>
            <h2 className="sertifikat-sarlavha">Your expertise will be confirmed</h2>
            <p className="sertifikat-izoh">
              We are accredited by international professional organizations and institutes:
            </p>
            <div className="hamkorlar">
              <img src={image} alt="partner" />
              <img src={image} alt="partner" />
              <img src={image} alt="partner" />
            </div>
          </div>
          <div className="sertifikat-rasmi-qutisi">
            <img src={image} alt="Certificate" className="asosiy-sertifikat" />
          </div>
        </div>
      </div>
    </section>
</div>
    
  );
};

export default Kurslar;