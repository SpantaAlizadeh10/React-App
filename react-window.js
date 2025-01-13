import React from "react";
import { FixedSizeList as List } from "react-window";

const Row = ({ index, style }) => (
  <div style={style}>Row {index + 1}</div>
);

function App() {
  return (
    <List
      height={300}
      itemCount={1000}
      itemSize={35}
      width={300}
    >
      {Row}
    </List>
  );
}

export default App;
