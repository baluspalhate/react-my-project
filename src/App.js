import "./App.css";
import Navbar from "./componets/Navbar";
import Alert from "./componets/Alert";
import TextForm from "./componets/TextForm";
import { useState } from "react";
// import DarkMode from "./componets/DarkMode";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({});
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-success");
  };
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundClip = "black";
    } else {
      setMode = "light";
      document.body.style.backgroundClip = "white";
    }
  };
  return (
    <>
      <Navbar
        title="Navbar2"
        mode={mode}
        toggleMode={toggleMode}
        about="About US"
      ></Navbar>
      <Alert Alert="This is alert"></Alert>
      <div>
        <TextForm heading="Enter the text to analyze"></TextForm>
      </div>
      {/* <DarkMode></DarkMode> */}
    </>
  );
}

export default App;
