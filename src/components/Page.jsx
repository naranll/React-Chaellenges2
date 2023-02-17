import { useParams } from "react-router-dom"
import Pagination from "./Pagination";

export default function Page() {
    const { id } = useParams();

    return <div className="page">
        <div>{id}</div>
        <Pagination />
    </div>

}