import { useState } from "react/cjs/react.development";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000a63";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode disabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          togglemode={toggleMode}
          alert={showAlert}
        />
        <Alert alert={alert} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm heading="Enter your text" mode={mode} alert={showAlert} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
