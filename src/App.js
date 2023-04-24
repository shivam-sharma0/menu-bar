import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

  const allCategory = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems,setMenuItems]=useState(items);
  const [categories,setCategories]=useState(allCategory);

  const filterItems=(category)=>{
    if(category==="all"){
      setMenuItems(items);
    }else{
const newItems = items.filter((item) => item.category === category);
setMenuItems(newItems);
    } 
  }


  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our menus</h2>
          <div className="underline"></div>
        </div>

        <Categories
        categories={categories}
          filterItem={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
