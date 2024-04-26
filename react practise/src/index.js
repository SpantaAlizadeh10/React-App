import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="container" style={{ border: "1px solid", padding: "19px" }}>
      <img src="" alt="" />
      <Header />
      <Description />
      <Service />
    </div>
  );
}

function Header() {
  return (
    <header className="header footer">
      <h1>sepanta alizadeh</h1>
    </header>
  );
}

function Description() {
  return (
    <main className="desc">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo magni
        exercitationem voluptatibus error! Impedit dolore est possimus! Labore,
        eaque recusandae voluptate illum a nesciunt cum, iure, fugiat
        consequuntur odit veniam.
      </p>
    </main>
  );
}

function Service() {
  return (
    <div className="ser" style={{ display: "flex", gap: "13px" }}>
      <h3
        style={{ backgroundColor: "red", padding: "8px", borderRadius: "5px" }}
      >
        html+ css
      </h3>
      <h3
        style={{ backgroundColor: "red", padding: "8px", borderRadius: "5px" }}
      >
        javascript
      </h3>
      <h3
        style={{
          backgroundColor: "green",
          padding: "8px",
          borderRadius: "5px",
        }}
      >
        web desion
      </h3>
      <h3
        style={{
          backgroundColor: "yellow",
          padding: "8px",
          borderRadius: "5px",
        }}
      >
        git and github
      </h3>
      <h3
        style={{ backgroundColor: "pink", padding: "8px", borderRadius: "5px" }}
      >
        react
      </h3>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
