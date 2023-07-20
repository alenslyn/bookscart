import classes from "./BooksSummary.module.css";

const BooksSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Books delivered to you</h2>
      <p>Choose your favorite books from our broad selection.</p>
      <p>We selected books that definitely worth your time!</p>
    </section>
  );
};

export default BooksSummary;
