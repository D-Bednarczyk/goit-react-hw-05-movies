const MovieReviewsComp = ({ reviews }) => {
  console.log(reviews);
  // if (reviews.length() === 0)
  //   return <p>We don't have any rwviews for this movie</p>;

  return (
    <ul>
      {reviews.map(el => (
        <li key={el.id}>
          <h4>{el.author}</h4>
          <p>{el.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviewsComp;
