import classes from "./BooksSummary.module.css";

const BooksSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Books delivered to you</h2>
      <p>Pick your favorite books from our wide selection. </p>
      <p>We've picked out books that are really worth your time!</p>
    </section>
  );
};

export default BooksSummary;
