import { Link } from "react-router-dom";
import "./App.css";
import wave from "./assets/wave.png";

function App() {
  return (
    <>
      <h1>Echo Dash</h1>
      <div>
        <img
          src={wave}
          alt=""
          style={{ width: 50, height: 50, rotate: "180deg" }}
        />
        <img
          src="public/mobile.png"
          alt=""
          style={{ width: 50, height: 50, rotate: "-25deg" }}
        />
        <img src={wave} alt="" style={{ width: 50, height: 50 }} />
        <p>Your new messaging app</p>
      </div>
      <div>
        <Link to="/">
          <button>Log in</button>
        </Link>
        <Link to="/">
          <button>Register</button>
        </Link>
      </div>
    </>
  );
}

export default App;
