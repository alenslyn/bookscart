import classes from "./Header.module.css";
import booksImage from "../../assets/booksImage.jpeg";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactBooks</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={booksImage} alt="Lots of books!" />
      </div>
    </>
  );
};

export default Header;
