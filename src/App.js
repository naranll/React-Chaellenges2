import "./styles/app.css"
import Pagination from "./components/Pagination"
import Page from "./components/Page"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/page/:id" element={<Page />} />
      </Routes>
      <Pagination />
    </div>
  );
}

export default App;



