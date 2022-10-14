import "./styles.css";
import { useState } from "react";

export default function App() {
  const [move, setMove] = useState("translateX(65px)");
  const [flag, setFlag] = useState(0);
  const [inputValue, setInputValue] = useState("");

  function hoverHandler() {
    if (flag === 0) {
      setMove("translateX(130px)");
      setFlag(flag + 1);
    } else {
      setMove("translateX(0px)");
      setFlag(flag - 1);
    }
  }

  function leaveHandler() {
    setMove("translateX(65px)");
  }

  const inputHandler = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  function passOkMove() {
    if (inputValue.length < 8) {
      return move;
    } else {
      return "translateX(65px)";
    }
  }

  function passOkColor() {
    if (inputValue.length < 8) {
      return "#f87171";
    } else {
      return "#22c55e";
    }
  }

  function passOkBorder() {
    if (inputValue.length < 8) {
      return "2px solid #f87171";
    } else {
      return "2px solid #22c55e";
    }
  }

  return (
    <div className="main-container" onMouseLeave={() => leaveHandler()}>
      <div className="container">
        <h1>Sign Up</h1>
        <input className="username" placeholder="Enter Username" type="text" />
        <input
          type="password"
          className="password"
          placeholder="Enter Password"
          onChange={inputHandler}
          style={{
            border: passOkBorder(),
            color: passOkColor()
          }}
        />
        <div className="btn-div">
          <button
            className="btn"
            onMouseEnter={() => hoverHandler()}
            style={{
              border: passOkBorder(),
              color: passOkColor(),
              transform: passOkMove(),
              cursor: "pointer"
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
