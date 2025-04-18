const Book = (props) => {
  const { img, title, author, des, number } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{des}</p>

      <span className="number">#{number + 1}</span>
      {/*
       <button onClick={getSingleBook}>Display Value</button>
       
       */}
    </article>
  );
};

export default Book;
