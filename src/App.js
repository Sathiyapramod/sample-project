import "./App.css";
import "./styles.modules.scss";
import Topbar from "./Components/Navbar/Topbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="content-wrapper">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
