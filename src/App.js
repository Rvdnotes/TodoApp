import React, { useEffect, useState } from 'react';
import AddItemForm from './AddItemForm';
import ItemList from './ItemList';

function App() {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
  
    setItems([...items, item]);
  };


const removeItem = (itemToBeDeleted) => {
    setItems(items.filter((item) => itemToBeDeleted !== item));
  
  };

useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
    }
  }, []);

useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

return (
    <div className="App">
      <header className="App-header">
        Todo items
        <ItemList items={items} removeItem={removeItem} />
        <AddItemForm addItem={addItem} />


      </header>
    </div>
  );
}

export default App;