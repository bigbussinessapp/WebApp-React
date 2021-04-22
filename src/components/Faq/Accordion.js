import React, { useState } from "react";
// import { FiPlus, FiMinus } from "react-icons/fi";
import data from "./data";

function Accordion() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <>
      {data.map((item, index) => {
        {
          return (
            <div className="faqs">
              <button onClick={() => toggle(index)} className="accordion">
                {item.title}
                <span className="plus_minus">
                  {clicked === index ? (
                    <i class="fas fa-plus"></i>
                  ) : (
                    <i class="fas fa-minus"></i>
                  )}
                </span>
              </button>

              {clicked === index ? (
                <div className="panel">
                  <p>{item.data}</p>
                </div>
              ) : null}
            </div>
          );
        }
      })}
    </>
  );
}
export default Accordion;
