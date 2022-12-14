import { Dispatch, SetStateAction, useCallback } from "react";
import "./pagination.scss";

type Props = {
  setPage: Dispatch<SetStateAction<number>>;
  totalPages: number;
  page: number;
};

const Pagination = ({ setPage, totalPages, page }: Props) => {
  const onNextPage = useCallback(() => {
    setPage((prevState: number) =>
      prevState < totalPages ? prevState + 1 : prevState
    );
  }, [totalPages]);

  const onPrevPage = useCallback(() => {
    setPage((prevState: number) => (prevState > 0 ? prevState - 1 : prevState));
  }, []);
  return (
    <footer className="pagination">
      <button
        onClick={onPrevPage}
        disabled={page <= 0}
        className="pagination__btn"
      >
        Prev page
      </button>
      <select value={page} onChange={(e) => setPage(Number(e.target.value))}>
        {[...Array(totalPages)].map((_, index) => (
          <option value={index}>{index}</option>
        ))}
      </select>
      <button
        onClick={onNextPage}
        disabled={page + 1 === totalPages}
        className="pagination__btn"
      >
        Next page
      </button>
    </footer>
  );
};

export default Pagination;
