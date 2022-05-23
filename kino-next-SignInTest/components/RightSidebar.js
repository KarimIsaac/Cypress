import styles from "../styles/Sidebar.module.css";

export default function RightSidebar({ screenings, movies, movie }) {
  const screeningsList = screenings.map((screening) => {
    let title = "";

    // If single movie
    if (movie) {
      title = movie.title;
    }

    // If all screenings
    if (movies) {
      movies.forEach((movie) => {
        if (movie.id === screening.movieid) {
          title = movie.title;
        }
      });
    }

    return (
      <li key={screening.id}>
        <p className={styles["title"]}>{title}</p>
        <p>
          {screening.date} kl. {screening.time}
        </p>
      </li>
    );
  });
  return (
    <>
      {" "}
      <div className={styles["right-container-content-article-small"]}>
        <p>BILJETTER</p>
      </div>
      <div className={styles["right-container-content-calendar"]}>
        <ul>{screeningsList}</ul>
      </div>
    </>
  );
}
