import classes from "./AvailableBooks.module.css";
import Card from "./components/Card";
import BooksItem from "./BooksItem";

const DUMMY_BOOKS = [
  {
    id: "m1",
    name: "The Pillars of the Earth",
    description: "Historical Fiction",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Circe",
    description: "Mythology!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Steppenwolf",
    description: "Philosophy",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Gone Girl",
    description: "Thriller",
    price: 18.99,
  },
];

const AvailableBooks = () => {
  const booksList = DUMMY_BOOKS.map((book) => (
    <BooksItem
      id={book.id}
      key={book.id}
      name={book.name}
      description={book.description}
      price={book.price}
    />
  ));
  return (
    <section className={classes.books}>
      <Card>
        <ul>{booksList}</ul>
      </Card>
    </section>
  );
};

export default AvailableBooks;
