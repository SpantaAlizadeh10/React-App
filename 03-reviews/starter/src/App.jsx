import { useState } from "react";
import people from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  console.log(name, job);

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % people.length;
      return newIndex;
    });
  };
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + people.length) % people.length;

      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    const newIndex = randomNumber % people.length;
    setIndex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt="name" className="person-img" />
        </div>

        <h2 className="author">{name}</h2>
        <h3 className="job">{job}</h3>
        <p className="info">{text}</p>

        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            Prev
          </button>
          <button className="next-btn" onClick={nextPerson}>
            Next
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Random Person
        </button>
      </article>
    </main>
  );
};
export default App;
