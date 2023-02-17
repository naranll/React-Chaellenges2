import "../styles/main.css";
import { useNavigate } from "react-router-dom";

export default function Main() {
    const navigate = useNavigate();

    return <div className="main">
        <div className="challenges" onClick={() => navigate("/page/:id")}>Pagination</div>
        <div className="challenges" onClick={() => navigate("/weather")}>Weather</div>
    </div>
}