import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import InventoryItem from "./InventoryItem";
import "bootstrap/dist/css/bootstrap.min.css";
import "./card.css";
import { connect } from "react-redux";
import Sort from "@material-ui/icons/Sort";
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import firebase from "../../containers/Firebase";

let items = [
  { productName: "Brush", productPrice: "20", productQuantity: "5" },
];
const Inventory = (props) => {
  let [items, setItems] = useState([]);
  //For page load events
  useEffect(() => {
    firebase.database.ref('Users/uid1').child('inventory').on('value', function (snapshot) {
      let json = snapshot.val();
      let keys = Object.keys(json);
      let vals = Object.values(json);
      for (let i = 0; i < keys.length; i++) {
        vals[i].id = keys[i];
      }
      setItems(vals);

    });

  }, []);
  let defaultProps = {
    productName: "",
    pruductPrice: "",
    productQuantity: "",
  };

  return (
    <div className='page'>
    <h3>Inventory</h3>
      <form>
        <input className='input_search inpIcon' type="text" name="name" placeholder="Search Item" /><SearchIcon/>{'       '}
        <Sort/>{'    '}
        <i class="fas fa-filter inpIcon"></i>{'    '}
        <InventoryItem className='addItem inpIcon' itemState="Add Item" valChange="Add" />
      </form>
      <div className='view'>
        <div className='cards_container'>
          {items.map((ele, index) => {

            return (

              <div className='inventoryItem'>

                <Card>
                  <Card.Body>
                    <Card.Text>
                      <h3>{ele.name}</h3>  <p>{ele.quantity} {ele.uom}</p><br />
                Price : <span>&#8377;</span>{ele.price}<br />
                Quantity : {ele.quantity}
                    </Card.Text>
                    <InventoryItem
                      itemState="Edit Item"
                      prodName={ele.name}
                      productPrice={ele.price}
                      productQuantity={ele.quantity}
                      valChange="Update" />
                      <InventoryItem
                      itemState="Delete Item"
                      prodName={ele.name}
                      productPrice={ele.price}
                      productQuantity={ele.quantity}
                      valChange="Delete" />

                  </Card.Body>

                </Card>
              </div>


            );
          })}
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  if (state.addInventoryItem.inventoryItem != null)
    return { items: items.push({ ...state.addInventoryItem.inventoryItem }) };
  else return 0;
};

export default connect(mapStateToProps)(Inventory);
