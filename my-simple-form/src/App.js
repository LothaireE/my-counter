import "./App.css";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div>
      <Form username={username} />

      <StepTwo />
      <Footer />
    </div>
  );
}

export default App;
