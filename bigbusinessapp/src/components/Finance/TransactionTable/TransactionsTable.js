import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import DataTransaction from "./mock_data.json";
import { COLUMNS } from "./TableColumn";
import { TableGlobalFilter } from "./TableGlobalFilter";
import "./Table.css";

export const TransactionsTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DataTransaction, []);

  const tableInstance = useTable(
    {
      //useTable takes in columns, json data and returns an TableInstance
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  //props from TableInstance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalfilter } = state; //globalfilter prop

  return (
    <>
      {/* <div className="search_bar">
        <TableGlobalFilter filter={globalfilter} setFilter={setGlobalFilter} />
        <span>
          <button
            className="btn btn-primary"
            onClick={previousPage}
            title="previous page"
          >
            Prev
          </button>
          <button
            className="btn btn-primary"
            onClick={nextPage}
            title="next page"
          >
            Next
          </button>
        </span>
      </div> */}
      <h3
        style={{ fontWeight: "lighter", fontSize: "3em", textAlign: "center" }}
      >
        Transactions:
      </h3>

      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? "🔼 "
                        : "🔽 "
                      : "↕ "}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
