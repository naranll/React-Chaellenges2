import "../styles/app.css"
import PageBtn from "./subComp/PageBtn"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);
    // const [pageNumbers, setPageNumbers] = useState([])
    const last = 20;


    return <div className="pagenation">
        <Link to={`/page/${currentPage - 1}`} onClick={() => setCurrentPage(currentPage - 1)}>
            <PageBtn pageNumber="PREVIOUS" btnClass={currentPage === 1 ? "page-btn invisible-btn" : "page-btn"} />
        </Link>

        <div className="pageNumbers">
            {/* FIRST */}
            {currentPage > 3 && <Link to={`/page/${1}`} onClick={() => setCurrentPage(1)}>
                <PageBtn pageNumber={1} btnClass="page-btn" />
                {currentPage > 4 && <span>...</span>}
            </Link>}

            {/* 1 */}
            <Link to={`/page/${currentPage - 2}`} onClick={() => setCurrentPage(currentPage - 2)}>
                <PageBtn pageNumber={currentPage - 2} btnClass={currentPage <= 2 ? "invisible-btn" : "page-btn"} />
            </Link>

            {/* 2 */}
            <Link to={`/page/${currentPage - 1}`} onClick={() => setCurrentPage(currentPage - 1)}>
                <PageBtn pageNumber={currentPage - 1} btnClass={currentPage <= 1 ? "invisible-btn" : "page-btn"} />
            </Link>

            {/* 3 main */}
            <PageBtn pageNumber={currentPage} btnClass={"page-btn-active"} />

            {/* 4 */}
            <Link to={`/page/${currentPage + 1}`} onClick={() => setCurrentPage(currentPage + 1)}>
                <PageBtn pageNumber={currentPage + 1} btnClass={currentPage >= last ? "invisible-btn" : "page-btn"} />
            </Link>

            {/* 5 */}
            <Link to={`/page/${currentPage + 2}`} onClick={() => setCurrentPage(currentPage + 2)}>
                <PageBtn pageNumber={currentPage + 2} btnClass={currentPage >= last - 1 ? "invisible-btn" : "page-btn"} />
            </Link>

            {/* 6 */}
            {<Link to={`/page/${currentPage + 3}`} onClick={() => setCurrentPage(currentPage + 3)}>
                <PageBtn pageNumber={currentPage + 3} btnClass={currentPage >= last - 2 ? "invisible-btn" : "page-btn"} />
            </Link>}

            {/* LAST */}
            {currentPage < last - 3 && <Link to={`/page/${last}`} onClick={() => setCurrentPage(last)}>
                {currentPage < last - 4 && <span>...</span>}
                <PageBtn pageNumber={last} btnClass="page-btn" />
            </Link>}
        </div>

        <Link to={`/page/${currentPage + 1}`} onClick={() => setCurrentPage(currentPage + 1)}>
            <PageBtn pageNumber="NEXT" btnClass={currentPage === 20 ? "page-btn invisible-btn" : "page-btn"} />
        </Link>

    </div >

}