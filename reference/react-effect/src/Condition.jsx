import { useEffect } from "react";
import { useState } from "react";

export default function Condition() {
    const [userName, setUserName] = useState('');
    const [finished, setFinished] = useState(true);
    console.log("Condition component rendering");

    useEffect(() => {
        const dataUpload = fetch("https://randomuser.me/api/")
            .then((res) => res.json())
            //.then((data) => console.log(data));
            .then((data) => setUserName(data.results[0].name.first));
    }, [finished]);
    return <div>
        {userName}
    </div>
}