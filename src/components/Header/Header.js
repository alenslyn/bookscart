import classes from "./Header.module.css";
import booksImage from "../../assets/booksImage.jpeg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactBooks</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={booksImage} alt="Lots of books!" />
      </div>
    </>
  );
};

export default Header;
