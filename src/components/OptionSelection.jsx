import React from "react";

function OptionSelection({ arrayItems, selectOption }) {
  return (
    <div className="grid-main">
      {arrayItems.map((item) => (
        <div
          className="grid-child"
          key={item.id}
          onClick={() => selectOption(item.option)}
        >
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default OptionSelection;
