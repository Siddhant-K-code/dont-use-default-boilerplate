import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <bold>
            <i> Don't </i>
          </bold>
          Use Default Boilerplate of <code>create-react-app</code>
        </p>
        <a
          className="App-link"
          href="https://dev.to/siddhantkcode/hide-your-source-code-from-developer-tools-while-using-react-5775"
          target="_blank"
          rel="noopener noreferrer"
        >
          Here's what you need to change in your boilerplate to hide source code
          from developer tools.
        </a>
      </header>
    </div>
  );
}

export default App;
