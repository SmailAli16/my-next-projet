import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import cors from "cors";
import notes from "./notes.json";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const notes = [];
  return (
    <div className="ron">
      <div className="head">
        <h1 className="one">My Notes App</h1>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            let raw = JSON.stringify({
              text: text,
            });
            let requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: raw,
              redirect: "follow",
            };
            fetch("http://localhost:3000/api/notes", requestOptions)
              .then((response) => response.json())
              .then((result) => {
                setNotes([...notes, result]);
              })
              .catch((error) => console.log("error", error));
          }}
        >
          <textarea
            name=""
            id="earia"
            cols="30"
            rows="10"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className=""
          ></textarea>
        </form>
        <button>
          <span>submit</span>
        </button>
        <h2>*the is Notes*</h2>
      </div>
      <div className="allstor">
        {notes.map((note, index) => {
          return (
            <div className="stornots" key={index}>
              {notes.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
