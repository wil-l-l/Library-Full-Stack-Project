import { useRef } from "react";
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
  const pageNumFormref = useRef(null);

  const getPageListItem = (pageNum, other = null) =>
    !other ? (
      <li
        className="search-page__page-display__pages-list__item"
        onClick={() => setPage(pageNum)}
        key={other || pageNum}
      >
        {other === null ? `Page ${pageNum}` : other}
      </li>
    ) : (
      <form
        action="
    "
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => {
          e.preventDefault();
          const pageNumSubmitted = Number(pageNumFormref.current.value);

          if (pageNumSubmitted >= 1 && pageNumSubmitted <= MAX_PAGES) {
            setPage(pageNumSubmitted);
            pageNumFormref.current.blur();
          } else setPage(1);

          setShowPages(false);
        }}
      >
        <input
          type="number"
          placeholder="Enter page number"
          ref={pageNumFormref}
          className="search-page__pagination-menu__input"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => e.key === "Escape" && pageNumFormref.current.blur()}
        />
      </form>
    );

  const SPLIT_THRESHOLD = 6;

  return (
    <div className="search-page__page-display">
      <p>
        {filteredBooks.length === 0
          ? "Page 1 of 1"
          : `Page ${page} of ${MAX_PAGES}`}
      </p>

      <button
        className="search-page__page-display__open-more-btn white-black-btn"
        onClick={() => setShowPages(!showPages)}
      >
        PG
        {showPages && (
          <ul className="search-page__page-display__pages-list">
            {MAX_PAGES < SPLIT_THRESHOLD
              ? pageRange.map((pageNum) => getPageListItem(pageNum))
              : pageRange.map((pageNum, index) =>
                  index + 1 < SPLIT_THRESHOLD || index + 1 === MAX_PAGES
                    ? getPageListItem(pageNum)
                    : index + 1 === SPLIT_THRESHOLD
                      ? getPageListItem(null, "...")
                      : null,
                )}
          </ul>
        )}
      </button>
    </div>
  );
};

export default PaginationBar;
