import { useParams } from "react-router-dom"

export default function Page() {
    const { id } = useParams();

    return <div className="page">
        <div>{id}</div>
    </div>

}