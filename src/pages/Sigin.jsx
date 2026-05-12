import React from "react";
import "./sigin.css";
import { Link } from "react-router-dom";

function Sigin() {
  return (
    <div className="modal-ust qatlami">

      <div className="modal-oynasi">

        <h2 className="modal-sarlavha">
          Sign In
        </h2>

        <p className="modal-izoh">
          Sign in to your account using email and password.
        </p>

        <form className="kirish-formasi">

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

              <span className="koz-ikona">
                👁
              </span>

            </div>
          </div>

          <button
            type="submit"
            className="tizimga-kirish"
          >
            Sign In
          </button>

          <p className="ruyxatdan-otish">
            Don't have an account?
            <Link to="/sigup"> Sign Up</Link>
          </p>

        </form>

      </div>
    </div>
  );
}

export default Sigin;