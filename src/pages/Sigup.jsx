import React, { useState } from "react";
import "./sigup.css";
import { Link } from "react-router-dom";

function Sigup() {
  const [ochiq, setOchiq] = useState(true);

  const yopish = () => {
    setOchiq(false);
  };

  if (!ochiq) return null;

  return (
    <div>
      <div className="modal-ust qatlami" onClick={yopish}>
        <div
          className="modal-oynasi"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="yopish-tugmasi" onClick={yopish}>
            &times;
          </button>

          <h2 className="modal-sarlavha">Sign up</h2>

          <p className="modal-izoh">
          Registration takes less than a minute but gives you full control over your studying.
          </p>

          <form className="kirish-formasi">

          <div className="input-guruhi">
              <label>Full Name</label>

              <input
                type="email"
                placeholder="Your full name"
                required
              />
            </div>



            
            <div className="input-guruhi">
              <label>Email</label>

              <input
                type="email"
                placeholder="Your working email"
                required
              />
            </div>

            <div className="input-guruhi">
              <label>Password</label>

              <div className="parol-maydoni">
                <input
                  type="password"
                  placeholder="************"
                  required
                />

                <span className="koz-ikona">👁</span>
              </div>

              <div className="input-guruhi">
              <label>Confirm Password</label>

              <input
                type="email"
                placeholder="************"
                required
              />
            </div>
            </div>

            <button type="submit" className="tizimga-kirish">
              Sign Up
            </button>

            <p className="ruyxatdan-otish">
              Already have an account?{" "}
              <Link to="/signin">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sigup;