import "./styles/app.css"
import Page from "./components/Page"
import { Routes, Route } from "react-router-dom";
import Weather from "./components/Weather";
import Main from "./components/Main";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/page/:id" element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;



