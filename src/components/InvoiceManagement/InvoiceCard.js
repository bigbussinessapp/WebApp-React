import React from "react";
import moduleName from './css/'

const InvoiceCard = () => {
  return (
    <Card key={index} className="card_div">
      <Card.Body className="card_body_div">
        <div className="invoiceCardHeader">
          <Card.Title id="invoice_card_title" onClick={() => getDetails(item)}>
            {item.receiver.name}.pdf
          </Card.Title>
          <Card.Text>
            <input
              type="checkbox"
              name={`${item.InvoiceId}_ic`}
              id="card_select--checkbox"
              onChange={(event) => {
                event.target.checked
                  ? handleAddId(item.InvoiceId)
                  : handleRemoveId(item.InvoiceId);
              }}
            />
          </Card.Text>
        </div>
        <button className="invoice_card_btn invoiceBtn">Details</button>
        <button className="invoice_card_btn invoiceBtn">Share</button>
      </Card.Body>
    </Card>
  );
};

export default InvoiceCard;
