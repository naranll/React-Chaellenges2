import "../subComp/pageBtn.css";

export default function PageBtn(prop) {
    let { pageNumber, btnClass } = prop;
    return <button className={`pagebtn ${btnClass}`}>{pageNumber}</button>

}