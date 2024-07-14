import React, { useState, createContext } from "react";
import img1 from "../imgs/egg.jpeg";
import img2 from "../imgs/steak.jpeg";
import img3 from "../imgs/chicken.jpeg";
import img4 from "../imgs/yogurt.jpeg";
import Swal from "sweetalert2";
export const ShoppingContext = createContext();

export const ContextProvider = ({ children }) => {
  const initialMenus = [
    {
      id: 0,
      name: "Egg",
      category: "Breakfast",
      price: 100,
      img: img1,
    },
    {
      id: 1,
      name: "Steak",
      category: "Lunch",
      price: 300,
      img: img2,
    },
    {
      id: 2,
      name: "Chicken",
      category: "Lunch",
      price: 200,
      img: img3,
    },
    {
      id: 3,
      name: "Yogurt",
      category: "Dinner",
      price: 60,
      img: img4,
    },
  ];

  const [menus, setMenus] = useState(initialMenus);
const[cart,setCart]=useState([]);
  const filterCategory = (cat) => {
    if (cat === "All") {
      setMenus(initialMenus);
    } else {
      const newArray = initialMenus.filter((item) => item.category === cat);
      setMenus(newArray);
    }
  };
  const searchMenu = (term) => {
    if (term === "") {
      setMenus(initialMenus);
    } else {
      const newArray = initialMenus.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );
      setMenus(newArray);
    }
  };
  const addCart = (item) => {
    const isInCart = cart.some((product) => product.id === item.id);
    if (!isInCart) {
      setCart([...cart, item]); // Add the new item to the cart
      Swal.fire(
        "Product added successfully!",
        "You clicked the button!",
        "success"
      );
    } else {
      Swal.fire(
        "Product already in cart!",
        "You clicked the button!",
        "warning"
      );
    }
  };
  
  const removeFromCart=(id)=>{
const newItem=cart.filter((item)=>item.id !==id);
setCart(newItem);
  }
  const contextValue = {
    menus,
    filterCategory,
searchMenu,
addCart,
removeFromCart,
cart
  };

  return (
    <ShoppingContext.Provider value={contextValue}>
      {children}
    </ShoppingContext.Provider>
  );
};
