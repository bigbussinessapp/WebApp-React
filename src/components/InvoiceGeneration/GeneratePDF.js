// import jsPDF from "./jspdf.umd.min.js";
// import "jspdf-autotable";

// function createPdf(InvoiceId, CreationDate, ReceiverDetails, ItemInputsArray) {
//   var doc = new jsPDF();

//   var pageSize = doc.internal.pageSize;
//   var pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();

//   let finalY = doc.lastAutoTable.finalY || 10;
//   doc.setFontSize(24);

//   var companyName = "BigBusinessApp";
//   doc.text(companyName, pageWidth / 2 - 30, finalY);

//   // let InvoiceId = String(Math.random()).substring(2, 14);
//   // let d = new Date();
//   // let CreationDate = `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}`;

//   doc.setFontSize(16);
//   doc.text(`Invoice No     :  ${InvoiceId}`, pageWidth - 100, finalY + 10);
//   doc.text(`Invoice Date  :  ${CreationDate}`, pageWidth - 100, finalY + 16);

//   finalY = doc.lastAutoTable.finalY || 20;
//   doc.setFontSize(24);
//   doc.text("Tax Invoice", pageWidth / 2 - 22, finalY + 20);

//   const {
//     name,
//     address,
//     email,
//     mobile,
//     gstin,
//     IncludeGST,
//     region,
//   } = ReceiverDetails;

//   doc.autoTable({
//     theme: "grid",
//     startY: finalY + 25,
//     head: [["SENDER(BILLED TO)", "RECEIVER(SHIPPED TO)"]],
//     body: [
//       [`Name    : `, `Name    : ${name}`],
//       [`Address : `, `Address : ${address}`],
//       [`Email     : `, `Email     : ${email}`],
//       [`Mobile   : `, `Mobile   : ${mobile}`],
//       [`GSTIN   : `, `GSTIN   : ${gstin}`],
//       [`State      : `, `State      : ${region}`],
//     ],
//   });

//   finalY = doc.lastAutoTable.finalY;

//   var count = 0; // SL.NO
//   var bodyArray = [];
//   let sgst = IncludeGST ? 18 : 0;
//   let cgst = IncludeGST ? 18 : 0;
//   let totalItemAmount = 0;
//   let totalSum = 0;

//   for (const item of ItemInputsArray) {
//     var itemArray = [];
//     for (const key in item) {
//       if (Object.hasOwnProperty.call(item, key) && key !== "id") {
//         itemArray.push(item[key]);
//       }
//     }
//     totalItemAmount = item["quantity"] * item["rate"];
//     totalItemAmount += totalItemAmount * (sgst / 100) * (cgst / 100);
//     totalSum += totalItemAmount;
//     itemArray.unshift(++count);
//     itemArray.push(sgst, cgst, totalItemAmount);
//     bodyArray.push(itemArray);
//   }
//   bodyArray.push([, , , , , "TOTAL AMOUNT", totalSum]);

//   doc.autoTable({
//     theme: "grid",
//     startY: finalY + 2,
//     head: [
//       ["SL.NO", "NAME", "QTY", "RATE(RS)", "SGST(%)", "CGST(%)", "TOTAL(RS)"],
//     ],
//     body: bodyArray,
//   });

//   doc.save(`${name.toUpperCase()}.pdf`);
// }

function generatePdf() {
  alert("In generate pdf--DOMPurify error");
}

export default function getDetails(InvoiceObject) {
  // const InvoiceObject = props;
  const { InvoiceId, CreationDate, receiver, itemInputs } = InvoiceObject;
  generatePdf(InvoiceId, CreationDate, receiver, itemInputs);
  // AddInvoiceData(InvoiceObject);
}
