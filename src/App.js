import logo from "./logo.svg";
import "./App.css";
import { useMobileDetect } from "./lib/contexts/mobile-detect";

function App() {
  const { isMobile } = useMobileDetect();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Using on {isMobile ? "Mobile" : "Desktop"}</p>
      </header>
    </div>
  );
}

export default App;
