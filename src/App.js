import "./App.css";
import Header from "./components/Header/Header";
import Books from "./components/books/Books";
import Cart from "./components/books/Cart";

function App() {
  return (
    <>
      <Cart />
      <Header />
      <main>
        <Books />
      </main>
    </>
  );
}

export default App;
