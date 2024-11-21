import React from "react";
import ReactDOM from "react-dom/client";

const Title = ()=> (
    <h1 className="head">
     Welcome to JSX using react
    </h1>
);

const HeadingComponent = () => {
  return (
    <div id="container">
      {Title()}
      <h1 className="heading">
        Welcome to the Functional Component in to React
      </h1>
    </div>
  );
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);