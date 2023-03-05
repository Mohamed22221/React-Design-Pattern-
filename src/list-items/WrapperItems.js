import React from "react";

const WrapperItems = ({
  items: dataApi,
  resourceName: name,
  itemComponent: ItemComponent,
}) => {
  return (
    <div>
      {dataApi?.map((item) => {
        return (
          <div key={item.id}>
            <ItemComponent  {...{ [name]: item }} />;
          </div>
        );
      })}
    </div>
  );
};

export default WrapperItems;
