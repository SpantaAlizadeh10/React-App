//const EventExamples = () => {
const handleFormInput = () => {
console.log("handle form input");
};

const handleButton = () => {
alert("submit");
};

const handleFormSubmission = (e) => {
e.preventDefault();
console.log("submited form");
};
return (

  <section>
    <form>
      <h2>Typucal Form</h2>
      <input
        type="text"
        name="example"
        onChange={handleFormInput}
        style={{ margin: "2rem 0" }}
      />
    </form>
    <button
      style={{ margin: "1rem" }}
      type="submit"
      onClick={handleFormSubmission}
    >
      Submit
    </button>
    <div>
      <button onClick={handleButton} type="button">
        Click Me
      </button>
    </div>
  </section>
);
//};
