import "../styles/app.css"
import PageBtn from "./subComp/PageBtn"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(4);
    // const [pageNumbers, setPageNumbers] = useState([])
    const last = 20;
    // function numberChecker(pageNum) {
    //     return pageNum < 3 ? 1 : pageNum;
    // }

    console.log("hello");
    return <div className="pagenation">
        <Link to={`/page/${currentPage - 1}`} onClick={() => setCurrentPage(currentPage - 2)}>
            <PageBtn pageNumber="PREVIOUS" btnClass={currentPage === 1 ? "page-btn invisible-btn" : "page-btn"} />
        </Link>

        <div className="pageNumbers">
            {currentPage > 3 && <Link to={`/page/${1}`} onClick={() => setCurrentPage(1)}>
                <PageBtn pageNumber={1} btnClass="page-btn" />
                {currentPage > 4 && <span>...</span>}
            </Link>}

            {/* 1 */}
            <Link to={`/page/${currentPage < 3 ? 1 : currentPage - 2}`} onClick={() => setCurrentPage(currentPage < 3 ? 1 : currentPage - 2)}>
                <PageBtn pageNumber={currentPage < 3 ? 1 : currentPage - 2} btnClass={currentPage < 4 ? "page-btn-active" : "page-btn"} />
            </Link>

            {/* 2 */}
            <Link to={`/page/${currentPage < 3 ? 2 : currentPage - 1}`} onClick={() => setCurrentPage(currentPage < 3 ? 2 : currentPage - 1)}>
                <PageBtn pageNumber={currentPage < 3 ? 2 : currentPage - 1} btnClass={currentPage < 4 ? "page-btn-active" : "page-btn"} />
            </Link>

            {/* 3 */}
            <PageBtn pageNumber={currentPage < 3 ? 3 : currentPage} btnClass={currentPage < 3 ? "page-btn" : "page-btn-active"} />

            {/* 4 */}
            <Link to={`/page/${currentPage + 1}`} onClick={() => setCurrentPage(currentPage + 1)}>
                <PageBtn pageNumber={currentPage + 1} btnClass="page-btn" />
            </Link>

            {/* 5 */}
            {currentPage > 4 && <Link to={`/page/${currentPage + 2}`} onClick={() => setCurrentPage(currentPage + 2)}>
                <PageBtn pageNumber={currentPage + 2} btnClass="page-btn" />
            </Link>}

            {currentPage < last - 2 && <Link to={`/page/${last}`} onClick={() => setCurrentPage(last)}>
                {currentPage < last - 3 && <span>...</span>}
                <PageBtn pageNumber={last} btnClass="page-btn" />
            </Link>}
        </div>

        <Link to={`/page/${currentPage + 1}`} onClick={() => setCurrentPage(currentPage - 2)}>
            <PageBtn pageNumber="NEXT" btnClass={currentPage === 20 ? "page-btn invisible-btn" : "page-btn"} />
        </Link>

    </div >

}