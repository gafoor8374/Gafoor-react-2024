/**
 * <div id : "Parent">
 *    <div id: "child">
 *       <h1>i'm h1 tag</h1>
 *      <h2> i'm h2 tag </h2>
 *    </div>
 * <div id: "child">
 *       <h1>i'm h1 tag</h1>
 *      <h2> i'm h2 tag </h2>
 *    </div>
 * </div>
 */

// React.createElemte is a object => ReactDOM is render the object converts to html in to the browser

const parent = React.createElement("div", { id: "parent" }, 
    [React.createElement("div", { id: "child" }, 
        [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]),
        React.createElement("div", { id: "child2" }, 
        [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")])]);


// const heading = React.createElement("h1", { id: "heading" }, "Hello world welcome to React"); // React.creteElement is object

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);