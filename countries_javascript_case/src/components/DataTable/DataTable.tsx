import { Dispatch, SetStateAction, useState } from "react";
import Pagination from "../Pagination";
import TextField from "../TextField";
import "./datatable.scss";

type Pagination =
  | {
      pagination: true;
      setPage: Dispatch<SetStateAction<number>>;
      totalPages: number;
      page: number;
    }
  | {
      pagination: false;
      setPage: never;
      totalPages: never;
      page: never;
    };

type Props = {
  rows: Array<any>;
  paginationProps: Pagination;
};

const DataTable = ({
  rows = [],
  paginationProps: { pagination, page, setPage, totalPages },
}: Props) => {
  const columns = Object.keys(rows[0]);

  const [sortedBy, setSortedBy] = useState<{ column: string; asc: boolean }>({
    column: columns[0],
    asc: true,
  });
  const [query, setQuery] = useState<string>("");

  const sortData = (rows: any[]): any[] => {
    const { column, asc } = sortedBy;
    return rows.sort((a, b) => {
      if (a[column].toString() > b[column].toString()) return asc ? -1 : 1;
      if (b[column].toString() > a[column].toString()) return asc ? 1 : -1;
      return 0;
    });
  };

  const filterData = (rows: any[]): any[] =>
    rows.filter((row) =>
      columns.some(
        (column) =>
          row[column]?.toString()?.toLowerCase()?.indexOf(query.toLowerCase()) >
          -1
      )
    );

  const sortFilter = sortData(filterData(rows));
  return (
    <div className="container">
      <TextField
        type="search"
        placeholder="Search data..."
        value={query}
        setValue={setQuery}
      />
      <div className="provider">
        <table className="table">
          <thead className="table__header">
            <tr className="table__header__row">
              {columns.map((column) => (
                <th
                  className="table__header__row__item"
                  onClick={() =>
                    setSortedBy((prev) => ({
                      column,
                      asc: !prev.asc,
                    }))
                  }
                  key={column}
                >
                  {column}
                  {sortedBy.column === column &&
                    (sortedBy.asc ? <span>🔼</span> : <span>🔽</span>)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="table__body">
            {sortFilter?.map((row, index) => (
              <tr className="table__body__row" key={index}>
                {columns.map((column, index) => (
                  <td
                    className="table__body__row__item"
                    key={`${index}${column}`}
                  >
                    {row[column]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pagination ? (
        <footer className="footer">
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </footer>
      ) : null}
    </div>
  );
};

export default DataTable;
