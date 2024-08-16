import { Link } from "react-router-dom";
import wave from "./assets/wave.png";

function App() {
  return (
    <>
      <h1>Echo Dash</h1>
      <div className="flex justify-center">
        <img
          src={wave}
          alt=""
          style={{ width: 50, height: 50, rotate: "180deg" }}
        />
        <img
          src="/mobile.png"
          alt=""
          style={{ width: 50, height: 50, rotate: "-25deg" }}
        />
        <img src={wave} alt="" style={{ width: 50, height: 50 }} />
      </div>
      <p>Your new messaging app</p>
      <div>
        <Link to="/login">
          <button>Log in</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </>
  );
}

export default App;
