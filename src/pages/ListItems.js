import React from "react";
import ViewProduct from "../list-items/components/ViewProduct";
import ViewUsers from "../list-items/components/ViewUsers";
import WrapperItems from "../list-items/WrapperItems";

const ListItems = () => {
  const users = [
    {
      id: 1,
      firstName: "Marcel",
      age: 39,
    },
    {
      id: 2,
      firstName: "Assunta",
      age: 42,
    },
    {
      id: 3,
      firstName: "Trace",
      age: 26,
    },
  ];

  const product = [
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      rating: 4.69,
      links: ["Amazon", "Apple"],
    },
    {
      id: 2,
      title: "iPhone 10",
      description: "An apple mobile which is nothing like apple",
      rating: 5.69,
      links: ["Amazon", "Apple"],
    },
  ];

  return (
    <div>
      <WrapperItems
        items={product}
        itemComponent={ViewProduct}
        resourceName="product"
      />
      <WrapperItems
        items={users}
        itemComponent={ViewUsers}
        resourceName="users"
      />
    </div>
  );
};

export default ListItems;
