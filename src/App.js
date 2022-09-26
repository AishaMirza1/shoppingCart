import "./App.css";
import { useState } from "react";
import itemsData from "./components/data";
import Cart from "./components/cart";
function App() {
  const cosmeticdata = itemsData.data[0].productList;
  const householddata = itemsData.data[1].productList;

  const [product, setProduct] = useState([]);

  function addtoCart(producttoADD) {
    console.log(
      "added product  " +
        producttoADD.name +
        "  " +
        "price  " +
        producttoADD.price
    );
    setProduct((prevValues) => {
      return [...prevValues, producttoADD];
    });
  }
  function removefromCart(producttoRemove) {
    console.log(
      "removed product  " +
        producttoRemove.name +
        "  " +
        "price  " +
        producttoRemove.price
    );
    setProduct((prevValues) => {
      return prevValues.filter((prevValue) => {
        return prevValue.name !== producttoRemove.name;
      });
    });
  }
  console.log(product);
  return (
    <div className="App">
      <Cart
        category={itemsData.data[0].name}
        addtoCart={addtoCart}
        removefromCart={removefromCart}
        cosmeticdata={cosmeticdata}
      />
      <Cart
        category={itemsData.data[1].name}
        addtoCart={addtoCart}
        removefromCart={removefromCart}
        cosmeticdata={householddata}
      />
    </div>
  );
}

export default App;
