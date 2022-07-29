import React from "react";

const listGroup = (props) => {
  const { items, onItemSelect, textProperty, valueProperty, selectedItem } =
    props;

  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <li
            onClick={() => onItemSelect(item)}
            key={item[valueProperty] ? item[valueProperty] : item[textProperty]}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item[textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
};

listGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default listGroup;
