import React, { useState } from 'react'; 
import "./sigin.css";

function Sigin() {
  const [ochiq, setOchiq] = useState(true);


  const yopish = () => {
    setOchiq(false);
  };

  if (!ochiq) return null;

  return (
    <div>
      <div className="modal-ust qatlami" onClick={yopish}>
        <div className="modal-oynasi" onClick={(e) => e.stopPropagation()}>
          <button className="yopish-tugmasi" onClick={yopish}>&times;</button>
          
          <h2 className="modal-sarlavha">Sign in</h2>
          <p className="modal-izoh">
            Sign in to your account using email and password provided during registration.
          </p>

          <form className="kirish-formasi">
            <div className="input-guruhi">
              <label>Email</label>
              <input type="email" placeholder="Your working email" required />
            </div>

            <div className="input-guruhi">
              <label>Password</label>
              <div className="parol-maydoni">
                <input type="password" placeholder="************" required />
                <span className="koz-ikona">👁</span>
              </div>
            </div>

            <div className="forma-opsiyalari">
              <label className="eslab-qolish">
                <input type="checkbox" />
                <span>Keep me signed in</span>
              </label>
              <a href="#" className="parolni-unitdingizmi">Forgot password?</a>
            </div>

            <button type="submit" className="tizimga-kirish">Sign in</button>
            
            <p className="ruyxatdan-otish">
              Don't have an account? <a href="#">Sign up</a>
            </p>
          </form>

          <div className="ijtimoiy-kirish">
            <p>Or sign in with</p>
            <div className="ijtimoiy-ikonalar">
              <span>f</span>
              <span>G</span>
              <span>t</span>
              <span>in</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sigin;