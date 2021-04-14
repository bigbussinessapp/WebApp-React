import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Header1 from "../Header1/Header1";
import getDetails from "../InvoiceGeneration/GeneratePDF";
import Sidebar from "../Sidebar/Sidebar";
import "./card.css";
import "./InvoiceManagement.css";
import ApiCalls from "../../containers/apiCalls";

const InvoiceManagement = () => {
  const [sortValue, setSortValue] = useState(true);

  let lowSortFn = (a, b) => a.receiver.name < b.receiver.name;
  let highSortFn = (a, b) => a.receiver.name > b.receiver.name;

  useEffect(() => {
    console.log("App loading");
    new ApiCalls()
      .apiCall("invoice", "get")
      .then((res) => {
        console.log("This is inventory data from backend");
        console.log(res);
      })
      .catch((resolve) => {
        console.log(resolve);
      });
  }, []);

  const SampleInvoiceData = [
    {
      InvoiceId: "12345",
      CreationDate: "01-01-2001",
      receiver: {
        name: "Aryan",
        address: "Hyderabad",
        email: "founder@bigbusinessapp.com",
        mobile: "9993883839",
        gstin: "9393939",
        IncludeGST: true,
        region: "Telangana",
      },
      itemInputs: [
        { id: "1228801", name: "Bread", quantity: 19, rate: 20 },
        { id: "1037732", name: "Milk", quantity: 12, rate: 10 },
        { id: "0929293", name: "Corn", quantity: 5, rate: 12 },
      ],
    },
    {
      InvoiceId: "54321",
      CreationDate: "01-02-2021",
      receiver: {
        name: "Akhil",
        address: "Ongole",
        email: "ak@bigbusinessapp.com",
        mobile: "9292299111",
        gstin: "9299292",
        IncludeGST: false,
        region: "Andhra Pradesh",
      },
      itemInputs: [
        { id: "1228801", name: "item1", quantity: 10, rate: 29 },
        { id: "1037732", name: "item2", quantity: 110, rate: 9 },
        { id: "0929293", name: "item3", quantity: 210, rate: 2 },
      ],
    },
  ];
  const [InvoiceData, setInvoiceData] = useState(
    SampleInvoiceData.sort(highSortFn)
  );

  const handleAddInvoice = (newInvoice) => {
    const InvoiceObjectArray = [...newInvoice.files].map((file) => {
      if (file.size / (1024 * 1024) < 2) {
        let d = new Date(file.lastModified);
        let ddmmyyyy = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;
        let name = file.name;

        return {
          InvoiceId: String(Math.random()).substring(2),
          CreationDate: ddmmyyyy,
          receiver: {
            name: name.substring(0, name.length - 4),
            address: "UnParsed",
            email: "UnParsed",
            mobile: "UnParsed",
            gstin: "UnParsed",
            IncludeGST: true,
            region: "UnParsed",
          },
          itemInputs: [
            { id: 123456, name: "UnParsed", quantity: "0", rate: "0" },
            { id: 123456, name: "UnParsed", quantity: "0", rate: "0" },
            { id: 123456, name: "UnParsed", quantity: "0", rate: "0" },
          ],
        };
      } else alert(`${file.name} - File Size must be less than 2 mb`);
    });

    setInvoiceData([
      ...InvoiceData,
      ...[...InvoiceObjectArray.filter((file) => file !== undefined)],
    ]);
  };

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])
  // setInvoiceData(InvoiceData.sort(lowSortFn))

  return (
    <div id="container">
      <Header1 className="item1" />
      <div className="container_main">
        <Sidebar className="item2" />
        <div className="sideContent">
          <h2 className="serviceHeader">Invoice Management</h2>
          {/* select_all, delete, sort, filter bar */}
          <div className="container_main_right">
            <div id="search_filter_add_bar" className="item3">
              {/* sort */}
              <input
                className="invoiceBtn"
                type="button"
                value="Sort"
                onClick={() => {
                  setSortValue(sortValue ? false : true);
                  setInvoiceData(
                    InvoiceData.sort(sortValue ? lowSortFn : highSortFn)
                  );
                }}
              />
              {/* filter */}
            </div>

            {/* Cards container with all cards */}
            <div id="card_container" className="item4">
              {InvoiceData.map((item, index) => (
                <Card key={index} className="card_div">
                  <Card.Body className="card_body_div">
                    <div className="invoiceCardHeader">
                      <Card.Title
                        id="invoice_card_title"
                        onClick={() => getDetails(item)}
                      >
                        {item.receiver.name}.pdf
                      </Card.Title>
                    </div>
                    <button className="invoice_card_btn invoiceBtn">
                      Details
                    </button>
                    <button className="invoice_card_btn invoiceBtn">
                      Share
                    </button>
                  </Card.Body>
                </Card>
              ))}
            </div>

            {/* Add Invoice button */}
            <div className="item5">
              <label htmlFor="addInvoiceFile">
                <input
                  type="file"
                  accept="application/pdf"
                  multiple
                  name="invoiceFile"
                  id="addInvoiceFile"
                  onChange={(event) => handleAddInvoice(event.target)}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceManagement;
// invoicetable

// a = [
//   { name: "abc", id: 0 },
//   { name: "def", id: 1 },
//   { name: "ghi", id: 2 },
//   { name: "jkl", id: 3 },
// ];
