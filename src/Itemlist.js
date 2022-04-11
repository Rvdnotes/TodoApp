import React from 'react';
const Item = ({ item }) => { 
  return ( <div> <span>{item}</span> </div> );
};
const ItemList = ({ items }) => {
  return (
    <div className="items-container">
      <ul>
        {items.map((item) => (
          <li>
            <Item key={item} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ItemList as default };