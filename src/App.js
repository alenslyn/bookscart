import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Books from "./components/books/Books";
import Cart from "./components/books/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Books />
      </main>
    </CartProvider>
  );
}

export default App;
