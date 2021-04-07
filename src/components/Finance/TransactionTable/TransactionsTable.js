import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { COLUMNS } from "./TableColumn";
import { TableGlobalFilter } from "./TableGlobalFilter";
import "./Table.css";
import firebase from "../../../containers/Firebase";
import Header1 from "../../Header1/Header1";
import Sidebar from "../../Sidebar/Sidebar";
// import transactionIcon from "../../../assets/transactionIcon.svg";

export const TransactionsTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  let [data, setData] = useState([]);
  const dataKeys = [];
  let dataJson = [];
  const datavals = [];
  useEffect(() => {
    firebase.database
      .ref("Users/uid1")
      .child("transaction-history")
      .on("value", function (snapshot) {
        console.log("Getting Data");
        let json = snapshot.val();
        let keys = Object.keys(json);
        let vals = Object.values(json);
        for (let i = 0; i < keys.length; i++) {
          vals[i].id = keys[i];
        }
        setData(vals);
        console.log(vals);
      });

    setData(datavals);
  }, []);

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
    <div className="transaction_table">
    <Header1 />
    <div className='web_body'>
      <Sidebar />
      <div className='sideContent'>
      <h3 className='serviceHeader'>Transactions History</h3><br/>
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
      </div>
      </div>
    </div>
  );
};
