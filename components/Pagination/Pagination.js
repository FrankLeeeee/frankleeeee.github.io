import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

export default function Pagination({
  currentPage,
  NumPages,
  siblingCount,
  goToPageByIndex,
}) {
  // compute the page numbers to display,
  // the page number should start from 1
  const pageNumbers = [];
  for (
    let i = Math.max(1, currentPage - siblingCount);
    i <= Math.min(NumPages, currentPage + siblingCount);
    i++
  ) {
    pageNumbers.push(i);
  }

  const goToPrevPage = (e) => {
    e.preventDefault();
    const prevPageIndex = Math.max(1, currentPage - 1);
    goToPageByIndex(prevPageIndex);
  };

  const goToNextPage = (e) => {
    e.preventDefault();
    const nextPageIndex = Math.min(NumPages, currentPage + 1);
    goToPageByIndex(nextPageIndex);
  };

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      {/* previous button */}
      <div className="-mt-px flex w-0 flex-1">
        <button
          onClick={goToPrevPage}
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <ArrowLongLeftIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Previous
        </button>
      </div>

      {/* Show page numbers here, we show the current page index and its sibligns (index starts from 1)
       */}
      <div className="hidden md:-mt-px md:flex">
        {
          // show current page and its siblings
          pageNumbers.map((pageIdx) => {
            return (
              <a
                key={pageIdx}
                href={`?page=${pageIdx}`}
                className={`${
                  pageIdx === currentPage
                    ? "text-blue-400"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } inline-flex items-center px-4 pt-4 text-sm font-medium`}
              >
                {pageIdx}
              </a>
            );
          })
        }
      </div>

      {/* next button */}
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <button
          onClick={goToNextPage}
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Next
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>
  );
}
