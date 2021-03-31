import { useContext, useState } from "react";
import "./css/ItemDetailsForm.css";
import { InvoiceContext } from "./Invoice";

const ItemDetailsForm = (props) => {
  const { item } = props;
  const { handleItemInputsAdd, handleItemChange } = useContext(InvoiceContext);
  console.log(`item - ${item.name}`);

  // get this item array from JSON(inventory)
  const inventoryItems = [
    {
      name: "Bread",
      quantity: 10,
      rate: 10,
    },
    {
      name: "Pawri",
      quantity: 100,
      rate: 100,
    },
    {
      name: "Milk",
      quantity: 100,
      rate: 20,
    },
    {
      name: "Yogurt",
      quantity: 11,
      rate: 5,
    },
  ];
  const [ItemArray, setReceiverArray] = useState(inventoryItems);
  console.log(ItemArray);

  // const handleChange = (event) => {
  //   const target = event.target;
  //   const name = target.name;
  //   const objvalue = target.value;
  //   console.log(name, objvalue);
  //   handleItemChange({ [name]: objvalue });
  //   console.log(item);
  // };

  const [SelectItemValue, setSelectItemValue] = useState("");
  console.log(SelectItemValue);
  // handleItemChange({ ...SelectItemValue });
  const handleChange = () => {
    handleItemChange({ ["name"]: SelectItemValue.name });
    handleItemChange({ ["rate"]: SelectItemValue.rate });
  };
  // handleChange();

  const formname = "Item Details";
  return (
    <div className="item_details">
      <form>
        <fieldset>
          <legend>{formname.toUpperCase()}</legend>
          <div id="form_input_elements">
            <div className="label_input_container" id="name">
              <label>Name</label>
              <select
                name="name"
                id="item_names--select"
                defaultValue={SelectItemValue.name}
                onChange={(event) => {
                  let index = event.target.value;
                  console.log(index, ItemArray[index]);
                  console.log(ItemArray[index].name);
                  setSelectItemValue(ItemArray[index]);
                  console.log(`SelectItemValue - ${SelectItemValue}`);
                  // handleItemChange({ ...SelectItemValue });
                  handleChange();
                  console.log(item);
                }}
              >
                <option value="default" selected disabled>
                  Select an Item
                </option>
                {ItemArray.length !== 0 &&
                  ItemArray.map((item, index) => (
                    <option key={index} value={index}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="label_input_container" id="quantity">
              <label>Quantity(1 - {SelectItemValue.quantity})</label>
              <input
                type="number"
                name="quantity"
                min={1}
                max={SelectItemValue.quantity}
                value={item["quantity"]}
                onChange={(event) =>
                  handleItemChange({ ["quantity"]: event.target.value })
                }
                required
              />
            </div>
            <div className="label_input_container" id="rate">
              <label>Rate</label>
              <input
                type="number"
                name="rate"
                value={SelectItemValue.rate}
                disabled
              />
            </div>
          </div>
        </fieldset>
      </form>
      <button
        id="add_to_invoice--button"
        onClick={() => {
          console.log("Clicked");
          handleItemInputsAdd();
        }}
      >
        Add to Invoice
      </button>
    </div>
  );
};

export default ItemDetailsForm;
