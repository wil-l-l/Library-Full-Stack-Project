import "./PaginationBar.css";

const PaginationBar = ({
  filteredBooks,
  page,
  MAX_PAGES,
  showPages,
  setShowPages,
  pageRange,
  setPage,
}) => {
  return (
    <div className="search-page__page-display">
      <p>
        {filteredBooks.length === 0
          ? "Page 1 of 1"
          : `Page ${page} of ${MAX_PAGES}`}
      </p>

      <button
        className="search-page__page-display__open-more-btn"
        onClick={() => setShowPages(!showPages)}
      >
        PG
        {showPages && (
          <ul className="search-page__page-display__pages-list">
            {pageRange.map((pageNum) => (
              <li
                className="search-page__page-display__pages-list__item"
                onClick={() => setPage(pageNum)}
              >
                Page {pageNum}
              </li>
            ))}
          </ul>
        )}
      </button>
    </div>
  );
};

export default PaginationBar;
