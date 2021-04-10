import React, { useState,useEffect } from "react";
import Card from "react-bootstrap/Card";
import getDetails from "../InvoiceGeneration/InvoicePDF";
import Header1 from "../Header1/Header1";
import Sidebar from "../Sidebar/Sidebar";
import "./ManageInvoice.css";
import "./card.css";
import ApiCalls from '../../containers/apiCalls';
const ManageInvoice = () => {
  useEffect(()=>{
    console.log("App loading");
    new ApiCalls().apiCall('invoice','get').then(
      res =>{
        console.log("This is inventory data from backend");
        console.log(res);
      }
    ).catch(
      resolve =>{
        console.log(resolve);
      }
    )
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
  const [InvoiceData, setInvoiceData] = useState(SampleInvoiceData);
  console.log(`InvoiceData -> `, InvoiceData);

  // Array of ID's that are selected
  const [SelectedInvoiceId, setSelectedInvoiceId] = useState([]);
  // console.log(`SelectedInvoiceId -> ${SelectedInvoiceId}`);
  console.log(SelectedInvoiceId);

  const handleAddInvoice = (newInvoice) => {
    console.log("Working", newInvoice);
    // console.log([...newInvoice.files].map((item) => item.name));
    console.log(...newInvoice.files);
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

        setInvoiceData([...InvoiceData, ...InvoiceObjectArray]);
      } else alert(`${file.name} - File Size must be less than 2 mb`);
    });

    console.log(InvoiceData);
  };
  const RemoveInvoice = (id) =>
    setInvoiceData(
      InvoiceData.filter((invoiceItem) => invoiceItem.InvoiceId !== id)
    );
  const handleDeleteInvoice = () => {
    SelectedInvoiceId.map((id) => {
      console.log(`id -> ${id}\nInvoiceData -> `, InvoiceData);
      RemoveInvoice(id);
    });
    setSelectedInvoiceId([]);
  };

  const handleAddId = (id) => setSelectedInvoiceId([...SelectedInvoiceId, id]);
  const handleRemoveId = (id) =>
    setSelectedInvoiceId(
      SelectedInvoiceId.filter((InvoiceId) => InvoiceId !== id)
    );
  const handleAddAllId = () => {
    InvoiceData.map((item) => handleAddId(item.InvoiceId));
  };

  const [CheckInvoiceCard, setCheckInvoiceCard] = useState(false);
  

  return (
    <div id="container">
      <Header1 className="item1" />
      <div className="container_main">
        <Sidebar className="item2" />
        <div className='sideContent'>
          <h2 className='serviceHeader'>Invoice Management</h2>
          {/* select_all, delete, sort, filter bar */}
          <div className="container_main_right">
            <div id="search_filter_add_bar" className="item3">
              {/* select_all */}
              <label htmlFor="select_all--checkbox">
                <input type="checkbox" name="select_all" id="select_all--checkbox" onChange={() => handleAddAllId()}/>
              <span>&nbsp;</span>Select All
            </label>

              {/* delete */}
              <input className='invoiceBtn' type="button" value="Delete" onClick={() => handleDeleteInvoice()}/>
              {/* sort */}
              <input className='invoiceBtn' type="button" value="Sort" onClick={() => { }} />
              {/* filter */}
            </div>

            {/* Cards container with all cards */}
            <div id="card_container" className="item4">
              {InvoiceData.map((item, index) => (
                <Card key={index} className="card_div">
                  <Card.Body className="card_body_div">
                    <div className="invoiceCardHeader">
                      <Card.Title>{item.receiver.name}.pdf</Card.Title>
                      <Card.Text>
                        <input type="checkbox" name="" id="card_select--checkbox"
                          onChange={(event) => {
                            event.target.checked ? handleAddId(item.InvoiceId) : handleRemoveId(item.InvoiceId);
                          }}
                        />
                      </Card.Text>
                    </div>
                    <button className='invoiceBtn' onClick={() => getDetails(item)}>Details</button>
                    <button className='invoiceBtn' >Share</button>
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

export default ManageInvoice;
// invoicetable

// a = [
//   { name: "abc", id: 0 },
//   { name: "def", id: 1 },
//   { name: "ghi", id: 2 },
//   { name: "jkl", id: 3 },
// ];
